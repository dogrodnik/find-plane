import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Modal from "react-modal";

import { closeModal } from "../../redux/locationModal/modalActions";
import { getLocationSucces } from "../../redux/location/locationActions";

import { GoogleMap } from "../Map";
import * as S from "./LocationModal.Styles";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    background: "rgb(68, 68, 68)",
    border: "0.2rem solid white",
    transform: "translate(-50%, -50%)",
    width: "75%",
    height: "80%"
  }
};

Modal.setAppElement("#root");

const LocationModal = () => {
  const openModal = useSelector(state => state.locationModal.openModal);
  const selectedLocation = useSelector(
    state => state.selectedLocation.selectedLocation
  );
  const dispatch = useDispatch();

  const setLocation = () => {
    dispatch(closeModal());
    if (Object.entries(selectedLocation).length !== 0)
      dispatch(getLocationSucces(selectedLocation));
  };

  return (
    <Modal
      isOpen={openModal}
      style={customStyles}
      contentLabel="Location Modal"
    >
      <S.FlexWrapper>
        <S.Header>SELECT LOCATION</S.Header>
        <S.CloseButton onClick={() => dispatch(closeModal())}>X</S.CloseButton>
        <S.MapWrapper>
          <GoogleMap />
        </S.MapWrapper>
        <S.Button onClick={() => setLocation()}>SAVE</S.Button>
      </S.FlexWrapper>
    </Modal>
  );
};

export { LocationModal };
