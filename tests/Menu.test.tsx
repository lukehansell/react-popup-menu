import React from "react";
import Menu from "../src/Menu";
import { shallow } from "enzyme";

test("it renders the items", () => {
  const wrapper = shallow(<Menu>foo</Menu>);
  expect(wrapper.html()).toEqual("foo");
});
