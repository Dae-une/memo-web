import React, { useEffect, useRef, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getId } from "../../redux/modules/List";
import { TextArea, MemoContainer, SubmitButton, DeleteButton } from "./styles";
import { addBody, deleteMemo } from "../../redux/modules/List";
import useInput from "../../hooks/useInput";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Detail = () => {
  const [Write, onChangeWrite, setWrite] = useInput("");
  const dispatch = useDispatch();
  const textRef = useRef(null);
  const { id } = useParams();
  const navigate = useNavigate();
  // console.log("id", id);
  const memo = useSelector((state) => state.memo);

  useEffect(() => {
    dispatch(getId(id));
    setWrite(memo.body);
  }, [id, memo.body]);

  const onClickSubmit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(addBody({ id: id, body: Write }));
      console.log("submit");
      toast.success("저장 했어요!!", { position: "top-right" });
    },
    [Write, id]
  );
  const onClickDelete = useCallback(
    (e) => {
      dispatch(deleteMemo(id));
      console.log("click");
      navigate("/");
    },
    [id]
  );
  console.log(id);
  return (
    <>
      <form onSubmit={onClickSubmit}>
        <DeleteButton onClick={onClickDelete}>dd</DeleteButton>
        <MemoContainer>
          <div>
            <h1>제목 : {memo.title}</h1>
          </div>
          <TextArea
            value={Write}
            ref={textRef}
            onChange={onChangeWrite}
          ></TextArea>
        </MemoContainer>
      </form>
      <SubmitButton onClick={onClickSubmit}>Submit</SubmitButton>
      <ToastContainer />
    </>
  );
};

export default Detail;
