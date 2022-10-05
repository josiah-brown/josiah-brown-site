import { cleanup, render } from "@testing-library/react";
import ProjectSnippet from "../ProjectSnippet";
import { projects } from "../../../data/siteContent";
import renderer from "react-test-renderer";

afterEach(cleanup);

test("renders project snippet without crash", () => {
  let p = projects[0];
  render(<ProjectSnippet project={p} key={p.id} />);
});

test("matches project snippet snapshot 1", () => {
  let p = projects[0];
  const tree = renderer
    .create(<ProjectSnippet project={p} key={p.id} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
