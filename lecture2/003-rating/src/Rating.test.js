import React from "react";
import { shallow } from "enzyme";
import Rating from "./Rating";

describe("<Rating/>", () => {
  it("should show 3 stars by default", () => {
    const wrapper = shallow(<Rating />);
    const actualCount = wrapper.find(".rating-value-icon");
    expect(actualCount).toHaveLength(3);
  });

  it("should increase rating value", () => {
    const wrapper = shallow(<Rating />);
    wrapper.find(".rating-button-increase").simulate("click");
    const actualCount = wrapper.find(".rating-value-icon");
    expect(actualCount).toHaveLength(4);
  });

  it("should decrease rating value", () => {
    const wrapper = shallow(<Rating />);
    wrapper.find(".rating-button-decrease").simulate("click");
    const actualCount = wrapper.find(".rating-value-icon");
    expect(actualCount).toHaveLength(2);
  });

  it("should not show text value by default", () => {
    const wrapper = shallow(<Rating />);
    const textExist = wrapper.exists(".rating-value-label");
    expect(textExist).toBeFalsy();
  });

  it("should show text value", () => {
    const wrapper = shallow(<Rating showText={true} />);
    const actualCount = wrapper.find(".rating-value-label").text();
    expect(actualCount).toEqual("3");
  });

  it("should use initialValue to render icons", () => {
    const wrapper = shallow(<Rating initialValue={4} />);
    const actualCount = wrapper.find(".rating-value-icon");
    expect(actualCount).toHaveLength(4);
  });

  it("should not set value less than min", () => {
    const wrapper = shallow(<Rating min={3} initialValue={4} />);
    const decreaseButton = wrapper.find(".rating-button-decrease");
    decreaseButton
      .simulate("click")
      .simulate("click")
      .simulate("click");

    const actualCount = wrapper.find(".rating-value-icon");
    expect(actualCount).toHaveLength(3);
  });

  it("should not set value bigger than max", () => {
    const wrapper = shallow(<Rating max={10} initialValue={8} />);
    const increaseButton = wrapper.find(".rating-button-increase");
    increaseButton
      .simulate("click")
      .simulate("click")
      .simulate("click");

    const actualCount = wrapper.find(".rating-value-icon");
    expect(actualCount).toHaveLength(10);
  });
});
