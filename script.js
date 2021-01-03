var queryURL = "https://api.covidcountydata.org/covidtrackingproject?fips=eq.12&limit=20" + "&ccd_apikey";

$.ajax({
    url: queryURL,
    method: "GET"
})

let myChart = document.getElementById('myChart').getContext('2d');
            let chart2 = document.getElementById('chart2').getContext('2d');

            let chart1 = new Chart(myChart, {
                
                type:'bar', // bar, horizontalBar, pie, line, doughnut, etc
                data:{
                    labels:['February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                    datasets:[{
                        label: 'Confirmed U.S. Cases',
                        backgroundColor: 'red',                      
                        borderWidth:1,
                        hoverBorderWidth:3,
                        hoverBorderColor: 'black',         
                    }]
                   
                },
                options:{
                    title:{
                        display:true,
                        text: 'COVID Statistics',
                        fontSize:25,
                    },
                layout:{
                    padding:{
                        left:100,
                        right:400,
                        bottom:100,
                        top:100,
                    }
                }
                }
                
            });
        

               let casPopChart = new Chart(chart2, {
                   type: 'bar',
                   data:{
                       labels:['February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                       datasets:[{
                           label: 'Confirmed U.S. Deaths',
                           backgroundColor: 'red',
                           borderWidth:1,
                           hoverBorderWidth:3,
                           hoverBorderColor: 'black',
                       }]
                   },
                   options: {
                       title:{
                           display:true,
                           text: 'COVID Statistics',
                           fontSize:25,
                       },
                    layout:{
                        padding:{
                            left:100,
                            right:400,
                            bottom:100,
                            top:100,
                        }
                    }
                   }
               });