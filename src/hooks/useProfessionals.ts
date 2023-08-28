import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AllprofessionalsThunk, ProfessionalsByCategoryThunk } from "../store/slices/professionals.slices"
import { Professional } from "../utils/interfaces"
import axiosInstance from "../utils/getConfig"

export interface PropsProfessionals {
  professionals: Professional
}

export const useProfessionals = () => {
  const [categories, setCategories] = useState<any>()
  const { professionals } = useSelector((state: any) => state)
  const dispatch = useDispatch<any>()

  useEffect(() => {
    dispatch(AllprofessionalsThunk())
  }, [])

  const handleClick = (id: number) => {
    dispatch(ProfessionalsByCategoryThunk(id))
  }

  useEffect(() => {
    axiosInstance
    .get("/api/v1/categories/")
      .then(res => {

        setCategories(res.data.categories)
      })
      .catch(err => console.log(err))
  }, [])

  function handleSelectChange(selectedValue: any) {
    if (!selectedValue) {
      dispatch(AllprofessionalsThunk());
    } else {
        handleClick((selectedValue));

    }
  }

  return {
    categories,
    professionals,
    handleSelectChange,
    handleClick

  }
}