
$('.pitema_pie-chart').click(function() {
  document.getElementById('statistics').scrollIntoView(true);
});

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart_degree);
google.charts.setOnLoadCallback(drawChart_sector);
google.charts.setOnLoadCallback(drawChart_location);
google.charts.setOnLoadCallback(drawChart_package);

function drawChart_degree() {
	var data = google.visualization.arrayToDataTable([
	  ['Degree', 'Placed'],
	  ['B.Tech', 320],
	  ['Dual Degree', 320],
	  ['M.Sc', 103],
	  ['M.Tech',228],
	  ['PhD', 11]
	]);
	var options = {
	  title: 'Students segregation based on courses',
	  titlePosition: 'none',
	  colors: ['#F1555B', '#4B759E', '#17AF84', '#FFC66A', '#17BEBB', '#DFF3B1', '#D4AFB9', '#985F99', '#4D9DE0'],
	  chartArea: {top:0, bottom:30},
	  backgroundColor: { fillOpacity: 0 },
	  legend: {position: 'bottom', textStyle: {fontSize: 8}}
	};
	var chart = new google.visualization.PieChart(document.getElementById('piechart_degree'));
	chart.draw(data, options);
}

function drawChart_sector() {
	var data = google.visualization.arrayToDataTable([
	  ['Sector', 'Placed'],
	  ['IT/Software', 429],
	  ['Core Engineering', 181],
	  ['Analytics', 154],
	  ['Finance', 107],
	  ['Consulting', 96],
	  ['Automobile', 35],
	  ['Ecommerce', 29],
	  ['Teaching/Education', 28],
	  ['Manufacturing', 27],
	  ['Investment Banking', 26],
	  ['Construction', 26],
	  ['Professional Services', 17],
	  ['Telecommunication', 10],
	  ['Management', 8],
	  ['Health Care', 6],
	  ['Mining/Petrolium', 3],
	  ['Others', 116]
	]);
	var options = {
	  title: 'Students segregation based on sectors',
	  titlePosition: 'none',
	  colors: ['#F1555B', '#4B759E', '#17AF84', '#FFC66A', '#17BEBB', '#DFF3B1', '#D0E3CC', '#985F99', '#4D9DE0', '#EF7674', '#D6E681', '#61210F', '#966B9D', '#FCB97D', '#565554', '#CACAAA', '#D4AFB9'],
	  chartArea: {top:0, bottom:30},
	  backgroundColor: { fillOpacity: 0 },
	  legend: {position: 'bottom', textStyle: {fontSize: 8}}
	};
	var chart = new google.visualization.PieChart(document.getElementById('piechart_sector'));
	chart.draw(data, options);
}

function drawChart_location() {
	var data = google.visualization.arrayToDataTable([
	  	['Location', 'Placed'],
	  	['Bangalore', 348],
	  	['Gurgaon', 125],
	  	['Mumbai', 118],
	  	['Hyderabad', 114],
		['Pune', 102],
		['Chennai', 45],
		['Kolkata', 44],
		['Tokyo', 29],
		['Navi Mumbai', 21],
		['Noida', 19],
		['New Delhi', 9],
		['Hsinchu City', 9],
		['Nagoya City', 6],
		['Hosur', 4],		
		['Jamshedpur', 3],
		['Delhi', 2],
		['Ahmedabad', 1]
	]);
	var options = {
	  title: 'Students segregation based on location',
	  titlePosition: 'none',
	  colors: ['#F1555B', '#4B759E', '#17AF84', '#FFC66A', '#17BEBB', '#DFF3B1', '#D0E3CC', '#985F99', '#4D9DE0', '#EF7674', '#D6E681', '#61210F', '#966B9D', '#FCB97D', '#565554', '#CACAAA', '#D4AFB9'],
	  chartArea: {top:0, bottom:30},
	  backgroundColor: { fillOpacity: 0 },
	  legend: {position: 'bottom', textStyle: {fontSize: 8}}
	};
	var chart = new google.visualization.PieChart(document.getElementById('piechart_location'));
	chart.draw(data, options);
}

function drawChart_package() {
	var data = google.visualization.arrayToDataTable([
	  	['Package', 'Students'],
	  	['15 to 20 Lakhs', 316],
		['12 to 15 Lakhs', 260],
		['12 to 10 Lakhs', 242],
		['10 to 8 Lakhs', 204],
		['> 25 Lakhs', 194],
		['20 to 25 Lakhs', 116],
		['8 to 5 Lakhs', 97],
		['< 5 Lakhs', 4]
	]);
	var options = {
	  title: 'Students segregation based on package',
	  titlePosition: 'none',
	  colors: ['#F1555B', '#4B759E', '#17AF84', '#FFC66A', '#17BEBB', '#DFF3B1', '#D0E3CC', '#985F99', '#4D9DE0', '#EF7674', '#D6E681', '#61210F', '#966B9D', '#FCB97D', '#565554', '#CACAAA', '#D4AFB9'],
	  chartArea: {top:0, bottom:30},
	  backgroundColor: { fillOpacity: 0 },
	  legend: {position: 'bottom', textStyle: {fontSize: 8}}
	};
	var chart = new google.visualization.PieChart(document.getElementById('piechart_package'));
	chart.draw(data, options);
}