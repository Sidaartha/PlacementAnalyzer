import csv
import json

def load_json(filename):
	with open(filename, 'r') as f:
		return json.load(f)

file_path = ['../DataJSON/companies.json', '../DataJSON/profiles.json', '../DataJSON/departments.json']

companies = load_json(file_path[0])
profiles = load_json(file_path[1])
departments = load_json(file_path[2])
departments_list = list(departments.keys())

for dep in departments_list:
	dep_dict = []
	com_ids = list(departments[dep].keys())
	com_ids.remove("name")
	com_ids.remove("com_ids")
	for com_id in com_ids:
		jnf_ids = departments[dep][com_id]
		for jnf_id in jnf_ids:
			jnf_id = str(jnf_id)
			try:
				day = profiles[com_id][jnf_id]["day"]
			except:
				day = ""
			dep_dict.append({
				"category": companies[com_id]["category"],
				"city": companies[com_id]["city"],
				"about": companies[com_id]["about"],
				"reference": companies[com_id]["reference"],
				"country": companies[com_id]["country"],
				"company": companies[com_id]["company"],
				"zipcode": companies[com_id]["zipcode"],
				"website": companies[com_id]["website"],
				"sector": companies[com_id]["sector"],
				"address": companies[com_id]["address"],
				"employees": companies[com_id]["employees"],
				"turnover": companies[com_id]["turnover"],
				"selection": profiles[com_id][jnf_id]["selection"],
				"dep_str": profiles[com_id][jnf_id]["dep_str"],
				"cgpa_criteria": profiles[com_id][jnf_id]["cgpa_criteria"],
				"criteria": profiles[com_id][jnf_id]["criteria"],
				"profile": profiles[com_id][jnf_id]["profile"],
				"cgpa_cutoff": profiles[com_id][jnf_id]["cgpa_cutoff"],
				"day": day,
				"about": profiles[com_id][jnf_id]["about"],
				"package": profiles[com_id][jnf_id]["package"],
				"contract": profiles[com_id][jnf_id]["contract"]
				})
	csv_file_name = "OutputFiles/Dep/"+dep+".csv"
	try:
		header = dep_dict[0].keys()
		with open(csv_file_name,mode='w',encoding='utf8',newline='') as output_to_csv:
			dict_csv_writer = csv.DictWriter(output_to_csv, fieldnames=header,dialect='excel')
			dict_csv_writer.writeheader()
			dict_csv_writer.writerows(dep_dict)
		print(csv_file_name+" Saved successfully")
	except:
		print(csv_file_name+" Saved unsuccessfully")