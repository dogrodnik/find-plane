import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchFlights } from "../../redux/flights/flightsUtils";
import { resetNearestFlights } from "../../redux/nearestFlights/nearestActions";
import { setNearestFlights } from "../../redux/nearestFlights/nearestUtils";

import { Spinner } from "../Spinner";
import { Flight } from "../Flight";
import { BoardHeader } from "../BoardHeader";

import * as S from "./Flights.Styles";

const Flights = () => {
  const [clicked, setClick] = useState(false);

  const location = useSelector(state => state.location.location);
  const locationError = useSelector(state => state.location.error);
  const flights = useSelector(state => state.flights.flights);
  const nearestFlights = useSelector(state => state.nearestFlights.flights);

  const dispatch = useDispatch();

  useEffect(() => {
    if (flights.length === 0) return;
    dispatch(setNearestFlights(location, flights));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flights]);

  const getNearestFlights = () => {
    if (locationError || Object.entries(location).length === 0)
      return setClick(true);
    setClick(false);
    dispatch(resetNearestFlights());
    dispatch(fetchFlights());
  };

  const renderFlights = () => {
    if (nearestFlights.length !== 0) {
      return (
        <S.Board>
          <BoardHeader />
          {nearestFlights.map(flight => (
            <Flight key={flight.callsign} flight={flight} />
          ))}
        </S.Board>
      );
    }
  };
  return (
    <S.Flights>
      <S.FlexWrapper>
        <S.Button onClick={() => getNearestFlights()}>GET FLIGHTS</S.Button>
        <Spinner />
        {(locationError || Object.entries(location).length === 0) &&
          clicked && <S.Error>YOU HAVE TO SET LOCATION BEFORE SEARCH</S.Error>}
      </S.FlexWrapper>
      {renderFlights()}
    </S.Flights>
  );
};

export { Flights };
