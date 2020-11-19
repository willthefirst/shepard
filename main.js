const playButton = document.getElementById("play-button");

playButton.addEventListener("click", async () => {
	const interval = 2;

	// Need this legally initialize audio
	await Tone.start();
	console.log("audio is ready");

	//play a note every eighth note starting from the first measure
	// Tone.Transport.scheduleRepeat(function(time){
	//     note.triggerAttack(time);
	// }, "8n", "1m");

	const gainNode1 = new Tone.Gain(0).toDestination();
	const osc1 = new Tone.Oscillator().connect(gainNode1);
	const loop1 = new Tone.Loop((time) => {
        osc1.start();
		osc1.frequency.linearRampTo(110, Tone.now);
		osc1.frequency.linearRampTo(220, "1n");
		gainNode1.gain.linearRampTo(1, "2n");
		gainNode1.gain.linearRampTo(0, "2n", "+2n");
    }, "1n").start(0);
    
    const gainNode2 = new Tone.Gain(0).toDestination();
	const osc2 = new Tone.Oscillator().connect(gainNode2);
	const loop2 = new Tone.Loop((time) => {
        osc2.start();
		osc2.frequency.linearRampTo(220, Tone.now);
		osc2.frequency.linearRampTo(440, "1n");
		gainNode2.gain.linearRampTo(1, "2n");
		gainNode2.gain.linearRampTo(0, "2n", "+2n");
    }, "1n").start("4n");
    
    const gainNode3 = new Tone.Gain(0).toDestination();
	const osc3 = new Tone.Oscillator().connect(gainNode3);
	const loop3 = new Tone.Loop((time) => {
        osc3.start();
		osc3.frequency.linearRampTo(110, Tone.now);
		osc3.frequency.linearRampTo(220, "1n");
		gainNode3.gain.linearRampTo(1, "2n");
		gainNode3.gain.linearRampTo(0, "2n", "+2n");
    }, "1n").start("2n");
    
    const gainNode4 = new Tone.Gain(0).toDestination();
	const osc4 = new Tone.Oscillator().connect(gainNode4);
	const loop4 = new Tone.Loop((time) => {
        osc4.start();
		osc4.frequency.linearRampTo(220, Tone.now);
		osc4.frequency.linearRampTo(440, "1n");
		gainNode4.gain.linearRampTo(1, "2n");
		gainNode4.gain.linearRampTo(0, "2n", "+2n");
    }, "1n").start("2n + 4n");

    Tone.Transport.bpm.value = 40;
	Tone.Transport.start();
});
