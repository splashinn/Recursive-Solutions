// recursiveCalls.js
// (C) 2014 splashinn
// simple examples of recursive calls

// directly code the call within then function like:
function recursive(p1) {
  p1--;
  if (p1 < 0)
    return recursive(p1);
}

// call a function recursively
function recursive(p1) {
  p1--;
  if (p1 < 0)
    return setTimeout("recursive("+p1+")", 1);
}
