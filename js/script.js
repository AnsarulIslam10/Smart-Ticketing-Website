const seatLeft = parseInt(document.getElementById('seatLeft').innerText);


// Selecting seat using function

function selectSeat(id) {
    document.getElementById(id).addEventListener('click', function () {
        // const seat = document.getElementById(id);
        document.getElementById(id).classList.add('bg-primary', 'text-white');
        count++
        const available = document.getElementById('seatLeft').innerText = seatLeft - count;
        const seatCount = document.getElementById('seatCount').textContent = 40 - available;

        document.getElementById(id).addEventListener('click', function () {
            document.getElementById(id).classList.remove('bg-primary', 'text-white');
            count--;
            document.getElementById('seatLeft').innerText = available + 1;
            document.getElementById('seatCount').innerText = (40 - available) - 1;
            selectSeat(id);

        })
    })
}

let count = 0;


// function to get seat info
function seatInfo(id) {
    document.getElementById(id).addEventListener('click', function () {
        const div = document.createElement('div');
        div.innerHTML = `
    <div class="flex justify-between py-3">
        <h2 class="">${id}</h2>
        <h2 class="">Economey</h2>
        <h2 class="">550</h2>
    </div>

    `
        document.getElementById('ticketInfoContainer').appendChild(div);

        document.getElementById(id).addEventListener('click', function () {
            document.getElementById('ticketInfoContainer').remove(div);
            seatInfo(id)
        })

    })
}

seatInfo('a1')
selectSeat('a1')
selectSeat('a2')
selectSeat('a3')
selectSeat('a4')
selectSeat('b1')
selectSeat('b2')
selectSeat('b3')
selectSeat('b4')

