import React from "react";
import userEvent from "@testing-library/user-event";

import { render } from "../../utils/test-utils";
import AboutPage from "../Pages/AboutPage";
import config from "../../../data/SiteConfig";

function renderAboutPage(props) {
  const utils = render(
    <main>
      <AboutPage config={config} />
    </main>
  );

  const about = utils.getByRole("main");
  return { ...utils, about };
}

test("AboutPage snapshot at lg screen width", () => {
  const { about } = renderAboutPage();
  expect(about).toMatchSnapshot();
});
