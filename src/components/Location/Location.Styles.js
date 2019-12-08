import styled from "styled-components";

const LocationWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const PositionWrapper = styled.div``;

const LocationParagraph = styled.p`
  font-size: 1.5em;
`;

const LocationIcon = styled.img`
  height: 70px;
  filter: contrast(160%);
  :hover {
    filter: brightness(100);
  }
  :active {
    transform: translateY(4px);
  }
`;

export { LocationWrapper, PositionWrapper, LocationParagraph, LocationIcon };