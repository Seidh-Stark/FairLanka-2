import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const useScrollReveal = () => {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return

    gsap.to(ref.current, {
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 80%',
        end: 'top 50%',
        toggleActions: 'play none none reverse'
      },
      duration: 0.8,
      opacity: 1,
      y: 0,
      ease: 'power3.out'
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return ref
}

export const useScrollStagger = () => {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return

    const children = ref.current.querySelectorAll('[data-stagger]')
    if (children.length === 0) return

    gsap.from(children, {
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      },
      duration: 0.6,
      opacity: 0,
      y: 30,
      stagger: 0.1,
      ease: 'power2.out'
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return ref
}

export const useTextReveal = () => {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return

    gsap.to(ref.current, {
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      },
      duration: 1,
      opacity: 1,
      y: 0,
      ease: 'power3.out'
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return ref
}

export const useImageZoom = () => {
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
        duration: 0.8,
        opacity: 1,
        scale: 1,
        ease: 'power2.out'
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return ref
}

export const useHoverLift = () => {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return

    const el = ref.current

    const onMouseEnter = () => {
      gsap.to(el, {
        duration: 0.4,
        y: -8,
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
        ease: 'power2.out',
        overwrite: 'auto'
      })
    }

    const onMouseLeave = () => {
      gsap.to(el, {
        duration: 0.4,
        y: 0,
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
        ease: 'power2.out',
        overwrite: 'auto'
      })
    }

    el.addEventListener('mouseenter', onMouseEnter)
    el.addEventListener('mouseleave', onMouseLeave)

    return () => {
      el.removeEventListener('mouseenter', onMouseEnter)
      el.removeEventListener('mouseleave', onMouseLeave)
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return ref
}
