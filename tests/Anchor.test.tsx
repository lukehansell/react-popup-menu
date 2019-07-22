import React, { ReactNode } from "react";
import Anchor from "../src/Anchor";
import { shallow } from "enzyme";

test("it renders the children", () => {
  const wrapper = shallow(
    <Anchor>
      <div id="link" />
    </Anchor>
  );
  expect(wrapper.html()).toEqual('<div id="link"></div>');
});
