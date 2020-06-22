// Limit number of frogs
const FROGS = 5;
// Grab main section
const main = document.querySelector('#main');
const score = document.querySelector('#score');

// 1. Create for loop that makes use of FROGS to know how many lanes to create.
const track = document.querySelector('#track');

for (let i = 1; i <= FROGS; i++) {
    // 2. Create li
    const lane = document.createElement('li');
    // 3. Create span and add it to the li
    lane.innerHTML = `<span>${i}</span>`;
    // 4. Assign an id to each lane
    lane.id = `lane-${i}`;
    track.appendChild(lane);
}

// Define racers array
let racers = [];

// Bring frogs from frogStable to their race lane
for (let i = 0; i < FROGS; i++) {
    racers[i] = frogStable[i];
    racers[i].progress = 0;
    racers[i].lane = i+1;
    let lane = document.querySelector(`#lane-${i+1}`);
    lane.innerHTML = `<i class='fas fa-frog' id='frog-${racers[i].number}' style='font-size: 3em; position: relative; color: ${racers[i].color};'></i>`;
    // <span class='frog' id='frog-${racers[i].number}' style='background-color: ${racers[i].color}'>${racers[i].number}</span>`;
    // Show score board
    let frogScore = document.createElement('li');
    frogScore.innerHTML = `${racers[i].name} <i class='fas fa-frog' style='color: ${racers[i].color};'> ${racers[i].number}</i>`;
    score.appendChild(frogScore);
}

// Create racingFrog function
const racingFrog = function(frog) {
    if (frog.progress >= 100) {
        // Stop all intervals since a frog reached the finish line
        for (let i = 1; i<= FROGS; i++) {
            clearInterval(i);
        }
        // Victory text
        const victory = document.querySelector('#winner');
        victory.innerHTML = `<i class="fas fa-flag-checkered"></i> ${frog.name} won the race <i class="fas fa-flag-checkered">`;
    } else {
        // Grab frogElement
        const frogElement = document.querySelector(`#frog-${frog.number}`);
        // Calculate random distance
        let distance = Math.floor(Math.random() * 10);
        frog.progress += distance;
        if (frog.progress > 100) {
            frog.progress = 100;
        }
        // Move frog by random distance
        frogElement.style.left = `${frog.progress}%`;
    }
}

// Call racingFrog function for each frog on the track
let beginRace = '';

for (let i = 0; i < FROGS; i++) {
    let randomPace = Math.random() * 250 + 250;
    beginRace = setInterval(function () { racingFrog(racers[i]); }, randomPace);
}
