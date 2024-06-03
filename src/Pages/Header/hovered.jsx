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

  const [hovered2, setHovered2] = useState(false)
  const ref2 = useRef(null)
  const delayed1 = useRef(null)
  const delayed2 = useRef(null)
  const timeoutDelay1 = useRef(null)
  const timeoutDelay2 = useRef(null)
  const timeoutDelay3 = useRef(null)

  const [hovered3, setHovered3] = useState(false)
  const ref3 = useRef(null)
  const deley1 = useRef(null)
  const deley2 = useRef(null)
  const deley3 = useRef(null)
  const timeoutDeley1 = useRef(null)
  const timeoutDeley2 = useRef(null)
  const timeoutDeley3 = useRef(null)
  const timeoutDeley4 = useRef(null)

  const handleMouseEnter = () => {
    setHovered(true)
  }

  const handleMouseLeave = () => {
    setHovered(false)
  }

  const handleMouseEnter2 = () => {
    setHovered2(true)
  }

  const handleMouseLeave2 = () => {
    setHovered2(false)
  }

  const handleMouseEnter3 = () => {
    setHovered3(true)
  }

  const handleMouseLeave3 = () => {
    setHovered3(false)
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

  useEffect(() => {
    if (hovered2) {

      timeoutDelay1.current = setTimeout(() => {
        if (hovered2) {
          ref2.current.style.transition = "opacity 0.5s ease-in-out";
          ref2.current.style.opacity = "1";
          ref2.current.style.zIndex = "20";
        }
      }, 400);

      timeoutDelay2.current = setTimeout(() => {
        if (hovered2) {
          delayed1.current.style.top = "0"
          delayed1.current.style.opacity = "1"
          delayed1.current.style.transition = "opacity 0.8s cubic-bezier(0.25, 1, 0.5, 1), top 0.8s cubic-bezier(0.25, 1, 0.5, 1)"
        }
      }, 550)

      timeoutDelay3.current = setTimeout(() => {
        if (hovered2) {
          delayed2.current.style.top = "0"
          delayed2.current.style.opacity = "1"
          delayed2.current.style.transition = "opacity 0.8s cubic-bezier(0.25, 1, 0.5, 1), top 0.8s cubic-bezier(0.25, 1, 0.5, 1)"
        }
      }, 650)
    } else {
      ref2.current.style.transition = "none"
      ref2.current.style.opacity = "0"
      ref2.current.style.zIndex = "10"
      delayed1.current.style.top = "50px"
      delayed2.current.style.top = "50px"
      delayed1.current.style.opacity = "0"
      delayed2.current.style.opacity = "0"
    }

    return () => {
      clearTimeout(timeoutDelay1.current);
      clearTimeout(timeoutDelay2.current);
      clearTimeout(timeoutDelay3.current);
    }

  }, [hovered2])

  useEffect(() => {
    if (hovered3) {
      timeoutDeley1.current = setTimeout(() => {
        if (hovered3) {
          ref3.current.style.transition = "opacity 0.5s ease-in-out";
          ref3.current.style.opacity = "1";
          ref3.current.style.zIndex = "20";
        }
      }, 400)

      timeoutDeley2.current = setTimeout(() => {
        if (hovered3) {
          deley1.current.style.top = "0"
          deley1.current.style.opacity = "1"
          deley1.current.style.transition = "opacity 0.8s cubic-bezier(0.25, 1, 0.5, 1), top 0.8s cubic-bezier(0.25, 1, 0.5, 1)"
        }
      }, 550)

      timeoutDeley3.current = setTimeout(() => {
        if (hovered3) {
          deley2.current.style.top = "0"
          deley2.current.style.opacity = "1"
          deley2.current.style.transition = "opacity 0.8s cubic-bezier(0.25, 1, 0.5, 1), top 0.8s cubic-bezier(0.25, 1, 0.5, 1)"
        }
      }, 650)

      timeoutDeley4.current = setTimeout(() => {
        if (hovered3) {
          deley3.current.style.top = "0"
          deley3.current.style.opacity = "1"
          deley3.current.style.transition = "opacity 0.8s cubic-bezier(0.25, 1, 0.5, 1), top 0.8s cubic-bezier(0.25, 1, 0.5, 1)"
        }
      }, 650)
    } else {
      ref3.current.style.transition = "none"
      ref3.current.style.opacity = "0"
      ref3.current.style.zIndex = "10"
      deley1.current.style.top = "50px"
      deley2.current.style.top = "50px"
      deley3.current.style.top = "50px"
      deley1.current.style.opacity = "0"
      deley2.current.style.opacity = "0"
      deley3.current.style.opacity = "0"
    }
  }, [hovered3])

  return {
    ref,
    ref2,
    ref3,
    deley1,
    deley2,
    deley3,
    delayed1,
    delayed2,
    delay1,
    delay2,
    delay3,
    delay4,
    hovered,
    hovered2,
    hovered3,
    handleMouseEnter,
    handleMouseLeave,
    handleMouseEnter2,
    handleMouseLeave2,
    handleMouseEnter3,
    handleMouseLeave3
  }
}