'use client';

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CursorFollower() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  useEffect(() => {
    // Only activate on hover-capable devices
    const mediaQuery = window.matchMedia('(hover: hover)');
    if (!mediaQuery.matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnterPointer = () => setIsPointer(true);
    const handleMouseLeavePointer = () => setIsPointer(false);

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);
    document.documentElement.addEventListener('mouseenter', handleMouseEnter);

    // Track when hovering over clickable elements
    const clickables = document.querySelectorAll('a, button, [role="button"]');
    clickables.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnterPointer);
      el.addEventListener('mouseleave', handleMouseLeavePointer);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
      document.documentElement.removeEventListener('mouseenter', handleMouseEnter);
      clickables.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnterPointer);
        el.removeEventListener('mouseleave', handleMouseLeavePointer);
      });
    };
  }, [mouseX, mouseY, isVisible]);

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isPointer ? 2.5 : 1,
        }}
        transition={{ opacity: { duration: 0.2 }, scale: { duration: 0.2 } }}
      >
        <div
          className="rounded-full bg-saffron"
          style={{ width: 10, height: 10 }}
        />
      </motion.div>
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          x: useSpring(mouseX, { stiffness: 80, damping: 20 }),
          y: useSpring(mouseY, { stiffness: 80, damping: 20 }),
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          opacity: isVisible ? 0.4 : 0,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{ opacity: { duration: 0.2 }, scale: { duration: 0.3 } }}
      >
        <div
          className="rounded-full border border-saffron"
          style={{ width: 28, height: 28 }}
        />
      </motion.div>
    </>
  );
}