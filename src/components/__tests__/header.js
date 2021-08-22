import React from "react";
import userEvent from "@testing-library/user-event";

import { render } from "../../utils/test-utils";
import Header from "../Header";
import config from "../../../data/SiteConfig";

function renderHeader(props) {
  const utils = render(<Header config={config} />);

  const header = utils.getByRole("banner");
  return { ...utils, header };
}

test("Header snapshot at lg screen width", () => {
  const { header } = renderHeader();
  expect(header).toMatchSnapshot();
});
