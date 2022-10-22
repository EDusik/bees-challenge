import { ICompany } from "models/Companies";
import { CompanyStyled } from "./CompanyStyled";
import { handleNullData } from "components/utils/data";

interface ICompanyProps {
	company: ICompany;
}

export const Company = ({ company }: ICompanyProps) => {
	const handleAddress = (company: ICompany) => {
		return (
			<div>
				<p>{company.street}</p>
				<p>
					{company.city}, {company.state} - {company.country}
				</p>

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
			</div>
		);
	};

	const handleDelete = async (company: ICompany) => {
		console.log(company);
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
			</div>
		</CompanyStyled>
	);
};
