import { set } from "lodash";
import { useEffect, useState } from "react";

const useMedia = (query) => {
  const [width, setWidth] = useState(window.innerWidth)
  const [XS, setXS] = useState((width < 576))
  const [SM, setSM] = useState((width >= 576 && width < 768))
  const [MD, setMD] = useState((width >= 768 && width < 992))
  const [LG, setLG] = useState((width >= 992 && width < 1200))
  const [XL, setXL] = useState((width >= 1200 && width < 1400))
  const [XXL, setXXL] = useState((width >= 1400))
  const [isGreaterThanQuery, setIsGreaterThanQuery] = useState((width > query))
  const updateWidth = (e) => setWidth(e.target.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', updateWidth)
    return () => {
      window.removeEventListener('resize', updateWidth)
    }
  }, [])

  useEffect(() => {
    setIsGreaterThanQuery((width > query))
  }, [width])

  useEffect(() => {
    setXS((width < 576))
    setSM((width >= 576 && width < 768))
    setMD((width >= 768 && width < 992))
    setLG((width >= 992 && width < 1200))
    setXL((width >= 1200 && width < 1400))
    setXXL((width >= 1400))
  }, [width])

  return {
    dimensions: {
      XS, SM, MD, LG, XL, XXL
    },
    isGreaterThanQuery
  }
}

export default useMedia