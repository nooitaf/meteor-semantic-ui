#Semantic UI package for meteor

##What is this?
This is just a wrapper to use Semantic UI with meteor.

##What is Semantic UI?
Semantic is a set of specifications for sharing UI elements between developers. Semantic is also a UI library to make front end development simpler and easier to learn. 

[http://www.semantic-ui.com/](http://www.semantic-ui.com/)

[https://github.com/jlukic/Semantic-UI](https://github.com/jlukic/Semantic-UI)

##Install
`mrt add semantic-ui`

###issues:
Javascript elements like dropdowns should be active by default. At the moment you can activate them in the template.rendered function like: 

```javascript
Template.hello.rendered = function(){
	$('.ui.dropdown').dropdown();
}
```
