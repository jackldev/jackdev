import type { FormProps } from "types/types";

const Textarea = ({
	nameId,
	titleId,
	value,
	register,
	validationSchema,
	errors,
	errorText,
	handleChange,
}: FormProps) => {
	return (
		<fieldset>
			<label className="mb-2 text-xl font-main" htmlFor={nameId}>
				{titleId}
			</label>

			<textarea
				{...register(nameId, validationSchema)}
				className="w-full h-[16rem] resize-y py-3 px-6 text-base font-main rounded border-b-[2px] border-solid border-teal bg-transparent text-white dark:text-black placeholder:text-white placeholder:dark:text-black placeholder:text-opacity-80 focus:outline-none"
				id={nameId}
				name={nameId}
				placeholder={titleId}
				value={value}
				onChange={handleChange}
			/>
			{errors[nameId] && <p className="mt-3 font-main text-red">{errorText}</p>}
		</fieldset>
	);
};

export default Textarea;
