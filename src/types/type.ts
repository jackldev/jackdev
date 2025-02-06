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

export type FormProp = {
  nameId: string
  titleId: string
  type?: string
  register: any
  validationSchema?: any
  errors: any
  errorText: string
  children?: React.ReactNode
}

export type ContactProp = {
  name: string
  email: string
  subject?: string
  message: string
  checkbox: boolean
}
