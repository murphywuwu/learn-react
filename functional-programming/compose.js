var compose = function(f, g) {
  return function(x) {
    return f(g(x));
  }
}

var toUpperCase = x => x.toUpperCase();
var exclaim = x => x + '!';
var shout = compose(exclaim, toUpperCase)

shout('send in the clowns');
