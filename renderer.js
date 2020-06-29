// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
var token="40f8df1703b9d48f669f84da24853fc189112da8";
var search_data;
$("#mes_pwd").click(function(){

	$("#categorie_list").html(" ");


	$.ajax({

		url: "https://intranet.proxym-group.net/api/v1/passwords/",
		ContentType:"application/json",
		 headers: {"Authorization": "Token "+token },
		
		success: function(data){
			search_data=data;
			draw_categories(data);
			draw_lines(data);
			}
	})
})
$("#pwd_partage").click(function(){


	$("#categorie_list").html(" ");
	$.ajax({ 

		url: "https://intranet.proxym-group.net/api/v1/passwords/shared",
		ContentType:"application/json",
		 headers: {"Authorization": "Token "+token },
		success: function(data){

			search_data=data;
			draw_categories(data);
			draw_lines(data);
			}
	})
})


$("#pwd_equipe").click(function(){

	
	$("#categorie_list").html(" ");
	
	$.ajax({

		url: "https://intranet.proxym-group.net/api/v1/passwords/team",
		ContentType:"application/json",
		 headers: {"Authorization": "Token "+token },
		 success: function(data){

		
			search_data=data;
			draw_categories(data);
			draw_lines(data);
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
	alert("text copié");
}
function hide_pwd(champ) {
	// body...
	var x=document.getElementById(champ)
	if(x.type=="password")
		x.type="text"
	else
		x.type="password";
}
$("#search").click(function(){
	// body...
	var new_data=[];
	var term= document.getElementById("search-term").value;
	search_data.forEach(function(line){
		$.each(line, function(key,value){		
				if(value==term)
					{
						new_data.push(line);
						
					}

		})
	})
	draw_categories(new_data);
	draw_lines(new_data);
})
	$("#categorie_list").html(" ");
		
function draw_categories(data) {
	// body...
	var valuelist=[];
	var i=0;
	data.forEach(function(line){
		$.each(line, function (key, value) {
			
			if(key=="categorie"){
				if(valuelist.indexOf(value)==-1){
					valuelist.push(value);
					var category_id="cat-"+i++;
					
				$("#categorie_list").append(
					"<a class='btn btn-primary' data-toggle='collapse' data-target='#"+category_id+"' aria-expanded='false' >"+value.toString()+"</a>\
					<div id="+category_id+" class='collapse hide'>\
					</div>\
					");

			}
		}

	})
	})
}

function draw_lines(data) {
	// body...
	var i=0;
	data.forEach(function(line){
		
		
		$("#cat-"+i++).append("\
			<div class='card'>\
				<div class='card-header'>\
				<a class='btn btn-link' data-toggle='collapse' data-target='#collapse-target"+i+"'>"+line.name_safe+"</a>\
				</div>\
				<div id='collapse-target"+i.toString()+"' class= 'collapse hide' '>\
				 	<div class='card-body' >\
				 	<label>name safe :</label>\
				 	<input type='text' value='"+line.name_safe+"' id='name_safe"+i+"'>\
				 	<button  onclick=cpy('name_safe"+i+"'); ><span class='icon icon-cup'></span></button>\
				 	<label>login safe :</label>\
				 	<input type='text' value='"+line.login_safe+"' id='login_safe"+i+"'>\
				 	<button  onclick=cpy('login_safe"+i+"'); ><span class='icon icon-cup'></span></button>\
				 	<label>url safe :</label>\
				 	<input type='text' value='"+line.url_safe+"' id='url_safe"+i+"'>\
				 	<button  onclick=cpy('url_safe"+i+"'); ><span class='icon icon-cup'></span></button>\
				 	<label>password safe :</label>\
				 	<input type='password' value='"+line.pwd_safe+"' id='pwd_safe"+i+"'>\
				 	<button  onclick=cpy('pwd_safe"+i+"'); ><span class='icon icon-cup'></span></button>\
				 	<button onclick=hide_pwd('pwd_safe"+i+"');><span class='icon icon-eye'></span></button>\
				 	<label>categorie :</label>\
				 	<input type='text' value='"+line.categorie+"' id='categorie"+i+"'>\
				 	<button  onclick=cpy('categorie"+i+"'); ><span class='icon icon-cup'></span></button>\
				 	<label>note :</label>\
				 	<input type='text' value='"+line.note+"' id='note"+i+"'>\
				 	<button  onclick=cpy('note"+i+"'); ><span class='icon icon-cup'></span></button>\
				 	<label>owner safe :</label>\
				 	<input type='text' value='"+line.owner_safe+"' id='owner_safe"+i+"'>\
				 	<button  onclick=cpy('owner_safe"+i+"'); ><span class='icon icon-cup'></span></button>\
					</div>\
			</div>\
			")
})
}