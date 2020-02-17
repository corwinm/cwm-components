import React from "react";

type TestProps = {
  text: String
}

export const Test: React.FC<TestProps> = ({ text }) => {
  return <div>{text}</div>;
};
