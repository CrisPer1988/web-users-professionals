import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AllprofessionalsThunk, ProfessionalsByCategoryThunk } from "../store/slices/professionals.slices"
import axios from "axios"

export const useProfessionals = () => {
    const [categories, setCategories] = useState()
  const { professionals } = useSelector((state: any) => state)
  const dispatch = useDispatch<any>()

  useEffect(() => {
    dispatch(AllprofessionalsThunk())
  }, [])

  const handleClick = (id: number) => {
    dispatch(ProfessionalsByCategoryThunk(id))
  }

  useEffect(() => {
    const url = "http://localhost:4600/api/v1/categories/"
    axios.get(url)
      .then(res => {
        console.log(res.data.categories);

        setCategories(res.data.categories)
      })
      .catch(err => console.log(err))
  }, [])

  function handleSelectChange(selectedValue: any) {
    if (selectedValue === "") {
      dispatch(AllprofessionalsThunk());
    } else {
      handleClick((selectedValue));
    }
  }

  return {
    categories,
professionals,
handleSelectChange

  }
}