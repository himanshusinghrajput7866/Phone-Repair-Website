
function emailSend(){
﻿
	var userName = document.getElementById('name').value;
	var phone = document.getElementById('phone').value;
	var email = document.getElementById('email').value;
﻿
	var messageBody = "Name " + userName +
	"<br/> Phone " + phone +
	"<br/> Email " + email;



	Email.send({
    Host : "smtp.elasticemail.com",
    Username : "himanshusinghrajput7866@gmail.com",
    Password : "44B82576DE22CAD430B61622F6B3BBF1B947",
    To : 'himanshusinghrajput2216@gmail.com',
    From : "himanshusinghrajput7866@gmail.com",
    Subject : "This is the subject",
    Body : messageBody
}).then(
  message => {
  	if(message=='OK'){
  		swal("Secussful", "You clicked the button!", "success");
  	}
  	else{
  		swal("Error", "You clicked the button!", "error");
  	} 
  }
);
}
