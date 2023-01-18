import { Button, HeadingText, Hover, Model, Para, SubHeading } from "components";
import { ProfileSupportStore } from "store/profile/ProfileStore";
import { MdBookmarkAdd, MdEdit, MdDelete } from "react-icons/md";
import Flatlist from "components/Flatlist";

export default function CityState() {
  const { state, city } = ProfileSupportStore.useState();
  console.log("___________", state, city);
  const temp_data = [
    { name: "jerald", age: 22 },
    { name: "jerald", age: 22 },
    { name: "jerald", age: 22 },
    { name: "jerald", age: 22 },
  ];

  return (
    <div className="df gap-5">
      <div className="f1">
        <div className="daj">
          <HeadingText>City</HeadingText>
          <Button modelId='exampleModal'>
            <MdBookmarkAdd />
          </Button>
        </div>
        <table className="table f1 ">
          <thead>
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
            {
              <Flatlist
                data={temp_data}
                renderItem={(res, i) => (
                  <tr>
                    <td>
                      <Para>{i + 1}</Para>
                    </td>
                    <td>
                      <Para>{res?.name}</Para>
                    </td>
                    <td className="dajc">
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
            }
          </tbody>
        </table>
      </div>
      <div className="f1">
        <div className="daj">
          <HeadingText>State</HeadingText>
          <Button>
            <MdBookmarkAdd />
          </Button>
        </div>
        <table className="table f1">
          <thead>
            <tr>
              <th>Sno</th>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
        </table>
      </div>
      <Model heading={'Model heading'} />
    </div>
  );
}
