import type { FieldError } from 'react-hook-form'

import type { InputProp } from 'types/type.ts'

import { error, input, label } from 'components/shared/Forms/forms.tsx'

const Input = ({ name, title, errors, ...rest }: InputProp) => {
  return (
    <fieldset className="w-full">
      <label className={label} htmlFor={name}>
        {title}
      </label>

      <input
        className={`${input} ${errors ? '!border-red-500' : 'border-initial'}`}
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

export default Input
