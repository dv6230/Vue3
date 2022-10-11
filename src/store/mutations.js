export default {
    Login: function (state, data) {
        state.user.userName = data.userName
        state.user.userId = data.userId
        state.isLogin = true
    },
    Logout: function (state) {
        state.user = {
            userName: '',
            userId: 0,
        };
        state.isLogin = false
        state.token = ''
    },
    Token: function (state, data) {
        state.token = data
    },
}