import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import isEmail from 'validator/lib/isEmail'

import { Form as ContactForm, s as styles } from 'shared/Forms/Forms'
import Input from 'shared/Forms/Input'
import Textarea from 'shared/Forms/Textarea'
import Checkbox from 'shared/Forms/Checkbox'
import { Button, colors, sizes, positions, space } from 'shared/Button'

interface ContactFormProps {
  name: string
  email: string
  message: string
  checkbox: boolean
}

const initial_values = {
  name: '',
  email: '',
  message: '',
  checkbox: false
}

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    clearErrors,
    reset
  } = useForm<ContactFormProps>({
    mode: 'onChange'
  })

  const formUrl = `${import.meta.env.PUBLIC_FORM_URL}`

  const [values, setValues] = useState(initial_values)

  const { name, email, message, checkbox } = values

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    clearErrors(['name', 'email', 'message', 'checkbox'])
    setValues({ ...values, [e.target.name]: e.target.value, checkbox: true })
  }

  const onSubmit = handleSubmit((data, e) => {
    e?.preventDefault()

    const form = e?.target
    const formData = new FormData(form)

    fetch(formUrl, {
      method: 'POST',
      headers: {
        Accept: 'application/json'
      },
      body: formData
    })
      .then(() => {
        if (checkbox) e?.target.reset()

        setValues(initial_values)
        reset()

        toast.success(`Thanks for reaching out. I'll get back to you soon.`)
      })
      .catch(() => {
        setValues({ ...values, checkbox: false })

        toast.error(
          'Oops, something went wrong. The form could not be submitted.'
        )
      })
  })

  return (
    <ContactForm classname={styles.base} name="contact" handleSubmit={onSubmit}>
      <div className="flex flex-col gap-6">
        <div className="flex justify-between gap-y-6 gap-x-40 smx:flex-col">
          <Input
            nameId="name"
            titleId="Name"
            type="text"
            value={name}
            register={register}
            validationSchema={{
              required: true,
              minLength: 3,
              maxLength: 20,
              pattern: /^[A-Za-z]+$/i
            }}
            errors={errors}
            errorText="Please enter a valid name."
            handleChange={handleChange}
            show={false}
          />
          <Input
            nameId="email"
            titleId="Email"
            type="email"
            value={email}
            register={register}
            validationSchema={{
              required: true,
              validate: (input: string) => isEmail(input),
              minLength: 6,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i
            }}
            errors={errors}
            errorText="Please enter a valid email."
            handleChange={handleChange}
            show={false}
          />
        </div>

        <Textarea
          nameId="message"
          titleId="Message"
          value={message}
          register={register}
          validationSchema={{
            required: true,
            maxLength: 5000
          }}
          errors={errors}
          errorText="Please enter a valid message."
          handleChange={handleChange}
          show={true}
        />

        <Checkbox
          register={register}
          handleChange={handleChange}
          errors={errors}
        />
      </div>

      <Button
        classname={`mt-10 ${colors.primary} ${sizes.large} ${positions.left} ${space.base}`}
        type="submit"
        disabled={isSubmitting}
      >
        Send
      </Button>
    </ContactForm>
  )
}

export default Form
