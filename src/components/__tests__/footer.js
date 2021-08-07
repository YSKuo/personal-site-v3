import React from "react";
import renderer from "react-test-renderer";

import Footer from "../Footer";
import config from "../../../data/SiteConfig";

describe("Footer snapshot", () => {
  it("render", () => {
    const tree = renderer.create(<Footer config={config} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
