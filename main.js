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
	const osc1 = new Tone.Oscillator("C5").connect(gainNode1);
	const high = new Tone.Loop((time) => {
		osc1.start();

		console.log(osc1.frequency.value);

		osc1.frequency.rampTo("C5", Tone.now);
		osc1.frequency.rampTo("C4", "1n");

		gainNode1.gain.rampTo(1, "2n");
		gainNode1.gain.rampTo(0, "2n", "+2n");
	}, "1n").start(0);

	Tone.Transport.start();
});
