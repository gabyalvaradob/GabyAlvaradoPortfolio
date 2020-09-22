const Portfolio = function () {
	function makeWords() {
		var words = [
			{
				text: "Marketing",
				weight: 18
			}, {
				text: "HTML",
				weight: 15
			}, {
				text: "Javascript",
				weight: 19
			}, {
				text: "cybersecurity",
				weight: 15
			}, {
				text: "programming",
				weight: 16
			}, {
				text: "sales",
				weight: 17
			}, {
				text: "Tech",
				weight: 16
			}, {
				text: "Math",
				weight: 15
			}, {
				text: "Personal finance",
				weight: 18
			}, {
				text: "React",
				weight: 18
			}, {
				text: "Business administration",
				weight: 16
			}
		];
		return words;
	}

	function makeWordCloud(words) {
		$('.teaching-domains').jQCloud(words, { delay: 130 });
	}

	function displayWordCloud() {
		var count = 1;
		$(window).on('scroll', function () {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 2700; // set to whatever you want it to be
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}

	function designForm() {
		$("#my-modal form").addClass("my-form");
	}

	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"am a Front-End Web Developer.", "am also a financial advisor.", "have a Master in Cybersecurity.", "am a Marketer.", "solve problems."
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 1,
			contentType: 'text',
			callback: function () {
				$("#writing-text").css({ "color": "#fff", "background-color": "#E43F6F" });
			},
			preStringTyped: function () { },
			onStringTyped: function () { }
		});
	}

	return {
		displayWordCloud: displayWordCloud,
		typeAnimation: typeAnimation
	}

}();


Portfolio.displayWordCloud();
Portfolio.typeAnimation();

gsap.registerPlugin(ScrollTrigger);
// gsap.from("#wordsMap", { duration: 3, x: 300, opacity: 0, scale: 0.5, ease: "slow.in" });

gsap.to("#wordsMap", {
	scrollTrigger: {
		trigger: "#wordsMap",
		toggleActions: "restart pause reverse pause",
		scrub: true,
	},
	duration: 3,
	opacity: 0.8,
	scale: 1.3, 
	ease: "slow.in"
	}
  );