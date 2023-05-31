/*
 * @Description:
 * @Author: 李超越
 * @Date: 2023-05-31 10:56:54
 * @LastEditTime: 2023-05-31 11:09:32
 * @LastEditors: 李超越
 */
import axios from "axios";
import store from "@/store";
import { showMessage } from "./status";
let baseURL =
  process.env.NODE_ENV === "development"
    ? "dev.com"
    : process.env.NODE_ENV === "production"
    ? "pro.com"
    : "test.com";

axios.defaults.baseURL = baseURL;

axios.defaults.headers.post["Content-Type"] = "application/json;charSet=UTF-8";

axios.defaults.headers.get["Content-Type"] = "application/json;charSet=UTF-8";

axios.defaults.headers.put["Content-Type"] = "application/json;charSet=UTF-8";

axios.defaults.headers.delete["Content-Type"] =
  "application/json;charSet=UTF-8";

axios.defaults.headers.patch["Content-Type"] = "application/json;charSet=UTF-8";

axios.interceptors.request.use(
  (config) => {
    let Token = store.getters["token"];
    if (Token) {
      config.headers.Authorization = `Bearer ${Token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    if (response.status !== 200) {
      console.log("%c⧭⧭⧭", "color: #005299", "请求信息", response);
      return Promise.reject(new Error(showMessage(response.status)));
    } else {
      return response;
    }
  },
  (error) => {
    console.log(`err${error}`);
    return Promise.reject(error);
  }
);
export default {
  /**
  
    * get
  
    * @param url
  
    * @param params
  
    * @returns {Promise}
  
    */

  get(url, params = {}) {
    return new Promise((resolve, reject) => {
      axios
        .get(url, { params })
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  /**
  
    * post
  
    * @param url
  
    * @param params
  
    * @returns {Promise}
  
    */

  post(url, params = {}) {
    return new Promise((resolve, reject) => {
      axios.post(url, params).then(
        (res) => {
          resolve(res.data);
        },
        (err) => {
          reject(err);
        }
      );
    });
  },

  /**
  
    * delete
  
    * @param url
  
    * @param params
  
    * @returns {Promise}
  
    */

  delete(url, params = {}) {
    return new Promise((resolve, reject) => {
      axios
        .delete(url, params)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  /**
  
    * put 
  
    * @param url
  
    * @param params
  
    * @returns {Promise}
  
    */

  put(url, params = {}) {
    return new Promise((resolve, reject) => {
      axios
        .put(url, params)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  /**
  
    * patch 
  
    * @param url
  
    * @param params
  
    * @returns {Promise}
  
    */

  patch(url, params = {}) {
    return new Promise((resolve, reject) => {
      axios
        .patch(url, params)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};
