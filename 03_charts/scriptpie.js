const option = {
    "chart":{
        "type":"pie",
        "height" : "100%"
    },

    "series":[20,30,40,50,60],
    "labels":["Male","Female","Gay","Les","Trans"]
    // if you wanna chg the color
    // "colors":["#fffff04","#fffff03","#fffff02","#fffff01","#fffff00"]
}

const chartPie = new ApexCharts(document.querySelector(`#pieChart`),option);
chartPie.render();