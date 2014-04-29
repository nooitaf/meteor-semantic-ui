##Semantic UI package for meteor

> Since 0.13.0: Deploy/Bundle copy-to-public-fix is not needed anymore! :)

###What is this?
This is just a wrapper to use Semantic UI `v0.16.1` with meteor.

###What is Semantic UI?
Semantic is a set of specifications for sharing UI elements between developers. Semantic is also a UI library to make front end development simpler and easier to learn. 

[semantic-ui.com](http://www.semantic-ui.com/)
[github.com/jlukic/Semantic-UI](https://github.com/Semantic-Org/Semantic-UI)

####You'll need
[Meteorite](https://github.com/oortcloud/meteorite) 

###Install
`mrt add semantic-ui`

####issues:
Javascript elements like dropdowns are not active by default. 
At the moment you will have to activate them 'manually' in the `template.rendered` function like: 

```javascript
Template.hello.rendered = function(){
	$('.ui.dropdown').dropdown();
}
```


---

Version 0.13.0 Icon test [http://semantic-ui-0.13.0-icontest-less.meteor.com/](http://semantic-ui-0.13.0-icontest-less.meteor.com/)  

---
