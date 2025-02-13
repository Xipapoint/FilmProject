import { defineStore } from 'pinia'

import { toast } from 'vue3-toastify'

export const useAuthStore = defineStore('authStore', {
    state: () => ({
        isAuthenticated: false,
        email: '',
        name: '',
        password: ''
    }),
    actions: {
        showToast(msg: string) {
            toast(msg)
        },
        showSuccess(msg: string) {
            this.showToast(msg)
        },
        showError(msg: string) {
            this.showToast(msg)
        },
        showGenericError() {
            this.showError('Failed! Something went wrong!')
        },
        showResMsgOrGenericError(res: any) {
            if (res.data.msg) {
                this.showError(res.data.msg)
            } else {
                this.showGenericError()
            }
        },
        // auth actions
        async login(email: string, name: string, password: string, ) {
            this.$state = {email, name, password, isAuthenticated: true}
        },
        async logout() {
            this.$state = {email: '', name: '', password: '', isAuthenticated: false}
            window.location.reload()
        },
    },
    getters: {

    },
})