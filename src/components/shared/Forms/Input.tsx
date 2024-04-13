import type { FormProp } from 'types/types'

const Input = ({
  nameId,
  titleId,
  type,
  register,
  validationSchema,
  errors,
  errorText
}: FormProp) => {
  return (
    <fieldset className="w-full">
      <label className="mb-2 text-xl font-main" htmlFor={nameId}>
        {titleId}
      </label>

      <input
        {...register(nameId, validationSchema)}
        className="w-full py-3 px-6 text-base font-main rounded border-b-[2px] border-solid border-teal bg-transparent text-light dark:text-dark placeholder:text-light placeholder:dark:text-dark placeholder:text-opacity-80 focus:outline-none"
        id={nameId}
        type={type}
        name={nameId}
        placeholder={titleId}
      />
      {errors[nameId] && (
        <p className="mt-3 font-main text-red-500 text-sm">{errorText}</p>
      )}
    </fieldset>
  )
}

export default Input
