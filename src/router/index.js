import { Routes, Route } from "react-router-dom";
import ButtonComponent from "../ButtonComponent";

function MyRouter() {
  return (
    <Routes>
      <Route path="/" element={<ButtonComponent />} />
      
    </Routes>
  );
}

export default MyRouter;
