export default {
    LoginUser(context, status) {
        context.commit('Login', status)
    },
    LogoutUser(context, status) {
        context.commit('Logout', status)
    },
    UpdateToken(context, status) {
        context.commit('Token', status)
    }
}