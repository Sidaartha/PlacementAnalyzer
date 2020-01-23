
$('.fa-pie-chart').click(function() {
  document.getElementById('statistics').scrollIntoView(true);
});

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
	var data = google.visualization.arrayToDataTable([
	  ['Degree', 'Placed'],
	  ['B.Tech', 320],
	  ['Dual Degree', 320],
	  ['M.Sc', 103],
	  ['M.Tech',228],
	  ['PhD', 11]
	]);
	var options = {
	  title: 'My Daily Activities',
	  titlePosition: 'none',
	  colors: ['#F0454B', '#4B759E', '#17AF84', '#FFC66A', '#17BEBB', '#DFF3B1', '#D4AFB9', '#985F99', '#4D9DE0'],
	  chartArea: {top:10, bottom:80},
	  backgroundColor: { fillOpacity: 0 },
	  legend: {position: 'bottom'}
	};
	var chart = new google.visualization.PieChart(document.getElementById('piechart'));
	chart.draw(data, options);
}
