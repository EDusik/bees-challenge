import { NavbarStyled } from "./NavbarStyled";
import { useNavigate } from "react-router-dom";
import useStore from "stores/useStore";

export const Navbar = () => {
	const { fullName } = useStore();
	const navigate = useNavigate();

	const handleGoBack = () => {
		navigate("/");
	};

	return (
		<NavbarStyled>
			<div>
				<button type="button" aria-label="Go Back Button" onClick={() => handleGoBack()}>
					<img src={`${process.env.PUBLIC_URL}/images/back_arrow.svg`} alt="Go Back - Icon" />
					Go back
				</button>
				<h2>{fullName}</h2>
			</div>
		</NavbarStyled>
	);
};
