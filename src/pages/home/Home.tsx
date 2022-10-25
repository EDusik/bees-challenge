import { Form } from "components/Form";
import { HomeStyled } from "pages/home/HomeStyle";

export const Home = () => {
	return (
		<HomeStyled>
			<Form />
			<img data-testid="home-logo" src={`${process.env.PUBLIC_URL}/images/bee.svg`} alt="Bee Logo" />
		</HomeStyled>
	);
};
