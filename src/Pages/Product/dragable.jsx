import { useState, useEffect, useRef } from "react";

export default function useDraggable() {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [initialPos, setInitialPos] = useState(0);
  const [transitionActive, setTransitionActive] = useState(false);
  const ref = useRef(null);
  const bar = useRef(null);

  useEffect(() => {
    const handleMouseUpGlobal = () => {
      if (isDragging) {
        setIsDragging(false);
        ref.current.style.transition = "transform 0.5s ease";
        bar.current.style.transition = "left 0.5s ease"; // Ensure the bar transition is set
        setTransitionActive(true);
        setTimeout(() => {
          setTransitionActive(false);
        }, 500);
      }
    };

    document.addEventListener("mouseup", handleMouseUpGlobal);

    return () => {
      document.removeEventListener("mouseup", handleMouseUpGlobal);
    };
  }, [isDragging]);

  const handleMouseDown = (e) => {
    if (transitionActive) return;
    setIsDragging(true);
    setStartX(e.clientX);
    const computedStyle = window.getComputedStyle(ref.current);
    const transform = computedStyle.transform;
    const translateX = transform.includes(",") ? parseInt(transform.split(",")[4]) : 0;
    setInitialPos(translateX);
    ref.current.style.transition = "none";
  };

  const handleMouseMove = (e) => {
    if (!isDragging || transitionActive) return;
    e.preventDefault();
    const walk = e.clientX - startX;
    ref.current.style.transform = `translateX(${initialPos + walk}px)`;
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      const childWidth = 245.7;
      const barMove = 12.5;
      const numChildren = ref.current.childNodes.length;
      const maxTranslateX = -(numChildren - 2) * childWidth;

      const computedStyle = window.getComputedStyle(ref.current);
      const transform = computedStyle.transform;
      const currentPos = transform.includes(",")
        ? parseInt(transform.split(",")[4])
        : 0;
      const distanceMoved = currentPos - initialPos;

      if (Math.abs(distanceMoved) > 30) {
        const moveDirection = distanceMoved > 0 ? 1 : -1;
        let moveTo = initialPos + moveDirection * childWidth;

        if (moveTo > 0) moveTo = 0; // Prevent moving past the first child
        if (moveTo < maxTranslateX) moveTo = maxTranslateX; // Prevent moving past the last two children

        ref.current.style.transform = `translateX(${moveTo}px)`;

        // Move the bar in the opposite direction
        let barLeft = parseFloat(bar.current.style.left) || 0;
        let newBarPos = barLeft - (moveDirection * barMove);
        newBarPos = Math.max(0, Math.min(100 - barMove, newBarPos)); // Ensure bar stays within 0% to 100%
        bar.current.style.left = `${newBarPos}%`;
        bar.current.style.transition = "left 0.5s ease"; // Apply transition to the bar
      } else {
        ref.current.style.transform = `translateX(${initialPos}px)`;
      }

      ref.current.style.transition = "transform 0.5s ease";
      setTransitionActive(true);
      setTimeout(() => {
        setTransitionActive(false);
      }, 500);

      setIsDragging(false);
    }
  };

  const handleMouseUp = () => {
    if (isDragging && !transitionActive) {
      const childWidth = 245.7;
      const barMove = 12.5;
      const numChildren = ref.current.childNodes.length;
      const maxTranslateX = -(numChildren - 2) * childWidth;

      const computedStyle = window.getComputedStyle(ref.current);
      const transform = computedStyle.transform;
      const finalPos = transform.includes(",") ? parseInt(transform.split(",")[4]) : 0;
      const distanceMoved = finalPos - initialPos;

      if (Math.abs(distanceMoved) > 30) {
        const moveDirection = distanceMoved > 0 ? 1 : -1;
        let moveTo = initialPos + moveDirection * childWidth;

        moveTo = Math.min(0, moveTo); // Clamp to 0 (start)
        moveTo = Math.max(maxTranslateX, moveTo); // Clamp to maxTranslateX (end)

        ref.current.style.transform = `translateX(${moveTo}px)`;

        // Move the bar in the opposite direction
        let barLeft = parseFloat(bar.current.style.left) || 0;
        let newBarPos = barLeft - (moveDirection * barMove);
        newBarPos = Math.max(0, Math.min(100 - barMove, newBarPos)); // Ensure bar stays within 0% to 100%
        bar.current.style.left = `${newBarPos}%`;
        bar.current.style.transition = "left 0.5s ease"; // Apply transition to the bar
      } else {
        ref.current.style.transform = `translateX(${initialPos}px)`;
      }

      ref.current.style.transition = "transform 0.5s ease";
      setTransitionActive(true);
      setTimeout(() => {
        setTransitionActive(false);
      }, 500);

      setIsDragging(false);
    }
  };

  return {
    bar,
    ref,
    handleMouseDown,
    handleMouseMove,
    handleMouseLeave,
    handleMouseUp,
  };
}
