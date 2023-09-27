import axios from 'axios';

const request = axios.create({
  baseURL: 'https://example.com', // 设置请求的基础URL
  timeout: 5000, // 设置请求的超时时间
  headers: { // 设置请求的公共头部
    'Content-Type': 'application/json',
    'Authorization': 'Bearer token'
  }
});

// 添加请求拦截器
request.interceptors.request.use(
    config => {
      // 在发送请求之前做些什么，例如添加参数、显示加载动画等
      return config;
    },
    error => {
      // 对请求错误做些什么，例如隐藏加载动画、提示错误信息等
      return Promise.reject(error);
    }
  );
  
  // 添加响应拦截器
  request.interceptors.response.use(
    response => {
      // 对响应数据做点什么，例如判断状态码、隐藏加载动画等
      return response;
    },
    error => {
      // 对响应错误做点什么，例如隐藏加载动画、提示错误信息等
      return Promise.reject(error);
    }
  );
  
