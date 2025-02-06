import { FormProvider, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import validator from 'validator'

import type { ContactProp } from 'types/type.ts'

import Input from 'components/shared/Forms/Input.tsx'
import Textarea from 'components/shared/Forms/Textarea.tsx'
import Checkbox from 'components/shared/Forms/Checkbox.tsx'
import {
  colors,
  sizes,
  positions,
  space,
  base
} from 'components/shared/Button/button.ts'

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
        className="flex w-full flex-col gap-8"
        name="contact"
        onSubmit={onSubmit}
      >
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
            validate: (input: string) => validator.isEmail(input),
            minLength: 6,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i
          }}
          errors={errors}
          errorText="Please enter a valid email."
        />

        <Input
          nameId="subject"
          titleId="Subject"
          type="text"
          register={register}
          validationSchema={{
            required: false,
            minLength: 3,
            maxLength: 20,
            pattern: /^[A-Za-z]+$/i
          }}
          errors={errors}
          errorText="Please enter a valid subject."
        />

        <div className="flex flex-col gap-4">
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
          className={`mt-3 w-full ${base} ${colors.primary} ${sizes.small} ${positions.left} ${space.small}`}
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
