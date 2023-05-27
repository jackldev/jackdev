interface CheckBoxProps {
	register: any;
	handleChange: (
		e:
			| React.ChangeEvent<HTMLInputElement>
			| React.ChangeEvent<HTMLSelectElement>
			| React.ChangeEvent<HTMLTextAreaElement>,
	) => void;
	errors: any;
}

const CheckBox = ({ register, handleChange, errors }: CheckBoxProps) => {
	return (
		<fieldset className="relative w-fit">
			<label
				className="flex items-center mb-0 text-lg font-main cursor-pointer checklabel"
				htmlFor="checkbox"
			>
				<input
					className="w-[2.5rem] h-[2.5rem] mr-3 appearance-none bg-transparent border-[2px] border-solid border-teal rounded-[2px] outline-none transition delay-300 ease-in curser-pointer checkinput checked:bg-transparent checked:border checked:border-solid checked:border-gray active:border active:border-solid active:border-black"
					{...register("checkbox", { required: true })}
					type="checkbox"
					name="checkbox"
					id="checkbox"
				/>
				{`I'm a human.`}
				<span className="block checkspan" onChange={handleChange} />
			</label>

			{errors.checkbox && (
				<p className="mt-3 text-red text-base font-main">
					Please check the checkbox.
				</p>
			)}
		</fieldset>
	);
};

export default CheckBox;
