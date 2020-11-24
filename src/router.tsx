import React, { FunctionComponent } from "react";
import { Router } from "@reach/router";
import App from "./App";
import Navbar from "./components/navbar";
import { CircleLoader } from "react-spinners";
import { SuspenseWithPerf } from "reactfire";

export const Routes: FunctionComponent<any> = (props) => {
  return (
    <React.StrictMode>
        <Navbar/>
        <SuspenseWithPerf
          fallback={<CircleLoader />}
          traceId={props.uri ?? "traceId"}
        >
      <Router>
        <App path="/" />
      </Router>
      </SuspenseWithPerf>
    </React.StrictMode>
  );
}
