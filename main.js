//create a synth and connect it to the main output (your speakers)
const gainNode1 = new Tone.Gain(0).toDestination();
const osc1 = new Tone.Oscillator().connect(gainNode1);

const gainNode2 = new Tone.Gain(1).toDestination();
const osc2 = new Tone.Oscillator().connect(gainNode2);

const gainNode3 = new Tone.Gain(1).toDestination();
const osc3 = new Tone.Oscillator().connect(gainNode3);



const playButton = document.getElementById("play-button");

playButton.addEventListener("click", () => {
    const interval = 2;
    
    // Need this legally initialize audio
	Tone.start();

    //play a note every eighth note starting from the first measure
    // Tone.Transport.scheduleRepeat(function(time){
    //     note.triggerAttack(time);
    // }, "8n", "1m");

	const high = new Tone.Loop((time) => {
        osc1.frequency.value = "C6";
        gainNode1.gain.value = 0;

        osc1.frequency.linearRampToValueAtTime("C5", time + interval);

        gainNode1.gain.rampTo(1, interval/2);
        gainNode1.gain.rampTo(0, interval/2, time + interval/2);

        osc1.start();
    }, interval).start();
     
    const low = new Tone.Loop((time) => {
        osc2.frequency.value = "C5";
        gainNode2.gain.value = 1;

        osc2.frequency.linearRampToValueAtTime("C4", time + interval);

        gainNode2.gain.rampTo(0, interval/2);
        gainNode2.gain.rampTo(1, interval/2, time + interval/2);

        osc2.start();
    }, interval).start();

	Tone.Transport.start();
});
