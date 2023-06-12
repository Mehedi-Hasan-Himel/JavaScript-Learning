/*
falsy:
false
0
`` (empty string)
null
NaN

---------------------------------------
truthy:
true
any number (positive or negative)
any string including single whitespace, `0`, `false`
[] empty array
{} empty object
anything else that is not falsy will be truthy.
*/

let x = {};
if (x) {
  console.log(`variable is truthy`, x);
} else {
  console.log(`variable is falsy`);
}
