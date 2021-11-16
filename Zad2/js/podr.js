new Chart(document.getElementById("pie-chart"), {
    type: 'pie',
    data: {
        labels: ["Python", "Java", "JavaScript", "C#", "C/C++"],
        datasets: [{
            label: "Popularność w %",
            backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
            data: [29.93, 17.78, 8.79, 6.73, 6.45]
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Najpopularniejsze języki programowania w 2021.'
        }
    }
});
    
