var re = /(\w|\$)+/g;
var l = [];
(function foo() {
  a = re.exec("foo bar baz")
  a = re.exec("foo bar baz")
  a = re.exec("foo bar baz")
  console.log(a);
  if (a === null) { return; }
  l.push(a[0]);
  foo();
})();
if (l[0] === "baz" &&
    l[1] === "bar" &&
    l[2] === "foo") {
  console.log("passed");
}

