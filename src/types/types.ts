export interface NavProp {
  navs: {
    data: {
      id: number
      slugs: string
      title: string
      link: string
    }
  }[]
}

export interface FormProp {
  nameId: string
  titleId: string
  type?: string
  register: any
  validationSchema?: any
  errors: any
  errorText: string
  children?: React.ReactNode
}

export interface ContactProp {
  name: string
  email: string
  subject?: string
  message: string
  checkbox: boolean
}
