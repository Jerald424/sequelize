import { Button, Model, SubHeading } from "components";
import useToast from "customHooks/useToast";
import React, { useEffect, useState } from "react";
import AxiosInstance from "service/AxiosInstance";
import { ProfileSupportStore } from "store/profile/ProfileStore";
import { ThemeStore } from "store/theme/colorStore";

export default function CityStateModel({ state, modelId }) {
  // console.log("_______/___--", state);
  const [inputBox, setInputBox] = useState("");
  const { isDark } = ThemeStore.useState();
  const showToast = useToast();
  // ____HANDLE__SUBMIT____
  const handleModelForm = (e) => {
    e.preventDefault();
    let method = state?.id ? "put" : "post";
    let url = state?.id ? "/" + state?.key + "/" + state?.id : "/" + state?.key;

    AxiosInstance[method](url, {
      name: inputBox,
    })
      .then((res) => {
        if (state.id) {
        } else if (res?.created) {
          ProfileSupportStore.update((s) => {
            s[state?.id] = [...s[state.id], res[state?.id]];
          });
        } else showToast(`${state?.id} already exist`, "warning");
      })
      .catch((err) => console.log(err))
      .finally((_) => setInputBox(""));
  };

  // ____LOAD___INITIAL_EDIT_____
  useEffect(() => {
    if (state?.id) setInputBox(state?.name);
  }, [state]);

  return (
    <Model id={modelId} heading={state?.value}>
      <form onSubmit={handleModelForm}>
        <SubHeading>Name</SubHeading>
        <div className="daj gap-2">
          <input value={inputBox} onChange={(e) => setInputBox(e.target.value)} className={`form-control mv-2 ${isDark ? "bg-dark" : "bg-light"}`} />
          <Button data-bs-dismiss="modal" type="submit" onClick={handleModelForm}>
            Enter
          </Button>
        </div>
      </form>
    </Model>
  );
}
