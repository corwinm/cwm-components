import * as React from "react";
import { TestMessage } from "cwm-components-core";

export type Props = {
  text: String;
};

/**
 * This is the code description.
 */
export const Test: React.FC<Props> = ({ text }: Props) => {
  return (
    <div>
      {text} {TestMessage()}
    </div>
  );
};
