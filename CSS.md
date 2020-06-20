# CSS Cheat sheet 

### CSS RULES
```
Selector{
  Property:Value;
  }
```

### TYPES OF CSS RULES

internal
```
<head>
  <style type="text/css">
    <!--style rule-->
  </style>
</head>
```

external
```
<head>
  <link type="stylesheet" href="path/filename.css"/>
</head>
```
inline 
```
<[html_element] style="property:value;"></[html_element]>
```

### Selector

#### 1. html tag
Applies to all tags type
```
html_tag{
  property:value;
}
```

#### 2. css class
Applies to all elements with the class name
```
<head> <style type="text/css">
.class_name{
  property:value;
}
</style></head>

<body>
  <div class="class_name">
    <!--html--> 
  </div>
</body>
```

#### 3. css id's
Applies to all elements with the class name
```
<head> <style type="text/css">
#id_name{
  property:value;
}
</style></head>

<body>
  <div id="id_name">
    <!--html--> 
  </div>
</body>
```

#### color names and codes
EXAMPLE for red color
```
<!--COLOR NAMES-->
color: red;
<!--COLOR CODE-->
color: #FF0000
<!--HEX CODE-->
color: rgb(255,0,0)

```

### width and hejght properties
```
width: [pixels|percent|auto]
min-width: [pixels|percent]
max-width: [pixels|percent]
height: [pixels|vh]
min-height:  [pixels|percent]
max-height: [pixels|percent]

```

### text properties
```

///TEXT
color: [color]  
letter-spacing: [value.px]
word-spacing: [value.px]
text-align: [left|center|right|justify]
text-decoration: [underline|overline|line-through|blink]
text-transform: [capitalize|lowercase|uppercase]  

///FONT PROPERTIES
font-family:
font-style:[italic|oblique|normal]
font-size:[large|medium|lenghtpx|%percent]
line-height:[default:110%]
```  


### background and img properties
```
background-color: [color|transparent]  

///image
background-image: url(path/file.jpg);
background-repeat: [repeat-x|repeat-y|no-repeat]
background-position: [(center|botton|top) + (right|center|left) | x% y% | xpos ypos]


///opacity
opacity:[double|percentage%] ``

```


### Visibitily and position
```
display: [inline-block|none]
position: [static|relative|absolute|fixed]
float: [position]
```

### Marging, padding

Margin>Border>Padding>Content

rule for marging or padding
```
property: [top], [right], [buttom], [left];
example:
margin: 10px, 5px, 3px, 0px;
```

Border properties
```
border: [value.px]
bordercolo: [color]
border-style:[dashed|dotted|double|groove|hidden|inset|none|outset|ridge|solid]

```
