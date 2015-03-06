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
 
At the core, piperUI functions `renderPage()` and `renderStaticPage()` extracts the HTML template file from the server on one end, scans the JSON dataset and generates a UI on the client-side. The resulting UI HTML is dumped in the specified DOM element such as a `<div>` or a `<span>`. The template HTML file contains data-fields specified in special pipe markers, such as `||data-fields||` (hence piperUI) to replace them with the data in the JSON dataset.

Depending upon the JSON dataset, the UI renders repetitive patterns of the HTML template file. This should significantly reduce the coding in UI design also making its change management easier.

## Requirements:
- No special requirements as this utility is based on simple javascript

## Installation:
- Include piperUI in your client-side UI (HTML/ASP/PHP file). 
```
<script type="text/javascript" src="/scripts/piperUI.js"></script>
```

- Specify the path to your HTML templates 
```
var piperUI_template_path = "/";	/*  <== USER DEFINED  */
```


## HTML Templates:


## Usage Example: renderPage(): 


## Usage Example: renderStaticPage(): 


