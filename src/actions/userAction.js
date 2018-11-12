import { auth, githubProvider, googleProvider } from '../firebase'
import { GET_USER, USER_STATUS } from '../actionTypes'

export const getUser = () => dispatch => {
    // Show loading status
    dispatch({
        type: USER_STATUS,
        payload: true
    })
    auth.onAuthStateChanged(user => {
        
        dispatch({
            type: GET_USER,
            payload: user
        })
        // Set loading to false
        dispatch({
            type: USER_STATUS,
            payload: false
        })
    })
}

export const googleLogin = () => dispatch => {
    auth.signInWithPopup(googleProvider)
}

export const githubLogin = () => dispatch => {
    auth.signInWithPopup(githubProvider)
}

export const logout = () => dispatch => {
    auth.signOut()
}