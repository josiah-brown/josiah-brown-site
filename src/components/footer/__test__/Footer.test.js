import { render, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import Footer from "../Footer";

afterEach(cleanup);

test("renders footer without crash", () => {
  render(<Footer />);
});

test("renders all children in footer", () => {
  const { getByTestId } = render(<Footer />);
  const l1 = getByTestId("footer-link-1");
  const l2 = getByTestId("footer-link-2");
  const l3 = getByTestId("footer-link-3");
  const copyright = getByTestId("footer-copyright");
  expect(getByTestId("footer")).toContainElement(l1);
  expect(getByTestId("footer")).toContainElement(l2);
  expect(getByTestId("footer")).toContainElement(l3);
  expect(getByTestId("footer")).toContainElement(copyright);
});

test("matches footer snapshot 1", () => {
  const tree = renderer.create(<Footer />).toJSON();
  expect(tree).toMatchSnapshot();
});
