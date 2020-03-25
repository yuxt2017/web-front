// tslint:disable
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

// axios 配置
const CancelToken = axios.CancelToken;

axios.defaults.timeout = 5000;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'; // 配置请求头
axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8"; // 配置请求头
// axios.defaults.headers.post['Content-Type'] = 'text/plain;charset=utf-8'; // 配置请求头
// axios.defaults.baseURL = $core.use('http'); //确认协议和地址
axios.defaults.withCredentials = false; // axios 默认不发送cookie，需要全局设置true发送cookie

// 可根据开发环境和生产环境，设置axios网络请求的baseURL
// axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? '' : 'api';

// 代理设置网络请求的baseURL为api，代理转发替换为''
axios.defaults.baseURL = "/api";

console.log(process.env.NODE_ENV);

axios.interceptors.request.use(
  (config: any) => {
    if (config.method === "post") {
      //   config.data = qs.stringify(config.data)
    }
    const headers = {
      // 'X-Token': getToken()
    };
    Object.assign(config.headers, headers);

    // http请求config包含回调方法cancel，调用则取消http请求
    if (config && config.cancel) {
      config.cancelToken = new CancelToken(c => {
        // 强行中断请求要用到的
        // Vue.prototype.$cancel = c
        config.cancel(c);
      });
    }

    return config;
  },
  error => {
    // if(error.message.includes('timeout')){
    //   console.log("错误回调", error);
    //   return Promise.reject(error);
    // }
    return Promise.reject(error);
  }
);

// 返回状态判断
axios.interceptors.response.use(
  (res: AxiosResponse) => {
    let result: any = {
      success: false
    };
    if (res.status == 200) {
      result = res.data;
      if (result.code == 200) {
        result.success = true;
      } else {
        // 202 208等问题出来
      }
    } else {
      // 单独处理
    }
    return result;
  },
  error => {
    // 404等问题可以在这里处理
    return Promise.reject(error);
  }
);
const CryptoJS = require("crypto-js");
const key = CryptoJS.enc.Utf8.parse("ed16b1f8a9e648d4"); // 十六位十六进制数作为密钥
const iv = CryptoJS.enc.Utf8.parse("ed16b1f8a9e648d4"); //

// // 解密方法
function Decrypt(word: String) {
  var decrypt = CryptoJS.AES.decrypt(word, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });
  var decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
  if (decryptedStr != "") {
    return JSON.parse(decryptedStr);
  }
  return null;
}

// 加密方法
function Encrypt(data: string) {
  var dataJson = JSON.stringify(data);
  var key = CryptoJS.enc.Latin1.parse("ed16b1f8a9e648d4");
  var iv = CryptoJS.enc.Latin1.parse("ed16b1f8a9e648d4");
  return CryptoJS.AES.encrypt(dataJson, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC
  }).toString();
}

function iGetInnerText(testStr: string) {
  var resultStr;
  testStr.replace(/[ ]/g, ""); // 去掉空格
  resultStr = testStr.replace(/[\r\n]/g, ""); // 去掉回车换行
  return resultStr;
}

export default {
  post: (path: string, data: any, config: AxiosRequestConfig) => {
    return new Promise((resolve, reject) => {
      axios
        .post(path, Encrypt(data), config)
        .then(function(response) {
          resolve(response);
        })
        .catch(function(error) {
          reject(error);
        });
    });
  },
  get: (path: string, config: AxiosRequestConfig) => {
    return new Promise((resolve, reject) => {
      axios
        .get(path, config)
        .then(function(response) {
          resolve(response);
        })
        .catch(function(error) {
          reject(error);
        });
    });
  }
};
