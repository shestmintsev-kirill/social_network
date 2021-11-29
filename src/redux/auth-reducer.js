import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_ERROR = 'SET_ERROR';


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    errorMessage: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        case SET_ERROR:
            return {
                ...state,
                errorMessage: action.error
            }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, payload: { userId, email, login, isAuth } })
export const setError = (error) => ({ type: SET_ERROR, error })

export const getAuthUserData = () => (dispatch) => {
    return authAPI.me().then(data => {
        if (data.resultCode === 0) {
            let { id, login, email } = data.data;
            dispatch(setAuthUserData(id, email, login, true));
        }
    });
}

export const login = (loginData) => (dispatch) => {
    authAPI.login(loginData).then(data => {
        if (data.resultCode === 0) {
            dispatch(getAuthUserData());
        } else {
            dispatch(setError(data.messages.length ? data.messages[0] : 'Some error'));
        }
    });
}

export const logout = () => (dispatch) => {
    authAPI.logout().then(data => {
        if (data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    });
}

export default authReducer;