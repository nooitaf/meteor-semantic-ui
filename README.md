##Semantic UI package for meteor
[![Build Status](https://travis-ci.org/nooitaf/meteor-semantic-ui.svg?branch=master)](https://travis-ci.org/nooitaf/meteor-semantic-ui.svg?branch=master)

###What is this?
This is a wrapper for Semantic UI `v1.0.0` for Meteor.

###What is Semantic UI?
Semantic is a set of specifications for sharing UI elements between developers. Semantic is also a UI library to make front end development simpler and easier to learn. 

[http://semantic-ui.com](http://www.semantic-ui.com/)  
[https://github.com/Semantic-Org/Semantic-UI](https://github.com/Semantic-Org/Semantic-UI)

###Install
`meteor add nooitaf:semantic-ui`

####Using Modules:
Javascript elements (modules) like dropdowns are not active by default. 
You will have to activate them 'manually' in the `template.rendered` function like: 

```javascript
Template.hello.rendered = function(){
	$('.ui.dropdown').dropdown();
}
```

Kitchensink on Meteor: [http://semantic-ui-100-kitchensink.meteor.com](http://semantic-ui-100-kitchensink.meteor.com)