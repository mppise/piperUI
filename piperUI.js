/*	````````````````````````````````````````````````````````````````````````````````````````````
AUTHOR:
````````
Mangesh Pise
Email: mppise@gmail.com

LICENSE:
`````````
The code in this module (Mango) is protected by GNU GENERAL PUBLIC LICENSE Version 2, June 1991
See LICENSE.TXT file for full license.

README:
````````
The README.MD file contains detailed documentation. 

VERSION:
`````````
1.0.0 - Initial Release

``````````````````````````````````````````````````````````````````````````````````````````````` */

/*	To render the templete with the provided data (JSON format) 
	and update the HTMLelement */
function renderPage(template, data, HTMLelement, callback) {
	$.ajax({
		type	: "GET",
		url 	: piperUI_template_path + template,
		success : function(resp) {
			var template = resp;
			document.getElementById(HTMLelement).innerHTML = "... loading ..."; // clear the output area first
			for(var i=0; i<data.length; i++)
			{
				var card = template;
				var paint = function(key, data) {				// paint callback
					while(card.indexOf("||"+key+"||") > -1)
					{
						if(data == null)
							card = card.replace("||"+key+"||", "<span class='error' title='DATA ERROR: Data is stored as NULL. Please consult database.'>ERROR</span>"); // handle null
						else if(typeof data == "object" && data.length)	// if it is an array
							card = card.replace("||"+key+"||", data.toString().replace(",","<br>")); // print each item on new line
						else
							card = card.replace("||"+key+"||", data);
					}
				};
				scanObject(data[i], paint);
				document.getElementById(HTMLelement).innerHTML += card; // append output with cards
				callback(data[i]); // callback for each card data
			}
		},
		error	: function() {
			document.getElementById(HTMLelement).innerHTML = "Error rendering page";
		}
	}); // .ajax - Get template

} // renderPage()


/* To render repetitive page elements such as header, footer, etc.*/
function renderStaticPage(template, HTMLelement, callback) {
	$.ajax({
		type	: "GET",
		url		: piperUI_template_path + template,
		success	: function(html) {
			document.getElementById(HTMLelement).innerHTML = html.html;
		},
		error	: function() {
			document.getElementById(HTMLelement).innerHTML = "Error rendering page";
		}
	}); // ajax - Get static templates		

} // renderStaticPage()


/*	Traverse through a complex object and find keys to replace them with data. 
	Used in renderPage function.
	Important: data is individual json object at a time & paint is the callback function */
function scanObject(data, paint){
	// data must be a JSON object
	for(var key in data)
	{
		if(typeof data[key] == "object" && !data.length) {  // the child is an object
			scanObject(data[key], paint);
		}//object
		else if(typeof data[key] == "object" && data.length) { // the child is an Array
			for(var j=0; j<data[key].length; j++)
			{
				scanObject(data[key][j],paint);
			}
		}// Array
		paint(key, data[key]);
	} // for each key
} //scanObject


