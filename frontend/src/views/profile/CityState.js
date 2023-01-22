import { Button, HeadingText, Para, SubHeading } from "components";
import { ProfileSupportStore } from "store/profile/ProfileStore";
import { MdBookmarkAdd, MdEdit, MdDelete } from "react-icons/md";
import Flatlist from "components/Flatlist";
import { useState } from "react";
import CityStateModel from "./component";
import { ThemeStore } from "store/theme/colorStore";

export default function CityState() {
  const { state, city } = ProfileSupportStore.useState();
  const { isDark } = ThemeStore.useState();

  const [modelState, setModelState] = useState({ id: "", value: "" });

  const handleOpenModel = (type) => {
    setModelState(type);
  };

  // ____HANDLE__EDIT____
  const handleEdit = (res, title) => {
    setModelState({ ...res, ...title });
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
                      <Button variant="danger">
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
                      <Button variant="danger">
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
      <CityStateModel state={modelState} modelId="cityStateModel" />
    </div>
  );
}
