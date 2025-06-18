# mern-frontend  
## Monday 16/6/2025

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


## Wednesday 18/6/2025


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

`<pitcure>` is a useful tag to show images according to attribut media where we can set "min-width:650px " and srcset for source of the image and we use multiple `<source srcset>` for it

Link is used to link html sheet to external sheet 

    - <link rel="icon" type="image/x-icon" href="/images/favicon.ico"> for image show in tab 

    
    |Tag	    |Description                                                             |
    |-----------|------------------------------------------------------------------------|   
    |<table>    |	Defines a table                                                      |   
    |<th>	    | Defines a header cell in a table                                       |   
    |<tr>	    |    Defines a row in a table                                            |   
    |<td>	    |    Defines a cell in a table                                           |   
    |<caption>	|    Defines a table caption                                             |   
    |<colgroup>	|Specifies a group of one or more columns in a table for formatting      |   
    |<col>	    |Specifies column properties for each column within a <colgroup> element |
    |<thead>	|Groups the header content in a table                                    |
    |<tbody>	|Groups the body content in a table                                      |
    |<tfoot>	|Groups the footer content in a table                                    |   
