import { Button, HeadingText, Para, SubHeading } from "components";
import { ProfileSupportStore } from "store/profile/ProfileStore";
import { MdBookmarkAdd, MdEdit, MdDelete } from "react-icons/md";
import Flatlist from "components/Flatlist";
import { useState } from "react";
import CityStateModel from "./component";
import { ThemeStore } from "store/theme/colorStore";
import useAlert from "customHooks/useAlert";
import AxiosInstance from "service/AxiosInstance";
import useToast from "customHooks/useToast";

export default function CityState() {
  const { state, city } = ProfileSupportStore.useState();
  const { isDark } = ThemeStore.useState();
  const showAlert = useAlert();
  const showToast = useToast();

  const [modelState, setModelState] = useState({ id: "", value: "" });

  const handleOpenModel = (type) => {
    setModelState(type);
  };

  // ____HANDLE__EDIT____
  const handleEdit = (res, title) => {
    setModelState({ ...res, ...title });
  };

  // ___HANDLE__DELETE__
  const handleDelete = (item, type) => {
    showAlert("Delete " + item?.name)
      .then((_) => {
        let url = type + "/" + item?.id;
        AxiosInstance.delete(url)
          .then((_) => {
            showToast(type + " Deleted", "success");
            ProfileSupportStore.update((s) => {
              s[type] = s[type]?.filter((res) => res?.id !== item?.id);
            });
          })
          .catch((err) => showToast(err));
      })
      .catch((err) => console.log("_________ERR_______"));
  };

  return (
    <div className="d2m1 gap-5">
      <div className="f1">
        <div className="daj">
          <HeadingText>City</HeadingText>
          <Button modelId="cityStateModel" data-bs-toggle={"modal"} data-bs-target={"#cityStateModel"} onClick={() => handleOpenModel({ key: "city", value: "Create City" })}>
            <MdBookmarkAdd />
          </Button>
        </div>
        <div className="city-state-table mt-3">
          <table className="table f1 table-striped">
            <thead className={`sticky-top ${isDark ? "bg-dark" : "bg-light"} `} style={{ zIndex: 10 }}>
              <tr>
                <th>
                  <SubHeading> Sno </SubHeading>
                </th>
                <th>
                  <SubHeading> Name </SubHeading>
                </th>
                <th>
                  <SubHeading> Actions </SubHeading>
                </th>
              </tr>
            </thead>
            <tbody>
              <Flatlist
                data={city}
                renderItem={(res, i) => (
                  <tr key={i + "city"}>
                    <td>
                      <Para>{i + 1}</Para>
                    </td>
                    <td>
                      <Para>{res?.name}</Para>
                    </td>
                    <td className="df">
                      <Button data-bs-toggle={"modal"} data-bs-target={"#cityStateModel"} onClick={() => handleEdit(res, { key: "city", value: "Edit City" })} variant="info" style={{ color: "white", marginRight: "10px" }}>
                        <MdEdit />
                      </Button>
                      <Button variant="danger" onClick={() => handleDelete(res, "city")}>
                        <MdDelete />
                      </Button>
                    </td>
                  </tr>
                )}
              />
            </tbody>
          </table>
        </div>
      </div>
      <div className="f1">
        <div className="daj">
          <HeadingText>State</HeadingText>
          <Button modelId="cityStateModel" data-bs-toggle={"modal"} data-bs-target={"#cityStateModel"} onClick={() => handleOpenModel({ key: "state", value: "Create State" })}>
            <MdBookmarkAdd />
          </Button>
        </div>
        <div className="city-state-table mt-3">
          <table className="table f1 table-striped">
            <thead className={`sticky-top ${isDark ? "bg-dark" : "bg-light"}`}>
              <tr>
                <th>
                  <SubHeading>Sno</SubHeading>
                </th>
                <th>
                  <SubHeading>Name</SubHeading>
                </th>
                <th>
                  <SubHeading> Actions</SubHeading>
                </th>
              </tr>
            </thead>
            <tbody>
              <Flatlist
                data={state}
                renderItem={(res, i) => (
                  <tr key={i + "state"}>
                    <td>
                      <Para>{i + 1}</Para>
                    </td>
                    <td>
                      <Para>{res?.name}</Para>
                    </td>
                    <td className="df">
                      <Button variant="info" data-bs-toggle={"modal"} data-bs-target={"#cityStateModel"} style={{ color: "white", marginRight: "10px" }} onClick={() => handleEdit(res, { key: "state", value: "Edit State" })}>
                        <MdEdit />
                      </Button>
                      <Button variant="danger" onClick={() => handleDelete(res, "state")}>
                        <MdDelete />
                      </Button>
                    </td>
                  </tr>
                )}
              />
            </tbody>
          </table>
        </div>
      </div>
      <CityStateModel modelState={modelState} modelId="cityStateModel" />
    </div>
  );
}
