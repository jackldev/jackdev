import { useEffect, useState } from 'react'

const DarkMode = () => {
  const [on, setOn] = useState(false)

  useEffect(() => {
    const checkbox = document.querySelector('#togglebox') as HTMLInputElement
    const html = document.querySelector('html') as HTMLHtmlElement

    if (localStorage.getItem('darkmode') === `true`) {
      checkbox.checked = true
      html.classList.add('dark')
      setOn(true)
    }

    if (localStorage.getItem('darkmode') === `false`) {
      checkbox.checked = false
      html.classList.remove('dark')
      setOn(false)
    }

    checkbox.addEventListener('click', e => {
      e.stopImmediatePropagation()

      localStorage.setItem('darkmode', `${checkbox.checked}`)

      if (checkbox.checked) {
        html.classList.add('dark')
        setOn(true)
      } else {
        html.classList.remove('dark')
        setOn(false)
      }
    })
  }, [])

  return (
    <div className="relative mr-4 flex justify-end items-center space-x-2 mdx:mx-0 mdx:my-6">
      <div>
        <label className="w-[3rem] flex items-center bg-gray rounded-[10px]">
          <input
            className="appearance-none peer"
            type="checkbox"
            id="togglebox"
          />
          <span className="w-6 h-6 flex items-center rounded-[50%] duration-300 ease-in-out cursor-pointer after:w-6 after:h-6 after:bg-black after:rounded-[50%] after:shadow-md after:duration-300 peer-checked:after:translate-x-6"></span>
        </label>
      </div>
      <span className="leading[1] text-xs text-white dark:text-black font-main capitalize mdx:text-white">
        {`Light ${on ? `on` : `off`}`}
      </span>
    </div>
  )
}

export default DarkMode
