//create a synth and connect it to the main output (your speakers)
const synth = new Tone.Synth().toDestination();

//play a middle 'C' for the duration of an 8th note

const playButton = document.getElementById("play-button");

playButton.addEventListener('click', () => {
    synth.triggerAttackRelease("C4", "8n");
});