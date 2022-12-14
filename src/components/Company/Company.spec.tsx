import { Company } from "./Company";
import { ICompany } from "models/Companies";
import { render, fireEvent } from "@testing-library/react";
import useStore from "stores/useStore";
import company from "mocks/mockCompany.json";
import companies from "mocks/mockCompanies.json";
import "@testing-library/jest-dom";

const mockState = {
	isLoading: false,
	fullName: "John Doe",
	companies: companies
};

describe("Company", () => {
	beforeEach(() => {
		useStore.setState(mockState);
	});

	const createCompanyComponent = (company: ICompany) => {
		return {
			...render(<Company company={company} />)
		};
	};

	it("should show the correctly address", () => {
		const { getByTestId } = createCompanyComponent(company);

		expect(getByTestId("company-id")).toHaveTextContent(company.id);
		expect(getByTestId("company-street")).toHaveTextContent(company.street);
		expect(getByTestId("company-address")).toHaveTextContent(`${company.city}, ${company.state} - ${company.country}`);
	});

	it("should show the correctly tags icons and texts", () => {
		const { getByTestId } = createCompanyComponent(company);

		expect(getByTestId("company-brewery-type-icon")).toHaveAttribute("src", "/images/chart.svg");
		expect(getByTestId("company-brewery-type-icon")).toHaveAttribute("alt", "Chart - Icon");
		expect(getByTestId("company-brewery-type")).toHaveTextContent(company.brewery_type);

		expect(getByTestId("company-postal-code-icon")).toHaveAttribute("src", "/images/pin.svg");
		expect(getByTestId("company-postal-code-icon")).toHaveAttribute("alt", "Pin - Icon");
		expect(getByTestId("company-postal-code")).toHaveTextContent(company.postal_code);

		expect(getByTestId("company-phone-icon")).toHaveAttribute("src", "/images/phone.svg");
		expect(getByTestId("company-phone-icon")).toHaveAttribute("alt", "Phone - Icon");
		expect(getByTestId("company-phone")).toHaveTextContent(company.phone);
	});

	it("should delete the first company", () => {
		const { getByTestId } = createCompanyComponent(company);
		expect(companies.length).toBe(2);
		fireEvent.click(getByTestId(`company-delete-button-${company.id}`));
		expect(companies.length).toBe(1);
	});

	describe("When user click enter", () => {
		it("should add a new tag", async () => {
			const { getByTestId } = createCompanyComponent(company);

			const newTag = "new tag";
			await fireEvent.click(getByTestId("company-add-button"));
			const input = getByTestId("company-add-more-input");

			await fireEvent.change(input, { target: { value: newTag } });
			await fireEvent.keyDown(input, { key: "Enter", code: 13, charCode: 13 });
			expect(companies[0].tag).toBe(newTag);
		});
	});

	describe("When user click the company add button", () => {
		it("should add a new tag", async () => {
			const { getByTestId } = createCompanyComponent(company);

			const newTag = "new tag";
			const addMoreButton = getByTestId("company-add-button");

			await fireEvent.click(addMoreButton);
			const input = getByTestId("company-add-more-input");

			await fireEvent.change(input, { target: { value: newTag } });
			await fireEvent.click(addMoreButton);
			expect(companies[0].tag).toBe(newTag);
		});
	});
});
