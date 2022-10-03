import { render, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import AboutSnippet from "../AboutSnippet";

afterEach(cleanup);
test("renders about snippet without crashing", () => {
  render(<AboutSnippet />);
});

test("renders about snippet heading correctly", () => {
  const { getByTestId } = render(<AboutSnippet heading="heading" />);
  expect(getByTestId("about-snippet")).toHaveTextContent("heading");
});

test("renders about snippet content correctly", () => {
  const { getByTestId } = render(
    <AboutSnippet heading="heading" content="testing about snippet" />
  );
  expect(getByTestId("about-snippet")).toHaveTextContent(
    "testing about snippet"
  );
});

test("matches about snippet snapshot 1", () => {
  const tree = renderer.create(<AboutSnippet content="snapshot 1" />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("matches about snippet snapshot 2", () => {
  const tree = renderer
    .create(<AboutSnippet heading="blah blah blah" content="" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
