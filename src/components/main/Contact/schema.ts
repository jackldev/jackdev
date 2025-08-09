import { z } from 'zod'

// CONTACT SCHEMA
export const contactFormSchema = z.object({
  name: z.string().min(3, { message: 'Please enter a name.' }).trim(),
  email: z.email({ message: 'Please enter an email address.' }),
  // phone: z
  //   .string()
  //   .min(10, { message: 'Please enter a phone number(10).' })
  //   .optional()
  //   .or(z.literal('')),
  // subject: z.string().min(1, { message: 'Please select a subject.' }),
  subject: z.string(),
  message: z.string().min(5, { message: 'Please enter a message.' }),
  checkbox: z.boolean().refine(
    (val) => {
      return val === true
    },
    { message: 'Please check checkbox' }
  )
})
