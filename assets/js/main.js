
$('.pitema_pie-chart').click(function() {
  document.getElementById('statistics').scrollIntoView(true);
});

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart_degree);
google.charts.setOnLoadCallback(drawChart_sector);
google.charts.setOnLoadCallback(drawChart_location);
google.charts.setOnLoadCallback(drawChart_package);

google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBar_dep);
google.charts.setOnLoadCallback(drawBar_sec);
google.charts.setOnLoadCallback(drawBar_day);

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

function createCustomHTMLContent(lable, v1, v2, v3) {
  return '<div style="padding:10px 10px 10px 10px; max-width: 170px; white-space: nowrap;">' +
      '<span style="font-size: 1.3em; font-weight: 500; color: #5B5B5B;">' + lable + '</span><br/>' +
      '<hr style="margin: 4px 0px 5px 0px;">' +
      '<table style="font-size: 1em;">' + '<tr>' +
      '<td style="padding-bottom: 2px; color: #ED1C24; white-space: nowrap;">Base: <b>' + v1 + '</b></td>' + '</tr>' + '<tr>' +
      '<td style="padding-bottom: 2px; color: #235789; white-space: nowrap;">CTC: <b>' + v2 + '</b></td>' + '</tr>' + '<tr>' +
      '<td style="padding-bottom: 2px; color: #5B5B5B; white-space: nowrap;">Placed: <b>' + v3 + '</b></td>' + '</tr>' + '</table>' + '</div>';
}

function drawBar_dep() {
      var data = google.visualization.arrayToDataTable([
        ['Department', {'type': 'string', 'role': 'tooltip', 'p': {'html': true}}, 'Base', 'CTC'],
        ['AE', createCustomHTMLContent('AE', 11.0, 12.8, 41), 11.0, 12.8],
		['AG', createCustomHTMLContent('AG', 11.2, 13.2, 37), 11.2, 13.2],
		['AR', createCustomHTMLContent('AR', 8.4, 9.5, 28), 8.4, 9.5],
		['AT', createCustomHTMLContent('AT', 13.2, 16.0, 3), 13.2, 16.0],
		['BT', createCustomHTMLContent('BT', 12.3, 14.7, 23), 12.3, 14.7],
		['CE', createCustomHTMLContent('CE', 10.6, 13.0, 52), 10.6, 13.0],
		['CH', createCustomHTMLContent('CH', 12.4, 14.2, 76), 12.4, 14.2],
		['CL', createCustomHTMLContent('CL', 5.1, 5.7, 2), 5.1, 5.7],
		['CR', createCustomHTMLContent('CR', 4.6, 6.5, 2), 4.6, 6.5],
		['CS', createCustomHTMLContent('CS', 18.5, 22.5, 104), 18.5, 22.5],
		['CY', createCustomHTMLContent('CY', 8.8, 10.1, 18), 8.8, 10.1],
		['EC', createCustomHTMLContent('EC', 15.6, 19.3, 100), 15.6, 19.3],
		['EE', createCustomHTMLContent('EE', 14.5, 17.1, 74), 14.5, 17.1],
		['EX', createCustomHTMLContent('EX', 10.4, 11.4, 11), 10.4, 11.4],
		['GG', createCustomHTMLContent('GG', 9.7, 10.8, 13), 9.7, 10.8],
		['GS', createCustomHTMLContent('GS', 14.8, 21.5, 2), 14.8, 21.5],
		['HS', createCustomHTMLContent('HS', 12.9, 14.8, 29), 12.9, 14.8],
		['IE', createCustomHTMLContent('IE', 15.0, 18.6, 28), 15.0, 18.6],
		['IM', createCustomHTMLContent('IM', 12.3, 14.5, 38), 12.3, 14.5],
		['IP', createCustomHTMLContent('IP', 8.8, 9.3, 8), 8.8, 9.3],
		['IT', createCustomHTMLContent('IT', 12.0, 14.0, 1), 12.0, 14.0],
		['MA', createCustomHTMLContent('MA', 14.3, 17.6, 52), 14.3, 17.6],
		['ME', createCustomHTMLContent('ME', 13.0, 15.8, 87), 13.0, 15.8],
		['MF', createCustomHTMLContent('MF', 11.7, 13.5, 36), 11.7, 13.5],
		['MI', createCustomHTMLContent('MI', 11.8, 13.6, 46), 11.8, 13.6],
		['MM', createCustomHTMLContent('MM', 12.0, 14.0, 1), 12.0, 14.0],
		['MS', createCustomHTMLContent('MS', 10.6, 12.7, 1), 10.6, 12.7],
		['MT', createCustomHTMLContent('MT', 13.9, 17.7, 32), 13.9, 17.7],
		['NA', createCustomHTMLContent('NA', 10.1, 12.2, 24), 10.1, 12.2],
		['PH', createCustomHTMLContent('PH', 10.5, 12.2, 20), 10.5, 12.2],
		['QE', createCustomHTMLContent('QE', 12.5, 13.7, 6), 12.5, 13.7],
		['QM', createCustomHTMLContent('QM', 10.8, 14.7, 3), 10.8, 14.7],
		['RE', createCustomHTMLContent('RE', 9.2, 9.8, 2), 9.2, 9.8],
		['RT', createCustomHTMLContent('RT', 4.2, 5.4, 1), 4.2, 5.4]
      ]);

      var options = {
        title: 'Department wise Base & CTC',
        titlePosition: 'none',
        focusTarget: 'category',
        tooltip: { isHtml: true },
        chartArea: {top:5, bottom:30},
        backgroundColor: { fillOpacity: 0 },
        colors: ['#F1555B', '#4B759E'],
        legend: {position: 'bottom', textStyle: {fontSize: 8, color: '#5B5B5B'}},
        hAxis: {textPosition: 'out', textStyle: {bold: true, fontSize: 8.4, color: '#5B5B5B'}},
        vAxis: {textPosition: 'out', textStyle: {fontSize: 7}, ticks: [0, 5, 10, 15, 20, 25], gridlines: {color: 'transparent'}}
      };
      var chart = new google.visualization.ColumnChart(document.getElementById('chart_dep'));
      chart.draw(data, options);
    }

function drawBar_day() {
      var data = google.visualization.arrayToDataTable([
        ['Days', {'type': 'string', 'role': 'tooltip', 'p': {'html': true}}, 'Base', 'CTC'],
        ['Day 1', createCustomHTMLContent('Day 1', 17.5, 21.7, 170), 17.5, 21.7],
		['Day 2', createCustomHTMLContent('Day 2', 15.7, 20.0, 249), 15.7, 20.0],
		['Day 3', createCustomHTMLContent('Day 3', 13.6, 15.1, 162), 13.6, 15.1],
		['Day 4', createCustomHTMLContent('Day 4', 13.1, 15.0, 83), 13.1, 15.0],
		['Day 5', createCustomHTMLContent('Day 5', 9.4, 10.8, 93), 9.4, 10.8],
		['Day 6', createCustomHTMLContent('Day 6', 10.5, 11.4, 65), 10.5, 11.4],
		['Day 7', createCustomHTMLContent('Day 7', 12.1, 12.6, 31), 12.1, 12.6],
		['Day 8', createCustomHTMLContent('Day 8', 6.3, 7.6, 65), 6.3, 7.6],
		['Day 9', createCustomHTMLContent('Day 9', 8.6, 9.3, 42), 8.6, 9.3],
		['Day 10', createCustomHTMLContent('Day 10', 7.1, 9.6, 35), 7.1, 9.6],
		['Day 11', createCustomHTMLContent('Day 11', 6.8, 6.9, 12), 6.8, 6.9]
      ]);

      var options = {
        title: 'Day wise Base & CTC',
        titlePosition: 'none',
        focusTarget: 'category',
        tooltip: { isHtml: true },
        chartArea: {top:5, bottom:30},
        backgroundColor: { fillOpacity: 0 },
        colors: ['#F1555B', '#4B759E'],
        legend: {position: 'bottom', textStyle: {fontSize: 8, color: '#5B5B5B'}},
        hAxis: {textPosition: 'out', textStyle: {bold: true, fontSize: 8.4, color: '#5B5B5B'}},
        vAxis: {textPosition: 'out', textStyle: {fontSize: 7}, ticks: [0, 5, 10, 15, 20, 25], gridlines: {color: 'transparent'}}
      };
      var chart = new google.visualization.ColumnChart(document.getElementById('chart_day'));
      chart.draw(data, options);
    }

function drawBar_sec() {
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Sector');
	data.addColumn({'type': 'string', 'role': 'tooltip', 'p': {'html': true}});
	data.addColumn('number', 'Base');
	data.addColumn('number', 'CTC');
    data.addRows([
      	['Manufacturing', createCustomHTMLContent('Manufacturing', 20.0, 23.8, 27), 20.0, 23.8],
		['Telecommunication', createCustomHTMLContent('Telecommunication', 19.0, 19.8, 10), 19.0, 19.8],
		['Investment Banking', createCustomHTMLContent('Investment Banking', 18.6, 27.3, 26), 18.6, 27.3],
		['IT/Software', createCustomHTMLContent('IT/Software', 14.4, 16.6, 427), 14.4, 16.6],
		['Finance', createCustomHTMLContent('Finance', 14.0, 16.9, 107), 14.0, 16.9],
		['Core Engineering', createCustomHTMLContent('Core Engineering', 13.4, 15.7, 181), 13.4, 15.7],
		['Consulting', createCustomHTMLContent('Consulting', 13.1, 17.3, 96), 13.1, 17.3],
		['Automobile', createCustomHTMLContent('Automobile', 12.1, 12.9, 35), 12.1, 12.9],
		['Ecommerce', createCustomHTMLContent('Ecommerce', 11.9, 13.8, 29), 11.9, 13.8],
		['Analytics', createCustomHTMLContent('Analytics', 10.6, 12.6, 154), 10.6, 12.6],
		['Health Care', createCustomHTMLContent('Health Care', 10.0, 11.7, 6), 10.0, 11.7],
		['Others', createCustomHTMLContent('Others', 9.8, 11.9, 116), 9.8, 11.9],
		['Mining/Petrolium', createCustomHTMLContent('Mining/Petrolium', 9.5, 13.0, 3), 9.5, 13.0],
		['Teaching/Education', createCustomHTMLContent('Teaching/Education', 9.2, 12.3, 28), 9.2, 12.3],
		['Professional Services', createCustomHTMLContent('Professional Services', 8.9, 9.4, 17), 8.9, 9.4],
		['Construction', createCustomHTMLContent('Construction', 7.7, 9.0, 26), 7.7, 9.0],
		['Management', createCustomHTMLContent('Management', 6.3, 8.2, 8), 6.3, 8.2]
    ]);

      var options = {
        title: 'Sector wise Base & CTC',
        colors: ['#F1555B', '#4B759E'],
        focusTarget: 'category',
        tooltip: { isHtml: true },
        titlePosition: 'none',
        chartArea: {top:25, bottom:30, left:130, right:130},
        backgroundColor: { fillOpacity: 0 },
        legend: {position: 'bottom', textStyle: {fontSize: 8, color: '#5B5B5B'}},
        hAxis: {textPosition: 'none', gridlines: {color: 'transparent'}},
        vAxis: {textPosition: 'out', textStyle: {bold: true, fontSize: 10, color: '#5B5B5B'}}
      };
      new google.visualization.BarChart(document.getElementById('chart_sec')).draw(data, options);
    }