import { render, fireEvent } from "@testing-library/react";
import { Navbar } from "./Navbar";
import useStore from "stores/useStore";
import "@testing-library/jest-dom";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
	...(jest.requireActual("react-router-dom") as any),
	useNavigate: () => mockedUsedNavigate
}));

const mockState = {
	isLoading: false,
	fullName: "John Doe",
	companies: []
};

describe("Navbar", () => {
	beforeEach(() => {
		useStore.setState(mockState);
	});

	const createNavbarComponent = () => {
		return {
			...render(<Navbar />)
		};
	};

	it("should show all correctly images and texts", () => {
		const { getByTestId, getByText } = createNavbarComponent();

		expect(getByTestId("go-back-button")).toHaveAttribute("src", "/images/back_arrow.svg");
		expect(getByTestId("go-back-button")).toHaveAttribute("alt", "Go Back - Icon");
		getByText(mockState.fullName);
	});

	it("should call the mockedUsedNavigate correctly", async () => {
		const { getByText } = createNavbarComponent();

		await fireEvent.click(getByText("Go back", { exact: true }));
		expect(mockedUsedNavigate).toBeCalledTimes(1);
		expect(mockedUsedNavigate).toBeCalledWith("/");
	});
});
