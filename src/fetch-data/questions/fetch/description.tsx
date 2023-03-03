import React from "react";

export const Description = () => (
  <>
    <p className="my-3">
      In the following <code>&lt;script&gt;</code> tag, we are accomplishing 3
      tasks:
      <ul className="list-disc w-1/2 m-auto">
        <li>Fetching some data from a server</li>
        <li>Log the data (to the console)</li>
        <li>Rendering the data on the page</li>
      </ul>
    </p>
    <p>
      The sentence below <i>should</i> be rendered as:
      <code className="block my-4">
        Duval has the following message: Go away, I am the spaghetti
      </code>
      Something is not working correctly
    </p>
    <p>
      Note: We are using some helper functions (getResource, log, and
      updatePageData) to accomplish this. While these functions do not need to
      be changed to fix the bug, they may play a role in the problem that we are
      seeing.
    </p>
  </>
);
