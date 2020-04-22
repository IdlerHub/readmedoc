import Vue from 'vue'
const obj = {
    data: () => {
        return Vue.axios.get('/liveajax/GetHelpCenterHomeData')
    }
}
const data = () => {
    Vue.axios.get('/liveajax/GetHelpCenterHomeData')
}
export default {
    obj,
    data,
}

