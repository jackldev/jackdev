import type { FormProps } from "types/types";

const Textarea = ({
	nameId,
	titleId,
	value,
	register,
	validationSchema,
	errors,
	errorText,
	show,
	handleChange,
}: FormProps) => {
	return (
		<fieldset>
			<div className="flex justify-between items-end">
				<label className="mb-2 text-2xl font-bold font-main" htmlFor={nameId}>
					{titleId}
				</label>
				{show && <p className="text-sm">{`${value.length}/5000`}</p>}
			</div>
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
