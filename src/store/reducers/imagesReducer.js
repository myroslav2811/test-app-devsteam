import { FETCH_IMAGES, SET_LOADING } from "../types"

const initialState = {
    images: [],
    loading: true
}

export const imagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_IMAGES:
            return { ...state, images: [...state.images, ...action.payload] }
        case SET_LOADING:
            return { ...state, loading: action.payload }
        default:
            return state
    }
}