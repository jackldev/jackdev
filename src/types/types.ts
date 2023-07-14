export interface FormProps {
	nameId: string;
	titleId: string;
	type?: string;
	value: string;
	register: any;
	validationSchema?: any;
	errors: any;
	errorText: string;
	handleChange: (
		e:
			| React.ChangeEvent<HTMLInputElement>
			| React.ChangeEvent<HTMLSelectElement>
			| React.ChangeEvent<HTMLTextAreaElement>,
	) => void;
	children?: React.ReactNode;
}

export type MenuProps = {
	toggleMenu: boolean;
	showNav: boolean;
	setMenu: (clickMenu: boolean) => void;
	setNav: (showNav: boolean) => void;
};
