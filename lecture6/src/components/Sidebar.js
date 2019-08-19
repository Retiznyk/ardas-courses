import React from "react";
import { Route } from "react-router-dom";

import BasicSidebar from "./BasicSidebar";

export default () => (
  <>
    <Route path="/" component={BasicSidebar} />
  </>
);
