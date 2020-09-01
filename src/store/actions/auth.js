import axios from 'axios'
import {AUTH_LOGOUT, AUTH_SUCCESS} from "./actionTypes";

export function auth(email, password, isLogin) {
    return async dispatch => {
        try {
            const authData = {
                email,
                password,
                returnSecureToken: true
            }

            let url

            if (isLogin) {
                url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDRSPeeA0eMODZSd-yU9iqwDnGQ-vFhigo'
            } else {
                url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDRSPeeA0eMODZSd-yU9iqwDnGQ-vFhigo'
            }

            const response = await axios.post(url, authData)
            const data = response.data

            const expirationDate = new Date(new Date().getTime() + data.expiresIn * 1000)

            localStorage.setItem('token', data.idToken)
            localStorage.setItem('userId', data.localId)
            localStorage.setItem('expirationDate', expirationDate)

            dispatch(authSuccess(data.idToken))

            dispatch(autoLogout(data.expiresIn))

            console.log(response.data, localStorage.token, localStorage.userId, localStorage.expirationDate)
        } catch (error) {
            console.log(error)
        }
    }
}

function authSuccess(token) {
    return {
        type: AUTH_SUCCESS,
        token
    }
}

function autoLogout(time) {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout())
        }, time * 1000)
    }
}

export function logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    localStorage.removeItem('expirationDate')
    return {
        type: AUTH_LOGOUT
    }
}

export function autoLogin() {

}