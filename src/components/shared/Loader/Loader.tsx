import { LoaderStyled } from "./LoaderStyled";

export const Loader = () => {
	return (
		<LoaderStyled>
			<img data-testid="loader-image" src={`${process.env.PUBLIC_URL}/images/bee.svg`} alt="Bee Animation - Loading" />
		</LoaderStyled>
	);
};
