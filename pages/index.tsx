import React, { ReactElement } from "react";
import { Navbar } from "../components";
interface Props {}

function index({}: Props): ReactElement {
  return (
    <div>
      <Navbar />
    </div>
  );
}

export default index;
