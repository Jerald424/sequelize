import { Container, SubHeading } from 'components';
import useToast from 'customHooks/useToast';
import React, { useEffect } from 'react';
import AxiosInstance from 'service/AxiosInstance';
import { LoginStore } from 'store/login/loginStore';
import { ProfileStore } from 'store/profile/ProfileStore';
import _ from 'lodash';
import { getProfile } from "views/profile/apicalls";

const Index = () => {
  const { data } = ProfileStore.useState();

  const showToast = useToast();

  useEffect(() => {
    getProfile().catch((err) => showToast(err, "warn"));
  }, []);
  return (
    <div>
      <SubHeading>Dashboard</SubHeading>
      <SubHeading>Dashboard</SubHeading>
      <SubHeading>Dashboard</SubHeading>
      <SubHeading>Dashboard</SubHeading>
      <SubHeading>Dashboard</SubHeading>
      <SubHeading>Dashboard</SubHeading>
      <SubHeading>Dashboard</SubHeading>
      <SubHeading>Dashboard</SubHeading>
      <SubHeading>Dashboard</SubHeading>
      <SubHeading>Dashboard</SubHeading>
      <SubHeading>Dashboard</SubHeading>
      <SubHeading>Dashboard</SubHeading>
      <SubHeading>Dashboard</SubHeading>
      <SubHeading>Dashboard</SubHeading>
      <SubHeading>Dashboard</SubHeading>
      <SubHeading>Dashboard</SubHeading>
      <SubHeading>Dashboard</SubHeading>
      <SubHeading>Dashboard</SubHeading>
      <SubHeading>Dashboard</SubHeading>
      <SubHeading>Dashboard</SubHeading>
      <SubHeading>Dashboard</SubHeading>
      <SubHeading>Dashboard</SubHeading>
      <SubHeading>Dashboard</SubHeading>
      <SubHeading>Dashboard</SubHeading>
      <SubHeading>Dashboard</SubHeading>
      <SubHeading>Dashboard</SubHeading>
      <SubHeading>Dashboard</SubHeading>
      <SubHeading>Dashboard</SubHeading>
      <SubHeading>Dashboard</SubHeading>
      <SubHeading>Dashboard</SubHeading>
      <SubHeading>Dashboard</SubHeading>
      <SubHeading>Dashboard</SubHeading>
      <SubHeading>Dashboard</SubHeading>
      <SubHeading>Dashboard</SubHeading>
      <SubHeading>Dashboard</SubHeading>
      <SubHeading>Dashboard</SubHeading>
      <SubHeading>Dashboard</SubHeading>
      <SubHeading>Dashboard</SubHeading>
      <SubHeading>Dashboard</SubHeading>
      <SubHeading>Dashboard</SubHeading>
      <SubHeading>Dashboard</SubHeading>
      <SubHeading>Dashboard</SubHeading>
      <SubHeading>Dashboard</SubHeading>
      <SubHeading>Dashboard</SubHeading>
      <SubHeading>Dashboard</SubHeading>
      <SubHeading>Dashboard</SubHeading>
      <SubHeading>Dashboard</SubHeading>
      <SubHeading>Dashboard</SubHeading>
      <SubHeading>Dashboard</SubHeading>
      <SubHeading>Dashboard</SubHeading>
      <SubHeading>Dashboard</SubHeading>
      <SubHeading>Dashboard</SubHeading>
      <SubHeading>Dashboard</SubHeading>
      <SubHeading>Dashboard</SubHeading>
      <SubHeading>Dashboard</SubHeading>
      <SubHeading>Dashboard</SubHeading>
      <SubHeading>Dashboard</SubHeading>
      <SubHeading>Dashboard</SubHeading>
      <SubHeading>Dashboard</SubHeading>
      <SubHeading>Dashboard</SubHeading>
      <SubHeading>Dashboard</SubHeading>
    </div>
  );
};

export default Index;
