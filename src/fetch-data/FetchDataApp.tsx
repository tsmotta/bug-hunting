import React from "react";
import { FetchStuff } from "./questions/fetch";
import { Page } from "../components/Page";

export default function FetchDataApp() {
  return (
    <Page>
      <div className="container px-5 py-24 mx-auto">
        <FetchStuff />
      </div>
    </Page>
  );
}
