import { Company } from "components/Company";
import { Loader } from "components/shared/Loader";
import { ICompany } from "models/Companies";
import { useEffect, useState } from "react";
import { getCompanies } from "services/api";
import { ContainerStyled } from "styles/Container/ContainerStyles";
import { CompaniesStyled } from "./CompaniesStyled";

const ONE_SECOND_IN_MILLISECONDS = 1000;
interface ICompaniesState {
	companies: ICompany[];
	isLoading: boolean;
	anErrorOccurred: boolean;
}

export const Companies = () => {
	const [state, setState] = useState<ICompaniesState>({
		companies: [],
		isLoading: true,
		anErrorOccurred: false
	});

	useEffect(() => {
		const getCompaniesList = async () => {
			try {
				const { data } = await getCompanies();
				setState((previousState: any) => ({
					...previousState,
					companies: data
				}));
				console.log(data);
			} catch {
				setState((previousState: ICompaniesState) => ({
					...previousState,
					anErrorOccurred: true
				}));
			} finally {
				setTimeout(() => {
					setState((previousState: any) => ({
						...previousState,
						isLoading: false
					}));
				}, ONE_SECOND_IN_MILLISECONDS);
			}
		};

		getCompaniesList();
	}, []);

	return (
		<ContainerStyled>
			<CompaniesStyled>
				{!state.isLoading ? (
					<>
						{!state.anErrorOccurred ? (
							<>
								{state.companies?.map((company: any) => (
									<Company company={company} />
								))}
							</>
						) : (
							<div className="companies__container-error">
								<h3>An error has occurred </h3>
								<p>Please try again later.</p>
								<p>🍯🐝</p>
							</div>
						)}
					</>
				) : (
					<Loader />
				)}
			</CompaniesStyled>
		</ContainerStyled>
	);
};
