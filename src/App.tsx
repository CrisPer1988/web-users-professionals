import { useDispatch } from "react-redux"
import Navigation from "./Navigation"

import {useEffect} from "react"
import { AllprofessionalsThunk } from "./store/slices/professionals.slices"

function App() {
  const dispatch = useDispatch<any>()

  useEffect(() => {
    dispatch(AllprofessionalsThunk())
  }, [])
  


  return (
    <>
     <Navigation />
    </>
  )
}

export default App
