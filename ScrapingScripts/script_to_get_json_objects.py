import csv
import json

def csv_to_dict(file_path):
	object_list = []
	with open(file_path) as f:
		for row in csv.DictReader(f, skipinitialspace=True):
			object_dict = {}
			for key, val in row.items():
				if val.isdigit() and key not in ['jnf_str']:
					object_dict[key] = int(val)
				else:
					object_dict[key] = val
			object_list.append(object_dict)
	return object_list

file_path = ['OutputFiles/placements.csv', 'OutputFiles/placements_companies.csv', 'OutputFiles/placements_companies_final.csv', 'OutputFiles/placements_companies_profile_final.csv', 'Files/students.csv']

companies = csv_to_dict(file_path[2])
companies_profile = csv_to_dict(file_path[3])
placements_students = csv_to_dict(file_path[0])
placements_companies = csv_to_dict(file_path[1])
students_data = csv_to_dict(file_path[4])

companies_list = list(set([comp['com_id'] for comp in placements_companies]))
students_list = list(set([stud['roll_no'] for stud in students_data]))

companies_dict = {}
for com_id in companies_list:
	for com in companies:
		if com['com_id'] == com_id:
			companies_dict[com_id] = com

			profiles = []
			for profile in companies_profile:
				if profile['com_id'] == com_id:
					profiles.append(profile['jnf_id'])
			companies_dict[com_id]['profiles'] = profiles

			for plac_comp in placements_companies:
				if plac_comp['com_id'] == com_id:
					students = []
					for student in placements_students:
						if student['company'] == plac_comp['company']:
							student['jnf_ids'] = [int(j) for j in plac_comp['jnf_str'].split('_')]
							students.append(student)
					companies_dict[com_id]['students'] = students
			break

with open('../DataJSON/companies.json', 'w', encoding='utf-8') as f:
    json.dump(companies_dict, f, ensure_ascii=False, indent=4)

profile_dict = {}
for com_id in companies_list:
	profiles = {}
	for profile in companies_profile:
		if profile['dep_str']:
			profile['dep_list'] = profile['dep_str'].split('_')
		if profile['com_id'] == com_id:
			profiles[profile['jnf_id']] = profile
	profile_dict[com_id] = profiles

with open('../DataJSON/profiles.json', 'w', encoding='utf-8') as f:
    json.dump(profile_dict, f, ensure_ascii=False, indent=4)

students_dict = {}
for roll in students_list:
	for stud in students_data:
		if  stud['roll_no'] == roll:
			del stud['roll_no']
			students_dict[roll] = stud
			students_data.remove(stud)
			break

with open('../DataJSON/students.json', 'w', encoding='utf-8') as f:
    json.dump(students_dict, f, ensure_ascii=False, indent=4)