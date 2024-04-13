import type { FormProp } from 'types/types'

const Textarea = ({
  nameId,
  titleId,
  register,
  validationSchema,
  errors,
  errorText
}: FormProp) => {
  return (
    <fieldset>
      <label className="mb-2 text-xl font-main" htmlFor={nameId}>
        {titleId}
      </label>

      <textarea
        {...register(nameId, validationSchema)}
        className="w-full h-[12rem] resize-y py-3 px-6 text-base font-main rounded border-b-[2px] border-solid border-teal bg-transparent text-light dark:text-dark placeholder:text-light placeholder:dark:text-dark placeholder:text-opacity-80 focus:outline-none"
        id={nameId}
        name={nameId}
        placeholder={titleId}
      />
      {errors[nameId] && (
        <p className="mt-3 font-main text-red-500">{errorText}</p>
      )}
    </fieldset>
  )
}

export default Textarea
