import styled from "styled-components";

export const MemoContainer = styled.div`
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  h1 {
    text-align: center;
    font-weight: 900;
    padding-right: 130px;
  }
`;
export const TextArea = styled.textarea`
  all: unset;
  border-bottom: 1px solid green;
  width: 100%;
  height: 70vh;
  resize: none;
  padding: 0px 30px;
`;

export const SubmitButton = styled.button`
  margin-left: 470px;
  margin-top: 20px;
  border: 1px solid green;
  text-align: center;
  font-size: 24px;
  border-radius: 6px;
  background-color: #f1c92b;
  color: black;
  height: 42px;
  cursor: pointer;
  &:active {
    transform: scale(0.9);
  }
`;

export const DeleteButton = styled.div`
  opacity: 0;
  position: absolute;
  width: 50px;
  height: 20px;
  background-color: black;
  top: -35px;
  left: -70px;
  cursor: pointer;
`;
