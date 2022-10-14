window.addEventListener(`DOMContentLoaded`,async()=>{
    emptyChart();
    let database = await databaseLoader(`https://raw.githubusercontent.com/kunxin-chor/sales-data/main/data/sales.json`);
    let dataTraned = await dataTrans(database);   
    console.log(dataTraned);

})