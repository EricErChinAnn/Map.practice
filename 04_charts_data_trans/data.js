async function emptyChart(){
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
    
    let chart = new ApexCharts(document.querySelector(`#firstChart`),options);
    chart.render();
}

async function databaseLoader(url){
    let database = await axios.get(url);
    return database.data;
}

async function dataTrans(database){
    let earning = database.map(function(record){
        return {
            date : new Date(record.completed_at),
            amount : record.payment.amount,
        }
    });
    console.log(earning); 
}