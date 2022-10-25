import { Form } from "./Form";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
	...jest.requireActual("react-router-dom"),
	useNavigate: () => mockedUsedNavigate
}));

describe("Form", () => {
	const createFormComponent = () => {
		return {
			...render(<Form />)
		};
	};

	it("should show the correctly texts", () => {
		const { getByText, getByLabelText } = createFormComponent();
		expect(getByText("Enter")).toBeDisabled();
		getByText("Please, enter your full name below");
		getByText("Only alphabetical characters are accepted");
		getByLabelText("Are you older than 18 years old?");
	});

	describe("When form is valid", () => {
		it("should navigate to /companies page", async () => {
			const { getByText, getByTestId } = createFormComponent();

			const enterButton = getByText("Enter");
			expect(enterButton).toBeDisabled();

			fireEvent.change(getByTestId("full-name-input"), { target: { value: "John Doe" } });
			expect(enterButton).toBeDisabled();

			await fireEvent.click(getByTestId("home-input-checkbox"));
			expect(enterButton).toBeEnabled();

			fireEvent.click(enterButton);
			expect(mockedUsedNavigate).toBeCalledTimes(1);
			expect(mockedUsedNavigate).toBeCalledWith("/companies");
		});
	});
});
