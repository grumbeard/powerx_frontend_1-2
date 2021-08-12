import * as React from "react";
import * as ReactDOM from "react-dom";
import { BillSplitter } from './pages/bill-splitter';
import { Career } from './pages/career';

ReactDOM.render(
  <div>
    <BillSplitter />
    <Career />
  </div>
  , document.querySelector("#root")
);