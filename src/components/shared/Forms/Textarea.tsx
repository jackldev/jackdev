import type { FormProp } from 'types/types'

import { error, input, label } from 'components/shared/Forms/forms'

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
      <label className={label} htmlFor={nameId}>
        {titleId}
      </label>

      <textarea
        {...register(nameId, validationSchema)}
        className={`${input} ${errors[nameId] ? 'border-red-500' : 'border-initial'} h-[14.5rem] resize-y`}
        id={nameId}
        name={nameId}
        placeholder={titleId}
      />
      {errors[nameId] && <p className={error}>{errorText}</p>}
    </fieldset>
  )
}

export default Textarea
