export interface ICompaniesResponse {
	data: {
		address_2: string | null;
		address_3: string | null;
		brewery_type: string;
		city: string;
		country: string;
		county_province: string | null;
		created_at: Date | string;
		id: string;
		latitude: string;
		longitude: string;
		name: string;
		phone: string;
		postal_code: string;
		state: string;
		street: string;
		updated_at: Date | string;
		website_url: string | null;
	};
}

export interface ICompany {
	address_2: string | null;
	address_3: string | null;
	brewery_type: string;
	city: string;
	country: string;
	county_province: string | null;
	created_at: Date | string;
	id: string;
	latitude: string;
	longitude: string;
	name: string;
	phone: string;
	postal_code: string;
	state: string;
	street: string;
	updated_at: Date | string;
	website_url: string | null;
	tag?: string;
}
