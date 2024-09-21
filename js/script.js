const ticketInfoContainer = document.getElementById('ticketInfoContainer');
const seatCount = document.getElementById('seatCount');
const seatLeft = document.getElementById('seatLeft');



let selectedSeat = [];

function handleSelectedSeat(event) {

    event.classList.add('bg-primary', "text-white")

    selectedSeat.push(event.innerText);
    seatCount.innerText = selectedSeat.length;
    const availableSeat = parseInt(seatLeft.innerText);
    seatLeft.innerText = availableSeat - 1;

    document.getElementById('NoSeatBooked').innerText ='';

    ticketInfoContainer.innerHTML += `
    <li class="text-base font-normal flex justify-between">
    <span>${event.innerText}</span>
    <span>Economy</span>
    <span>550</span>
    </li>
    
    `
}
