import { Home } from "./Home";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
	...jest.requireActual("react-router-dom"),
	useNavigate: () => mockedUsedNavigate
}));

describe("Home", () => {
	const createHomeComponent = () => {
		return {
			...render(<Home />)
		};
	};

	it("should render correctly the home component", () => {
		const { getByTestId } = createHomeComponent();

		expect(getByTestId("home-logo")).toHaveAttribute("src", "/images/bee.svg");
		expect(getByTestId("home-logo")).toHaveAttribute("alt", "Bee Logo");
		expect(getByTestId("form-component")).toBeVisible();
	});
});
