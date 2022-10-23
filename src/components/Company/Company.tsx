import { useState } from "react";
import { CompanyStyled } from "./CompanyStyled";
import { ICompany } from "models/Companies";
import { handleNullData } from "utils/data";
import useStore from "stores/useStore";

interface ICompanyProps {
	company: ICompany;
}

interface ICompanyState {
	edited: boolean;
	inputValue: string;
}

export const Company = ({ company }: ICompanyProps) => {
	const { companies, setCompanies } = useStore();
	const [state, setState] = useState<ICompanyState>({
		edited: false,
		inputValue: ""
	});

	const handleAddMore = (company: ICompany) => {
		setState((previousState: ICompanyState) => ({
			...previousState,
			edited: !state.edited
		}));

		if (state.inputValue.trim() === "") return;
		if (state.edited === true) {
			let objIndex = companies.findIndex(c => c === company);
			companies[objIndex].tag = state.inputValue.trim();
		}
	};

	const handleAddMoreInput = (typedValue: string) => {
		setState((previousState: ICompanyState) => ({
			...previousState,
			inputValue: typedValue
		}));
	};

	const handleAddress = (company: ICompany) => {
		return (
			<>
				<p>{company.street}</p>
				<p>
					{company.city}, {company.state} - {company.country}
				</p>
			</>
		);
	};

	const handleTags = (company: ICompany) => {
		return (
			<>
				{handleNullData(
					company?.brewery_type,
					<span>
						<img src={`${process.env.PUBLIC_URL}/images/chart.svg`} alt="Chart - Icon" />
						{company?.brewery_type}
					</span>
				)}

				{handleNullData(
					company?.postal_code,
					<span>
						<img src={`${process.env.PUBLIC_URL}/images/pin.svg`} alt="Pin - Icon" />
						{company?.postal_code}
					</span>
				)}

				{handleNullData(
					company?.phone,
					<span>
						<img src={`${process.env.PUBLIC_URL}/images/phone.svg`} alt="Phone - Icon" />
						{company?.phone}
					</span>
				)}

				<span>
					{!company.tag ? (
						<button type="button" aria-label="Add Button" onClick={() => handleAddMore(company)}>
							{!state.edited ? (
								<>
									<img src={`${process.env.PUBLIC_URL}/images/plus.svg`} alt="Plus - Icon" />
								</>
							) : (
								<>
									<img src={`${process.env.PUBLIC_URL}/images/check.svg`} alt="Check - Icon" />
								</>
							)}
						</button>
					) : (
						<>
							<img src={`${process.env.PUBLIC_URL}/images/check.svg`} alt="Check - Icon" />
							<p>{company?.tag}</p>
						</>
					)}

					{!state.edited && !company.tag ? (
						<p>add more</p>
					) : (
						<input
							type="input"
							id="add-more"
							name="add-more"
							placeholder="add more"
							disabled={!state.edited}
							onChange={event => handleAddMoreInput(event?.target.value)}
						/>
					)}
				</span>
			</>
		);
	};

	const handleDelete = async (company: ICompany) => {
		companies.splice(
			companies.findIndex(c => c === company),
			1
		);
		setCompanies(companies);
	};

	return (
		<CompanyStyled>
			<div key={company.id}>
				<div className="company__title">
					<h2>{company.id}</h2>
					<button type="button" aria-label="Delete Button" onClick={() => handleDelete(company)}>
						<img src={`${process.env.PUBLIC_URL}/images/trash.svg`} alt="Trash - Icon" />
					</button>
				</div>
				{handleAddress(company)}
				{handleTags(company)}
			</div>
		</CompanyStyled>
	);
};
