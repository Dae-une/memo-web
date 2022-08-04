import styled from "styled-components";
import { React } from "react";

export const Header = styled.div`
  background-color: #f1c92b;
  width: 100vw;
  height: 50px;
  display: flex;
`;

export const HeaderRight = styled.div`
  display: flex;
  width: 20%;
  justify-content: end;
  text-align: center;
  align-items: center;
  button {
    border-radius: 10px;
    border: none;
    background-color: gray;
    color: white;
    width: 60px;
    height: 30px;
    margin-right: 15px;
    cursor: pointer;
  }
`;
export const HeaderLeft = styled.div``;

export const SideBar = styled.div`
  width: 20%;
  height: 100vw;
  background-color: #f1c92b;
  display: flex;
  flex-direction: column;
  align-items: end;
  & .nav_link {
    text-decoration: none;
  }
  & .nav_link:hover {
    transform: translateX(-5px) scale(1.1);
  }
`;
export const AddButton = styled.div`
  border: none;
  background: transparent;
  font-size: 48px;
  display: inline-block;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: 60px;
`;

export const MemoList = styled.div`
  background-color: black;
  color: white;
  width: 100px;
  height: 60px;
  display: flex;
  flex-direction: column;
  padding: 0px 20px;
  border-radius: 10px;
  justify-content: center;
  text-decoration-line: none;
  cursor: pointer;
`;

export const Memo = styled.div`
  flex: 1;
  position: relative;
  z-index: 3;
`;

export const Label = styled.div`
  margin-bottom: 16px;
  & > span {
    display: block;
    text-align: left;
    padding-bottom: 8px;
    font-size: 15px;
    cursor: pointer;
    line-height: 1.4;
    font-weight: 700;
  }
`;

export const Input = styled.input`
  border-radius: 4px;
  --saf-0: rgba(var(--sk_foreground_high_solid, 134, 134, 134), 1);
  border: 1px solid var(--saf-0);
  transition: border 80ms ease-out, box-shadow 80ms ease-out;
  box-sizing: border-box;
  margin: 0 0 20px;
  width: 100%;
  color: rgba(var(--sk_primary_foreground, 29, 28, 29), 1);
  background-color: rgba(var(--sk_primary_background, 255, 255, 255), 1);
  padding: 12px;
  height: 44px;
  padding-top: 11px;
  padding-bottom: 13px;
  font-size: 18px;
  line-height: 1.33333333;

  &:focus {
    --saf-0: rgba(var(--sk_highlight, 18, 100, 163), 1);
    box-shadow: 0 0 0 1px var(--saf-0), 0 0 0 5px rgba(29, 155, 209, 0.3);
  }
`;

export const Container = styled.div`
  display: flex;
`;
