export default {
    updateTest(context, status) {
        context.commit('TEST', status)     // mutation 中定義方法
    },
    LoginUser(context, status) {
        context.commit('Login', status)
    },
    LogoutUser(context, status) {
        context.commit('Logout', status)
    }
}