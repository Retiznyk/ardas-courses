import React from "react";
import { mount } from "enzyme";
import RatingLoader from "./RatingLoader";
import * as api from "./api";

jest.mock("./api");

describe("<RatingLoader />", () => {
  it("should load rating data from BE", done => {
    const ratingFromApi = 5;
    api.getRating.mockResolvedValue(Promise.resolve(ratingFromApi));
    const wrapper = mount(<RatingLoader />);

    setTimeout(() => {
      const actualRating = wrapper.state().data;

      expect(api.getRating).toHaveBeenCalled();
      expect(actualRating).toBe(ratingFromApi);
      done();
    });
  });
});
