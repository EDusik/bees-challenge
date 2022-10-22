import { ICompany } from "models/Companies";
import { IUseStore } from "models/UseStore";
import create from "zustand";

const useStore = create<IUseStore>((set: Function, get: Function) => ({
	isLoading: true,
	fullName: "",
	companies: [],

	setIsLoading: (isLoading: boolean) => {
		set(() => ({ isLoading: isLoading }));
	},

	setFullName: (fullName: boolean) => {
		set(() => ({ fullName: fullName }));
	},

	setCompanies: (companies: ICompany[]) => {
		set(() => ({ companies: companies }));
	}
}));

export default useStore;
