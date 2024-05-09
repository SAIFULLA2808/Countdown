const endDate ="28 April 2024 12:00 AM"
document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input")

//const clock = () => {

//}

function clock(){
    const end = new Date(endDate)
    const now = new Date()
    //console.log(end);
    //console.log(now)
    const diff = (end - now) / 1000;
    if(diff < 0) return;
     //convert into days
    inputs[0].value = Math.floor(diff /3600 /24);
    inputs[1].value = Math.floor(diff /3600) %24;
    inputs[2].value = Math.floor(diff /60) %60;
    inputs[3].value = Math.floor(diff) %60;

}
//inital call
clock()



/** 
 * 11 day = 264 hours
 * 1 hor = 60 mits
 * 1 mits = 3600 sec
 * 
*/
setInterval(
    () =>{
        clock()
    },
    1000
)