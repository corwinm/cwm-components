import React from "react";
import { TestMessage } from "cwm-components-core";

type TestProps = {
  text: String;
};

/**
 * This is the code description.
 */
const Test: React.FC<TestProps> = ({ text }: TestProps) => {
  return (
    <div>
      {text} {TestMessage()}
    </div>
  );
};

export default Test;
