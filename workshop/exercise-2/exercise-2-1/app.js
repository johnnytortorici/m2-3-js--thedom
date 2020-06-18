// Preset values
const FROGS = 3;

// 1. Create for loop that makes use of FROGS to know how many lanes to create.
const ol = document.querySelector('#track');

for (let i = 1; i <= FROGS; i++) {
    // 2. Create li
    const lane = document.createElement('li');
    // 3. Create span and add it to the li
    lane.innerHTML = `<span>${i}</span>`;
    // 4. Assign an id to each lane
    lane.id = `lane-${i}`;
    ol.appendChild(lane);
}

// Define racers array
let racers = [];

for (let i = 0; i < FROGS; i++) {
    racers[i] = frogStable[i];
    racers[i].progress = 0;
    racers[i].lane = i+1;
    let lane = document.querySelector(`#lane-${i+1}`);
    lane.innerHTML = `<span class='frog' style='background-color: ${racers[i].color}'>${racers[i].name} ${racers[i].number} ${racers[i].progress}</span>`;
    
}

console.log(racers);