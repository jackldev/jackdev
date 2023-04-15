import { useEffect } from 'react'

import { useMenuStore } from 'store/index'

import DarkMode from 'shared/Darkmode'
import { Anchor } from 'shared/Button'

interface NavProps {
  navs: {
    data: {
      id: number
      slugs: string
      title: string
      link: string
    }
  }[]
}

const Navigation = ({ navs }: NavProps) => {
  const { toggleMenu } = useMenuStore()

  useEffect(() => {
    const links = document.querySelectorAll('.links')
    const idElement = document.querySelectorAll('.section')

    const paths = window.location.pathname

    const scrollId = window.localStorage.getItem(`scrollId`) as string

    if (links !== null) {
      links.forEach((link, id) =>
        link.addEventListener('click', () => {
          window.localStorage.setItem(`scrollId`, `${id + 1}`)

          if (paths !== '/') {
            window.location.replace('/')
          }

          if (idElement[+scrollId]) {
            idElement[id + 1].scrollIntoView({
              block: 'start',
              behavior: 'smooth'
            })
          }
        })
      )
    }

    if (idElement[+scrollId]) {
      idElement[+scrollId].scrollIntoView({
        block: 'start',
        behavior: 'smooth'
      })
    }

    const timer = setTimeout(() => {
      window.localStorage.removeItem('scrollId')
    }, 7000)

    return () => clearTimeout(timer)
  }, [])

  const s = {
    hidden: `mdx:visible mdx:translate-y-0`,
    show: `mdx:invisible mdx:translate-y-[-1000px]`
  }

  return (
    <ul
      className={`
      ${toggleMenu ? s.hidden : s.show}
      relative list-none w-full ml-12 flex justify-end items-center 
      mdx:fixed mdx:top-0 mdx:left-0 mdx:w-full mdx:h-full mdx:ml-0 mdx:flex-col mdx:justify-center mdx:text-center mdx:text-xl mdx:bg-black mdx:dark:bg-bgwhite mdx:transition-all mdx:delay-150 mdx:ease-out mdx:duration-300`}
    >
      {navs
        .sort((a, b) => a.data.id - b.data.id)
        .map(({ data }) => (
          <li
            key={data.id}
            className="mr-12 capitalize overflow-hidden mdx:mr-0 mdx:py-2.5"
          >
            <Anchor classname="font-main text-lg links text-white mdx:dark:text-black mdx:uppercase mdx:focus:outline-none mdx:text-[1.75rem]">
              {data.title}
            </Anchor>
          </li>
        ))}

      <DarkMode />
    </ul>
  )
}

export default Navigation
