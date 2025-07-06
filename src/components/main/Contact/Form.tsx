import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { contactFormSchema } from 'components/main/Contact/schema.ts'

import {
  base,
  colors,
  positions,
  sizes,
  space
} from 'components/shared/Button/button.tsx'
import Checksbox from 'components/shared/Forms/Checkbox.tsx'
import Input from 'components/shared/Forms/Input.tsx'
import Textarea from 'components/shared/Forms/Textarea.tsx'
import { checkinput } from 'components/shared/Forms/forms.tsx'
import { Checkbox } from 'components/ui/checkbox.tsx'

type contactFormInputs = z.infer<typeof contactFormSchema>

const formUrl = `${import.meta.env.PUBLIC_FORM_URL}`

const Form = () => {
  const methods = useForm<contactFormInputs>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onChange'
  })

  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
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
        toast(`Thanks for reaching out. I'll get back to you soon.`)
      })
      .catch(() => {
        toast('Oops, something went wrong. The form could not be submitted.')
      })
  })

  return (
    <FormProvider {...methods}>
      <form
        className="flex w-full flex-col gap-6"
        name="contact"
        onSubmit={onSubmit}
      >
        <div className="flex flex-col lg:flex-row gap-6 lg:justify-between">
          <Input
            {...register('name')}
            name="name"
            title="Name"
            type="text"
            errors={errors.name}
          />

          <Input
            {...register('email')}
            name="email"
            title="Email"
            type="email"
            errors={errors.email}
          />
        </div>

        <Input
          {...register('subject')}
          name="subject"
          title="Subject"
          type="text"
          errors={errors.subject}
        />

        <div className="flex flex-col gap-4">
          <Textarea
            {...register('message')}
            name="message"
            title="Message"
            errors={errors.message}
          />

          <Checksbox name="checkbox" errors={errors.checkbox}>
            <Checkbox
              {...register('checkbox')}
              className={`cursor-pointer ${checkinput} ${errors.checkbox ? '!border-red-500' : 'border-teal'}`}
              id="checkbox"
              name="checkbox"
              onCheckedChange={(checked) => {
                if (checked) {
                  clearErrors('checkbox')
                }

                setValue('checkbox', checked ? true : false)
              }}
            />
          </Checksbox>
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
