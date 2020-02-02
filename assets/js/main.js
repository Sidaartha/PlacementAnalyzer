function select_location(value){
	document.getElementById("selectValue_location").innerHTML=value+" ";
	var com_ids = locations[value];
	students_html = "";
	for (i=0; i<com_ids.length; i++) {
		students = companies[com_ids[i]]["students"];
		company_name = companies[com_ids[i]]["company"];
		company_address = companies[com_ids[i]]["address"];
		students_html += '<div class="com_name">'+company_name+'</div>'+'<div class="com_address">'+company_address+'</div><table align="center">';
		for (j=0; j<students.length; j++) {
			name = students[j]["name"];
			roll_no = students[j]["roll_no"];
			students_html += '<tr><td>'+roll_no+'</td><td>'+name+'</td></tr>';
		}
		students_html += '</table>';
	}
	document.getElementById("stuValue_location").innerHTML=students_html;
}

function list_companies(){
	companies_html = "";
	var coms = [];
	var coms_dict = {};
	for (const [key, value] of Object.entries(companies)) {
	  name = value["company"];
	  coms.push(name);
	  coms_dict[name] = key;
	}
	coms.sort();
	dup = coms.filter((v,i,a) => a.indexOf(v) !== i);
	console.log(dup)
	jpmc=0;
	zs=0;
	for (i=0; i<coms.length; i++) {
		if (coms[i]=="JPMorgan Chase & Co.") {
			if (jpmc==0) {
				companies_html += '<li><a onclick="select_company(211)">'+coms[i]+'</a></li>';
				companies_html += '<li><a onclick="select_company(496)">'+coms[i]+'</a></li>';
				jpmc=1;
			}
		} else if (coms[i]=="ZS Associates") {
			if (zs==0) {
				companies_html += '<li><a onclick="select_company(306)">'+coms[i]+'</a></li>';
				companies_html += '<li><a onclick="select_company(366)">'+coms[i]+'</a></li>';
				zs=1;
			}
		} else {
			companies_html += '<li><a onclick="select_company('+coms_dict[coms[i]]+')">'+coms[i]+'</a></li>';
		}
	}
	document.getElementById("list_company").innerHTML=companies_html;
}

function select_company(value){
	company = companies[value]
	document.getElementById("selectValue_company").innerHTML=company["company"]+" ";
	companies_html = '<div class="com_name">'+company["company"]+'</div><table align="center">';
	if (company["about"]!="") {
		companies_html+='<tr><td style="width: 150px;"><b>About</b></td><td>'+company["about"]+'</td></tr>';
	}
	if (company["address"]!="") {
		companies_html+='<tr><td style="width: 150px;"><b>Address</b></td><td>'+company["address"]+'</td></tr>';
	}
	if (company["city"]!="") {
		companies_html+='<tr><td style="width: 150px;"><b>City</b></td><td>'+company["city"]+'</td></tr>';
	}
	if (company["sector"]!="") {
		companies_html+='<tr><td style="width: 150px;"><b>Sector</b></td><td>'+company["sector"]+'</td></tr>';
	}
	if (company["website"]!="") {
		companies_html+='<tr><td style="width: 150px;"><b>Website</b></td><td><a href="'+company["website"]+'">'+company["website"]+'</td></tr></table>';
	}
	students = company["students"];
	students_html = '<table align="center" class="stu_com" style="width: 88.5%;">';
	for (j=0; j<students.length; j++) {
		name = students[j]["name"];
		roll_no = students[j]["roll_no"];
		students_html += '<tr><td>'+roll_no+'</td><td>'+name+'</td>';
		if (students[j]["jnf_ids"].length==1) {
			students_html += '<td>'+ profiles[value][students[j]["jnf_ids"][0]]["profile"]+'</td></tr>';
		} else {
			students_html += '</tr>';
		}
	}
	students_html += '</table>';
	console.log(students_html)
	companies_html+=students_html;
	profiles_list = company["profiles"];
	for (i=0; i<profiles_list.length; i++) {
		profile = profiles[value][profiles_list[i]];
		profile_name = profile["profile"]
		companies_html+='<div class="com_name">'+profile_name+'</div><table align="center">';
		if (profile["about"]!="") {
			companies_html+='<tr><td style="width: 150px;"><b>About</b></td><td>'+profile["about"]+'</td></tr>';
		}
		if (profile["day"]!="") {
			companies_html+='<tr><td style="width: 150px;"><b>Day</b></td><td>'+profile["day"]+'</td></tr>';
		}
		if (profile["package"]!="") {
			companies_html+='<tr><td style="width: 150px;"><b>Package</b></td><td>'+profile["package"]+'</td></tr>';
		}
		if (profile["dep_list"]!="") {
			companies_html+='<tr><td style="width: 150px;"><b>Departments</b></td><td>'+profile["dep_list"]+'</td></tr>';
		}
		if (profile["selection"]!="") {
			companies_html+='<tr><td style="width: 150px;"><b>Selection</b></td><td>'+profile["selection"]+'</td></tr>';
		}
		if (profile["cgpa_cutoff"]!="") {
			companies_html+='<tr><td style="width: 150px;"><b>CGPA cutoff</b></td><td>'+profile["cgpa_cutoff"]+'</td></tr>';
		}
		if (profile["contract"]!="") {
			companies_html+='<tr><td style="width: 150px;"><b>Contract</b></td><td>'+profile["contract"]+'</td></tr></table>';
		}
	}
	document.getElementById("Value_company").innerHTML=companies_html;
}

window.onload = function() {
	list_companies();
};