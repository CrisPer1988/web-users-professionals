import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../utils/getConfig";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Professional } from "../utils/interfaces";


export const useProfessionalPage = () => {
    const { id } = useParams();
    const [showReview, setShowReview] = useState(false);
    const [handleErrors, sethandleErrors] = useState(false)
    const [modalReview, setModalReview] = useState(false)
    const [stateReview, setStateReview] = useState(false)
    const navigate = useNavigate()
    const { reset } = useForm()

    const handleShow = () => {
        if (!localStorage.getItem("token")) {
            navigate("/login")
        } else {
            return setShowReview(!showReview);
        }

    };

    const sendReview = (data: Professional) => {
        axiosInstance
            .post(`/professionals/reviews/${id}`, data)
            .then((res) => {
                console.log(res.data);
                setStateReview(!stateReview)
                setShowReview(false);
                setModalReview(true)
                setTimeout(() => {
                    setModalReview(false)
                }, 2000);
                reset()
            })
            .catch((err) => {
                sethandleErrors(false);
                sethandleErrors(true)
                setTimeout(() => {
                    sethandleErrors(false)
                }, 2500);

                console.log(err)
            });
    };
    return {
        handleErrors,
        modalReview,
        stateReview,
        handleShow,
        sendReview,
        id,
        showReview
    }
}