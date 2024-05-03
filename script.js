const endDate = "19 April 2024 12:00 Am"

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input")
// const clock = () =>{}


function clock(){
    const end = new Date(endDate)
    const now = new Date()
    // console.log(end)
    // console.log(now)
    const diff = (end - now)/1000 ;
//  If difference is negative
    if(diff< 0) return;

    console.log(diff);
     // convert into days;
    inputs[0].value = Math.floor(diff / 3600) % 24;
   //    convert into hours;
   inputs[1].value = Math.floor(diff / 3600) % 24;

   // convert into minutes;
inputs[2].value = Math.floor(diff / 60) % 60;
//  convert into seconds;
inputs[3].value = Math.floor(diff)% 60;
}
// Initial Call
clock()

// Set time

setInterval(
    () => {
    clock()
    },
    1000
)