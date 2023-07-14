import type { FormProps } from "types/types";

const Input = ({
	nameId,
	titleId,
	type,
	value,
	register,
	validationSchema,
	errors,
	errorText,
	handleChange,
}: FormProps) => {
	return (
		<fieldset className="w-full">
			<label className="mb-2 text-xl font-main" htmlFor={nameId}>
				{titleId}
			</label>

			<input
				{...register(nameId, validationSchema)}
				className="w-full py-3 px-6 text-base font-main rounded border-b-[2px] border-solid border-teal bg-transparent text-white dark:text-black placeholder:text-white placeholder:dark:text-black placeholder:text-opacity-80 focus:outline-none"
				id={nameId}
				type={type}
				name={nameId}
				placeholder={titleId}
				value={value}
				onChange={handleChange}
			/>
			{errors[nameId] && (
				<p className="mt-3 font-main text-red text-sm">{errorText}</p>
			)}
		</fieldset>
	);
};

export default Input;
