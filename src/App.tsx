/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Routes, Route } from "react-router-dom";

import { Home, Login, Match } from './pages';
import './App.css'

import PrivateRoute from "./routes/PrivateRoute";

function App() {

  return (
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
  )
}

export default App
