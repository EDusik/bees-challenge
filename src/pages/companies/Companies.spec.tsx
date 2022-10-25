import { Companies } from "./Companies";
import { render } from "@testing-library/react";
import useStore from "stores/useStore";
import companies from "mocks/mockCompanies.json";
import "@testing-library/jest-dom";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
	...jest.requireActual("react-router-dom"),
	useNavigate: () => mockedUsedNavigate
}));

const mockGetCompanies = jest.fn();
jest.mock("services/api", () => {
	return jest.fn().mockImplementation(() => {
		return { getCompanies: mockGetCompanies };
	});
});

const mockState = {
	isLoading: false,
	fullName: "John Doe",
	companies: companies
};

describe("Companies", () => {
	beforeEach(() => {
		useStore.setState(mockState);
	});

	const createCompaniesComponent = () => {
		return {
			...render(<Companies />)
		};
	};

	it("should show error message", () => {
		mockGetCompanies.mockRejectedValueOnce({});
		const { getByRole, getByText } = createCompaniesComponent();

		expect(getByRole("heading", { level: 3 })).toHaveTextContent("An error has occurred");
		getByText("Please try again later.");
		getByText("🐝");
	});
});
