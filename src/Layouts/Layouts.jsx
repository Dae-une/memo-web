import React, { useCallback, useState } from "react";
import {
  Header,
  HeaderRight,
  HeaderLeft,
  SideBar,
  MemoList,
  Memo,
  AddButton,
  Label,
  Input,
  Container,
} from "./styles";
import Modal from "../components/Modal/Modal";
import { Routes, Route, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addMemo } from "../redux/modules/List";
import useInput from "../hooks/useInput";
import Detail from "../pages/Detail/Detail";
import dayjs from "dayjs";

const Layouts = () => {
  const [showCreateMemoModal, setShowCreateMemoModal] = useState(false);
  const [newMemo, onChangeNewMemo, setNewMemo] = useInput();
  const Memos = useSelector((state) => state.List);
  // console.log("memo", Memos);
  const dispatch = useDispatch();
  const onClickCreateMemo = useCallback((e) => {
    setShowCreateMemoModal(true);
  }, []);

  const onCloseModal = useCallback(() => {
    setShowCreateMemoModal(false);
  }, []);

  const onCreateMemo = useCallback(
    (e) => {
      e.preventDefault();
      if (newMemo === "") return;
      console.log("submit");
      const id = Date.now();
      dispatch(addMemo({ title: newMemo, id }));
      setShowCreateMemoModal(false);
      setNewMemo("");
    },
    [newMemo]
  );

  return (
    <div>
      <Header>
        <HeaderRight>
          <button>List</button>
          <button>Gallery</button>
          <button>Delete</button>
        </HeaderRight>
        <HeaderLeft></HeaderLeft>
      </Header>
      <Container>
        <SideBar>
          {Memos.map((Memo) => {
            return (
              <NavLink
                className="nav_link"
                to={`/id/${Memo.id}`}
                style={({ isActive }) => ({
                  fontWeight: isActive ? "800" : "",
                })}
              >
                <MemoList key={Memo.id}>
                  <span>{Memo.title}</span>
                  <span>{dayjs(new Date()).format("YY-MM-DD")}</span>
                </MemoList>
              </NavLink>
            );
          })}
          <AddButton onClick={onClickCreateMemo}>+</AddButton>
        </SideBar>
        <Memo>
          <Routes>
            <Route path="/id/:id/*" element={<Detail />} />
          </Routes>
        </Memo>
      </Container>
      <Modal show={showCreateMemoModal} onCloseModal={onCloseModal}>
        <form onSubmit={onCreateMemo}>
          <Label id="Memo-label">
            <span>제목</span>
            <Input
              type="text"
              id="Memo"
              name="title"
              value={newMemo}
              onChange={onChangeNewMemo}
            />
          </Label>
        </form>
      </Modal>
    </div>
  );
};

export default Layouts;
