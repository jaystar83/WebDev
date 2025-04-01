		alert("test alert");

		function validateEmail_1(email) {
  			var emailReg = new RegEx(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/);
  			return emailReg.test( email );
		};
		
		function validateEmail_2(email) {
 			var regex = new RegEx(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/);
  			return regex.test(email);
		};
	
			
		$("#validationForm").submit(function(event){
			// Funktion hält Form davon ab übergeben zu werden
			event.preventDefault();
			
			alert("test_yy")
			
			alert(validateEmail_1($("#email").val()) )
			
	
		});