import { useEffect, useRef, useState } from "react"

export default function Hovered() {
  const [hovered, setHovered] = useState(false)
  const ref = useRef(null)
  const delay1 = useRef(null)
  const delay2 = useRef(null)
  const delay3 = useRef(null)
  const delay4 = useRef(null)
  const timeoutId1 = useRef(null)
  const timeoutId2 = useRef(null)
  const timeoutId3 = useRef(null)
  const timeoutId4 = useRef(null)
  const timeoutId5 = useRef(null)

  const handleMouseEnter = () => {
    setHovered(true)
  }

  const handleMouseLeave = () => {
    setHovered(false)
  }

  useEffect(() => {
    if (hovered) {

      timeoutId1.current = setTimeout(() => {
        if (hovered) {
          ref.current.style.transition = "opacity 0.5s ease-in-out";
          ref.current.style.opacity = "1";
          ref.current.style.zIndex = "20";
        }
      }, 400);

      timeoutId2.current = setTimeout(() => {
        if (hovered) {
          delay1.current.style.top = "0";
          delay1.current.style.opacity = "1"
          delay1.current.style.transition = "opacity 1s cubic-bezier(0.25, 1, 0.5, 1), top 1s cubic-bezier(0.25, 1, 0.5, 1)"
        }
      }, 550);
      timeoutId3.current = setTimeout(() => {
        if (hovered) {
          delay2.current.style.top = "0";
          delay2.current.style.opacity = "1"
          delay2.current.style.transition = "opacity 0.9s cubic-bezier(0.25, 1, 0.5, 1), top 0.9s cubic-bezier(0.25, 1, 0.5, 1)"
        }
      }, 650);
      timeoutId4.current = setTimeout(() => {
        if (hovered) {
          delay3.current.style.top = "0";
          delay3.current.style.opacity = "1"
          delay3.current.style.transition = "opacity 0.8s cubic-bezier(0.25, 1, 0.5, 1), top 0.8s cubic-bezier(0.25, 1, 0.5, 1)"
        }
      }, 750);
      timeoutId5.current = setTimeout(() => {
        if (hovered) {
          delay4.current.style.top = "0";
          delay4.current.style.opacity = "1"
          delay4.current.style.transition = "opacity 0.7s cubic-bezier(0.25, 1, 0.5, 1), top 0.7s cubic-bezier(0.25, 1, 0.5, 1)"
        }
      }, 800);

    } else {
      ref.current.style.transition = "none"
      ref.current.style.opacity = "0"
      ref.current.style.zIndex = "10"
      delay1.current.style.top = "50px"
      delay2.current.style.top = "50px"
      delay3.current.style.top = "50px"
      delay4.current.style.top = "50px"
      delay1.current.style.opacity = "0"
      delay2.current.style.opacity = "0"
      delay3.current.style.opacity = "0"
      delay4.current.style.opacity = "0"
    }

    return () => {
      clearTimeout(timeoutId1.current);
      clearTimeout(timeoutId2.current);
      clearTimeout(timeoutId3.current);
      clearTimeout(timeoutId4.current);
      clearTimeout(timeoutId5.current);
    };

  }, [hovered])

  return {
    delay1,
    delay2,
    delay3,
    delay4,
    ref,
    hovered,
    handleMouseEnter,
    handleMouseLeave
  }
}