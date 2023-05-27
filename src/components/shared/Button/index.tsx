export const base = "font-main";

export const colors = {
	base: "bg-transparent text-black",
	primary: "bg-teal text-white dark:text-white",
	secondary: "bg-black text-white dark:bg-white dark:text-black",
};

export const sizes = {
	small: "uppercase text-xs font-bold font-main",
	base: "uppercase text-base font-bold font-main",
	large: "uppercase text-lg font-bold font-main",
};

export const positions = {
	base: "w-fit",
	center: "block w-fit rounded-[5px] mx-auto ",
	right: "block w-fit rounded-[5px] ml-auto",
	left: "block w-fit rounded-[5px] mr-auto",
};

export const space = {
	small: "py-2 px-5 2xsx:px-4",
	base: "py-3 px-7 2xsx:px-5",
	large: "py-3 px-8 2xsx:px-7",
};

export const Anchor = ({
	classname,
	link,
	children,
}: {
	classname: string;
	link?: string;
	children: React.ReactNode;
}) => {
	return (
		<a className={`${base} ${classname}`} href={link} rel="prefetch">
			{children}
		</a>
	);
};

export const Button = ({
	classname,
	type,
	disabled,
	handleClick,
	children,
}: {
	classname: string;
	type: "submit" | "button" | "reset" | undefined;
	disabled?: boolean;
	handleClick?: () => void;
	children: React.ReactNode;
}) => {
	return (
		<button
			className={`${base} ${classname}`}
			type={type}
			disabled={disabled}
			onClick={handleClick}
		>
			{children}
		</button>
	);
};
