import React, { createContext } from "react";
import swal from "sweetalert";

export const SweetAlertCntxt = createContext();
export default function SweetAlertContext({ children }) {
  const showAlert = (title = "title", icon = "warning") =>
    new Promise(function (resolve, reject) {
      swal({
        title: title,
        text: "Are sure to confirm?",
        icon: icon,
        buttons: true,
        dangerMode: true,
      }).then((res) => {
        if (res) resolve();
        else reject();
      });
    });

  return <SweetAlertCntxt.Provider value={showAlert}>{children}</SweetAlertCntxt.Provider>;
}
