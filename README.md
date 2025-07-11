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


![Alt text](/assets/Day4_task.png "Day 4 Task")



## Thrusday 20/6/2025 DAY 5

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
    The `<form>` element acts as a container for various input controls. Within a form, 
    you'll commonly find the following elements:

    `<input>`: The most versatile form element, displayed in various ways depending on its type attribute (e.g., text, password, checkbox, radio).  


    > [!NOTE]
    > we have to use `name` attribute to make radio buttion work so that among the readion buttons those have same name only one is clicked  


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

`value`: Specifies the initial default value for an input field.
    `<input type="text" value="Default Text">`

`readonly`: Makes an input field read-only. The user cannot modify the value, but the data is still sent when the form is submitted.
    `<input type="text" value="John" readonly>`

`disabled`: Disables an input field. The field becomes unusable and un-clickable, and its value is **not** sent when the form is submitted.
    `<input type="text" value="John" disabled>`

`size`: Defines the visible width of the input field in characters. The default value is `20`. It applies to input types: `text`, `search`, `tel`, `url`, `email`, and `password`.
    `<input type="text" size="50">`

`maxlength`: Sets the maximum number of characters allowed in the input field.
    `<input type="text" maxlength="4">`

`min` and `max`: Specify the minimum and maximum values for an input. These attributes work with input types like `number`, `range`, `date`, `datetime-local`, `month`, `time`, and `week`.
    `<input type="number" min="1" max="5">`

`multiple`: Allows the user to enter or select more than one value. This is applicable for `email` and `file` input types.
    `<input type="file" multiple>`

`pattern`: Specifies a regular expression that the input field's value is checked against upon form submission. It is compatible with `text`, `date`, `search`, `url`, `tel`, `email`, and `password` types.

    `<input type="text" pattern="[A-Za-z]{3}" title="Three letter country code">`


`placeholder`: Provides a short hint or an example of the expected value in an input field before the user enters a value.
    `<input type="tel" placeholder="123-45-678">`


required`: Specifies that an input field must be filled out before the form can be submitted.
   `<input type="text" required>`

`step`: Defines the legal number intervals for an input field. For instance, `step="3"` would allow values like -3, 0, 3, 6, etc. It works with numeric, range, and date/time input types.
    `<input type="number" step="3">`

`autofocus`: Automatically gives focus to the input field when the page loads.
    `<input type="text" autofocus>`

`height` and `width`: Specify the height and width for an `<input type="image">` element, reserving space for the image on page load.
    `<input type="image" src="submit.gif" alt="Submit" width="48" height="48">`

`list`: Refers to a `<datalist>` element that contains a list of pre-defined options for an `<input>` element.
    `<input list="browsers">`
    `<datalist id="browsers">`
      `<option value="Edge">`
      `<option value="Firefox">`
    `</datalist>`

`autocomplete`: Controls whether the browser's autocomplete feature is `on` or `off` for a form or an individual input field.
    `<form action="/action_page.php" autocomplete="on">`
      `<input type="email" name="email" autocomplete="off">`
    `</form>`


form: Specifies the `<form>` the `<input>` element belongs to. This allows you to place an input element anywhere on the page, outside the form element, and still have it be part of that form. The value of this attribute must match the id of the associated `<form>`.

formaction: Overrides the action attribute of the parent `<form>`. It specifies the URL of the file that will process the input when that specific input (button) is used to submit the form. This attribute works with input types submit and image.

formenctype: Overrides the enctype attribute of the parent `<form>`. It defines how the form-data should be encoded when submitted. This is only for forms with method="post". This attribute works with input types submit and image.

formmethod: Overrides the method attribute of the parent `<form>`. It defines the HTTP method (get or post) for sending form-data to the action URL. This attribute works with input types submit and image.

formtarget: Overrides the target attribute of the parent `<form>`. It specifies a name or keyword indicating where to display the response received after the form is submitted (e.g., _blank to open in a new tab). This attribute works with input types submit and image.

formnovalidate: A boolean attribute that specifies that the form-data should not be validated when submitted via that specific input. It overrides the novalidate attribute of the `<form>` element. This attribute works with the submit input type.

novalidate: This is an attribute for the `<form>` element itself. When present, it specifies that none of the form-data should be validated upon submission.  



## Monday 23/06/2025 Day6

* **Personal Information:**
    * **Full Name:** Requires first and last name; optional middle name.
    * **Email Address:** Required field with email format validation.
    * **Phone Number:** Includes a pre-filled, disabled country code (+91) and a field for a 10-digit phone number with a specific pattern.
    * **Country Code:** Requires a three-letter country code.

* **Conference Preferences:**
    * **Primary Area of Interest:** Radio buttons for selecting one interest (Artificial Intelligence, Web Development, Cloud Computing). AI is pre-selected.
    * **Workshops:** Checkboxes to select multiple workshops. "Public Speaking for Nerds" is marked as sold out and disabled.

* **Travel and Accommodation:**
    * **Arrival Date:** Date picker with a range from October 15, 2025, to October 25, 2025.
    * **Number of Attendees:** Numeric input for group size (1 to 10 attendees).
    * **Preferred Hotel:** Dropdown menu categorized by star ratings (5-star, 4-star, 3-star).

* **Additional Information:**
    * **Dietary Restrictions:** Text area for attendees to specify dietary needs.
    * **T-Shirt Size:** A slider for selecting T-shirt size (1 to 5, presumably S-XXL).
    * **Resume Upload:** Option to upload multiple files for a job fair.
    * **Registration Code:** A read-only field displaying "TC2025-GUEST".

* The form includes two submit buttons:
    * **Register Now:** Submits the form with validation.
    * **Submit without Validation:** Submits the form bypassing validation rules.


## Tuesday 24/06/2025 Day7

Medical leave


## Wednesday 25/06/2025 Day8

Created first page for figma design with navbar 

* **Responsive Navigation Bar:**
    * Features a company logo.
    * Includes essential links: Home, Docs, Help.
    * Incorporates **"Landings"** and **"Pages" dropdown menus** for expanded navigation.
    * A prominent **"Get it now" call-to-action button** is included.

* **Dynamic Hero Section:**
    * A large background image sets the visual tone.
    * A compelling main heading: **"Find The Job that Fits Your Life."**
    * Decorative elements are used to enhance visual appeal.

* **Interactive Job Search Form:**
    * **"Job Title or Keyword"** input with a search icon.
    * **Location input** with a map icon and pre-defined suggestions (e.g., Delhi, Mumbai).
    * A **"Search" button** provides immediate feedback upon click.

* **Terms and Conditions:**
    * A clear statement about job trust and policy, with a clickable link to **"Read terms & condition."**


* Utilizes **Flexbox** for efficient layout and alignment of key sections.
* **Dropdown menus** are implemented to appear on hover, providing a clean user experience.
* The **search form** is styled with a clean white background, rounded corners, and a subtle shadow.
* The **"Search" button** is distinctively styled for clear visibility and user interaction.


## Thruday 26/06/2025 Day9

* **Heading & Description:**
    * **"Popular category"** as the main title.
    * A descriptive line: "You can search the happening jobs by click category below."
    * A **"SEE ALL" button** for navigation to all categories.

* **Category Cards (`cards`):** Displays a grid of job categories, each with:
    * An **icon** (e.g., Camera, Anchor, Copywriter, Marketing, Design).
    * A **category title** (e.g., Photography, Writer, Copywriter, Marketing, Designer).
    * A count of **"jobs Opened"** (e.g., "100 jobs Opened").
    * An interactive button with an icon for likely further action.


* **Section Title & Filter:**
    * **"Some opened jobs for you"** as the section heading.
    * A **"Show Items by : Opened Position" filter** with a dropdown (`datalist`) for common positions (Developer, Writer, Contentwriter, HR).

* **Job Listing Cards (`container`):** Displays individual job postings, each including:
    * **Job Tag:** A colored tag indicating the job **category** (e.g., Marketing, Design, Development, Business, Sales, Customer support).
    * **Job Information:** A short description of the role (e.g., "Associate Product Marketing Consumer Marketing").
    * **Location and Type:** Icons and text for **job location** (e.g., Amsterdam, New York, Tokyo, Delhi, Mumbai) and **employment type** (Full time, Part Time).
    * **Company and Posting Time:** The **company logo** (e.g., Mailchimp) and a note on **when it was posted** (e.g., "13 Hours ago").

* **Featured Content Card:**
    * A larger card (`item-4`) that displays an **image** and a text block titled: **"Tips From Pro : How apply a jobs on a Startup for Fresh Graduate like you | JobBlog ep;04."**
    * Includes company logo and posting time, similar to job cards.

* **Total Jobs Summary Card:**
    * A concluding card displaying **"328+"** for the "Total Jobs Opened."
    * An **"EXPLORE JOBS" button** to encourage further exploration.


## Friday 27/06/2025 Day10


* **Header Content:**
    * A prominent heading: **"We help not one, but many companies."**
    * A supporting line: "We have many more company partners all around the world."

* **Company Cards (`companies-cards`):**
    * Displays a grid of **individual company cards**, each representing a partnership.
    * Each card features:
        * A **company logo** (e.g., Logo3.svg, Logo2.svg, Logo1.svg).
        * A horizontal rule (`<hr>`) for visual separation.
        * A descriptive text detailing the partnership's value proposition, consistently stating: **"We help Netflix find the talent that suitable with the company needed."** (Note: The text is identical for all cards in the provided HTML, suggesting a placeholder or a consistent service offering).

* **Section Heading and Description:**
    * **"Article and Podcast collection"** as the main title.
    * A welcoming and informative description: "I know for you search a jobs its not easy and needs some tips & trick. That's why we show you some podcast and best article about jobs. We hope it can help you to get new much insight."

* **Article Cards (`articles-container`):**
    * A grid of **article/podcast cards** designed to provide job-seeking insights.
    * Each card features:
        * A **company/series logo** (e.g., Logo4.svg, Logo5.svg).
        * A **title** (e.g., "Thirty days get a Jobs," "Level Up Podcast").
        * **Author information** (e.g., "by Tamas Bunce," "by Samira Alaydrus").
        * **Content length/episode count** (e.g., "12 Episodes," "5 min read").

## Location Information & Footer

* **Location Focus (`yogya-info`):**
    * A prominent text stating: **"You're now look jobs from Yogyakarta."**
    * The city name **"Yogyakarta" is underlined and clickable**, with a dropdown icon, suggesting it might open a location selector.
    * A clear **"Search Jobs Now" button** with a search icon to encourage immediate action.

* **Comprehensive Footer (`compl-footer`):**
    * **Company Logo:** Displays the footer logo (`footerlogo.png`).
    * **Navigation Categories:** Organized into several columns for easy access:
        * **Product:** Including Landingpage, Features, Documentation, Referral Program, Pricing.
        * **Services:** Including Documentation, Design, Themes, Illustrations, UI Kit.
        * **Company:** Including About, Terms, Privacy Policy, Careers.
        * **More:** Including Documentation (likely a typo, perhaps intended as another category), License, Changelog.
    * **Bottom Element:** An image (`Bottom.png`) is included at the very bottom, likely for decorative purposes or a subtle brand element.

## Monday 30/06/2025 Day11

* **`push()`**: Adds one or more elements to the **end** of an array and returns the new length.
* **`pop()`**: **Removes the last element** from an array and returns that element.
* **`unshift()`**: Adds one or more elements to the **beginning** of an array and returns the new length.
* **`shift()`**: **Removes the first element** from an array and returns that element.
* **`splice()`**: **Changes the contents** of an array by removing existing elements and/or adding new elements. Returns an array containing the deleted elements.

## Accessor Methods (Non-Mutating)

* **`concat()`**: **Joins two or more arrays** and returns a *new* array.
* **`slice()`**: **Extracts a section** of an array and returns a *new* array. Does not modify the original array.
* **`indexOf()`**: Returns the **first index** at which a given element can be found in the array, or `-1` if it is not present.
* **`lastIndexOf()`**: Returns the **last index** at which a given element can be found in the array, or `-1` if it is not present.
* **`includes()`**: Determines whether an array **includes a certain value** among its entries, returning `true` or `false`.

## Iteration Methods

* **`forEach()`**: Executes a **provided function once for each array element**.
* **`map()`**: Creates a **new array** populated with the results of calling a provided function on every element in the calling array.
* **`filter()`**: Creates a **new array** with all elements that pass the test implemented by the provided function.
* **`reduce()`**: Executes a **reducer function** (that you provide) on each element of the array, resulting in single output value.
* **`some()`**: Checks if **at least one** element in the array passes the test implemented by the provided function.
* **`every()`**: Checks if **all elements** in the array pass the test implemented by the provided function.

## Utility Methods

* **`isArray()`**: Determines whether the passed value is an **`Array`**.
* **`join()`**: Creates and returns a **new string** by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string.
* **`reverse()`**: **Reverses an array** in place. The first array element becomes the last, and the last array element becomes the first.
* **`sort()`**: **Sorts the elements** of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.


## Tuesday 1/07/2025 Day12

* **Definition**: Objects are **collections of key-value pairs**. They are a fundamental data type in JavaScript, used to store various keyed collections and more complex entities.
* **Properties**: Each key-value pair in an object is called a **property**. Keys (also known as property names) are typically strings (or symbols), and values can be any JavaScript data type (primitives, functions, other objects, etc.).
* **Methods**: When a property's value is a **function**, it's referred to as a **method** of that object.

* **Object Literal**: The simplest and most common way to create an object using curly braces `{}`.
    ```javascript
    const myObject = {
        name: "Alice",
        age: 30,
        greet: function() {
            console.log(`Hello, my name is ${this.name}`);
        }
    };
    ```
* **`new Object()`**: A less common but valid way to create an empty object, then add properties.
    ```javascript
    const anotherObject = new Object();
    anotherObject.city = "New York";
    ```
* **Constructor Functions / Classes**: Used to create multiple objects with similar properties and methods.
    ```javascript
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    const person1 = new Person("Bob", 25);
    ```

* **Dot Notation**: Preferred when the property name is a valid identifier.
    ```javascript
    console.log(myObject.name); // "Alice"
    myObject.age = 31;
    ```
* **Bracket Notation**: Required when property names contain spaces, special characters, or are dynamic (e.g., stored in a variable).
    ```javascript
    console.log(myObject["name"]); // "Alice"
    const prop = "age";
    console.log(myObject[prop]); // 31
    ```
* **Adding New Properties**: Simply assign a value to a new property name using dot or bracket notation.
    ```javascript
    myObject.occupation = "Engineer";
    ```
* **Deleting Properties**: Use the `delete` operator.
    ```javascript
    delete myObject.age;
    ```

* **`Object.keys()`**: Returns an **array of a given object's own enumerable string property names**.
    ```javascript
    Object.keys(myObject); // ["name", "greet", "occupation"]
    ```
* **`Object.values()`**: Returns an **array of a given object's own enumerable string property values**.
    ```javascript
    Object.values(myObject); // ["Alice", [Function: greet], "Engineer"]
    ```
* **`Object.entries()`**: Returns an **array of a given object's own enumerable string property [key, value] pairs**.
    ```javascript
    Object.entries(myObject); // [["name", "Alice"], ["greet", [Function: greet]], ["occupation", "Engineer"]]
    ```
* **`hasOwnProperty()`**: Returns a boolean indicating whether the object **has the specified property as its own property** (not inherited).
    ```javascript
    myObject.hasOwnProperty("name"); // true
    ```
* **Spread Syntax (`...`)**: Used for easily **copying properties** from one object into another or for merging objects.
    ```javascript
    const newObject = { ...myObject, hobby: "Reading" };
    ```
* **Destructuring**: A convenient way to **extract values from objects** into distinct variables.
    ```javascript
    const { name, age } = myObject;
    console.log(name); // "Alice"
    ```



## Wednesday 2/07/2025 Day12

* **`for` Loop**: Execute code a **specific number of times**. Perfect when you know the iteration count beforehand.
    ```javascript
    for (let i = 0; i < 5; i++) { /* code */ }
    ```
* **`while` Loop**: Repeat code **as long as a condition is true**. The condition is checked *before* each execution.
    ```javascript
    while (condition) { /* code */ }
    ```
* **`do...while` Loop**: Ensures the code runs **at least once**, then repeats if the condition remains true (checked *after* the first run).
    ```javascript
    do { /* code */ } while (condition);
    ```
* **Nested Loops**: One loop placed **inside another**, commonly used for iterating over multi-dimensional structures.

## Iterating Collections

* **Arrays**:
    * **`for...of`**: The modern way to iterate directly over the **values** of an array.
        ```javascript
        for (const item of myArray) { /* code */ }
        ```
    * Also commonly done with **`forEach()`** (an array method).
* **Objects**:
    * **`for...in`**: Loops over the **keys (property names)** of an object. Use with caution, as it can include inherited properties.
    * **`Object.keys()`, `Object.values()`, `Object.entries()`**: These methods convert object data into arrays, which can then be easily iterated using `for...of` or `forEach()`.

## Loop Control Statements

* **`break`**: **Immediately stops** the entire loop and continues execution from the code *after* the loop.
* **`continue`**: **Skips the current iteration** of the loop and moves directly to the next iteration.



## Thursday 3/07/2025: Day 13 - Deep Dive into Functions

This session was dedicated to a foundational analysis of functions, the primary building blocks for creating modular, reusable, and maintainable code in JavaScript. We dissected their structure, behavior, and the critical nuances that distinguish different implementation patterns. A major focus was placed on the distinction between **function declarations** and **function expressions**. We explored how declarations (`function myFunction() {}`) are fully hoisted by the JavaScript engine, meaning they are moved to the top of their scope during the compilation phase. This allows them to be invoked in the code before their actual definition appears, a behavior that can be useful but also lead to less readable code if misused. In contrast, function expressions (`const myFunction = function() {}`), whether anonymous or named, are not hoisted in the same way. The variable declaration (`const myFunction`) is hoisted, but the assignment of the function itself is not, meaning the function can only be called after the engine has reached the line of its definition.

We also broke down the core anatomy of a function, including its name, the parameters that act as placeholders for inputs, the function body containing the executable statements, and the `return` statement, which specifies the value the function outputs. The session emphasized that if a `return` statement is omitted, a function implicitly returns `undefined`. Furthermore, we surveyed advanced patterns like **Named Function Expressions** (`const myFunc = function myFuncName() {}`), highlighting their significant benefit in debugging by providing a concrete name in call stacks, making error tracking far more efficient. We concluded with **Immediately Invoked Function Expressions (IIFEs)**, a classic pattern for creating an isolated scope to prevent variable leakage into the global namespace, which was a critical technique for encapsulation before the introduction of ES6 modules.

***

## Friday 4/07/2025: Day 14 - Scope and the Execution Context

This session involved a rigorous investigation of JavaScript's scoping rules and execution context, concepts that are absolutely critical for managing variable lifecycle, preventing common bugs, and understanding the language's underlying mechanics. We began by contrasting the legacy **function scope** with the modern **block scope**. Variables declared with `var` are scoped to the entire containing function, regardless of the block they are in, which can sometimes lead to unexpected behavior. The introduction of `let` and `const` in ES6 brought **block scope**, a more granular and predictable model where variables are confined to the block (`{...}`) in which they are defined. This significantly reduces the risk of variable name collisions and makes code easier to reason about.

The central theme of the day was **Lexical Scope** (also known as static scope). We defined this as the core principle that a function's scope is determined statically by its physical position within the source code during the compilation phase. This means that a function "remembers" the environment in which it was created. This mechanism is the direct enabler of one of JavaScript's most powerful features: **closures**. A closure is formed when a function retains access to variables from its parent (enclosing) scope, even after the parent function has finished executing. We demonstrated this with practical examples, such as creating a counter function that maintained a private internal state. Understanding lexical scope and closures is fundamental for writing advanced JavaScript and is the key to patterns involving data privacy, memoization, and functional programming techniques like currying. This static nature of scope ensures a predictable and consistent chain of variable accessibility.

***

## Monday 7/07/2025: Day 15 - Advanced Functional Patterns

Building on the foundation of functions and scope, this session explored higher-order functions and other advanced concepts that facilitate a more declarative, expressive, and powerful programming style. We defined **Higher-Order Functions** as any function that either takes one or more functions as arguments or returns a function as its result. We analyzed built-in array methods like `.map()`, `.filter()`, and `.reduce()` as prime examples. Instead of writing imperative loops that detail *how* to iterate, these methods allow for a declarative approach that describes *what* the desired outcome is. For example, `.map()` abstracts the logic of creating a new array by applying a transformation to each element, leading to more concise and readable code.

A significant portion of the session was dedicated to an in-depth investigation of the `this` keyword, one of JavaScript's most frequently misunderstood concepts. We established that the value of `this` is not static but is determined dynamically at runtime based on the function's **invocation context**. We systematically covered the primary binding rules: default binding (where `this` refers to the global object in non-strict mode), implicit binding (where `this` refers to the object when a function is called as a method), and explicit binding using `.call()`, `.apply()`, and `.bind()`. Finally, we detailed the benefits of ES6 **Arrow Functions (`=>`)**. Beyond their more concise syntax, their most impactful feature is their lexical binding of `this`. Arrow functions do not create their own `this` context; instead, they inherit it from their enclosing scope. This elegantly solves many of the traditional scoping issues associated with `this`, eliminating the need for older patterns like `const self = this;` inside callbacks.

***

## Tuesday 8/07/2025: Day 16 - Asynchronous JavaScript and Hoisting

This session addressed two pivotal yet complex aspects of JavaScript: its non-blocking asynchronous model and a more detailed clarification on variable declaration behaviors. We began by explaining JavaScript's **single-threaded event loop architecture**. To prevent long-running operations from freezing the user interface, JavaScript offloads tasks like network requests or timers to browser-based **Web APIs**. Once these tasks are complete, their associated callback functions are placed into a callback queue. The event loop continuously monitors the call stack, and once it is empty, it pushes the first callback from the queue onto the stack for execution. This model is the key to maintaining a responsive application despite having only a single main thread. We used `setTimeout` and `setInterval` as practical tools to demonstrate how to schedule code for future execution without blocking the main program flow.

The second half of the session provided a meticulous breakdown of **hoisting**. We clarified that hoisting is a result of the JavaScript engine's two-pass process: a compilation phase that allocates memory for variables and functions, and an execution phase. Declarations using `var` are not only hoisted but are also initialized with a default value of `undefined`, making them accessible (though with an undefined value) throughout their scope before their actual declaration. In stark contrast, `let` and `const` declarations are also hoisted to the top of their block, but they are not initialized. This creates a state known as the **Temporal Dead Zone (TDZ)**. The TDZ exists from the start of the block until the declaration is reached. Attempting to access a `let` or `const` variable within its TDZ results in a `ReferenceError`. This is not a bug, but a deliberate feature designed to enforce a more disciplined and less error-prone coding practice by preventing the use of variables before they are explicitly declared and initialized.

***

## Wednesday 9/07/2025: Day 17 - Practical Application and DOM Introduction

This day was designed to bridge the gap between theoretical knowledge and real-world practice. The first part of the session focused on **applied problem solving**, where we worked through a structured practice set of coding challenges. These exercises were specifically designed to solidify the understanding of functions, scope, closures, `this`, and asynchronous programming. The problems required implementing concepts covered in previous days, such as writing a function that debounces user input using `setTimeout` and closures to manage the timer, or creating a simple memoization function that caches the results of expensive computations, demonstrating the practical power of higher-order functions. This hands-on application was crucial for reinforcing the "why" behind the concepts and building confidence in using them to solve logical problems.

The second part of the session marked our transition into client-side JavaScript with an **Introduction to the Document Object Model (DOM)**. The DOM was defined as a language-agnostic programming interface for web documents, representing the page's HTML as a logical tree of objects. We emphasized that the DOM is not part of the JavaScript language itself but is a Web API provided by the browser. We explored the tree structure, understanding how every HTML element, attribute, and piece of text is a **node** in this tree. We discussed the different types of nodes (element nodes, text nodes, comment nodes) and the relationships between them (parent, child, sibling). This object-based representation is what allows JavaScript to programmatically access and modify every aspect of a document's content, structure, and styling, making it the fundamental API for creating dynamic and interactive web pages.

***

## Thursday 10/07/2025: Day 18 - DOM Manipulation and Event Handling

Following the introduction to the DOM, this session focused entirely on the practical skills required to create dynamic and interactive web pages. We dove deep into the two core pillars of client-side scripting: **DOM manipulation** and **event handling**. We began with **DOM selection and traversal**, implementing various methods for querying the DOM tree. We contrasted the classic `document.getElementById` with the more versatile and powerful CSS selector-based methods, `document.querySelector` (which returns the first matching element) and `document.querySelectorAll` (which returns a static `NodeList` of all matching elements). We then practiced navigating the DOM tree from a selected node using properties like `.parentNode`, `.children`, `.firstElementChild`, and `.nextElementSibling`, enabling precise targeting of elements relative to one another.

Next, we focused on **DOM modification**. We learned how to programmatically create, add, and remove elements using methods like `document.createElement()`, `.appendChild()`, and `.removeChild()`. To solidify this, we walked through the process of building a simple UI component from scratch, such as creating a `div` element, adding a class for styling, setting its text content with `.textContent`, and finally appending it to a specific part of the document. The second major topic was **event-driven programming**. We explored the standard model for handling user interactions using `addEventListener()`. We practiced attaching callback functions to various events like `click`, `submit`, and `mouseover`. A key takeaway was the `event` object that is automatically passed to the event handler function, which contains valuable information about the event, including `event.target`—a reference to the element that originally triggered the event. This forms the foundation for building virtually any interactive user experience on the web.

***

## Friday 11/07/2025: Day 19 - Skill Consolidation and Weekly Review

The week concluded with a comprehensive session aimed at reinforcing the skills acquired and assessing knowledge retention across all covered topics. The day was divided into two primary activities. The first part was dedicated to intensive **algorithmic problem solving**. We utilized online platforms like HackerRank to engage with a series of challenges that required proficient use of JavaScript's data structures and syntax in a performance-oriented context. The problems focused on common patterns such as array manipulation (sorting, filtering, mapping), string processing, and implementing basic recursive algorithms. This exercise was not just about finding a correct solution, but also about considering efficiency, and we briefly touched upon the importance of analyzing time and space complexity (Big O notation) to write optimized code—a critical skill for professional development.

The second part of the session involved a **comprehensive assessment**. A formal quiz was conducted to quantitatively evaluate the understanding of all topics covered during the week, from function scope and `this` to asynchronous patterns and DOM manipulation. The quiz featured a mix of theoretical questions and practical coding snippets where we had to predict the output or identify bugs. Immediately following the quiz, we held a thorough **review session**. In this collaborative segment, we deconstructed the most challenging problems from the assessment and the week's exercises. This involved live-coding solutions, discussing alternative approaches, and clarifying any outstanding questions. This final review served to deconstruct complex topics, ensure a robust grasp of JavaScript fundamentals, and solidify the connection between theoretical knowledge and its practical application in building dynamic web applications.