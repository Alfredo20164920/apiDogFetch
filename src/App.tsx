/* eslint-disable @typescript-eslint/no-explicit-any */
import { Routes, Route } from "react-router-dom";

import { Home, Login, Match } from './pages';
import "./App.css"
import PrivateRoute from "./routes/PrivateRoute";
import { AuthContextProvider } from "./context/auth";

function App() {

  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/match"
          element={
            <PrivateRoute>
              <Match />
            </PrivateRoute>
          }
        />

      </Routes>
    </AuthContextProvider>
  )
}

export default App
