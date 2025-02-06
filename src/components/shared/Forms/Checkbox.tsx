import { checkinput, checklabel, error } from 'components/shared/Forms/forms.ts'

interface CheckBoxProps {
  register: any
  errors: any
}

const CheckBox = ({ register, errors }: CheckBoxProps) => {
  return (
    <fieldset className="relative w-fit">
      <label className={checklabel} htmlFor="checkbox">
        <input
          className={checkinput}
          {...register('checkbox', { required: true })}
          type="checkbox"
          name="checkbox"
          id="checkbox"
        />
        {`I'm a human`}
        <span className="checkspan block" />
      </label>

      {errors.checkbox && <p className={error}>Please check the checkbox</p>}
    </fieldset>
  )
}

export default CheckBox
