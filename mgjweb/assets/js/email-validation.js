(function ($) {
	"use strict";
	var windowOn = $(window);

	// Email validation
	const btn = document.getElementById("button");

	document.getElementById("form").addEventListener("submit", function (event) {
	  event.preventDefault();

	  const serviceID = "service_i13zham";
	  const templateID = "template_5dny7lg";
	
	  // Show success message only after sending email
	  emailjs.sendForm(serviceID, templateID, this).then(
		() => {
		  swal(
			'Success! Your mail has been sent',
			'Your clicked the <b style="color:green;">Submit</b> button!',
			'success'
		  );
	
		  document.querySelector("#name").value = "";
		  document.querySelector("#email").value = "";
		  document.querySelector("#message").value = "";
		},
		(err) => {
		  alert(JSON.stringify(err));
		}
	  );
	});




})(jQuery);



