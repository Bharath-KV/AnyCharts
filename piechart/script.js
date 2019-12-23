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
    chart = anychart.pie(dataSet);
    chart.radius(100);
    chart.container("container");
    chart.draw();  
    chart.fill("aquastyle");
    updateChart();
}

function removeChart(new_data) {
    chart.dispose();
    chart = null;
    createChart(new_data);
}

function updateChart() {
    chart.listen('pointClick', function (e) {
        let point = e.point;
        if (point.get('drillDown')) {
            removeChart(data[point.index].drillDown);
        }
        else {
            removeChart(data);
        }
    });
}

createChart(data);