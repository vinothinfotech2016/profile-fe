import { Routes, Route } from "react-router-dom";
import { routes } from "./Routes";
import React from "react";

export const PrototypeNavigation = () => {
  return (
    <Routes>
      {routes.map((item, index) => {
        return (
          <Route
            key={index}
            path={item.path}
            exact={item}
            element={<item.component />}
          />
        );
      })}
    </Routes>
  );
};
