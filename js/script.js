const ticketInfoContainer = document.getElementById('ticketInfoContainer');
const seatCount = document.getElementById('seatCount');
const seatLeft = document.getElementById('seatLeft');


let selectedSeat = [];

function handleSelectedSeat(event){

    event.classList.add('bg-primary', "text-white")

    selectedSeat.push(event.innerText);
    seatCount.innerText = selectedSeat.length; 
    seatLeft.innerText = 40 - selectedSeat.length;


    const div = document.createElement('div');
    div.innerHTML = `
    <div class="flex justify-between py-3 px-3">
         <h2 class="">${event.innerText}</h2>
         <h2 class="">Economy</h2>
         <h2 class="">550</h2>
     </div>
    
    `
    ticketInfoContainer.appendChild(div)
}
