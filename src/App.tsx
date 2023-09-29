import { Routes, Route } from "react-router-dom";

import { Home, Login, Match } from './pages';
import "./App.css"
import PrivateRoute from "./routes/PrivateRoute";
import { AuthContextProvider } from "./context/auth";
import { FilterContextProvider } from './context/filter';

function App() {
  return (
    <AuthContextProvider>
      <FilterContextProvider>
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
      </FilterContextProvider>
    </AuthContextProvider>
  )
}

export default App
