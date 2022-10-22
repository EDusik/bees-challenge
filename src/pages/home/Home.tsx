import { HomeStyled } from "pages/home/HomeStyle";

export const Home = () => {
	return (
		<HomeStyled>
			<div className="home">
				<p>Please, enter your full name below</p>
				<p>Only alphabetical characters are accepted</p>
				<input className="home__input-name" type="text" id="full-name" name="full-name" placeholder="Full name" />

				<div className="home__input-checkbox">
					<input type="checkbox" id="checkbox" name="checkbox" />
					<label htmlFor="checkbox">Are you older than 18 years old?</label>
				</div>

				<button type="button" aria-label="Enter Button">
					Enter
				</button>
			</div>
			<img src={`${process.env.PUBLIC_URL}/images/bee.svg`} alt="Bee Logo" />
		</HomeStyled>
	);
};
