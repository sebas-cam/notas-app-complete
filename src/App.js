import { BrowserRouter, Routes, Route, HistoryRouterProps } from "react-router-dom";
import NotasView from "./page/notasView";
import Login from "./page/login";
import Error404 from "./page/error";
import Authorizacion from "./auth/auth";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<Login />} />
          <Route path="/notas" element={<NotasView />} />
          <Route path="/*" element={<Error404 />} />          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
