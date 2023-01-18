import { Button, Model, SubHeading } from "components";
import useToast from "customHooks/useToast";
import React, { useState } from "react";
import AxiosInstance from "service/AxiosInstance";
import { ProfileSupportStore } from "store/profile/ProfileStore";
import { ThemeStore } from "store/theme/colorStore";

export default function CityStateModel({ state }) {
  const [inputBox, setInputBox] = useState("");
  const { isDark } = ThemeStore.useState();
  const showToast = useToast();
  const handleModelForm = (e) => {
    e.preventDefault();
    let url = "/" + state?.id;
    AxiosInstance.post(url, {
      name: inputBox,
    })
      .then((res) => {
        console.log(res);
        if (res?.created) {
          ProfileSupportStore.update((s) => {
            s[state?.id] = [...s[state.id], res[state?.id]];
          });
        } else showToast(`${state?.id} already exist`, "warning");
      })
      .catch((err) => console.log(err))
      .finally((_) => setInputBox(""));
  };
  return (
    <Model heading={state?.value}>
      <form onSubmit={handleModelForm}>
        <SubHeading>Name</SubHeading>
        <div className="daj gap-2">
          <input
            value={inputBox}
            onChange={(e) => setInputBox(e.target.value)}
            className={`form-control mv-2 ${isDark ? "bg-dark" : "bg-light"}`}
          />
          <Button
            data-bs-dismiss="modal"
            type="submit"
            onClick={handleModelForm}
          >
            Enter
          </Button>
        </div>
      </form>
    </Model>
  );
}
