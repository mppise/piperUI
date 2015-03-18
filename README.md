# About piperUI: 
piperUI is a client-side template engine for javascript to generate HTML pages on-the-fly with templates written in HTML. 

# Author:
Mangesh Pise (mppise@gmail.com)

# License:
The code in this utility (piperUI) is protected by GNU GENERAL PUBLIC LICENSE Version 2, June 1991.

See [LICENSE.TXT](https://github.com/mppise/piperUI/blob/master/LICENSE.TXT) file for full license.

-
# DOCUMENTATION:
-

## Overview:
piperUI relies on 2 components:

- HTML template
- Data in JSON format 
 
At the core, piperUI functions `renderPage()` and `renderStaticPage()` extracts the HTML template file from the server on one end, scans the JSON dataset and generates a UI on the client-side. The resulting UI HTML is dumped in the specified DOM element such as a `<div>` or a `<span>`. The template HTML file contains variables specified in special pipe markers, such as `||variable||` (hence piperUI) to replace them with the data in the JSON dataset.

Depending upon the JSON dataset, the UI renders repetitive patterns of the HTML template file. This should significantly reduce the coding in UI design also making its change management easier.

## Requirements:
- No special requirements as this utility is based on simple javascript

## Installation:
- Include piperUI in your client-side UI (HTML/ASP/PHP file). 
```
<script type="text/javascript" src="<path>/piperUI.js"></script>
```

- Specify the path to your HTML templates 
```
var piperUI_template_path = "/";	/*  <== USER DEFINED  */
```


## Render Functions
As mentioned above, there are 2 render functions described in detail below:

### renderPage()
Usage: `renderPage(template, json.data, html_dom_element, callback)`
This function is used along with [Repeating Templates](https://github.com/mppise/piperUI#repeating-templates). Based on the provided json data stream, the template is repeated multiple times to generate the page. An [example](https://github.com/mppise/piperUI#repeating-templates) would be contact list.


### renderStaticPage()
Usage: `renderStaticPage(template, html_dom_element, callback)`
This function is used with [Static Templates](https://github.com/mppise/piperUI#static-templates) and no data is involved. This is useful when a portion of a page displayed to user contains common elements which can be easily pulled outside in a template. An [example](https://github.com/mppise/piperUI#static-templates) would be a page header, footer or a menubar.



## HTML Templates:
Create your template the same way as you would create any html file. The benefit with this approach is that you can use a standard editor and pretty formats to make your file readable.

The only difference is that you can use variables that are replaced with values on the fly. The variables are placed within pipes - `||variable||`. Just follow these rules:

- Make sure there are no spaces within pipes and variable names
- The **variable** names must match the data **key**
- The data supplied to the piper rendering function must be JSON
- The supplied data must not contain duplicate key names

PiperUI supports 2 kinds of HTML templates:


### Repeating Templates
These templates are small parts of a larger page that repeat themselves. An example would be a contact list where contact information such as Name, Telephone and email are displayed for multiple contacts. In this example, a template would prepare the layout of one contact and the PiperUI rendering function will repeat the template at runtime to display all contacts using the same template.

#### Usage Example
**HTML Template (`contact.html`)**
```
<div>
	<span class='label'>Name:</span> 	&emsp; <span class='data'>||fname|| ||lname||</span>
	<span class='label'>Email:</span> 	&emsp; <span class='data'>||emailid||</span>
	<span class='label'>Phone:</span> 	&emsp; <span class='data'>||phone||</span>
</div>
```

**Data (`contact.json`)**
```
	[{
		"name": {
			"fname": "John",
			"lname": "Doe"
		},
		"emailid": "john.doe@example.com",
		"phone": "123-123-1234"	
	 },
	{
		"name": {
			"fname": "Jane",
			"lname": "Doe"
		},
		"emailid": "jane.doe@example.com",
		"phone": "999-111-9876"	
	}]
```

**renderPage() function**
```
  renderPage('contact', contact.json, 'contactlist', function(){ });
```
The **`contactlist`** is an HTML DOM element, such as `<div id='contactlist'></div>`



### Static Templates
This is a non-repeating static template and is typically useul when an entire page is created as a template. An example would be a page header and/or footer that would be created just once and used on each page displayed to the user. There is no data involved in this type of template. 

#### Usage Example 
**HTML Template (`headertemplate.html`)**
```
<div>
	<img src="logo.jpg">
	...
	...
</div>
```

**renderStaticPage() function**
```
  renderStaticPage('headertemplate', 'header', function(){ });
```
The **`header`** is an HTML DOM element, such as `<header id='header'></header>`


