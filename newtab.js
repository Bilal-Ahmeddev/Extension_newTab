
const quotes = [
    "Push yourself, because no one else is going to do it for you.",
    "Your only limit is your mind.",
    "Dream big. Work hard. Stay focused.",
    "The harder you work for something, the greater you'll feel when you achieve it.",
    "Every moment is a fresh beginning.",
    "Do something today that your future self will thank you for.",
    "Don't stop when you're tired. Stop when you're done.",
    "Doubt kills more dreams than failure ever will.",
    "Success is what happens after you survive your mistakes."
];


function updateLiveAge() {
    const birthDate = new Date("1999-10-17T00:00:00Z");
    const now = new Date();


    const ageInSeconds = Math.floor((now - birthDate) / 1000);


    const years = Math.floor(ageInSeconds / (365.25 * 24 * 60 * 60));
    const remainingSeconds = ageInSeconds % (365.25 * 24 * 60 * 60);
    const days = Math.floor(remainingSeconds / (24 * 60 * 60));
    const seconds = remainingSeconds % (24 * 60 * 60);

    document.getElementById("age").textContent = `${years} years, ${days} days, ${seconds} sec`;
}

function updateCurrentTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12 || 12; 

    document.getElementById("currentTime").textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
}


function updateBrowserUsage() {
    chrome.storage.local.get(["totalTime"], (result) => {
        let timeSpent = result.totalTime || 0;
        let hours = Math.floor(timeSpent / (1000 * 60 * 60));
        let minutes = Math.floor((timeSpent % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeSpent % (1000 * 60)) / 1000);

        document.getElementById("usage").textContent = `${hours}h ${minutes}m ${seconds}s`;
    });
}

function displayQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").textContent = quotes[randomIndex];
}


setInterval(() => {
    updateLiveAge();
    updateCurrentTime();
    updateBrowserUsage();
}, 1000);


updateLiveAge();
updateCurrentTime();
updateBrowserUsage();
displayQuote();
