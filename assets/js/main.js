function select_location(value){
	document.getElementById("selectValue_location").innerHTML=value+" ";
	var com_ids = locations[value];
	students_html = "";
	for (i=0; i<com_ids.length; i++) {
		students = companies[com_ids[i]]["students"];
		company_name = companies[com_ids[i]]["company"]
		company_address = companies[com_ids[i]]["address"]
		students_html += '<div class="com_name">'+company_name+'</div>'+'<div class="com_address">'+company_address+'</div><table align="center">';
		for (j=0; j<students.length; j++) {
			name = students[j]["name"]
			roll_no = students[j]["roll_no"]
			students_html += '<tr><td>'+roll_no+'</td><td>'+name+'</td></tr>';
		}
		students_html += '</table>'
	}
	document.getElementById("stuValue_location").innerHTML=students_html;
}