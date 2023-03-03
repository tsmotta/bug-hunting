import React, { useEffect, useState } from "react";
import { Section } from "../../../components/Section";
import { Description } from "./description";
import { getResource } from "./fetch";
import { log } from "./logger";

export const FetchStuff = () => {
  const [pageData, setPageData] = useState({
    name: "",
    message: ""
  });

  useEffect(() => {
    getResource().then((data) => {
      log("response-received", data);
      setPageData(data);
    });
  }, []);

  const { name, message } = pageData;
  // HEY
  return (
    <>
      <Section title="Data Fetching Application">
        <Description />
      </Section>
      <Section title="User Fetcher">
        {message ? (
          <>
            <p>{`${name} has the following message:`}</p>
            <p>{message}</p>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </Section>
    </>
  );
};
