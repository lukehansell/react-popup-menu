import React from "react";
import Container from "../src/Container";
import { shallow } from "enzyme";

import Anchor from "../src/Anchor";
import Menu from "../src/Menu";

test("it renders the child using a render function", () => {
  const wrapper = shallow(<Container>{() => <div>foo</div>}</Container>);
  expect(wrapper.html()).toEqual("<div>foo</div>");
});

test("isOpen arg in render prop is defaulted to false", () => {
  const wrapper = shallow(
    <Container>{({ isOpen }) => <>{isOpen.toString()}</>}</Container>
  );
  expect(wrapper.html()).toEqual("false");
});

test("calling toggleOpen function in render prop args sets isOpen to true", () => {
  const wrapper = shallow(
    <Container>
      {({ isOpen, toggleOpen }) => (
        <div onClick={toggleOpen}>{isOpen.toString()}</div>
      )}
    </Container>
  );
  wrapper.find("div").simulate("click");
  expect(wrapper.html()).toEqual("<div>true</div>");
});

test("calling toggleOpen function multiple times toggles the isOpen render prop arg", () => {
  const wrapper = shallow(
    <Container>
      {({ isOpen, toggleOpen }) => (
        <div onClick={toggleOpen}>{isOpen.toString()}</div>
      )}
    </Container>
  );
  const expectedResults = ["true", "false", "true", "false"];
  const div = wrapper.find("div");
  expectedResults.forEach(expectation => {
    div.simulate("click");
    expect(div.text()).toEqual(expectation);
  });
});
