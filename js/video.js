var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

// Initializing the video when the window loads
window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;
	document.querySelector("#volume").textContent = video.volume * 100 + "%";
});

// Playing the video and updating volume information
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").textContent = video.volume * 100 + "%";
});

// Pausing the video
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

// Slowing down playback rate by 10% and log new speed
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down Video");
	video.playbackRate = video.playbackRate * 0.9;
	console.log("New speed: " + video.playbackRate);
});

// Speed up playback rate proportionally and log new speed
document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up Video");
	video.playbackRate = video.playbackRate / 0.9;
	console.log("New speed: " + video.playbackRate);
});

// Skip ahead in video by 10 seconds or go back to start
document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead");
	
	// Check if skipping ahead would exceed video length
	if (video.currentTime + 10 >= video.duration) {
		video.currentTime = 0;
	} else {
		video.currentTime += 10;
	}
	
	console.log("Current location: " + video.currentTime);
});

// Toggle mute state and update button text
document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted) {
		video.muted = false;
		this.textContent = "Mute";
	} else {
		video.muted = true;
		this.textContent = "Unmute";
	}
	console.log("Mute/Unmute");
});

// Update volume based on slider position
document.querySelector("#slider").addEventListener("input", function() {
	video.volume = this.value / 100;
	document.querySelector("#volume").textContent = video.volume * 100 + "%";
	console.log("Volume changed to: " + video.volume);
});

// Add the oldSchool class to the video
document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Old School Style");
	video.classList.add("oldSchool");
});

// Remove the oldSchool class from the video
document.querySelector("#orig").addEventListener("click", function() {
	console.log("Original Style");
	video.classList.remove("oldSchool");
});