document.addEventListener('DOMContentLoaded', function() {
    // Start the typing effect
    startFromBegin();

    // Try to play the audio
    startMusic();
});

function startFromBegin() {
    const text = `As we mark the passage of our third month together, I find myself reflecting on the beauty of our shared journey. We've traversed through the landscapes of our souls, encountering both the peaks of joy and the valleys of our imperfections. In these moments of raw honesty, my admiration and love for you have only deepened.

    Your presence is a symphony that brings harmony to my life, a melody of kindness, patience, and understanding that resonates within me. You are a lighthouse in the storm, guiding me with your unwavering love and gentle spirit. The way you move through life, with grace and compassion, is a constant source of inspiration and awe.

    In our time together, I've come to appreciate the art of loving in all its forms. We've crafted a masterpiece of moments—each brushstroke a testament to our laughter, our tears, our shared dreams, and our unspoken fears. It's in these quiet, intimate spaces that I find the truest essence of who we are.

    As we look forward to the uncharted days ahead, I am filled with a profound sense of anticipation and joy. The future we are building, hand in hand, is a canvas awaiting the vibrant colors of our shared experiences. I cherish the thought of growing old with you, discovering new facets of each other, and nurturing the garden of our love.

    Thank you for being my muse, my confidant, and my heart's compass. With every heartbeat, I choose you, and I am endlessly grateful for the love we share. Here's to the continuation of our beautiful journey, to the dreams we will chase, and the life we will create together.

    With all my love, now and always.
    Mark`;

    const paragraph = text.split("");
    let i = 0;

    function dashOut(arr) {
        if (i < arr.length) {
            document.querySelector(".textCont").textContent += arr[i];
            i++;
            setTimeout(() => dashOut(arr), interval(arr[i]));
        }
    }

    function interval(letter) {
        if (letter === ";" || letter === "." || letter === ",") {
            return Math.floor(Math.random() * 500 + 500);
        } else {
            return Math.floor(Math.random() * 130 + 5);
        }
    }

    dashOut(paragraph);
}

function startMusic() {
    const audioElement = document.getElementById('backgroundMusic');
    const playPromise = audioElement.play();

    if (playPromise !== undefined) {
        playPromise.then(() => {
            console.log('Playback started successfully');
        }).catch(error => {
            console.log('Playback was prevented:', error);
            // Add an event listener for user interaction
            document.addEventListener('click', () => {
                audioElement.play().then(() => {
                    console.log('Playback started successfully after user interaction');
                }).catch(error => {
                    console.log('Playback was prevented after user interaction:', error);
                });
            }, { once: true }); // Only add listener once
        });
    }
}
