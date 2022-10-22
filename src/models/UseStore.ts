import { ICompany } from "./Companies";

export interface IUseStore {
	isLoading: boolean;
	fullName: string;
	companies: ICompany[];
	setCompanies: Function;
	setIsLoading: Function;
	setFullName: Function;
}
