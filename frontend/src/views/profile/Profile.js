import { Button, HeadingText, Hover, SubHeading } from "components";
import React, { useEffect, useState } from "react";
import { ProfileStore, ProfileSupportStore } from "store/profile/ProfileStore";
import Select from "react-select";
import { ThemeStore } from "store/theme/colorStore";
import { useColors } from "customHooks/ColorsHook";
import AxiosInstance from "service/AxiosInstance";
import _ from "lodash";
import useToast from "customHooks/useToast";
import { getProfile } from "./apicalls";

function Profile() {
  // name, place, city_id, state_id
  const { city, state } = ProfileSupportStore.useState();
  const { isDark } = ThemeStore.useState();
  const { data: profileData } = ProfileStore.useState();
  const showToast = useToast();
  useEffect(() => {
    getProfile();
  }, []);
  useEffect(() => {
    setProfileState({ name: profileData?.name, place: profileData?.place, city: city?.filter((res) => res?.id === profileData?.city_id)?.[0], state: state?.filter((res) => res?.id === profileData?.state_id)?.[0] });
  }, [profileData]);

  const [profileState, setProfileState] = useState({ name: "", place: "", city: {}, state: {}, btnLoading: false });

  const handleChange = (e, name) => {
    if (name) setProfileState({ ...profileState, [name]: e });
    else setProfileState({ ...profileState, [e.target.name]: e.target.value });
  };

  //   __HANDLE__SAVE__
  const handleSave = () => {
    setProfileState({ ...profileState, btnLoading: true });

    let data = {
      name: profileState?.name,
      place: profileState?.place,
      city_id: profileState?.city?.id,
      state_id: profileState?.state?.id,
    };
    let method = _.isEmpty(profileData) ? "post" : "put";
    AxiosInstance[method]("/profile", data)
      .then((res) => {
        showToast(res?.message, "success");
      })
      .catch((err) => showToast(err))
      .finally((_) => setProfileState({ ...profileState, btnLoading: false }));
  };

  return (
    <div>
      <HeadingText>Profile</HeadingText>
      <div className="daj gap-5">
        <div className="f1">
          <SubHeading className="mv-2">Name</SubHeading>
          <input value={profileState?.name} name="name" onChange={(e) => handleChange(e)} className={`form-control ${isDark ? "bg-dark text-white" : "bg-light text-dark"}`} />
        </div>
        <div className="f1">
          <SubHeading className="mv-2">Place</SubHeading>
          <input value={profileState?.place} name="place" onChange={(e) => handleChange(e)} className={`form-control ${isDark ? "bg-dark text-white" : "bg-light text-dark"}`} />
        </div>
      </div>
      <div className="daj gap-5">
        <div className="f1">
          <SubHeading className="mv-2">City</SubHeading>
          <Select options={city} value={profileState?.city} placeholder="City" onChange={(e) => handleChange(e, "city")} getOptionLabel={(city) => city?.name} getOptionValue={(city) => city?.id} />
        </div>
        <div className="f1">
          <SubHeading className="mv-2">State</SubHeading>
          <Select options={state} value={profileState?.state} placeholder="State" onChange={(e) => handleChange(e, "state")} getOptionLabel={(state) => state?.name} getOptionValue={(state) => state?.id} />
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "10px" }}>
        <Button onClick={handleSave} size="md" btnLoading={profileState?.btnLoading}>
          Save
        </Button>
      </div>
    </div>
  );
}

export default Profile;
