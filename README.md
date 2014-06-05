angular-resizable
=================

write a directive that indicates  resizablity

i have to say that this is not a perfect directive, not only because it's has so many duplicate statment, but also because 
its dependence on JQuery.

because until now, in the angular API, I can't find a method to tell the width of specified component, I have to use JQuery.


and here is a simple example:

  var myapp=angular.module("myapp",["wzf"]);

  
  and in the html body:
  
    <div resizable style="width:300px; height:400px;">
          blablabla
    </div>
