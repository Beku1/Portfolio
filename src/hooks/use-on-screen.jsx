import { useEffect, useState } from "react"

export default function useOnScreen(ref) {

    const [isIntersecting, setIntersecting] = useState(false)
  
    const observer = new IntersectionObserver(
      ([entry]) => {
    
     return setIntersecting(entry.isIntersecting)
      }
    )
  
    useEffect(() => {
      observer.observe(ref.current)
      
      return () => { observer.disconnect() }
    }, [])
  
    return isIntersecting
  }