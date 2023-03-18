import { useMenuStore } from 'store/index'

import IHamburger from 'shared/Icons/IHamburger'
import IClose from 'shared/Icons/IClose'
import { Button } from 'shared/Button'

const Hamburger = () => {
  const { toggleMenu, setMenu } = useMenuStore()

  const handleClick = () => setMenu(!toggleMenu)

  return (
    <div className="relative top-[-0.2rem] z-[9] w-[2.5rem] h-[2.5rem] lg:hidden mdx:ml-[1.25rem]">
      <Button
        classname={`
        ${toggleMenu ? `animate-fadein` : `animate-fadeout`}
        invert dark:invert-0`}
        type="button"
        handleClick={handleClick}
      >
        {toggleMenu ? <IClose /> : <IHamburger />}
      </Button>
    </div>
  )
}

export default Hamburger
