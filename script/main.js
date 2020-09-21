var tempChart,ammoChart;


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
}

function initializeCharts() {
    var ctx = document.getElementById('tempChart').getContext('2d');
    tempChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
    });
    var ctx1 = document.getElementById('ammoChart').getContext('2d');
    ammoChart = new Chart(ctx1, {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
    });

}

$(document).ready(function () {
    console.log('document loaded');
    initializeFirebase();
    initializeCharts();
});


