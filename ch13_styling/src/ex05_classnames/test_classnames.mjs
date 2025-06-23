import classNames from "classnames";

let result = "";
result = classNames("one", "two");
console.log(result);
result = classNames("one", { two: true });
console.log(result);
result = classNames("one", { two: false });
console.log(result);
result = classNames("one", ["two", "three"]);
console.log(result);
console.log("");

const myClass = "hello";
result = classNames("one", myClass, { myCondition: true });
console.log(result);
