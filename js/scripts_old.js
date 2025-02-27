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

// document.addEventListener("DOMContentLoaded", function () {
// 	var typed3 = new Typed('#element', {
// 		strings: ['- Front-End', '- Back-End', '- Full Stack Developer -'],
// 		typeSpeed: 50,
// 		backSpeed: 50,
// 		backDelay: 10,
// 		startDelay: 500,
// 		showCursor: true,
// 		cursorChar: '|',
// 		loop: false,
// 		smartBackspace: true,
// 		onComplete: function () {
// 			document.querySelector('.typed-cursor').style.display = 'none'; // Nasconde il cursore
// 		}
// 	});
// });

var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
(function () {
	var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
	s1.async = true;
	s1.src = 'https://embed.tawk.to/67bdaf6100dc23190e1efa1c/1ikufa5gs';
	s1.charset = 'UTF-8';
	s1.setAttribute('crossorigin', '*');
	s0.parentNode.insertBefore(s1, s0);
	Tawk_API = Tawk_API || {};
	Tawk_API.onLoad = function () {
		Tawk_API.showWidget();
	};
})();



// document.addEventListener("DOMContentLoaded", function() {
// 	const button = document.getElementById("toggle-dark-mode");
// 	const body = document.body;
// 	const navbar = document.querySelector(".navbar");
// 	const logo = document.getElementById("logo");

// 	// Controlla se la modalità dark è già attiva nei localStorage
// 	if (localStorage.getItem("dark-mode") === "enabled") {
// 	  body.classList.add("dark-mode");
// 	  navbar.classList.add("bg-mode");  // Aggiungi bg-dark alla navbar
// 	  logo.src = "img/dark-logo.svg";
// 	} else {
// 		logo.src = "img/black-logo.svg"; // Imposta il logo predefinito
// 	  }

// 	// Aggiungi l'evento di click al pulsante
// 	button.addEventListener("click", function(event) {
// 	  event.preventDefault(); // Evita che il link cambi pagina

// 	  // Alterna la modalità dark
// 	  body.classList.toggle("dark-mode");
// 	  navbar.classList.toggle("bg-mode");  // Alterna bg-dark nella navbar

// 	  // Salva la preferenza dell'utente nel localStorage
// 	  if (body.classList.contains("dark-mode")) {
// 		logo.src = "img/dark-logo.svg";
// 		localStorage.setItem("dark-mode", "enabled");
// 	  } else {
// 		logo.src = "img/black-logo.svg";
// 		localStorage.setItem("dark-mode", "disabled");
// 	  }
// 	});
//   });

document.addEventListener("DOMContentLoaded", function () {
	const toggleButtons = document.querySelectorAll("#toggle-dark-mode"); // Seleziona tutti i pulsanti (desktop e mobile)
	const body = document.body;
	const logoImages = document.querySelectorAll(".navbar-brand img"); // Seleziona tutti i loghi nelle navbar
	const mobileNavbar = document.querySelector(".navbar"); // Navbar mobile

	function updateDarkModeUI(isDarkMode) {
		if (isDarkMode) {
			body.classList.add("dark-mode");
			mobileNavbar.classList.add("bg-mode");
			logoImages.forEach(img => img.src = "img/dark-logo.svg");
			toggleButtons.forEach(btn => btn.textContent = "LIGHT MODE"); // Cambia testo su tutti i pulsanti
		} else {
			body.classList.remove("dark-mode");
			mobileNavbar.classList.remove("bg-mode");
			logoImages.forEach(img => img.src = "img/black-logo.svg");
			toggleButtons.forEach(btn => btn.textContent = "DARK MODE"); // Cambia testo su tutti i pulsanti
		}
	}

	// Controlla se la dark mode è attiva nel localStorage
	const isDarkMode = localStorage.getItem("dark-mode") === "enabled";
	updateDarkModeUI(isDarkMode);

	// Aggiunge event listener a tutti i pulsanti toggle
	toggleButtons.forEach(button => {
		button.addEventListener("click", function (event) {
			event.preventDefault();
			const isDarkModeNow = !body.classList.contains("dark-mode");
			localStorage.setItem("dark-mode", isDarkModeNow ? "enabled" : "disabled");
			updateDarkModeUI(isDarkModeNow);
		});
	});
});


