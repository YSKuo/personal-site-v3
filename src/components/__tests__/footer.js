import React from "react";

import { render } from "../../utils/test-utils";
import Footer from "../Footer";
import config from "../../../data/SiteConfig";

function renderFooter(props) {
  const utils = render(<Footer config={config} />);

  const footer = utils.getByRole("contentinfo");
  return { ...utils, footer };
}

test("Footer snapshot at lg screen width", () => {
  const { footer } = renderFooter();
  expect(footer).toMatchSnapshot();
});
