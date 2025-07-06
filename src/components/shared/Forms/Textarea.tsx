import type { FieldError } from 'react-hook-form'

import type { TextAreaProp } from 'types/type.ts'

import { error, input, label } from 'components/shared/Forms/forms.tsx'

const Textarea = ({ name, title, errors, ...rest }: TextAreaProp) => {
  return (
    <fieldset>
      <label className={label} htmlFor={name}>
        {title}
      </label>

      <textarea
        className={`${input} ${errors ? '!border-red-500' : 'border-initial'} h-[9rem] resize-y`}
        id={name}
        name={name}
        placeholder={title}
        {...rest}
      />
      {errors ? (
        <p className={error}>{(errors as FieldError).message}</p>
      ) : null}
    </fieldset>
  )
}

export default Textarea
