import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        username:'',
        cartcount:0    
    },
    mutations: {
        saveUsername(state,username) {
            state.username = username;
        },
        saveCartcount(state,cartcount) {
            state.cartcount = cartcount;
        }
    },
    actions: {
        saveUsername(ctx,username) {
            ctx.commit('saveUsername',username);
        },
        saveCartcount(ctx,cartcount) {
            ctx.commit('saveCartcount',cartcount)
        }
    }
})