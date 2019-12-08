import styled from "styled-components";

const Header = styled.div`
  background: rgb(68, 68, 68);
  display: flex;
  justify-content: space-between;
  border-bottom: 0.3em solid white;
  padding: 10px;
  box-shadow: 0 8px 6px -6px black;
`;

const Title = styled.div`
  font-size: 2.5em;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  height: 70px;
`;

export { Header, LogoWrapper, Title, Logo };
