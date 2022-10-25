import { Loader } from "./Loader";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Loader", () => {
	const createLoaderComponent = () => {
		return {
			...render(<Loader />)
		};
	};

	it("should show the correctly image", () => {
		const { getByTestId } = createLoaderComponent();

		expect(getByTestId("loader-image")).toHaveAttribute("src", "/images/bee.svg");
		expect(getByTestId("loader-image")).toHaveAttribute("alt", "Bee Animation - Loading");
	});
});
