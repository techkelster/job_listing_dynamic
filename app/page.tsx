"use client";

import { Provider } from "react-redux";
import JobListBody from "./components/JobListBody";
import JobListHeader from "./components/JobListHeader";
import { store } from "./redux/store";

export default function Home() {
  return (
    <>
      <Provider store={store}>
        <JobListHeader />
        <JobListBody />
      </Provider>
    </>
  );
}
