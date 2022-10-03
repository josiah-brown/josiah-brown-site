import {
  render,
  cleanup,
  fireEvent,
  getByTestId,
  getByRole,
} from "@testing-library/react";
import renderer from "react-test-renderer";
import ToggleThemeBtn from "../ToggleThemeBtn";

afterEach(cleanup);

test("renders toggle theme button without crashing", () => {
  render(<ToggleThemeBtn />);
});

test("toggles localStorage on click", () => {
  const { getByTestId } = render(<ToggleThemeBtn />);

  fireEvent.click(getByTestId("toggle-theme-btn"));
  expect(window.localStorage.theme).toBe("dark");

  fireEvent.click(getByTestId("toggle-theme-btn"));
  expect(window.localStorage.theme).toBe("light");
});

test("toggles root classlist on click", () => {
  const { getByTestId } = render(<ToggleThemeBtn />);

  fireEvent.click(getByTestId("toggle-theme-btn"));
  expect(window.document.documentElement).toHaveClass("dark");
  expect(window.document.documentElement).not.toHaveClass("light");

  fireEvent.click(getByTestId("toggle-theme-btn"));
  expect(window.document.documentElement).toHaveClass("light");
  expect(window.document.documentElement).not.toHaveClass("dark");
});

test("matches toggle theme button snapshot", () => {
  const tree = renderer.create(<ToggleThemeBtn />).toJSON();
  expect(tree).toMatchSnapshot();
});
