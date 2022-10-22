import axios from "axios";
import { environment } from "environments/environment";
import { ICompaniesResponse } from "models/Companies";

const http = axios.create({
	baseURL: environment.baseUrl,
	headers: {
		"Content-type": "application/json"
	}
});

export const getCompanies = () => {
	return http.get<ICompaniesResponse>(`breweries`);
};
