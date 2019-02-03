const timeNodes = document.querySelectorAll('[data-time]'); 
const timeArray = [...timeNodes]; // spread into Array also can be used Array.from(timeNodes);

const seconds = timeArray
    .map(node => node.dataset.time)
    .map(timeCode => {
        const [mins, secs] = timeCode.split(':').map(parseFloat); // ES6 destructuring
        return (mins * 60) + secs;
    })
    .reduce((total, vidSeconds) => total + vidSeconds);

let secondsLeft = seconds;

const hours = Math.floor(secondsLeft / 3600);
secondsLeft %= 3600;

const minutes = Math.floor(secondsLeft / 60);
secondsLeft %= 60;

console.log(`Total Time Spend: ${hours}:${minutes}:${secondsLeft}`);