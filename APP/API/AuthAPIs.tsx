import axios from "axios";
import UserModel from "../../model/UserModel";
import AppManager from "../AppManager";
import Constant from "../Constant";
import StorageManager from '../StorageManager'

export default class AuthAPIs {

    static baseURL = Constant.baseURL

    static endpoints = {
        register: AuthAPIs.baseURL + '/register',
        login: AuthAPIs.baseURL + '/login',
        verifyPhoneNumber: AuthAPIs.baseURL + '/verify-phone',
        updateProfile: AuthAPIs.baseURL + '/user/update-profile',
        sendVerificationCode: AuthAPIs.baseURL + '/send-verification-code',
        confirmPassword: AuthAPIs.baseURL + '/confirm-password',
        sendVerificationCodeForgotPass: AuthAPIs.baseURL + '/forget-password/send',
        verifyPhoneNumberForgotPass: AuthAPIs.baseURL + '/forget-password/verify',
        resetPassword: AuthAPIs.baseURL + '/forget-password/reset',
    }

    static headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }

    static async login(phone: string, password: string) {
        try {
            const data = {
                phone,
                password
            }
            let response = await axios.post(AuthAPIs.endpoints.login, data, { headers: AuthAPIs.headers })
            let user = new UserModel(response.data)
            StorageManager.setData(Constant.key.currentUser, user.toDictionary())
            AppManager.shared.currentUser = user
            return Promise.resolve(response.data)
        } catch (error) {
            console.log(error?.response)
            return Promise.reject(error)
        }
    }

    static async register(phone: string) {
        try {
            const data = {
                phone
            }
            let response = await axios.post(AuthAPIs.endpoints.register, data, { headers: AuthAPIs.headers })
            let user = new UserModel(response.data)
            AppManager.shared.currentUser = user
            return Promise.resolve(response.data)
        } catch (error) {
            console.log(error)
            return Promise.reject(error)
        }
    }

    static async verifyPhonenumber(phone: string, code: string) {
        try {
            const data = {
                phone,
                verification_code: code
            }
            let response = await axios.post(AuthAPIs.endpoints.verifyPhoneNumber, data, { headers: AuthAPIs.headers })
            return Promise.resolve(response.data)
        } catch (error) {
            return Promise.reject(error)
        }
    }

    static async setPassword(phone: string, password: string, current_password: string) {
        try {
            const data = {
                phone,
                password,
                current_password
            }
            const headers = {
                ...this.headers,
                Authorization: `Bearer ${AppManager.shared.currentUser?.accessToken}`
            }
            let response = await axios.post(AuthAPIs.endpoints.confirmPassword, data, { headers })
            return Promise.resolve(response.data)
        } catch (error) {
            console.log(error)
            return Promise.reject(error)
        }
    }

    static async sendVerificationCode(phone: string) {
        try {
            const data = {
                phone,
            }
            const headers = {
                ...this.headers,
            }
            let response = await axios.post(AuthAPIs.endpoints.sendVerificationCode, data, { headers })
            return Promise.resolve(response.data)
        } catch (error) {
            console.log(error)
            return Promise.reject(error)
        }
    }

    static async sendVerificationCodeForgotPassword(phone: string) {
        try {
            const data = {
                phone,
            }
            const headers = {
                ...this.headers,
            }
            let response = await axios.post(AuthAPIs.endpoints.sendVerificationCodeForgotPass, data, { headers })
            return Promise.resolve(response.data)
        } catch (error) {
            console.log(error)
            return Promise.reject(error)
        }
    }

    static async verifyPhonenumberForgotPassword(phone: string, code: string) {
        try {
            const data = {
                phone,
                verification_code: code
            }
            let response = await axios.post(AuthAPIs.endpoints.verifyPhoneNumberForgotPass, data, { headers: AuthAPIs.headers })
            return Promise.resolve(response.data?.data?.access_token)
        } catch (error) {
            return Promise.reject(error)
        }
    }

    static async resetPassword(phone: string, password: string, accessToken: string) {
        try {
            const data = {
                phone,
                password
            }
            const headers = {
                ...this.headers,
                Authorization: `Bearer ${accessToken}`
            }
            let response = await axios.post(AuthAPIs.endpoints.resetPassword, data, { headers })
            return Promise.resolve(response.data)
        } catch (error) {
            console.log(error)
            return Promise.reject(error)
        }
    }
}