# mern-frontend  
## Monday 16/6/2025 Day 1

The visible part of an HTML document is between `<body></body>`.

Headings are defined from `<h1></h1>` to `<h6></h6>`, with `<h1>` being the most important one.

- `<p>` is used for paragraphs.  
- `<pre>` is used if you want to display preformatted text.  
- `<hr>` is used for a horizontal rule (break line).  
- `<br>` is used for a line break.  
- `<a>` is used for links with the `href` attribute.  
- `<img>` is used to show an image, with attributes like `src` for the source file (which can be an absolute or relative path) and `alt` for displaying text if the image fails to load.

HTML elements can be nested and are not case-sensitive; for example, `<P>` is the same as `<p>`.

The `style` attribute can be used within HTML elements to add inline styles.

The `lang` attribute is used to declare the language of the webpage, such as `"en"` for first two characters and last two characters with a country code like `"en-US"`.

## Tuesday 17/6/2025 DAY 2

- With style attribut we can add backgrond color by using background-color, color to change the text colors, font-family for text family, ont size for text size, text-allign for alignment of text.

- For seo optimization it is good to add alt for images and mutiple sorces of videos can be added and message if none of source provided works


| Tag        | Description                 |
|------------|-----------------------------|
| `<b>`      | Defines bold text (non semantic) |
| `<em>`     | Defines emphasized text (semantic)|
| `<i>`      | Defines a part of text in an italic way(non sematic)|
| `<small>`  | Defines smaller text        |
| `<strong>` | Defines important text(semenatic)|
| `<sub>`    | Defines subscripted text    |
| `<sup>`    | Defines superscripted text  |
| `<ins>`    | Defines inserted text (underline)| 
| `<del>`    | Defines deleted text (marked) |
| `<mark>`    |Defines marked/highlighted text |


Block - In block elements like `<div>` and `<p>` uses the full width and are laid vertically, Margin collapses in case of two block element used together the bigger margin of two is used.  

Inline - In inline elements like `<span>` and `<img>` are laid horizontally 

- List:
`<ul>` is used for bulleted list, there are four types of styles that can be applied to an unordered list it can be used with the attribute of style: style="list-style-type:none;"
- disc	Sets the list item marker to a bullet (default)
- circle	Sets the list item marker to a circle
- square	Sets the list item marker to a square
- none	The list items will not be marked

`<ol>` is used for an ordered list, there are five ways to aply style to ordered list with the attribut of type=""
- type="1"	The list items will be numbered with numbers (default)
- type="A"	The list items will be numbered with uppercase letters
- type="a"	The list items will be numbered with lowercase letters
- type="I"	The list items will be numbered with uppercase roman numbers
- type="i"	The list items will be numbered with lowercase roman numbers

`<dl>` is used for description list as in for key value pair with `<dt>` as key and `<dt>` as term

![Alt text](/assets/image.png "Day 2 Task")


## Wednesday 18/6/2025 day 3


    - To use an image as a link, we can  put <img> inside <a>  
    - We can use mailto: inside href attribute to open email and let user send email  
    - In CSS we can use a :hover, a :active, a :visited to add design color, background-color, and text decoration  
    - we can use id to bookmark in tags to identify them uqinuely  
    - we can use float in style in <p> to put it in right or left  


We can make image clickable with the help of using <img usemap="# image-map-name"> `<map name="image-map-name">` and `<area>` inside `<map>` to define shape like rect, poly, circle or default for entire region


    -> we can put href attribute inside <area> and onclick() function for javascript

    <img src="workplace.jpg" alt="Workplace" usemap="#workmap">
        <map name="workmap">
            <area shape="rect" coords="34,44,270,350" alt="Computer" href="computer.htm">
            <area shape="rect" coords="290,172,333,250" alt="Phone" href="phone.htm">
            <area shape="circle" coords="337,300,44" alt="Coffee" href="coffee.htm">
        </map>
    
    - We can use background-image : url('')for setting background image for element and background-repeat : no-repeat; for image to not repeat itself and background-size:cover; to cover entire element and background attachment fixed so that it do not stretch

`<pitcure>` is a useful tag to show images according to attribut media where we can set `media="min-width:650px"` and srcset for source of the image and we use multiple `<source srcset>` for it

Link is used to link html sheet to external sheet 

    - <link rel="icon" type="image/x-icon" href="/images/favicon.ico"> for image show in tab 

    
    |Tag	        |Description                                                             |
    |---------------|------------------------------------------------------------------------|   
    |<table>        |Defines a table                                                         |   
    |<th>	        |Defines a header cell in a table                                        |   
    |<tr>	        |Defines a row in a table                                                |   
    |<td>	        |Defines a cell in a table                                               |   
    |<caption>	    |Defines a table caption                                                 |   
    |<colgroup>	    |Specifies a group of one or more columns in a table for formatting      |   
    |<col>	        |Specifies column properties for each column within a <colgroup> element |
    |<thead>	    |Groups the header content in a table                                    |
    |<tbody>	    |Groups the body content in a table                                      |
    |<tfoot>	    |Groups the footer content in a table                                    |   


Following CSS option is available to 

    table, th, td {
        border: 1px solid black;
        border-collapse: collapse;
        border-style: dotted;
        border-radius: 10px;
        border-color: #96D4D4;
        width:100%;
        height:200px;
    }

    th {
        text-align: left;
    }

    th, td {
        padding: 15px;
    }

    tr:nth-child(even) {
        background-color: rgba(150, 212, 212, 0.4);
    }

    th:nth-child(even),td:nth-child(even) {
        background-color: rgba(150, 212, 212, 0.4);
    }

    - if we hover over any row it show different colors  according background color tr:hover {background-color: #D6EEEE;}


![Alt text](/assets/Day3_task.png "Day 3 Task")

## Thrusday 19/6/2025 DAY 4

`<iframe>` specifies an inline tag, src attribute defined attribute to be embed, we can title for `<iframe>` for screen readers height and width of `<iframe>` can be declared and `name` attribute can be used that can be targeted from `<a>` for link  


- `<script>`	Defines a client-side script
- `<noscript>`	Defines an alternate content for users that do not support client-side scripts

The `<meta>` element is typically used to specify the character set, page description, keywords, author of the document, and   viewport settings and can also be used for refresh setting of the page http-equiv="refresh" content="30"  

`<viewport>` setting:`<meta name="viewport" content="width=device-width, initial-scale=1.0">`  

The width=device-width part sets the width of the page to follow the screen-width of the device (which will vary depending on the device).  

The initial-scale=1.0 part sets the initial zoom level when the page is first loaded by the browser.  

`<base>` The `<base>` element specifies the base URL and/or target for all relative URLs in a page.  
The `<base>` tag must have either an href or a target attribute present, or both.  
There can only be one single `<base>` element in a document!  
If we set traget value of base element to _blank then all `<a>` will be opened in new tab even if target = "_blank" is not set in any of the `<a>`

For Responsiveness of website 
- we can use picture with different `<sources>` with `media` attribute to set `min-width` to show different pictures in different devices
- `<h1 style="font-size:10vw">` The text size can be set with a "vw" unit, which means the "viewport width". That way the text size will follow the size of the browser window. Viewport is the browser window size. 1vw = 1% of viewport width. If the viewport is 50cm wide, 1vw is 0.5cm.
- With media query we can set a break point of css how to style if `@media screen and (max-width: 800px)`


    `<header>` - Defines a header for a document or a section  
    `<nav>` - Defines a set of navigation links  
    `<section>` - Defines a section in a document  
    `<article>` - Defines independent, self-contained content  
    `<aside>` - Defines content aside from the content (like a sidebar)  
    `<footer>` - Defines a footer for a document or a section  
    `<details>` - Defines additional details that the user can open and close on demand  
    `<summary>` - Defines a heading for the `<details>` element  

HTML FORMS  

    <input type="text">	Displays a single-line text input field
    <input type="radio">	Displays a radio button (for selecting one of many choices)
    <input type="checkbox">	Displays a checkbox (for selecting zero or more of many choices)
    <input type="submit">	Displays a submit button (for submitting the form)
    <input type="button">	Displays a clickable button


- The `<label>` tag defines a label for many form elements. The `<label>` element is useful for screen-reader users, because the   screen-reader will read out loud the label when the user focuses on the input element.The `<label>` element also helps users   who have difficulty clicking on very small regions (such as radio buttons or checkboxes) - because when the user clicks the   text within the `<label>` element, it toggles the radio button/checkbox. The for attribute of the `<label>` tag should be equal   to the id attribute of the `<input>` element to bind them together.


-   `action`: Specifies the URL where the form data will be sent upon submission. If omitted, the form submits to the current page.
    `<form action="/process-data.php">`

-   `target`: Defines where to display the response after the form is submitted.
    -   `_self`: (Default) In the current window.
    -   `_blank`: In a new window or tab.
    -   `_parent`: In the parent frame.
    -   `_top`: In the full body of the window.
    `<form action="/process-data.php" target="_blank">`

-   `method`: Sets the HTTP method for submitting the form.
    -   `get`: (Default) Appends form data to the URL as name/value pairs. Good for non-sensitive data like search queries. Data is visible in the URL and has length limitations.
    -   `post`: Sends form data within the body of the HTTP request. Use this for sensitive/personal information as it is not visible in the URL and has no size limits.
    `<form action="/process-data.php" method="post">`

-   `autocomplete`: Controls whether the browser should automatically complete form fields based on previous user input.
    -   `on`: Enables autocomplete.
    -   `off`: Disables autocomplete.
    `<form action="/process-data.php" autocomplete="on">`

-   `novalidate`: A boolean attribute that, when present, specifies that the form data should not be validated by the browser upon submission.
    `<form action="/process-data.php" novalidate>`


        Core Form Elements
        The <form> element acts as a container for various input controls. Within a form, you'll commonly find the following elements:

    `<input>`: The most versatile form element, displayed in various ways depending on its type attribute (e.g., text, password, checkbox, radio).  
    `<label>`: Defines a label for form elements, improving accessibility for screen readers and user interaction, especially for small clickable areas like radio buttons and checkboxes. It's linked to an input via its for attribute matching the input's id.  
    `<select>`: Creates a drop-down list.  
    `<option>`: Defines an individual option within a `<select>` list. You can set a default selected option using the selected attribute.  
    size attribute: Controls the number of visible options in a drop-down list.
    multiple attribute: Allows users to select more than one option from the list.
    `<textarea>`: Defines a multi-line text input field, useful for longer user inputs like messages or comments. Its dimensions can be controlled using rows and cols attributes or CSS.  
    `<button>`: Defines a clickable button. It's crucial to specify the type attribute (e.g., button, submit, reset) for consistent behavior across browsers.  
    `<fieldset>`: Used to group related data within a form, often rendered with a border around the grouped elements.
    `<legend>`: Provides a caption or title for a `<fieldset>` element.  
    `<datalist>`: Specifies a list of pre-defined options for an `<input>` element, providing users with suggestions as they type. The input's list attribute must refer to the datalist's id.  
    `<output>`: Represents the result of a calculation or user action, often used with JavaScript.  
    `<optgroup>`: Defines a group of related options within a `<select>` drop-down list.  