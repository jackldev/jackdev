import type { FormProps } from 'types/types'

const Input = ({
  nameId,
  titleId,
  type,
  value,
  register,
  validationSchema,
  errors,
  errorText,
  show,
  handleChange
}: FormProps) => {
  return (
    <fieldset className="w-full">
      <div className="flex justify-between items-end">
        <label className="mb-2 text-2xl font-bold font-main" htmlFor={nameId}>
          {titleId}
        </label>
        {show && <p className="text-sm">{`${value.length}/10`}</p>}
      </div>
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
  )
}

export default Input
