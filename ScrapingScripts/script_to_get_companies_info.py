from bs4 import BeautifulSoup
from config_local import *
import pandas as pd
import requests
import re

def get_request_url(com_id, ssoToken):
	url = "https://erp.iitkgp.ac.in/TrainingPlacementSSO/TPComView.jsp"
	params = {
		'yop': "2019-2020",
		'user_type': "SU",
		'com_id': com_id,
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
	final_string = re.sub('  ', '', string)
	return final_string

key_mapping = {
	'Sector': 'sector',
	'City': 'city',
	'About the company': 'about',
	'Reference': 'reference',
	'Website': 'website',
	'Company Name': 'company',
	'Country': 'country',
	'Address': 'address',
	'Category': 'category',
	'Employee Strength': 'employees',
	'Annual Turnover': 'turnover',
	'Zipcode': 'zipcode'
}

placements_data = pd.read_csv("OutputFiles/placements_companies.csv", skiprows=[0], names=['company','day','com_id','jnf_id','company_fullname'])
com_ids = list(placements_data['com_id'].dropna(how='any',axis=0).astype(int))

company_dict_list = []
com_count = 0
for com_id in com_ids:
	page = requests.get(get_request_url(com_id, SSOTOKEN))
	soup = BeautifulSoup(page.text, "html.parser")

	table = soup.select('table')[0]
	data_raw = table.find_all('td')
	del data_raw[0], data_raw[0], data_raw[4], data_raw[4]

	company_dict = {}
	for i in range(int(len(data_raw)/2)):
		company_dict[data_raw[i*2].string] = remove_special_chars(data_raw[i*2+1].string)

	old_keys = list(company_dict.keys())

	for key in old_keys:
		company_dict[key_mapping[key]] = company_dict[key]
		del company_dict[key]
	company_dict_list.append(company_dict)
	com_count += 1
	print("Scraped com_id: {0};\t {1} out of {2} Done! ".format(com_id, com_count, len(com_ids)))

df = pd.DataFrame(company_dict_list)
# df.to_csv("OutputFiles/placements_companies_info.csv", sep=',', index=False)