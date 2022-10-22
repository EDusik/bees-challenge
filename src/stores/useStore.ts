import { IUseStore } from "models/UseStore";
import create from "zustand";

const useStore = create<IUseStore>((set: Function, get: Function) => ({
	isLoading: true,
	fullName: "",

	setIsLoading: (isLoading: boolean) => {
		set(() => ({ isLoading: isLoading }));
	},

	setFullName: (fullName: boolean) => {
		set(() => ({ fullName: fullName }));
	}
}));

export default useStore;
