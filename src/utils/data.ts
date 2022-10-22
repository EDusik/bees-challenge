export const handleNullData = (data: string | undefined, children: any) => {
	return data !== null || undefined ? children : null;
};
