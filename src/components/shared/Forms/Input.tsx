import type { FormProp } from 'types/type.ts'

import { error, input, label } from 'components/shared/Forms/forms.ts'

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
      <label className={label} htmlFor={nameId}>
        {titleId}
      </label>

      <input
        {...register(nameId, validationSchema)}
        className={`${input} ${errors[nameId] ? 'border-red-500' : 'border-initial'}`}
        id={nameId}
        type={type}
        name={nameId}
        placeholder={titleId}
      />
      {errors[nameId] && <p className={error}>{errorText}</p>}
    </fieldset>
  )
}

export default Input
