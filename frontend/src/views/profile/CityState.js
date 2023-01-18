import { Button, HeadingText, Para, SubHeading } from "components";
import { ProfileSupportStore } from "store/profile/ProfileStore";
import { MdBookmarkAdd, MdEdit, MdDelete } from "react-icons/md";
import Flatlist from "components/Flatlist";
import { useState } from "react";
import CityStateModel from "./component";

export default function CityState() {
  const { state, city } = ProfileSupportStore.useState();

  const [modelState, setModelState] = useState({ id: "", value: "" });

  const handleOpenModel = (type) => {
    setModelState(type);
  };

  return (
    <div className="d2m1 gap-5">
      <div className="f1">
        <div className="daj">
          <HeadingText>City</HeadingText>
          <Button
            modelId="exampleModal"
            data-bs-toggle={"modal"}
            data-bs-target={"#exampleModal"}
            onClick={() =>
              handleOpenModel({ id: "city", value: "Create City" })
            }
          >
            <MdBookmarkAdd />
          </Button>
        </div>
        <div className="city-state-table mt-3">
          <table className="table f1 table-striped">
            <thead className="">
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
                      <Button
                        variant="info"
                        style={{ color: "white", marginRight: "10px" }}
                      >
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
          <Button
            modelId="exampleModal"
            data-bs-toggle={"modal"}
            data-bs-target={"#exampleModal"}
            onClick={() =>
              handleOpenModel({ id: "state", value: "Create State" })
            }
          >
            <MdBookmarkAdd />
          </Button>
        </div>
        <div className="city-state-table mt-3">
          <table className="table f1 table-striped">
            <thead>
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
                      <Button
                        variant="info"
                        style={{ color: "white", marginRight: "10px" }}
                      >
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
      <CityStateModel state={modelState} />
    </div>
  );
}
