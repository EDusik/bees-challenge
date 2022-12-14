import { FormEvent, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormStyled } from "./FormStyled";
import useStore from "stores/useStore";

const ALPHABETICAL_REGEX = new RegExp(/^[a-zA-Z ]*$/);
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

	const handleAlphabeticalChars = useCallback(() => {
		return ALPHABETICAL_REGEX.test(state.fullName);
	}, [state.fullName]);

	useEffect(() => {
		handleAlphabeticalChars();
	}, [handleAlphabeticalChars]);

	useEffect(() => {
		if (
			handleAlphabeticalChars() &&
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
	}, [state.fullName, state.moreThanEighteenYearsOld, handleAlphabeticalChars]);

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		navigate("/companies");
	};

	return (
		<FormStyled data-testid="form-component" data-cy="form-component">
			<form className="home" onSubmit={event => handleSubmit(event)}>
				<p>Please, enter your full name below</p>
				<p>Only alphabetical characters are accepted</p>
				<input
					data-testid="full-name-input"
					data-cy="full-name-input"
					className="home__input-name"
					type="text"
					id="full-name-input"
					name="full-name-input"
					placeholder="Full name"
					onChange={event => handleName(event.target.value)}
				/>

				<div className="home__input-checkbox">
					<input
						data-testid="home-input-checkbox"
						data-cy="home-input-checkbox"
						type="checkbox"
						id="moreThanEighteenYearsOld"
						name="moreThanEighteenYearsOld"
						onChange={handleCheckBox}
					/>
					<label htmlFor="moreThanEighteenYearsOld">Are you older than 18 years old?</label>
				</div>

				<button
					type="submit"
					data-testid="enter-button"
					data-cy="enter-button"
					aria-label="Enter Button"
					disabled={state.isButtonDisabled}
				>
					Enter
				</button>
			</form>
		</FormStyled>
	);
};
