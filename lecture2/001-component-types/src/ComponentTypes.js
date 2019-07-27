import React from "react";
import LoremIpsum1 from "./LoremIpsum1";
import LoremIpsum2 from "./LoremIpsum2";
import LoremIpsum3 from "./LoremIpsum3";

// function components
const FuncReturnsText = () => "this is text from component that returns string";
const FuncReturnsNull = () => null;
const FuncReturnsUndefined = () => void 0; // will fail
const FuncReturnsFalse = () => false;
const FuncReturnsTrue = () => true;
const FuncReturns0 = () => 0;
const FuncReturns1 = () => 1;
const FuncReturnsObject = () => ({}); // will fail
const FuncReturnsArrayOfStrings = () => ["string1", "string2"];
const FuncReturnsAnotherComponent = () => <LoremIpsum1 />;
const FuncReturnsArrayOfComponents = () => [
  <LoremIpsum2 key="ip2" />,
  <LoremIpsum3 key="ip3" />
];

// class components
class ClassComp extends React.Component {
  render() {
    return <div>Rendered from class component</div>;
  }
}

class ClassPureComp extends React.PureComponent {
  render() {
    return <div>Rendered from pure component</div>;
  }
}

export default () => (
  <>
    <FuncReturnsText />
    <FuncReturnsNull />
    {/* <FuncReturnsUndefined /> */}
    <FuncReturnsFalse />
    <FuncReturnsTrue />
    <FuncReturns0 />
    <FuncReturns1 />
    {/* <FuncReturnsObject /> */}
    <FuncReturnsArrayOfStrings />
    <FuncReturnsAnotherComponent />
    <FuncReturnsArrayOfComponents />
    <ClassComp />
    <ClassPureComp />
  </>
);
