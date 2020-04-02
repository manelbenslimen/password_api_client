// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
var token="40f8df1703b9d48f669f84da24853fc189112da8";
$("#mes_pwd").click(function(){

	$.ajax({

		url: "https://intranet.proxym-group.net/api/v1/passwords/",
		dataType:"json",
		beforeSend: function(xhr){
        	xhr.setRequestHeaders("Authorization","Token "+token);
        },
		success: function(data){
			// ici on ne veux pas que les données s'affiche dans le console mais dans la partie main de l'index
			console.log(data);
        data.forEach(passwords =>$("#main").append(passwords.ref+"<br>"))
    
		}
	})
	$("#main").html(passwords[0]);
})
$("#pwd_partage").click(function(){

	$.ajax({

		url: "https://intranet.proxym-group.net/api/v1/passwords/shared",
		dataType:"json",
		beforeSend: function(xhr){
        	xhr.setRequestHeaders("Authorization","Token "+token);
		},
		success: function(data){
			// ici on ne veux pas que les données s'affiche dans le console mais dans la partie main de l'index
			console.log(data);
        data.forEach(passwords =>$("#main").append(passwords.ref+"<br>"))
    
		}
	})
	$("#main").html(passwords[1]);

})
$("#pwd_equipe").click(function(){

	$.ajax({

		url: "https://intranet.proxym-group.net/api/v1/passwords/team",
		dataType:"json",
		beforeSend: function(xhr){
        	xhr.setRequestHeaders("Authorization","Token "+token);
		},
		success: function(data){
			// ici on ne veux pas que les données s'affiche dans le console mais dans la partie main de l'index
			console.log(data);
        data.forEach(passwords =>$("#main").append(passwords.ref+"<br>"))
    }
	
	})
	$("#main").html(passwords[2]);
})