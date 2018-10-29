import styled from 'styled-components';
import * as AnimationType from './Animations';

export const StyledMessage = styled.div`
  padding: 10px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  border-style: solid;
  border-width: 4px;
  background-color: #fff;
  text-align: center;
  animation: ${AnimationType.slideInTop} 0.5s 1;
  z-index: 25;
`;

export const ConfirmationMessage = styled(StyledMessage)`
  border-color: rgb(64,226,85);
  background-color: rgb(64,226,85);
  color: #000;
`;

export const NoticeMessage = styled(StyledMessage)`
  border-color: rgb(240,237,45);
  background-color: rgb(240,237,45);
  color: #000;
`;

export const WarningMessage = styled(StyledMessage)`
  border-color: rgb(226,135,44);
  background-color: rgb(226,135,44);
  color: #000;
`;

export const ErrorMessage = styled(StyledMessage)`
  border-color: rgb(226,44,44);
  background-color: rgb(226,44,44);
  color: #fff;
`;