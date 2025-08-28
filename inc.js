const hours=document.getElementById('hrs')
const mins=document.getElementById('mins')
const secs=document.getElementById('secs')


setInterval(()=>{
const date=new Date()
hours.innerText=date.getHours()
mins.innerText=date.getMinutes()
secs.innerText=date.getSeconds()
},1000)
