

// This repository contains a simple JavaScript function that implements a countdown timer. 
// The timer starts from a specified time in seconds and logs the remaining time in mm:ss format. 
// When the countdown reaches zero, it clears the interval and suggests re-sending an OTP 
// (one-time password).



// Function to start a countdown timer.
function countDown(time) {
    // Timer function that decrements the time every 2 seconds and logs the remaining time.
    const timer = () => {
        // Calculate minutes and seconds
        const min = String(Math.trunc(time / 60)).padStart(2, '0');
        const sec = String(Math.trunc(time % 60)).padStart(2, '0');

        // Log the remaining time in mm:ss format
        console.log(`${min}:${sec}`);

        // Check if time is up
        if (time === 0) {
            clearInterval(intervalId); 
            console.log("Click to re-send OTP"); 
        }

        // Decrement the time
        time--;
    };

    timer();

    // Set interval to call the timer function every 2 seconds
    const intervalId = setInterval(timer, 2000);
}

// Start countdown from 120 seconds (2 minutes)
countDown(120);
