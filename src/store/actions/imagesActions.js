import { FETCH_IMAGES, SET_LOADING } from "../types"

const { Queries } = require("../../queries")

export const fetchImages = (page = 1) => async dispatch => {
    try {
        dispatch({ type: SET_LOADING, payload: true })
        const images = await Queries.getImages(page)
        dispatch({ type: FETCH_IMAGES, payload: images })
        dispatch({ type: SET_LOADING, payload: false })
    } catch (error) {
        console.log(error)
    }

}