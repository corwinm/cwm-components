import React from "react";
import { TestMessage } from "cwm-components-core";

/** Comment about the props */
type TestProps = {
  /** Comment about text */
  text: String;
};

/**
 * # Test
 * This is the code description.
 * 
 * ### Usage
 * ```
 * <Test text="example text" />
 * ```
 * 
 */
const Test: React.FC<TestProps> = ({ text }: TestProps) => {
  return (
    <div>
      {text} {TestMessage()}
    </div>
  );
};

export default Test;
