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

let key = "Bearer " + cookie.get("token");

const api = {
  login: (data) => {
    return axious.post(URL.user + "/login", data);
  },
  register: (data) => {
    return axious.post(URL.user + "/register", qs.stringify(data));
  },
  userfocusmonster: () => {
    return axious.get(URL.user + "/userfocusmonster", {
      headers: { Authorization: key },
    });
  },
  changefocusmonster: (data) => {
    return axious.post(URL.user + "/changefocusmonster", qs.stringify(data), {
      headers: { Authorization: key },
    });
  },
  focushouse: (data) => {
    return axious.post(URL.user + "/focushouse", qs.stringify(data), {
      headers: { Authorization: key },
    });
  },
  eatfood: (data) => {
    return axious.post(URL.user + "/eatfood", qs.stringify(data), {
      headers: { Authorization: key },
    });
  },
  getmission: () => {
    return axious.get(URL.user + "/getmission", {
      headers: { Authorization: key },
    });
  },
  finishmission1: () => {
    return axious.get(URL.user + "/finishmission1", {
      headers: { Authorization: key },
    });
  },
  finishmission2: () => {
    return axious.get(URL.user + "/finishmission2", {
      headers: { Authorization: key },
    });
  },
  userbuyweb: (data) => {
    return axious.get(URL.store + "/userbuyweb", {
      headers: { Authorization: key },
      params: data,
    });
  },
  userhave: () => {
    return axious.get(URL.store + "/userhave", {
      headers: { Authorization: key },
    });
  },
  getdata: () => {
    return axious.get(URL.user + "/getdata", {
      headers: { Authorization: key },
    });
  },
  getsalaryweb: () => {
    return axious.get(URL.user + "/getsalaryweb", {
      headers: { Authorization: key },
    });
  },
  finishCourse: (data) => {
    return axious.post(URL.course + "/finishCourse", qs.stringify(data), {
      headers: { Authorization: key },
    });
  },
  getallcourse: () => {
    return axious.get(URL.course + "/getallcourse", {
      headers: { Authorization: key },
    });
  },
  getachievementdata: () => {
    return axious.get(URL.user + "/getachievementdata", {
      headers: { Authorization: key },
    });
  },
  getallstockdaydata: () => {
    return axious.get(URL.stock + "/getallstockdaydata", {
      headers: { Authorization: key },
    });
  },
  userholdallstock: () => {
    return axious.get(URL.stock + "/userholdallstock", {
      headers: { Authorization: key },
    });
  },
  setActor: (data) => {
    return axious.post(URL.user + "/setActor", qs.stringify(data), {
      headers: { Authorization: key },
    });
  },
  sellstock: (data) => {
    return axious.post(URL.stock + "/sellstock", qs.stringify(data), {
      headers: { Authorization: key },
    });
  },
  buystock: (data) => {
    return axious.post(URL.stock + "/buystock", qs.stringify(data), {
      headers: { Authorization: key },
    });
  },
  get30before: (data) => {
    return axious.get(URL.stock + "/get30before", {
      params: data,
      headers: { Authorization: key },
    });
  },
  findtop10: () => {
    return axious.get(URL.user + "/findtop10", {
      headers: { Authorization: key },
    });
  },
  getuserallmonsterdata: () => {
    return axious.get(URL.monster + "/getuserallmonsterdata", {
      headers: { Authorization: key },
    });
  },
};

export default api;
