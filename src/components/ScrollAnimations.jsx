import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { motion, useAnimation, useInView } from 'framer-motion'

gsap.registerPlugin(ScrollTrigger)

export const ScrollReveal = ({ children, delay = 0 }) => {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return

    gsap.fromTo(
      ref.current,
      {
        opacity: 0,
        y: 40
      },
      {
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay,
        ease: 'power3.out'
      }
    )

    return () => {
      if (ref.current?.scrollTrigger) {
        ref.current.scrollTrigger.kill()
      }
    }
  }, [delay])

  return <div ref={ref}>{children}</div>
}

export const StaggerReveal = ({ children, staggerDelay = 0.1 }) => {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return

    const items = ref.current.querySelectorAll('[data-stagger]')
    if (items.length === 0) return

    gsap.fromTo(
      items,
      {
        opacity: 0,
        y: 30
      },
      {
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: staggerDelay,
        ease: 'power2.out'
      }
    )

    return () => {
      if (ref.current?.scrollTrigger) {
        ref.current.scrollTrigger.kill()
      }
    }
  }, [staggerDelay])

  return <div ref={ref}>{children}</div>
}

export const TextReveal = ({ children, delay = 0 }) => {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return

    gsap.fromTo(
      ref.current,
      {
        opacity: 0,
        y: 30
      },
      {
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay,
        ease: 'power3.out'
      }
    )

    return () => {
      if (ref.current?.scrollTrigger) {
        ref.current.scrollTrigger.kill()
      }
    }
  }, [delay])

  return <div ref={ref}>{children}</div>
}

export const ImageReveal = ({ children, delay = 0 }) => {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return

    gsap.fromTo(
      ref.current,
      {
        opacity: 0,
        scale: 0.9
      },
      {
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        opacity: 1,
        scale: 1,
        duration: 0.8,
        delay,
        ease: 'power2.out'
      }
    )

    return () => {
      if (ref.current?.scrollTrigger) {
        ref.current.scrollTrigger.kill()
      }
    }
  }, [delay])

  return <div ref={ref}>{children}</div>
}

export const HoverLift = ({ children, className = '' }) => {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return

    const el = ref.current

    const handleMouseEnter = () => {
      gsap.to(el, {
        duration: 0.4,
        y: -8,
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
        ease: 'power2.out',
        overwrite: 'auto'
      })
    }

    const handleMouseLeave = () => {
      gsap.to(el, {
        duration: 0.4,
        y: 0,
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
        ease: 'power2.out',
        overwrite: 'auto'
      })
    }

    el.addEventListener('mouseenter', handleMouseEnter)
    el.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      el.removeEventListener('mouseenter', handleMouseEnter)
      el.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <div ref={ref} className={`card-hover-lift ${className}`}>
      {children}
    </div>
  )
}

// Framer Motion Components for Mobile-Optimized Animations
export const MobileCardReveal = ({ children, index = 0 }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      {children}
    </motion.div>
  )
}

export const MobileStaggerReveal = ({ children }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
          }
        }
      }}
    >
      {children}
    </motion.div>
  )
}

export const MobileTextReveal = ({ children }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      {children}
    </motion.div>
  )
}

export const MobileHoverLift = ({ children }) => {
  return (
    <motion.div
      whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)" }}
      whileTap={{ scale: 0.98 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20
      }}
    >
      {children}
    </motion.div>
  )
}
