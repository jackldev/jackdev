import type { InputHTMLAttributes, TextareaHTMLAttributes } from 'react'
import type { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form'

export type IconProp = {
  strokeColor: string
  class?: string
}

export type NavProp = {
  navs: {
    data: {
      id: number
      slugs: string
      title: string
      link: string
    }
  }[]
}

export type ProjectProp = {
  data: {
    id: number
    title: string
    link: string
    subtitle: string
    date: Date
    description: string
    techs: string[]
    image: {
      src: string
      alt: string
      width: number
      height: number
    }
  }
}

export interface InputProp extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  title: string
  className?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined
  children?: React.ReactNode
}

export interface TextAreaProp
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string
  title: string
  className?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined
  children?: React.ReactNode
}

export interface CheckBoxProp {
  name: string
  errors: FieldError | undefined
  children: React.ReactNode
}
