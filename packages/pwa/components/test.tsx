import React from "react";
import { TestMessage } from "cwm-components-core";

type TestProps = {
  text: String
}

export const Test: React.FC<TestProps> = ({ text }) => {
  return <div>{text} {TestMessage()}</div>;
};

export default Test;
