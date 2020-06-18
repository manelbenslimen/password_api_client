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
			data.forEach(function(line){
				$.each(line, function (key, value) {
					
					if(key=="categorie"){
						$("#categorie_list").append(
							"<a class='btn btn-primary'data-toggle='collapse' data-target='#"+value+"' aria-expanded='false' >"+value+"</a>\
							<div id="+value+" class='collapse hide'>\
							</div>\
							");

					}
				})

			})
			var i=1;
			data.forEach(function(line){
				
				$("#"+line.categorie).append("\
					<div class='card'>\
						<div class='card-header'>\
						<a class='btn btn-link' data-toggle='collapse' data-target='#collapse-target"+i+"'>"+line.name_safe+"</a>\
						</div>\
						<div id='collapse-target"+i.toString()+"' class= 'collapse hide' '>\
						 	<div class='card-body' >\
						 	<label>name safe :</label>\
						 	<input type='text' value='"+line.name_safe+"' id='name_safe'"+i+">\
						 	<span class='icon icon-cup' onclick='cpy('name_safe'"+i+");'></span>\
						 	<label>login safe :</label>\
						 	<input type='text' value='"+line.login_safe+"' id='login_safe'"+i+">\
						 	<span class='icon icon-cup' onclick='cpy('login_safe'"+i+");'></span>\
						 	<label>url safe :</label>\
						 	<input type='text' value='"+line.url_safe+"' id='url_safe'"+i+">\
						 	<span class='icon icon-cup' onclick='cpy(url_safe'"+i+");'></span>\
						 	<label>password safe :</label>\
						 	<input type='password' value='"+line.pwd_safe+"' id='pwd_safe'"+i+">\
						 	<span class='icon icon-cup' onclick='cpy('pwd_safe'"+i+");'></span>\
						 	<span class='icon icon-eye' onclick='hide_pwd('pwd_safe'"+i+");'></span>\
						 	<label>categorie :</label>\
						 	<input type='text' value='"+line.categorie+"' id='categorie'"+i+">\
						 	<span class='icon icon-cup' onclick='cpy('category'"+i+");'></span>\
						 	<label>note :</label>\
						 	<input type='text' value='"+line.note+"' id='note'"+i+">\
						 	<span class='icon icon-cup' onclick='cpy('note'"+i+");'></span>\
						 	<label>owner safe :</label>\
						 	<input type='text' value='"+line.owner_safe+"' id='owner_safe'"+i+">\
						 	<span class='icon icon-cup' onclick='cpy('owner_safe'"+i+");'></span>\
							</div>\
						</div>\
					</div>\
					")
				
				
				i=i+1;
			});
			

        }
	})
})
$("#pwd_partage").click(function(){
	
	$.ajax({

		url: "https://intranet.proxym-group.net/api/v1/passwords/shared",
		ContentType:"application/json",
		 headers: {"Authorization": "Token "+token },
		success: function(data){
		
			console.log(data);
			data.forEach(function(line){
				$.each(line, function (key, value) {
					
					if(key=="categorie"){
						$("#categorie_list").append(
							"<a class='btn btn-primary'data-toggle='collapse' data-target='#"+value+"' aria-expanded='false' >"+value+"</a>\
							<div id="+value+" class='collapse hide'>\
							</div>\
							");

					}
				})

			})
			var i=1;
			data.forEach(function(line){
				
				$("#"+line.categorie).append("\
					<div class='card'>\
						<div class='card-header'>\
						<a class='btn btn-link' data-toggle='collapse' data-target='#collapse-target"+i+"'>"+line.name_safe+"</a>\
						</div>\
						<div id='collapse-target"+i.toString()+"' class= 'collapse hide' '>\
						 	<div class='card-body' >\
						 	<label>name safe :</label>\
						 	<input type='text' value='"+line.name_safe+"' id='name_safe'"+i+">\
						 	<span class='icon icon-cup' onclick='cpy('name_safe'"+i+");'></span>\
						 	<label>login safe :</label>\
						 	<input type='text' value='"+line.login_safe+"' id='login_safe'"+i+">\
						 	<span class='icon icon-cup' onclick='cpy('login_safe'"+i+");'></span>\
						 	<label>url safe :</label>\
						 	<input type='text' value='"+line.url_safe+"' id='url_safe'"+i+">\
						 	<span class='icon icon-cup' onclick='cpy(url_safe'"+i+");'></span>\
						 	<label>password safe :</label>\
						 	<input type='password' value='"+line.pwd_safe+"' id='pwd_safe'"+i+">\
						 	<span class='icon icon-cup' onclick='cpy('pwd_safe'"+i+");'></span>\
						 	<span class='icon icon-eye' onclick='hide_pwd('pwd_safe'"+i+");'></span>\
						 	<label>categorie :</label>\
						 	<input type='text' value='"+line.categorie+"' id='categorie'"+i+">\
						 	<span class='icon icon-cup' onclick='cpy('category'"+i+");'></span>\
						 	<label>note :</label>\
						 	<input type='text' value='"+line.note+"' id='note'"+i+">\
						 	<span class='icon icon-cup' onclick='cpy('note'"+i+");'></span>\
						 	<label>owner safe :</label>\
						 	<input type='text' value='"+line.owner_safe+"' id='owner_safe'"+i+">\
						 	<span class='icon icon-cup' onclick='cpy('owner_safe'"+i+");'></span>\
							</div>\
						</div>\
					</div>\
					")
				
				
				i=i+1;
			});
			

        }
	})
})


$("#pwd_equipe").click(function(){
	
	$.ajax({

		url: "https://intranet.proxym-group.net/api/v1/passwords/team",
		ContentType:"application/json",
		 headers: {"Authorization": "Token "+token },
		 success: function(data){
		
			console.log(data);
			data.forEach(function(line){
				$.each(line, function (key, value) {
					
					if(key=="categorie"){
						$("#categorie_list").append(
							"<a class='btn btn-primary'data-toggle='collapse' data-target='#"+value+"' aria-expanded='false' >"+value+"</a>\
							<div id="+value+" class='collapse hide'>\
							</div>\
							");

					}
				})

			})
			var i=1;
			data.forEach(function(line){
				
				$("#"+line.categorie).append("\
					<div class='card'>\
						<div class='card-header'>\
						<a class='btn btn-link' data-toggle='collapse' data-target='#collapse-target"+i+"'>"+line.name_safe+"</a>\
						</div>\
						<div id='collapse-target"+i.toString()+"' class= 'collapse hide' '>\
						 	<div class='card-body' >\
						 	<label>name safe :</label>\
						 	<input type='text' value='"+line.name_safe+"' id='name_safe'"+i+">\
						 	<span class='icon icon-cup' onclick='cpy('name_safe'"+i+");'></span>\
						 	<label>login safe :</label>\
						 	<input type='text' value='"+line.login_safe+"' id='login_safe'"+i+">\
						 	<span class='icon icon-cup' onclick='cpy('login_safe'"+i+");'></span>\
						 	<label>url safe :</label>\
						 	<input type='text' value='"+line.url_safe+"' id='url_safe'"+i+">\
						 	<span class='icon icon-cup' onclick='cpy(url_safe'"+i+");'></span>\
						 	<label>password safe :</label>\
						 	<input type='password' value='"+line.pwd_safe+"' id='pwd_safe'"+i+">\
						 	<span class='icon icon-cup' onclick='cpy('pwd_safe'"+i+");'></span>\
						 	<span class='icon icon-eye' onclick='hide_pwd('pwd_safe'"+i+");'></span>\
						 	<label>categorie :</label>\
						 	<input type='text' value='"+line.categorie+"' id='categorie'"+i+">\
						 	<span class='icon icon-cup' onclick='cpy('category'"+i+");'></span>\
						 	<label>note :</label>\
						 	<input type='text' value='"+line.note+"' id='note'"+i+">\
						 	<span class='icon icon-cup' onclick='cpy('note'"+i+");'></span>\
						 	<label>owner safe :</label>\
						 	<input type='text' value='"+line.owner_safe+"' id='owner_safe'"+i+">\
						 	<span class='icon icon-cup' onclick='cpy('owner_safe'"+i+");'></span>\
							</div>\
						</div>\
					</div>\
					")
				
				
				i=i+1;
			});
			

        }
	})
})

		
	



$("#search_btn").click(function(){


})

function cpy(champ) {
	// body...
	var ct = document.getElementById(champ);
	ct.select();
	ct.setSelectionRange(0, 99999);

	document.execCommand("copy");
}
function hide_pwd(champ) {
	// body...
	var x=document.getElementById(champ)
	if(x.type=="password")
		x.type="text"
	else
		x.type="password";
}