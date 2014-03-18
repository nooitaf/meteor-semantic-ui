##Semantic UI package for meteor

> Since 0.13.0: Deploy/Bundle copy-to-public-fix is not needed anymore! :)

###What is this?
This is just a wrapper to use Semantic UI `v0.15.1` with meteor.

###What is Semantic UI?
Semantic is a set of specifications for sharing UI elements between developers. Semantic is also a UI library to make front end development simpler and easier to learn. 

[http://www.semantic-ui.com/](http://www.semantic-ui.com/)

[https://github.com/jlukic/Semantic-UI](https://github.com/jlukic/Semantic-UI)

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

##### Deploy or Bundle ( This only applies if version lower then 0.13.0 )
To get assets working you will have to copy the 2 folders  
`/lib/semantic-ui/build/uncompressed/fonts/` and  
`/lib/semantic-ui/build/uncompressed/images/`  
into your `/public/` folder.

Version 0.9.2 Icon test [http://semantic-ui-092-icon-test.meteor.com/](http://semantic-ui-092-icon-test.meteor.com/)  
Version 0.13.0 Icon test [http://semantic-ui-0.13.0-icontest-less.meteor.com/](http://semantic-ui-0.13.0-icontest-less.meteor.com/)  

---
