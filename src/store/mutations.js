export default {
    TEST: function (state, data) {      //status -> payload （載荷）
        state.test = data;
    },
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
    }
}