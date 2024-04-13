import { FormProvider, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import isEmail from 'validator/lib/isEmail'

import type { ContactProp } from 'types/types'

import Input from 'shared/Forms/Input'
import Textarea from 'shared/Forms/Textarea'
import Checkbox from 'shared/Forms/Checkbox'
import { colors, sizes, positions, space } from 'shared/Button/button'

const formUrl = `${import.meta.env.PUBLIC_FORM_URL}`

const Form = () => {
  const methods = useForm<ContactProp>({
    mode: 'onChange'
  })

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = methods

  const onSubmit = handleSubmit((data) => {
    fetch(formUrl, {
      method: 'POST',
      headers: {
        Accept: 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(() => {
        reset()
        toast.success(`Thanks for reaching out. I'll get back to you soon.`)
      })
      .catch(() => {
        toast.error(
          'Oops, something went wrong. The form could not be submitted.'
        )
      })
  })

  return (
    <FormProvider {...methods}>
      <form
        name="contact"
        className="w-full flex flex-col gap-4"
        onSubmit={onSubmit}
      >
        <div className="flex flex-col gap-6">
          <div className="flex flex-col justify-between gap-y-6 gap-x-40 sm:flex-row">
            <Input
              nameId="name"
              titleId="Name"
              type="text"
              register={register}
              validationSchema={{
                required: true,
                minLength: 3,
                maxLength: 20,
                pattern: /^[A-Za-z]+$/i
              }}
              errors={errors}
              errorText="Please enter a valid name."
            />
            <Input
              nameId="email"
              titleId="Email"
              type="email"
              register={register}
              validationSchema={{
                required: true,
                validate: (input: string) => isEmail(input),
                minLength: 6,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i
              }}
              errors={errors}
              errorText="Please enter a valid email."
            />
          </div>

          <Textarea
            nameId="message"
            titleId="Message"
            register={register}
            validationSchema={{
              required: true
            }}
            errors={errors}
            errorText="Please enter a valid message."
          />

          <Checkbox register={register} errors={errors} />
        </div>

        <button
          className={`mt-10 ${colors.primary} ${sizes.base} ${positions.left} ${space.base}`}
          type="submit"
          disabled={isSubmitting}
        >
          Send
        </button>
      </form>
    </FormProvider>
  )
}

export default Form
