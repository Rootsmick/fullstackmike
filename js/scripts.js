document.addEventListener("DOMContentLoaded", function () {
	$(".timeline-item").click(function () {
		$(this).find(".timeline-content").slideToggle();
	});
});

document.addEventListener("DOMContentLoaded", function () {
	document.getElementById("contact-form").addEventListener("submit", function (event) {
		event.preventDefault();

		var nome = document.getElementById("nome").value.trim();
		var cognome = document.getElementById("cognome").value.trim();
		var email = document.getElementById("email").value.trim();
		var messaggio = document.getElementById("messaggio").value.trim();

		if (nome === "" || cognome === "" || email === "" || messaggio === "") {
			alert("Tutti i campi sono obbligatori!");
			return;
		}

		if (messaggio.length < 10) {
			alert("Il messaggio deve contenere almeno 10 caratteri!");
			return;
		}

		var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailPattern.test(email)) {
			alert("Inserisci un'email valida!");
			return;
		}

		document.getElementById("contact-form").submit();
	});
});



function toggleDetails(card) {
	let details = card.querySelector(".details");

	document.querySelectorAll(".details").forEach(openDetail => {
		if (openDetail !== details && openDetail.style.display === "block") {
			openDetail.style.height = "0";


			setTimeout(() => {
				openDetail.style.display = "none";
			}, 300);
		}
	});

	if (details.style.display === "none" || details.style.display === "") {
		details.style.display = "block";
		details.style.height = details.scrollHeight + "px";

		setTimeout(() => {

			card.scrollIntoView({ behavior: "smooth", block: "center" });
		}, 300);
	} else {

		details.style.height = "0";
		setTimeout(() => {
			details.style.display = "none";
		}, 300);
	}
}




document.addEventListener("DOMContentLoaded", function () {
	var backToTopElement = document.getElementById('backToTop');

	window.addEventListener('scroll', function () {
		if (window.scrollY > 50) {
			backToTopElement.style.display = 'block';
		} else {
			backToTopElement.style.display = 'none';
		}
	});

	backToTopElement.addEventListener('click', function (event) {
		event.preventDefault();
		window.scrollTo({ top: 0, behavior: 'smooth' });
	});
});

// document.addEventListener("DOMContentLoaded", function () {
// 	var typed3 = new Typed('#element', {
// 		strings: ['- Front-End', '- Back-End', '- Full Stack Developer -'],
// 		typeSpeed: 40,
// 		backSpeed: 50,
// 		backDelay: 0, // Aspetta prima di cancellare
// 		startDelay: 0, // Aspetta prima di partire
// 		showCursor: false,
// 		cursorChar: '|',
// 		loop: false,
// 		smartBackspace: true,
// 	});
// });

document.addEventListener("DOMContentLoaded", function () {
	var typed3 = new Typed('#element', {
		strings: ['- Front-End', '- Back-End', '- Full Stack Developer -'],
		typeSpeed: 50,
		backSpeed: 50,
		backDelay: 10,
		startDelay: 500,
		showCursor: true,
		cursorChar: '|',
		loop: false,
		smartBackspace: true,
		onComplete: function () {
			document.querySelector('.typed-cursor').style.display = 'none'; // Nasconde il cursore
		}
	});
});