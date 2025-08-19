
const hours=document.getElementById("hrs")
const minutes=document.getElementById("min")
const seconds=document.getElementById("sec")
setInterval(()=>{
    const date=new Date()
    hours.innerText=date.getHours()
    minutes.innerText=date.getMinutes()
    seconds.innerText=date.getSeconds()
    console.log(date.getHours())
    console.log(date.getMinutes())
    console.log(date.getSeconds())

},1000)