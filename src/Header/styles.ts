import styled from "styled-components";
import { TextField } from "@material-ui/core";
export const HeaderStyled = styled.div`
  padding: 30px;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url("https://bramptonist.com/wp-content/uploads/2018/06/netflix-image.jpg");
`;

export const SearchContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  align-self: center;
`;

export const HeaderTopStyled = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TextFieldStyled = styled(TextField)`
  background: #655757a3;
  flex-grow: 1;
  margin-right: 15px !important;
`;
