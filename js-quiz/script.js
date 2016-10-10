function foo(){
  function bar(){
    return 3;
  }
  return bar();
  function bar(){
    return 8;
  }
}
alert(foo());
//the second one was returned (8)

_______________________________________
function foo(){
  var bar=function (){
    return 3;
  };
return bar();
var bar = function(){
  return 8;
  };
}
alert(foo());
//the first one was returned (3)

_______________________________________
function foo(){
  return bar();
  var bar = function (){
    return 3;
  };
  var bar = function(){
    return 8;
  };
}
//none were called or returned
