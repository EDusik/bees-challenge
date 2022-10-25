import { Error } from "./Error";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Error", () => {
	const createErrorComponent = () => {
		return {
			...render(<Error />)
		};
	};

	it("should show the right text", () => {
		const { getByText } = createErrorComponent();

		getByText("An error has occurred", { exact: true });
		getByText("Please try again later.", { exact: true });
		getByText("🐝", { exact: true });
	});
});
