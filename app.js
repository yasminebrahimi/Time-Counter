


function countDown(time) {
    
    const timer = () => {
        
        const min = String(Math.trunc(time / 60)).padStart(2, '0');
        const sec = String(Math.trunc(time % 60)).padStart(2, '0');

        // Log the remaining time in mm:ss format
        console.log(`${min}:${sec}`);

     
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


countDown(120);

