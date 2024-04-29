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

export interface ProjectProp {
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
