$(document).ready(function(){
	$("button").click(function(e){
		//un preventDefault para que detenga la acción por defecto
		e.preventDefault();
		//guarde los valores ingresados en las variables name y message
		var name = $("#nombre").val();
		var message = $("#mensaje").val();
		//Si los campos nombre y mensaje están vacíos, debe generar una alerta para que el usuario los ingrese.
		if(name == "" && message == ""){
			alert("Debes escribir tu nombre y el mensaje");
		//Si no, mostrará en pantalla el nombre y mensaje ingresados por el usuario.	
		}else{ 
			$("#comentarios").append('<div><span class="center-align">' + name + '</span><p class="center-align">' + message + "</p></div>");
		}
	});
});