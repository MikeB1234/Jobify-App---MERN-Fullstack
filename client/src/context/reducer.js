import { MdPendingActions } from "react-icons/md"
import {
    DISPLAY_ALERT, CLEAR_ALERT,
    REGISTER_USER_BEGIN, REGISTER_USER_SUCCESS, REGISTER_USER_ERROR,
    LOGIN_USER_BEGIN, LOGIN_USER_SUCCESS, LOGIN_USER_ERROR,
    TOGGLE_SIDEBAR, LOGOUT_USER,
    UPDATE_USER_BEGIN, UPDATE_USER_SUCCESS, UPDATE_USER_ERROR,
    HANDLE_CHANGE, CLEAR_VALUES,
    CREATE_JOB_BEGIN, CREATE_JOB_SUCCESS, CREATE_JOB_ERROR
} from "./actions"
import { initialState } from "./appContext"

const reducer = (state, action) => {
    if (action.type === DISPLAY_ALERT) {
        return {
            ...state, LOGIN_USER_BEGIN,
            LOGIN_USER_SUCCESS,
            LOGIN_USER_ERROR,
            showAlert: true,
            alertType: 'danger',
            alertText: 'Please provide all values!'
        }
    }
    if (action.type === CLEAR_ALERT) {
        return {
            ...state,
            showAlert: false,
            alertType: '',
            alertText: ''
        }
    }
    if (action.type === REGISTER_USER_BEGIN) {
        return { ...state, isLoading: true }
    }
    if (action.type === REGISTER_USER_SUCCESS) {
        return {
            ...state,
            isLoading: false,
            token: action.payload.token,
            user: action.payload.user,
            userLocation: action.payload.location,
            jobLocation: action.payload.location,
            showAlert: true,
            alertType: 'success',
            alertText: 'User Created! Redirecting...'
        }
    }
    if (action.type === REGISTER_USER_ERROR) {
        return {
            ...state,
            isLoading: false,
            showAlert: true,
            alertType: 'danger',
            alertText: action.payload.msg,
        }
    }
    if (action.type === LOGIN_USER_BEGIN) {
        return { ...state, isLoading: true }
    }
    if (action.type === LOGIN_USER_SUCCESS) {
        return {
            ...state,
            isLoading: false,
            token: action.payload.token,
            user: action.payload.user,
            userLocation: action.payload.location,
            jobLocation: action.payload.location,
            showAlert: true,
            alertType: 'success',
            alertText: 'Login Successful! Redirecting...'
        }
    }
    if (action.type === LOGIN_USER_ERROR) {
        return {
            ...state,
            isLoading: false,
            showAlert: true,
            alertType: 'danger',
            alertText: action.payload.msg,
        }
    }
    if (action.type === TOGGLE_SIDEBAR) {
        return { ...state, showSidebar: !state.showSidebar }
    }
    if (action.type === LOGOUT_USER) {
        return {
            ...initialState,
            user: null,
            token: null,
            userLocation: '',
            jobLocation: '',
        }
    }
    if (action.type === UPDATE_USER_BEGIN) {
        return { ...state, isLoading: true }
    }
    if (action.type === UPDATE_USER_SUCCESS) {
        return {
            ...state,
            isLoading: false,
            token: action.payload.token,
            user: action.payload.user,
            userLocation: action.payload.location,
            jobLocation: action.payload.location,
            showAlert: true,
            alertType: 'success',
            alertText: 'User Profile Updated'
        }
    }
    if (action.type === UPDATE_USER_ERROR) {
        return {
            ...state,
            isLoading: false,
            showAlert: true,
            alertType: 'danger',
            alertText: action.payload.msg,
        }
    }
    if (action.type === HANDLE_CHANGE) {
        return {
            ...state,
            [action.payload.name]: action.payload.value
        }
    }
    if (action.type === CLEAR_VALUES) {
        return {
            ...state,
            isEditing: false,
            editJobId: '',
            position: '',
            company: '',
            jobLocation: state.userLocation,
            jobType: 'Full-Time',
            status: 'Pending',
        }
    }
    if (action.type === CREATE_JOB_BEGIN) {
        const initialState = {

        }
        return {
            ...state,
        }
    }
    if (action.type === CREATE_JOB_SUCCESS) {
        return {
            ...state,
        }
    }
    if (action.type === CREATE_JOB_ERROR) {
        return {
            ...state
        }
    }
    throw new Error(`no such action : ${action.type}`)
}

export default reducer