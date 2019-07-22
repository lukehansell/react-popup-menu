import React from "react";
import MenuItem from "../src/MenuItem";
import { shallow } from "enzyme";

test("it renders", () => {
  const wrapper = shallow(<MenuItem>foo</MenuItem>);
  expect(wrapper);
});

test("it renders the children", () => {
  const wrapper = shallow(
    <MenuItem>
      <div id="child" />
    </MenuItem>
  );
  expect(wrapper.html()).toEqual('<div id="child"></div>');
});
