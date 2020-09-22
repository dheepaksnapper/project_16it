var tempChart, ammoChart, database, tempRef, ammoRef;
var tempDataset = {
    label: 'Temp °C - 1',
    data: [],
    borderWidth: 2,
    borderColor: '#1976d2',
    backgroundColor: '#2196f3',
    fill : 'origin'
},
tempChartOptions = {
    scales: {
        yAxes: [{
            ticks: {
                suggestedMin: 15,
                suggestedMax: 70,
                stepSize: 5
            }
        }]
    }
},
ammoDataset = {
    label: 'PPM',
    data: [],
    borderWidth: 2,
    borderColor: '#388e3c',
    backgroundColor: '#4caf50',
    // fill : false
},
ammoChartOptions = {
    scales: {
        yAxes: [{
            ticks: {
                suggestedMin: 10,
                suggestedMax: 50,
                stepSize: 5
            }
        }]
    }
}

Date.prototype.timeNow = function () {
    return ((this.getHours() < 10)?"0":"") + this.getHours() +":"+ ((this.getMinutes() < 10)?"0":"") + this.getMinutes();;
}

function initializeFirebase() {
    var firebaseConfig = {
        apiKey: "AIzaSyBB_pWCk4PpS2rKEd7i3t2rzuydGiX06Yg",
        authDomain: "project-16it.firebaseapp.com",
        databaseURL: "https://project-16it.firebaseio.com",
        projectId: "project-16it",
        storageBucket: "project-16it.appspot.com",
        messagingSenderId: "916528025552",
        appId: "1:916528025552:web:fbc991288b388b7ecaf3d5",
        measurementId: "G-94J7ENHRF4"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      // get db reference
      database = firebase.database();

}

function initializeCharts() {
    var ctx = document.getElementById('tempChart').getContext('2d');
    tempChart = new Chart(ctx, {
        type: 'line',
        data: {
            lables: [],
            datasets: [
                tempDataset
            ]
        },
        options: tempChartOptions
    });
    var ctx1 = document.getElementById('ammoChart').getContext('2d');
    ammoChart = new Chart(ctx1, {
            type: 'line',
            data: {
                lables: [],
                datasets: [
                    ammoDataset
                ]
            },
        options: ammoChartOptions
    });
}

function initializeFirebaseReadEvent() {
    tempRef = firebase.database().ref('temperature');
    ammoRef = firebase.database().ref('ammonia');
    tempRef.on('value', function(snapshot) {
        updateChartData(tempChart, snapshot);
    });
    ammoRef.on('value', function(snapshot) {
        updateChartData(ammoChart, snapshot);
    });
}

function updateChartData(chart, snapshot) {

    // get db reference - 1
    // subscribe to event - 1
    // update chart - 1
    var date = new Date();
    chart.data.labels.push(date.timeNow())
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(snapshot.val());
    });
    chart.update();
}

$(document).ready(function () {
    console.log('document loaded');
    initializeFirebase();
    initializeCharts();
    initializeFirebaseReadEvent();
});


