import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useStore from "stores/useStore";
import { FormStyled } from "./FormStyled";

const MIN_FULL_NAME_SIZE = 7;
const MAX_FULL_NAME_SIZE = 32;

interface ICompaniesState {
	fullName: string;
	moreThanEighteenYearsOld: boolean;
	isButtonDisabled: boolean;
}

export const Form = () => {
	const { setFullName } = useStore();
	const navigate = useNavigate();

	const [state, setState] = useState<ICompaniesState>({
		fullName: "",
		moreThanEighteenYearsOld: false,
		isButtonDisabled: true
	});

	const handleName = (typedName: string) => {
		setState((previousState: ICompaniesState) => ({
			...previousState,
			fullName: typedName
		}));

		setFullName(typedName);
	};

	const handleCheckBox = () => {
		setState((previousState: ICompaniesState) => ({
			...previousState,
			moreThanEighteenYearsOld: !state.moreThanEighteenYearsOld
		}));
	};

	useEffect(() => {
		if (
			state.fullName.length > MIN_FULL_NAME_SIZE &&
			state.fullName.length < MAX_FULL_NAME_SIZE &&
			state.moreThanEighteenYearsOld === true
		) {
			setState((previousState: ICompaniesState) => ({
				...previousState,
				isButtonDisabled: false
			}));
		} else {
			setState((previousState: ICompaniesState) => ({
				...previousState,
				isButtonDisabled: true
			}));
		}
	}, [state.fullName, state.moreThanEighteenYearsOld]);

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		navigate("/companies");
	};

	return (
		<FormStyled>
			<form className="home" onSubmit={event => handleSubmit(event)}>
				<p>Please, enter your full name below</p>
				<p>Only alphabetical characters are accepted</p>
				<input
					className="home__input-name"
					type="text"
					id="full-name"
					name="full-name"
					placeholder="Full name"
					onChange={event => handleName(event.target.value)}
				/>

				<div className="home__input-checkbox">
					<input
						type="checkbox"
						id="moreThanEighteenYearsOld"
						name="moreThanEighteenYearsOld"
						onChange={handleCheckBox}
					/>
					<label htmlFor="moreThanEighteenYearsOld">Are you older than 18 years old?</label>
				</div>

				<button type="submit" aria-label="Enter Button" disabled={state.isButtonDisabled}>
					Enter
				</button>
			</form>
		</FormStyled>
	);
};
