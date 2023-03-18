interface FormProps {
  name: string
  classname: string
  handleSubmit: (e: any) => void
  children: React.ReactNode
}

export const s = {
  base: `w-full flex flex-col gap-4`,
  comment: `w-full mt-10 flex flex-col gap-4`,
  auth: `w-full p-20 flex flex-col gap-4 bg-yellow border-[1px] border-solid border-gray dark:bg-black xsx:p-12`
}

export const Form = ({
  name,
  classname,
  handleSubmit,
  children
}: FormProps) => {
  return (
    <form name={name} className={classname} onSubmit={handleSubmit}>
      {children}
    </form>
  )
}
