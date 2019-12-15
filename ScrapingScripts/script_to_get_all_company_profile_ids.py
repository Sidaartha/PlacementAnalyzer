import csv
import pandas as pd
from script_to_get_companies_info import GetCompaniesInfo 
from script_to_get_companies_profile_info import GetCompaniesProfileInfo 

def csv_to_dict(file_path):
	object_list = []
	try:
		with open(file_path) as f:
			for row in csv.DictReader(f, skipinitialspace=True):
				object_dict = {}
				for key, val in row.items():
					if val.isdigit():
						object_dict[key] = int(val)
					else:
						object_dict[key] = val
				object_list.append(object_dict)
		return object_list
	except:
		return object_list

file_path = 'OutputFiles/placements_companies_all_info.csv'
placements_data = pd.read_csv("OutputFiles/placements_companies.csv", skiprows=[0], names=['company','day','com_id','jnf_id','company_fullname'])
com_ids_known = list(set(list(placements_data['com_id'].dropna(how='any',axis=0).astype(int))))
com_ids_known.sort()

min_com_id = 1
max_com_id = 754
group_size = 50

for i in range(int(max_com_id/group_size)+1):
	start_id = i*group_size+1
	stop_id = max_com_id if i == int(max_com_id/group_size) else i*group_size+group_size
	com_ids_all = list(range(start_id, stop_id+1))
	# com_ids = list(set(com_ids_all) - set(com_ids_known))

	print("Scraping between {0} to {1} ...............".format(start_id, stop_id))
	
	comp_obj = GetCompaniesInfo(com_ids=com_ids_all)
	company_dict_list = comp_obj.get_data()

	company_dict_list_old = csv_to_dict(file_path)
	for obj in company_dict_list:
		company_dict_list_old.append(obj)

	df = pd.DataFrame(company_dict_list_old)
	df.to_csv("OutputFiles/placements_companies_all_info.csv", sep=',', index=False)

	print("Scraped till {0}!".format(stop_id))