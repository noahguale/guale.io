import React from "react"
import { Layout } from '../components/ui/Layout'
import { useIntersection } from "react-use"

export const Home = () => {

  const currentFilters = undefined
  const intersectionRef = React.useRef(null)
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: "-100px",
  })

  let showNav = false
  if (currentFilters || (intersection && !intersection.isIntersecting)) {
    showNav = true
  }


  return (
    <>
      <Layout children/>
      
    </>
  )
}

export default Home