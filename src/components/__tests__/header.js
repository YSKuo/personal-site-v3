import React from "react";
import userEvent from "@testing-library/user-event";

import Header from "../Header";
import config from "../../../data/SiteConfig";
import { render } from "../../utils/test-utils";

function renderHeader(props) {
  const utils = render(<Header config={config} />);

  const header = utils.getByRole("banner");
  return { ...utils, header };
}

test("Header snapshot at lg screen width", () => {
  const { header } = renderHeader();
  expect(header).toMatchSnapshot();
});

test("Header is revealed", () => {
  const { header } = renderHeader();
  expect(header).toBeDefined();
});
