import { ErrorStyled } from "./ErrorStyled";

export const Error = () => {
	return (
		<ErrorStyled>
			<h3>An error has occurred </h3>
			<p>Please try again later.</p>
			<p>🐝</p>
		</ErrorStyled>
	);
};
