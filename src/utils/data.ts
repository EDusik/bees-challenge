import { ReactElement } from "react";

export const handleNullData = (data: string | undefined, children: ReactElement) => {
	return data !== null || undefined ? children : null;
};
