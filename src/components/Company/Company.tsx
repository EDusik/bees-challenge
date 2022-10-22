import { ICompany } from "models/Companies";
import { CompanyStyled } from "./CompanyStyled";

interface ICompanyProps {
	company: ICompany;
}

export const Company = ({ company }: ICompanyProps) => {
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

	return (
		<CompanyStyled>
			<div key={company.id}>
				<h2>{company.id}</h2>
				<p>{handleAddress(company)}</p>
			</div>
		</CompanyStyled>
	);
};
