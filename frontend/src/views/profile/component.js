import { Button, Model, SubHeading } from "components";
import useToast from "customHooks/useToast";
import React, { useEffect, useState } from "react";
import AxiosInstance from "service/AxiosInstance";
import { ProfileSupportStore } from "store/profile/ProfileStore";
import { ThemeStore } from "store/theme/colorStore";

export default function CityStateModel({ modelState, modelId }) {
  const [inputBox, setInputBox] = useState("");
  const { isDark } = ThemeStore.useState();
  const { city, state } = ProfileSupportStore.useState();
  const showToast = useToast();
  // ____HANDLE__SUBMIT____
  const handleModelForm = (e) => {
    e.preventDefault();
    let method = modelState?.id ? "put" : "post";
    let url = modelState?.id ? "/" + modelState?.key + "/" + modelState?.id : "/" + modelState?.key;

    AxiosInstance[method](url, {
      name: inputBox,
    })
      .then((res) => {
        if (modelState.id) {
          let updated =
            modelState?.key === "state"
              ? state?.map((res) => {
                  if (res?.id === modelState?.id) return { ...res, name: inputBox };
                  else return res;
                })
              : city?.map((res) => {
                  if (res?.id === modelState?.id) return { ...res, name: inputBox };
                  else return res;
                });
          ProfileSupportStore.update((s) => {
            s[modelState?.key] = updated;
          });
        } else if (res?.created) {
          ProfileSupportStore.update((s) => {
            s[modelState?.key] = [...s[modelState.key], res[modelState?.key]];
          });
        } else showToast(`${modelState?.id} already exist`, "warning");
      })
      .catch((err) => console.log(err))
      .finally((_) => setInputBox(""));
  };

  // ____LOAD___INITIAL_EDIT_____
  useEffect(() => {
    if (modelState?.id) setInputBox(modelState?.name);
  }, [modelState]);

  return (
    <Model id={modelId} heading={modelState?.value}>
      <form onSubmit={handleModelForm}>
        <SubHeading>Name</SubHeading>
        <div className="daj gap-2">
          <input value={inputBox} onChange={(e) => setInputBox(e.target.value)} className={`form-control mv-2 ${isDark ? "bg-dark text-light" : "bg-light text-dark"}`} />
          <Button data-bs-dismiss="modal" type="submit" onClick={handleModelForm}>
            Enter
          </Button>
        </div>
      </form>
    </Model>
  );
}
