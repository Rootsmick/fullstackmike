document.addEventListener("DOMContentLoaded", function() {
    $(".timeline-item").click(function() {
        $(this).find(".timeline-content").slideToggle();
    });
});

document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("contact-form").addEventListener("submit", function(event) {
		event.preventDefault();
		
		var nome = document.getElementById("nome").value.trim();
		var cognome = document.getElementById("cognome").value.trim();
		var email = document.getElementById("email").value.trim();
		var messaggio = document.getElementById("messaggio").value.trim();
		
		if (nome === "" || cognome === "" || email === "" || messaggio === "") {
			alert("Tutti i campi sono obbligatori!");
			return;
		}
		
		var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailPattern.test(email)) {
			alert("Inserisci un'email valida!");
			return;
		}
		
		alert("Messaggio inviato con successo!");
		document.getElementById("contact-form").reset();
	});
});