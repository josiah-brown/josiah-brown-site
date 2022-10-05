import { render, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import ProjectList from "../ProjectList";

afterEach(cleanup);

test("renders project list without crash", () => {
  render(<ProjectList />);
});

test("renders project list correctly", () => {
  const { getByTestId } = render(<ProjectList />);
  expect(getByTestId("projects-list")).toBeVisible();
  expect(getByTestId("projects-list")).not.toBeEmptyDOMElement();
});

test("matches projects list snapshot 1", () => {
  const tree = renderer.create(<ProjectList />).toJSON();
  expect(tree).toMatchSnapshot();
});
