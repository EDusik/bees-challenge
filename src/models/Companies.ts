export interface ICompaniesResponse {
	data: {
		address_2: string;
		address_3: string;
		brewery_type: string;
		city: string;
		country: string;
		county_province: string;
		created_at: Date;
		id: string;
		latitude: string;
		longitude: string;
		name: string;
		phone: string;
		postal_code: string;
		state: string;
		street: string;
		updated_at: Date;
		website_url: string;
	};
}

export interface ICompany {
	address_2: string;
	address_3: string;
	brewery_type: string;
	city: string;
	country: string;
	county_province: string;
	created_at: Date;
	id: string;
	latitude: string;
	longitude: string;
	name: string;
	phone: string;
	postal_code: string;
	state: string;
	street: string;
	updated_at: Date;
	website_url: string;
}
