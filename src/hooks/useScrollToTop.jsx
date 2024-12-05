import { useEffect, useState } from 'react'

const UseScrollToTop = () => {
  const [scrollPosition, setScrollPosition] = useState(0)

  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollPosition(position)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      {scrollPosition > 500 && (
        <button
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            })
          }
          className='buttonArrowUp'
        >
          <img alt='arrow up' width={18} height={18} src={'/src/assets/arrowUp.svg'} />
        </button>
      )}
    </>
  )
}

export default UseScrollToTop
