// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
const db = require('electron-db');
const $ = require('jquery');
const path = require('path');
var token="40f8df1703b9d48f669f84da24853fc189112da8";
const loc = path.join(__dirname, 'userData');loc
db.createTable('shared_passwords', loc, (succ, msg) => {
  // succ - boolean, tells if the call is successful
  console.log("creating shared_passwords table")
  console.log("Success: " + succ);
  console.log("Message: " + msg);
})
db.createTable('my_passwords', loc,(succ, msg) => {
  // succ - boolean, tells if the call is successful
  console.log("creating my_passwords table")
  console.log("Success: " + succ);
  console.log("Message: " + msg);
})
db.createTable('team_passwords', loc, (succ, msg) => {
  // succ - boolean, tells if the call is successful
  console.log("creating team_passwords table")
  console.log("Success: " + succ);
  console.log("Message: " + msg);
})
$("#mes_pwd").click(function(){

	$("#categorie_list").html(" ");


	$.ajax({

		url: "https://intranet.proxym-group.net/api/v1/passwords/",
		ContentType:"application/json",
		 headers: {"Authorization": "Token "+token },
		
		success: function(data){
			$.each(data, function(line){
				if (db.valid('my_passwords')) {
					 db.insertTableContent('my_passwords', loc, line, (succ, msg) => {
				    // succ - boolean, tells if the call is successful
				    console.log("Success: " + succ);
				    console.log("Message: " + msg);
 					 })
				}
			})
			//draw_categories('my_passwords');
			//draw_lines('my_passwords');
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
$.each(data, function(line){
				if (db.valid('shared_passwords')) {
					 db.insertTableContent('shared_passwords', line, (succ, msg) => {
				    // succ - boolean, tells if the call is successful
				    console.log("Success: " + succ);
				    console.log("Message: " + msg);
 					 })
				}
			})
			draw_categories('shared_passwords');
			draw_lines('shared_passwords');
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
$.each(data, function(line){
				if (db.valid('team_passwords')) {
					 db.insertTableContent('team_passwords', line, (succ, msg) => {
				    // succ - boolean, tells if the call is successful
				    console.log("Success: " + succ);
				    console.log("Message: " + msg);
 					 })
				}
			})
			draw_categories('team_passwords');
			draw_lines('team_passwords');
			}
	})
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
	$("#categorie_list").html(" ");
	draw_categories(new_data);
	draw_lines(new_data);
})
	$("#categorie_list").html(" ");
		
function draw_categories(table_name) {
	// body...
	data = db.getRows(table_name,{},(succ, result) => {
		  // succ - boolean, tells if the call is successful
		  console.log("Success: " + succ);
		  console.log(result);
		}
		);
	var valuelist=[];
	var i=0;
	$.each(data, function(line){
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

function draw_lines(table_name) {
	// body...
	var i=0;
	data = db.getRows(table_name,{},(succ, result) => {
		  // succ - boolean, tells if the call is successful
		  console.log("Success: " + succ);
		  console.log(result);
		}
		);
	$.each(data, function(line){
		
		
		$("#cat-"+i++).append("\
			<div class='card'>\
				<div class='card-header'>\
				<a class='btn btn-link' data-toggle='collapse' data-target='#collapse-target"+i+"'>"+line.name_safe+"</a>\
				</div>\
				<div id='collapse-target"+i.toString()+"' class= 'collapse hide' >\
				 	<div class='card-body' >\
				 	<form width=75% >\
				 	<label>name safe :</label>\
				 	<div class='row'>\
					 	<input type='text' value='"+line.name_safe+"' id='name_safe"+i+"' >\
					 	<button  onclick=cpy('name_safe"+i+"'); ><span class='icon icon-cup'></span></button>\
				 	</div >\
				 	<label>login safe :</label>\
				 	<div class='row'>\
					 	<input type='text' value='"+line.login_safe+"' id='login_safe"+i+"'>\
					 	<button  onclick=cpy('login_safe"+i+"'); ><span class='icon icon-cup'></span></button>\
				 	</div>\
				 	<label>url safe :</label>\
				 	<div class='row'>\
					 	<input type='text' value='"+line.url_safe+"' id='url_safe"+i+"'>\
					 	<button  onclick=cpy('url_safe"+i+"'); ><span class='icon icon-cup'></span></button>\
					 	</div>\
				 	<label>password safe :</label>\
				 	<div class='row'>\
					 	<input type='password' value='"+line.pwd_safe+"' id='pwd_safe"+i+"'>\
					 	<button  onclick=cpy('pwd_safe"+i+"'); ><span class='icon icon-cup'></span></button>\
				 		<button onclick=hide_pwd('pwd_safe"+i+"');><span class='icon icon-eye'></span></button>\
				 	</div>\
				 	<label>categorie :</label>\
				 	<div class='row'>\
					 	<input type='text' value='"+line.categorie+"' id='categorie"+i+"'>\
					 	<button  onclick=cpy('categorie"+i+"'); ><span class='icon icon-cup'></span></button>\
					 </div>\
				 	<label>note :</label>\
				 	<div class='row'>\
					 	<input type='text' value='"+line.note+"' id='note"+i+"'>\
					 	<button  onclick=cpy('note"+i+"'); ><span class='icon icon-cup'></span></button>\
					 </div>\
				 	<label>owner safe :</label>\
				 	<div class='row'>\
					 	<input type='text' value='"+line.owner_safe+"' id='owner_safe"+i+"'>\
					 	<button  onclick=cpy('owner_safe"+i+"'); ><span class='icon icon-cup'></span></button>\
					 </div>\
				 	</form>\
					</div>\
			</div>\
			</div>\
			");
});

}