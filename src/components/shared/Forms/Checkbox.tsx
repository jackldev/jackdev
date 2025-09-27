import type { CheckBoxProp } from 'types/type.ts'

import { error } from 'components/shared/Forms/forms.tsx'

const ChecksBox = ({ name, errors, children }: CheckBoxProp) => {
  return (
    <fieldset className="w-fit">
      <label className="dark:text-light" htmlFor={name}>
        {children}

        <span className="font-main ml-1.5 inline-block cursor-pointer">
          {`I'm a human`}
        </span>
      </label>

      {errors ? <p className={error}>Please check the checkbox</p> : null}
    </fieldset>
  )
}

export default ChecksBox
