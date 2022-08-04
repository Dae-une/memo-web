import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layouts from "./Layouts/Layouts";
import dayjs from "dayjs";
import isLeapYear from "dayjs/plugin/isLeapYear"; // 윤년 판단 플러그인
import "dayjs/locale/ko"; // 한국어 가져오기

dayjs.extend(isLeapYear); // 플러그인 등록
dayjs.locale("ko"); // 언어 등록

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Layouts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
