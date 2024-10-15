(function () {
	if (!document.body) {
	  return;
	}

	window.addEventListener('hashchange', () => {
		var roadmap = document.getElementById("map");
		var about = document.getElementById("about");

		if(window.location.hash !== "#about") {
		  about.style.display = "none";
		  roadmap.style.display = "block";
		} else {
		  roadmap.style.display = "none";
		  about.style.display = "block";
		};
	});

	var next = document.getElementById('next')
	var prev = document.getElementById('prev')

	next.onclick = () => {
		window.location.hash = "#about"
	}

	prev.onclick = () => {
		window.location.hash = "#roadmap"
	}

	var twitter = document.getElementById('twitter')
	var telegram = document.getElementById('telegram')

	twitter.onclick = () => {
		window.location.href = "https://x.com/SUIEnergyXploit"
	}

	telegram.onclick = () => {
		window.location.href = "https://t.me/SUIEnergyXploit"
	}

})();