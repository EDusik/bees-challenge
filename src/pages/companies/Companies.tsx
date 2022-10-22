import { useEffect, useState } from "react";
import { getCompanies } from "services/api";
import { Loader } from "components/shared/Loader";
import { Error } from "components/shared/Error";
import { Company } from "components/Company";
import { ICompany } from "models/Companies";
import { ContainerStyled } from "styles/Container/ContainerStyles";
import { CompaniesStyled } from "./CompaniesStyled";
import { Navbar } from "components/Navbar";
import useStore from "stores/useStore";

const ONE_SECOND_IN_MILLISECONDS = 1000;
interface ICompaniesState {
	companies: ICompany[];
	anErrorOccurred: boolean;
}

export const Companies = () => {
	const { setIsLoading, isLoading } = useStore();
	const [state, setState] = useState<ICompaniesState>({
		companies: [],
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
					setIsLoading(false);
				}, ONE_SECOND_IN_MILLISECONDS);
			}
		};

		getCompaniesList();
	}, []);

	return (
		<>
			<Navbar />
			<ContainerStyled>
				<CompaniesStyled>
					{!isLoading ? (
						<>
							{!state.anErrorOccurred ? (
								<>
									{state.companies?.map((company: ICompany) => (
										<div key={company.id}>
											<Company company={company} />
										</div>
									))}
								</>
							) : (
								<Error />
							)}
						</>
					) : (
						<Loader />
					)}
				</CompaniesStyled>
			</ContainerStyled>
		</>
	);
};
