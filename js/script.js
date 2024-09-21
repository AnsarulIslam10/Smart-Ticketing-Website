const ticketInfoContainer = document.getElementById('ticketInfoContainer');
const seatCount = document.getElementById('seatCount');
const seatLeft = document.getElementById('seatLeft');
const totalPriceEl = document.getElementById('totalPrice');
const couponInput = document.getElementById('couponInput');
const couponBtn = document.getElementById('applyBtn');
const grandTotal = document.getElementById('grandTotal');
const phoneNumber = document.getElementById('phoneNumber');
const nextBtn = document.getElementById('nextBtn');
const emailId = document.getElementById('emailId');
const passengerName = document.getElementById('passengerName');

let selectedSeat = [];
let totalPrice = 0;
function handleSelectedSeat(event) {
    const value = event.innerText;

    if (selectedSeat.includes(value)) {
        return alert("Seat already Booked")
    } else if (selectedSeat.length < 4) {
        event.classList.add('bg-primary', "text-white")

        selectedSeat.push(event.innerText);
        seatCount.innerText = selectedSeat.length;
        const availableSeat = parseInt(seatLeft.innerText);
        seatLeft.innerText = availableSeat - 1;

        document.getElementById('NoSeatBooked').classList.add("hidden");

        ticketInfoContainer.innerHTML += `
        <li class="text-base font-normal flex justify-between">
        <span>${event.innerText}</span>
        <span>Economy</span>
        <span>550</span>
        </li>
        `

        // update total price
        totalPrice += 550;
        totalPriceEl.innerText = totalPrice.toFixed(2);

        // active coupon code
        if (selectedSeat.length > 3) {
            couponInput.removeAttribute("disabled")
            couponBtn.removeAttribute("disabled")
        }

        passengerName.removeAttribute('disabled')
        emailId.removeAttribute('disabled')
        phoneNumber.removeAttribute('disabled')

    } else {
        return alert('Maximum seat booked')
    }
}


// coupon btn function
document.getElementById('applyBtn').addEventListener('click', function () {
    const couponInputValue = couponInput.value;
    let couponSave = 0;
    if (couponInputValue !== 'NEW15' && couponInputValue !== 'Couple 20') {
        alert("Invalid Coupon")
        return;
    }
    if (couponInputValue === 'NEW15') {
        couponSave = totalPrice * .15;
    }
    else if (couponInputValue === 'Couple 20') {
        couponSave = totalPrice * .20;
    }

    const showCupponPrice = document.getElementById('showCupponPrice');
    showCupponPrice.innerHTML = `
            <div class="flex justify-between w-full">
                <h2 class="text-xl font-bold">Discount</h2>
                <h2 class="text-xl font-bold">
                    <span>BDT:</span>
                    <span id="totalPrice">-${couponSave.toFixed(2)}</span>
                </h2>
            </div>
            `

    const grandTotalValue = totalPrice - couponSave;
    grandTotal.innerText = grandTotalValue;

})

phoneNumber.addEventListener('input', function(e){
    e.preventDefault();

    const inputValue = e.target.value;
    if (inputValue.length >= 11) {
        nextBtn.removeAttribute('disabled')
    }
})

document.getElementById('continueBtn').addEventListener('click', function(){
    window.location.reload();
})