let menu = document.querySelector('#menu-icon');
let header2 =document.querySelector('.header2');
let navbar1 =document.querySelector('.navbar1');
let navbtn1 =document.querySelector('.navbtn1');
let logo1 =document.querySelector('.logo1');
let menu2=document.querySelector('.menu-icon2');

menu.addEventListener('click',function(){
    menu.classList.toggle('show-none');
    header2.classList.toggle('display');
    navbar1.classList.toggle('show-none');
    navbtn1.classList.toggle('show-none');
    logo1.classList.toggle('show-none');
})
menu2.addEventListener('click',function(){
    menu.classList.toggle('show-none');
    header2.classList.toggle('display');
    navbar1.classList.toggle('show-none');
    navbtn1.classList.toggle('show-none');
    logo1.classList.toggle('show-none');
})

// // gpt
// let menu = document.querySelector('#menu-icon');
// let header = document.querySelector('header');
// let header2 = document.querySelector('.header2');

// menu.addEventListener('click', function () {
//     menu.classList.toggle('bx-x');
//     header2.classList.toggle('display');
//     header.classList.toggle('show-none');
// });

// timer
// Set the target date for the countdown
const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 2); // 2 days
targetDate.setHours(targetDate.getHours() + 14); // 14 hours
targetDate.setMinutes(targetDate.getMinutes() + 22); // 22 minutes
targetDate.setSeconds(targetDate.getSeconds() + 32); // 32 seconds

// Function to update the countdown timer
function updateCountdown() {
    const now = new Date();
    const timeDifference = targetDate - now;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Update HTML elements with the calculated values
    document.querySelector('.days').textContent = formatTime(days);
    document.querySelector('.hours').textContent = formatTime(hours);
    document.querySelector('.mins').textContent = formatTime(minutes);
    document.querySelector('.secs').textContent = formatTime(seconds);
}

// Function to add leading zeros to the time values
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// Initial call to update the countdown when the page loads
updateCountdown();

// Update the countdown every second
setInterval(updateCountdown, 1000);

// load more cards


document.addEventListener('DOMContentLoaded', function () {
    let poolCount = 8; // Starting from pool 8
    let loadbtn=document.querySelector('.load-btn');
let cardContainer=document.querySelector('.pool-container');

    function createPoolItem(number) {
        const pool = document.createElement('div');
        pool.className = 'pool';
        pool.innerHTML = `
            <h3>pool ${number}</h3>
            <div class="pool-content">
                <div class="pool-text">
                    <div>
                        <p>Total Staked</p>
                        <h4>672 <span>AOVR</span></h4>
                    </div>
                    <div>
                        <p>Total Owned</p>
                        <h4>183 <span>AOVR</span></h4>
                    </div>
                </div>
                <p class="pool-p2">Available Slots : <span class="light">7</span> Slots</p>
                <p class="pool-link">DzWPTj1Ym5w5uGoGvdjtRK6GyoG4VpjL8VJhdUcSRfqg</p>
            </div>
            <button class="btn pink-btn">STAKE</button>
        `;
        return pool;
    }

    function loadMorePools() {
        // Create a new pool and append to the container
        const newPool = createPoolItem(poolCount);
        cardContainer.appendChild(newPool);
        poolCount++; // Increment the pool count for the next load
    }

    // Event listener for the load button
    loadbtn.addEventListener('click', loadMorePools);
});

// wallet connection
const navBtns=document.querySelectorAll('.navbtn');
const wallet=document.querySelector('.wallet');
const section2=document.querySelector('.section2-content2');
navBtns.forEach(function(navBtn){

    navBtn.addEventListener('click',function(){
        navBtn.classList.toggle('connected');
        if(navBtn.classList.contains('connected')){
            navBtn.innerHTML= `<img src="./images/phantom.png" alt="">Connected`;
        }
        else{
            navBtn.innerHTML= `<img src="./images/phantom.png" alt="">connect phantom wallet`;

        }
        wallet.classList.toggle('show-wallet');
        section2.classList.toggle('show-wallet');
    })
})

