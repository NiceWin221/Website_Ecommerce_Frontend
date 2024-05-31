import { useState } from "react"

export default function Hovered() {
  const [hovered, setHovered] = useState(false)

  const handleMouseEnter = () => {
    setHovered(true)
  }

  const handleMouseLeave = () => {
    setHovered(false)
  }
  return{
    hovered,
    handleMouseEnter,
    handleMouseLeave
  }
}