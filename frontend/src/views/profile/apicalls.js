import AxiosInstance from "service/AxiosInstance"
import { ProfileStore, ProfileSupportStore } from "store/profile/ProfileStore";

export const getCity = () =>
  new Promise(function (response, reject) {
    AxiosInstance.get("city")
      .then((res) =>
        ProfileSupportStore.update((s) => {
          s.city = res?.rows;
        })
      )
      .catch((err) => reject("City " + err));
  });

export const getState = () =>
  new Promise(function (response, reject) {
    AxiosInstance.get("state")
      .then((res) =>
        ProfileSupportStore.update((s) => {
          s.state = res?.rows;
        })
      )
      .catch((err) => reject("State " + err));
  });

export const getProfile = () =>
  new Promise(function (resolve, reject) {
    AxiosInstance.get("/profile")
      .then((res) =>
        ProfileStore.update((s) => {
          s.data = res;
        })
      )
      .catch((err) => reject(err))
      .finally((_) => resolve());
  });