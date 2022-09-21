import axios from 'axios'
axios.defaults.baseURL = "/api"
axios.defaults.timeout = 8000
axios.interceptors.request.use((config)=> {
  return config
})
axios.interceptors.response.use((res)=>{
  // console.log("res =>",res)
  // let url = window.location.hash
  let response = res.data;
  if(response.status === 0) {
    return response.data
  }else if(response.status === 10){
    this.$message.error("需要登录")
    window.location.href = "/#/login";
    // return response.msg;
  }else {
    this.$message.error("错误",response.msg)
    return Promise.reject(response.msg);
  }
})
export default axios