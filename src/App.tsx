import React from "react";
import { Link } from "react-router-dom";
import { Section } from "./components/Section";

export default function App() {
  return (
    <Section title="Bug Hunting">
      <ul>
        <li>
          <Link to="fetch-data">Fetch data</Link>
        </li>
      </ul>
    </Section>
  );
}
