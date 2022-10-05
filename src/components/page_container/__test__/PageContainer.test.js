import { cleanup, render } from "@testing-library/react";
import renderer from "react-test-renderer";
import PageContainer from "../PageContainer";

afterEach(cleanup);

test("renders page container without crash", () => {
  render(<PageContainer></PageContainer>);
});

test("renders page container children without affecting them", () => {
  const { getByTestId } = render(
    <PageContainer>
      <div>Hello World</div>
    </PageContainer>
  );
  expect(getByTestId("page-container")).toContainHTML("<div>Hello World</div>");
});

test("matches page container snapshot 1", () => {
  const tree = renderer
    .create(
      <PageContainer>
        <div>
          <p>child 1</p>
          <p>child 2</p>
        </div>
      </PageContainer>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
