import axious from "axios";
import qs from "qs";
import cookie from "@/utils/cookie";
const URL = {
  user: "http://104.199.134.68:8080/user",
  monster: "http://104.199.134.68:8080/monster",
  store: "http://104.199.134.68:8080/store",
  course: "http://104.199.134.68:8080/course",
  stock: "http://104.199.134.68:8080/stock",
};

const config = () => {
  return {
    headers: { Authorization: "Bearer " + cookie.get("token") },
  };
};

const api = {
  login: (data) => {
    return axious.post(URL.user + "/login", data);
  },
  register: (data) => {
    return axious.post(URL.user + "/register", qs.stringify(data));
  },
  userfocusmonster: () => {
    return axious.get(URL.user + "/userfocusmonster", config());
  },
  changefocusmonster: (data) => {
    return axious.post(
      URL.user + "/changefocusmonster",
      qs.stringify(data),
      config()
    );
  },
  focushouse: (data) => {
    return axious.post(URL.user + "/focushouse", qs.stringify(data), config());
  },
  eatfood: (data) => {
    return axious.post(URL.user + "/eatfood", qs.stringify(data), config());
  },
  getmission: () => {
    return axious.get(URL.user + "/getmission", config());
  },
  finishmission1: () => {
    return axious.get(URL.user + "/finishmission1", config());
  },
  finishmission2: () => {
    return axious.get(URL.user + "/finishmission2", config());
  },
  userbuyweb: (data) => {
    return axious.get(URL.store + "/userbuyweb", {
      params: data,
      headers: { Authorization: "Bearer " + cookie.get("token") },
    });
  },
  userhave: () => {
    return axious.get(URL.store + "/userhave", config());
  },
  getdata: () => {
    return axious.get(URL.user + "/getdata", config());
  },
  getsalaryweb: () => {
    return axious.get(URL.user + "/getsalaryweb", config());
  },
  finishCourse: (data) => {
    return axious.post(
      URL.course + "/finishCourse",
      qs.stringify(data),
      config()
    );
  },
  getallcourse: () => {
    return axious.get(URL.course + "/getallcourse", config());
  },
  getachievementdata: () => {
    return axious.get(URL.user + "/getachievementdata", config());
  },
  getallstockdaydata: () => {
    return axious.get(URL.stock + "/getallstockdaydata", config());
  },
  userholdallstock: () => {
    return axious.get(URL.stock + "/userholdallstock", config());
  },
  setActor: (data) => {
    return axious.post(URL.user + "/setActor", qs.stringify(data), config());
  },
  sellstock: (data) => {
    return axious.post(URL.stock + "/sellstock", qs.stringify(data), config());
  },
  buystock: (data) => {
    return axious.post(URL.stock + "/buystock", qs.stringify(data), config());
  },
  get30before: (data) => {
    return axious.get(URL.stock + "/get30before", {
      params: data,
      headers: { Authorization: "Bearer " + cookie.get("token") },
    });
  },
  findtop10: () => {
    return axious.get(URL.user + "/findtop10", config());
  },
  getuserallmonsterdata: () => {
    return axious.get(URL.monster + "/getuserallmonsterdata", config());
  },
  guestlogin: () => {
    return axious.get(URL.user + "/guestlogin");
  },
  transformuser: (data) => {
    return axious.post(
      URL.user + "/transformuser",
      qs.stringify(data),
      config()
    );
  },
  sendemail: (data) => {
    return axious.post(URL.user + "/sendemail", qs.stringify(data));
  },
  resetpassword: (data) => {
    return axious.post(URL.user + "/resetpassword", qs.stringify(data));
  },
  gettime: () => {
    return axious.get(URL.stock + "/gettime");
  },
};

export default api;
