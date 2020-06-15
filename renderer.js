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
		ContentType:"application/json",
		 headers: {"Authorization": "Token "+token },

        	
		success: function(data){
		
			console.log(data);
		
			
        	data.forEach(passwords =>$("#accordion").append(
        		
        		'<div class=card>\
        		<div class=card-header id='+passwords.name_safe+'>\
			      <h5 class="mb-0">\
			        <button class="btn btn-link" data-toggle="collapse" data-target=#"'+passwords.login_safe+'" aria-expanded="false" aria-controls="'+passwords.login_safe+'">\
			          '+passwords.name_safe+'\
			        </button>\
			      </h5>\
        		</div>\
        		<div id="'+passwords.login_safe+'" class="collapse show" aria-labelledby="'+passwords.name_safe+'" data-parent="#accordion">\
				      <div class="card-body">\
				        <table class="table-striped">\
				        	<tr>\
				        	<td>login safe</td>\
				        	<td>'+passwords.login_safe+'</td>\
				        	</tr>\
				        	<tr>\
				        	<td>password safe</td>\
				        	<td>'+passwords.pwd_safe+'</td>\
				        	</tr>\
				        	<tr>\
				        	<td>url safe</td>\
				        	<td>'+passwords.url_safe+'</td>\
				        	</tr>\
				        	<tr>\
				        	<td>note</td>\
				        	<td>'+passwords.note+'</td>\
				        	</tr>\
				        	<tr>\
				        	<td>categorie</td>\
				        	<td>'+passwords.categorie+'</td>\
				        	</tr>\
				        	<tr>\
				        	<td>owner safe</td>\
				        	<td>'+passwords.owner_safe+'</td>\
				        	</tr>\
				        </table>\
				      </div>\
				    </div>\
        		</div>'
        		));
      
        }
        	
	})

})
$("#pwd_partage").click(function(){
	
	$.ajax({

		url: "https://intranet.proxym-group.net/api/v1/passwords/shared",
		ContentType:"application/json",
		 headers: {"Authorization": "Token "+token },
		success: function(data){
			// ici on ne veux pas que les données s'affiche dans le console mais dans la partie main de l'index
			console.log(data);
        data.forEach(passwords =>$("#pwd_table").append(
        	"<tr width=100%>"+
        		"<td width=15%>"+passwords.name_safe+"</td>"+
        		"<td>"+passwords.login_safe+"</td>"+
        		"<td>"+passwords.pwd_safe+"</td>"+
        		"<td>"+passwords.url_safe+"</td>"+
        		"<td>"+passwords.note+"</td>"+
        		"<td>"+passwords.categorie+"</td>"+
        		"<td>"+passwords.owner_safe+"</td>"+
        		"</tr>"
        		));
        $("#main").append("</table>");
}

})
})
$("#pwd_equipe").click(function(){
	
	$.ajax({

		url: "https://intranet.proxym-group.net/api/v1/passwords/team",
		ContentType:"application/json",
		 headers: {"Authorization": "Token "+token },
		success: function(data){
			// ici on ne veux pas que les données s'affiche dans le console mais dans la partie main de l'index
			console.log(data);
        data.forEach(passwords =>$("#pwd_table").append(
        	"<tr >"+
        		"<td>"+passwords.name_safe+"</td>"+
        		"<td>"+passwords.login_safe+"</td>"+
        		"<td>"+passwords.pwd_safe+"</td>"+
        		"<td>"+passwords.url_safe+"</td>"+
        		"<td>"+passwords.note+"</td>"+
        		"<td>"+passwords.categorie+"</td>"+
        		"<td>"+passwords.owner_safe+"</td>"+
        		"</tr>"
        		));
        $("#main").append("</table>");
    }
	})
	
})

function view_list(liste){
	document.getElementById(liste.name_safe).html=
	"<ul id="+liste.name_safe+"><li>name safe :"+liste.name_safe+"</li><li>login safe:"+liste.login_safe+"</li><li></li><li></li><li></li><li></li><li></li></ul>";	
}

$("#search_btn").click(function(){

	
})