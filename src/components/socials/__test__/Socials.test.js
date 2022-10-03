import { cleanup, render } from "@testing-library/react";
import renderer from "react-test-renderer";
import Socials from "../Socials";

afterEach(cleanup);

test("renders socials without crash", () => {
  render(<Socials />);
});

test("matches snapshot", () => {
  const tree = renderer.create(<Socials />).toJSON();
  expect(tree).toMatchSnapshot();
});
