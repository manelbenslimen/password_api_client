// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

$("#pwd_btn").click(function(){

	$.ajax({

		url: "http://127.0.0.1:8000/passwords/",
		dataType:"json",
		success: function(data){
			// ici on ne veux pas que les données s'affiche dans le console mais dans la partie main de l'index
			console.log(data);
			//$("#main").html(data);
		}
	})
})