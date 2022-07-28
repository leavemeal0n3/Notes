import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

const notes = [
  {
    name: "Html is easy",
    id: 1,
    date: "2019-05-30T17:30:31.098Z",
    important: true,
  },
  {
    name: "Browser can execute only Javascript",
    id: 2,
    date: "2019-05-30T18:39:34.091Z",
    important: false,
  },
  {
    name: "GET and POST are the most important methods of HTTP protocol",
    id: 3,
    date: "2019-05-30T19:20:14.298Z",
    important: true,
  },
];

ReactDOM.createRoot(document.getElementById("root")).render(
  <App notes={notes} />
);
