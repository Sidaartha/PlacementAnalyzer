from bs4 import BeautifulSoup
from config_local import *
import pandas as pd
import requests
import re

def get_request_url(com_id, jnf_id, ssoToken):
	url = "https://erp.iitkgp.ac.in/TrainingPlacementSSO/TPJNFView.jsp"
	params = {
		'yop': "2019-2020",
		'user_type': "SU",
		'com_id': com_id,
		'jnf_id': jnf_id,
		'ssoToken': ssoToken
	}
	first = True
	for key, val in params.items():
		if first:
			request_url = url+'?'+key+'='+str(val)
			first = False
		else: 
			request_url += '&'+key+'='+str(val)
	return request_url

def remove_special_chars(string):
	final_string = re.sub('\n', '', string)
	return final_string

dep_mapping = {
	'AEROSPACE ENGINEERING': "AE",
	'AGRICULTURAL AND FOOD ENGINEERING': "AG",
	'ARCHITECTURE AND REGIONAL PLANNING': "AR",
	'BIOTECHNOLOGY': "BT",
	'CHEMICAL ENGINEERING': "CH",
	'CHEMISTRY': "CY",
	'CIVIL ENGINEERING': "CE",
	'COMPUTER SCIENCE AND ENGINEERING': "CS",
	'ELECTRICAL ENGINEERING': "EE",
	'ELECTRONICS AND ELECTRICAL COMMUNICATION ENGG.': "EC",
	'GEOLOGY AND GEOPHYSICS': "GG",
	'HUMANITIES AND SOCIAL SCIENCES': "HS",
	'INDUSTRIAL AND SYSTEMS ENGINEERING': "IM",
	'MATHEMATICS': "MA",
	'MECHANICAL ENGINEERING': "ME",
	'METALLURGICAL AND MATERIALS ENGINEERING': "MT",
	'MINING ENGINEERING': "MI",
	'OCEAN ENGG AND NAVAL ARCHITECTURE': "NA",
	'PHYSICS': "PH"
}

placements_data = pd.read_csv("OutputFiles/placements_companies.csv", skiprows=[0], names=['company','day','com_id','jnf_id','company_fullname'])
com_ids = placements_data[['com_id', 'jnf_id']].dropna(how='any',axis=0).astype(int, errors='ignore').rename_axis('ID').values

company_dict_list = []
com_count = 0
for ids in com_ids:
	com_id, jnf_id = ids[0], ids[1]
	print("Scraping com_id: {0}, jnf_id: {1} ...............".format(com_id, jnf_id))
	page = requests.get(get_request_url(com_id, jnf_id, SSOTOKEN))
	soup = BeautifulSoup(page.text, "html.parser")

	table = soup.select('table')[0]
	data_raw = table.find_all('td')
	del data_raw[0:4], data_raw[6], data_raw[7]

	company_dict = {
		'com_id': com_id,
		'jnf_id': jnf_id,
		'type': data_raw[0].string,
		'profile': data_raw[1].string,
		'ctc': data_raw[2].string,
		'contract': data_raw[3].string,
		'criteria': data_raw[4].string,
		'cgpa_cutoff': data_raw[5].string,
		'about': data_raw[6].string,
		'selection': data_raw[7].string
	}

	del data_raw[0:8]

	dep_str = ''
	first = True
	for tag in data_raw:
		try:
			if "background-color: lightgrey" in tag['style']:
				if first:
					dep_str += (dep_mapping[remove_special_chars(tag.string)])
					first = False
				else:
					dep_str += ('_' + dep_mapping[remove_special_chars(tag.string)])
		except:
			pass
	company_dict['dep_str'] = dep_str
	company_dict_list.append(company_dict)
	com_count += 1
	print("Scraped com_id: {0}, jnf_id: {1};\t {2} out of {3} Done! ".format(com_id, jnf_id, com_count, len(com_ids)))

df = pd.DataFrame(company_dict_list)
df.to_csv("OutputFiles/placements_companies_profile_info.csv", sep=',', index=False)