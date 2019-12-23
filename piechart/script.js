var chart;
var data = [
    {"x": 2017, "value": 20, "drillDown": [
        {"x": "Karnataka", "value": 5},
        {"x": "Delhi", "value": 4},
        {"x": "Madhya pradesh", "value": 3},
        {"x": "Andhra pradesh", "value": 8}
    ]},
    {"x": 2018, "value": 20, "drillDown": [
        {"x": "Karnataka", "value": 3},
        {"x": "Delhi", "value": 2},
        {"x": "Madhya pradesh", "value": 5},
        {"x": "Andhra pradesh", "value": 10}
    ]},
    {"x": 2019, "value": 20, "drillDown": [
        {"x": "Karnataka", "value": 2},
        {"x": "Delhi", "value": 5},
        {"x": "Madhya pradesh", "value": 7},
        {"x": "Andhra pradesh", "value": 6}
    ]}
];

function createChart(new_data) {
    var dataSet = anychart.data.set(new_data);
    // create a chart and set the data
    chart = anychart.pie(dataSet);
    chart.radius(100);
    // set the container id
    chart.container("container");
    // initiate drawing the chart
    chart.draw();  
    // enable aqua style
    chart.fill("aquastyle");
    updateChart(chart);
}

function removeChart(new_data) {
    chart.dispose();
    chart = null;
    // $("#container div").html('');
    // console.log(new_data)
    createChart(new_data);
}

function updateChart(chart) {
    // when a 'pointClick' event happens
    chart.listen('pointClick', function (e) {
        // check if there is drillDown data available
        let index = e.point.index;
        if (e.point.get('drillDown')) {
            removeChart(data[index].drillDown);
        }
        else {
            removeChart(data);
        }
    });
}

createChart(data);