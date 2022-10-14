const revMoney = [120000,75000,80000,45000,33000,55000];
const loss = [25000,15000,30000,5000,12000,12500];
const cate = ['Jan','Feb','March','Apr','May','June'];

//function to get the data from external
async function loadData(){
    let database = (await axios.get(`https://raw.githubusercontent.com/apexcharts/apexcharts.js/master/db.json`));
    return database.data
}


window.addEventListener('DOMContentLoaded', async ()=>{
    const options =  {
        chart: {
            "id":"CHARTUNION",
            type: 'line',
            height:"100%",
            "group":"union"
        },
        series:[], // empty chart
        noData: {
            "text": "Now Loading..."
        }
    }
    
    let chart = new ApexCharts(document.querySelector(`#lineChart`),options);
    chart.render();

    let series = await loadData();
    chart.updateSeries([{  // .updateSeries will replace the existing one
        'name': 'Sales',
        'data': series.yearly
    }])



// let options = {
//     "chart" : {
//         "id":"CHARTUNION",
//         "type" : "line", // "line" or "bar" --> to use different chart
//         "height" : "100%",
//         "group":"union"
//     },
//     series : [{
//         "name":"Deal Closed",
//         "data": revMoney
//     },
//     {
//         "name":"Deal Rejected",
//         "data": loss
//     }
// ],
//     "xaxis" : {
//         "categories": cate
//     },
//     yaxis: {
//         labels: {
//           minWidth: 40
//         }
//       }
// }

// let lineChart = new ApexCharts(document.querySelector(`#lineChart`),options);
// lineChart.render();

async function loadDataCSV(){
    let database2 = (await axios.get(`birthrate.csv`));
    let jsonTrans = await csv().fromString(database2.data);
    return jsonTrans
}
let rawdata = await loadDataCSV();

function dataTrans(rawData){
    let shortlisted = [];
    for(let i of rawData){
        if((i.ethnic_group).toLowerCase() == "others"){
            shortlisted.push(i);
        }
    }
    return shortlisted;
}
let dataJSON = await dataTrans(rawdata);

let formattingJSON = [];
for(let i of dataJSON){
    formattingJSON.push({
        "x" : parseInt(i.year),
        "y" : parseInt(i.live_births)
    })
}
console.log(formattingJSON);
     const options2 =  {
        chart: {
            "id":"CHARTUNION2",
            type: 'line',
            height:"100%",
            "group":"union"
        },
        series:[], // empty chart
        noData: {
            "text": "Now Loading..."
        }
    }
    
    let barchart = new ApexCharts(document.querySelector(`#barChart`),options2);
    barchart.render();

    barchart.updateSeries([{  // .updateSeries will replace the existing one
        'name': 'Sales',
        'data': formattingJSON
    }])

// let options2 = {
//     "chart" : {
//         "id":"CHARTUNION2",
//         "type" : "line", // "line" or "bar" --> to use different chart
//         "height" : "100%",
//         "group":"union"
//     },
//     series : [{
//         "name":"Revenue",
//         "data": revMoney
//     },
//     {
//         "name":"Loss",
//         "data": loss
//     }
// ],
//     "xaxis" : {
//         "categories": cate
//     },
//     yaxis: {
//         labels: {
//           minWidth: 40
//         }
//       }
    
// }

// let barChart = new ApexCharts(document.querySelector(`#barChart`),options2);
// barChart.render();

})