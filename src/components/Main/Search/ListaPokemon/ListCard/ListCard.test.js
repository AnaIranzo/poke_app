import React from "react";
import { shallow } from "enzyme";
import ListCard from "./ListCard";

describe("ListCard", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ListCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
