import { AuthAction } from "../reducers/authReducer";

export const logIn = (): AuthAction => ({
    type: 'logIn'
})
export const logOut = (): AuthAction => ({
    type: 'logOut'
})
export const changeFavIcon = (icon: string): AuthAction => ({
    type: 'changeFavIcon',
    payload: icon
})
export const changeUsername = (name: string): AuthAction => ({
    type: 'changeUsername',
    payload: name
})