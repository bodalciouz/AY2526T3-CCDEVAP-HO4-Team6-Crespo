//HO4 - Crespo, Carl - S16

new Chart(document.getElementById("categoryChart"),{
    type:"doughnut",
    data:{

        labels: [
            "Electronics",
            "Miscellaneous",
            "Identity Documents",
            "Watch/Jewelry"
        ],

        datasets: [{
            data: [24, 18, 15, 9]
        }]
    },

    options:{
        responsive:true,

        plugins:{
            legend:{
                position:"bottom"
            }
        }
    }
});

new Chart(document.getElementById("claimedChart"),{
    type:"line",
    data:{

        labels:[
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat",
            "Sun"
        ],

        datasets:[{

            label:"Claimed",
            data:[4,6,3,7,9,5,2],
            tension:.4,
            fill:false
        }]
    },

    options:{
        responsive:true,
        scales:{
            y:{
                beginAtZero:true
            }
        }
    }
});

new Chart(document.getElementById("locationChart"), {
    type: "polarArea",

    data: {
        labels: [
            "Gokongwei Hall",
            "Andrew Gonzales Hall",
            "St. La Salle Hall"
        ],

        datasets: [{
            label: "Reported Lost Items",
            data: [28, 21, 17]
        }]
    },

    options: {
        responsive: true,

        plugins: {
            legend: {
                position: "bottom"
            }
        }
    }
});