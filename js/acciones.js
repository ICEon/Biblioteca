// JavaScript Document
function login(U,P){
	datos = "usuario="+U+"&password="+P;
	alert (U);
	alert (P);
	$.ajax({
		type: "POST",
		url: "192.168.1.11/Biblioteca_/Log_in_m.php",
		data: datos
	}).done(function(msg) {
		alert (msg);
        if(msg == "" || msg == null)
         {
          alert ("Nombre de usuario y/o password incorrecto");
         }
        else
         {
  	      alert ("Bienvenido");
         }

	});
 } //login
 
$(document).ready(function(e) {
    document.addEventListener("deviceready", function(){
			$('.Send').tap(function(){
		var formulario = $(this).parents('form');
alert (formulario.attr('name'));
	switch(formulario.attr('name'))
	{
		
			case 'log':
var usuario = document.getElementById('Usuario').value;
var password = document.getElementById('Password').value;
		//	var usuario = $('input[Usuario]').val();
		//	var password = formulario.children('input:eq(1)').val();
							alert (usuario);
			alert (password);
				login(usuario,password);
	
				break;	
				

		}
	});//tap	
	});//device
});//document
