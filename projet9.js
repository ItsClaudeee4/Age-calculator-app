const form = document.getElementById("form")
const day = document.getElementById("day")
const month = document.getElementById("Month")
const year = document.getElementById("Year")
const errorDay = document.getElementById("errorDay")
const errorMonth = document.getElementById("errorMonth")
const errorYear = document.getElementById("errorYear")
const notValidDay = document.getElementById("not-valid-day")
const notValidMonth = document.getElementById("not-valid-month")
const notValidYear = document.getElementById("not-valid-year")
const yearValue = document.getElementById("yearValue")
const monthValue = document.getElementById("monthValue")
const dayValue = document.getElementById("dayValue")
const labelDay = document.getElementById("labelDay")
const labelMonth = document.getElementById("labelMonth")
const labelYear = document.getElementById("labelYear")
let x;
let y;
let z;

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();
const currentDay = currentDate.getDate();
    

function enter() {
    if (day.value === "") {
        errorDay.classList.remove("hidden")
        notValidDay.classList.add("hidden")
        day.style = "border:solid 1px hsl(0, 100%, 67%)"
        labelDay.style ="color:hsl(0, 100%, 67%)"

    }else if(day.value > 31){
        notValidDay.classList.remove("hidden")
        errorDay.classList.add("hidden")
        day.style = "border:solid 1px hsl(0, 100%, 67%)"
        labelDay.style ="color:hsl(0, 100%, 67%)"
    }else{
        notValidDay.classList.add("hidden")
        errorDay.classList.add("hidden")
        day.style = " border: solid 1px hsl(0, 0%, 86%);"
        labelDay.style =" color:hsl(0, 1%, 44%) ;"
        x=1
    }

    if (month.value === "") {
        errorMonth.classList.remove("hidden")
        notValidMonth.classList.add("hidden")
        month.style = "border:solid 1px hsl(0, 100%, 67%)"
        labelMonth.style ="color:hsl(0, 100%, 67%)"

    }else if(month.value > 12){
        notValidMonth.classList.remove("hidden")
        errorMonth.classList.add("hidden")
         month.style = "border:solid 1px hsl(0, 100%, 67%)"
         labelMonth.style ="color:hsl(0, 100%, 67%)"
    }
    else{
        notValidMonth.classList.add("hidden")
        errorMonth.classList.add("hidden")
        month.style = " border: solid 1px hsl(0, 0%, 86%);"
        labelMonth.style =" color:hsl(0, 1%, 44%) ;"
        y=1
    }

    if (year.value === "") {
        errorYear.classList.remove("hidden")
        notValidYear.classList.add("hidden")
        year.style = "border:solid 1px hsl(0, 100%, 67%)"
        labelYear.style ="color:hsl(0, 100%, 67%)"

    }else if(year.value > 2024){
        notValidYear.classList.remove("hidden")
        errorYear.classList.add("hidden")
        year.style = "border:solid 1px hsl(0, 100%, 67%)"
        labelYear.style ="color:hsl(0, 100%, 67%)"
    }
    else{
        notValidYear.classList.add("hidden")
        errorYear.classList.add("hidden")
        year.style = " border: solid 1px hsl(0, 0%, 86%);"
        labelYear.style =" color:hsl(0, 1%, 44%) ;"
        z=1
    }


    if (x === 1 & y === 1 & z === 1 ) {
         years = currentYear - year.value 
         months = currentMonth - month.value 
         days = currentDay - day.value 
         yearValue.innerHTML = years
         monthValue.innerHTML = months
         dayValue.innerHTML = days
    }

   
}
