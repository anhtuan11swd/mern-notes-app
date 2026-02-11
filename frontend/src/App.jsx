import { Route, Routes } from "react-router-dom";
import CreatePage from "./pages/CreatePage";
import HomePage from "./pages/HomePage";
import NoteDetailPage from "./pages/NoteDetailPage";

function App() {
  return (
    <Routes>
      <Route element={<HomePage />} path="/" />
      <Route element={<CreatePage />} path="/create" />
      <Route element={<NoteDetailPage />} path="/note/:id" />
    </Routes>
  );
}

export default App;
