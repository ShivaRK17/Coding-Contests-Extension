const cont = document.getElementById('cont')
fetch("https://kontests.net/api/v1/all")
.then((e)=>{
    return e.json()
}).then((e)=>{
    const allData = e;
    cont.innerHTML=''
    
    allData.forEach(element => {
        var targetDate = new Date(element.start_time);
        var delay = targetDate.getTime() - Date.now();
        if(delay>0){
            chrome.alarms.create(element.site, { when: Date.now() + delay });
        }
        const stime = new Date(element.start_time).toLocaleString()
        const etime = new Date(element.end_time).toLocaleString()
        cont.innerHTML+=`<div class="card my-4 mx-2" style="width: 18rem;">
        <div style="position:absolute;top:-5px;right:-5px;font-size:0.8rem;padding:0 3px;border-radius:5px;background-color:${element.status==="CODING"?"#C3FFBA":"#F8BFBF"};">
        <img src="${element.status==="CODING"?"online.png":"offline.png"}" style="width:20px;" alt="active">
        ${element.status==="CODING"?"Active":"Upcoming"}
        </div>
        <div class="card-body">
          <h5 class="card-title">${element.name}</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary">${element.site}</h6>
          <p class="card-text m-0" style="font-size:0.8rem;">StartTime : ${stime}</p>
          <p class="card-text m-0" style="font-size:0.8rem;">EndTime : ${etime}</p>
          <a href=${element.url} target="_blank"  style="font-size:0.9rem;" class="card-link">Go to Contest</a>
          </div>
          </div>`
    });
})