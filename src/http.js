import axios from 'axios';
import { Message,Loading } from 'element-ui';
import router from './router'

let loading;

function startLoading() {
    loading=Loading.service({
        lock:true,
        text:'拼命加载中...',
        background:'rgba(0,0,0,0,7)'
    });
}
function endLoading() {
    loading.close();
}

//请求拦截
axios.interceptors.request.use(config =>
{
    //加载动画
    startLoading();
    if(localStorage.eleToken)
    {
        config.headers.token=localStorage.eleToken;
    }
    console.log(config);
    return config;
},error =>{
    return Promise.reject(error)
    });


//响应拦截

axios.interceptors.response.use(
    response =>{
        endLoading();
    return response;
    }, error =>{
        Message.error(error.response.data);
        const { status }=error.response;
        if (status==401)
        {
            Message.error('Token失效，请重新登录！');
            localStorage.removeItem('eleToken');
            router.push('/');
        }
        return Promise.reject(error)
    }
);



export  default  axios;
