import React from "react";
import Test from "../components/test";
import { withKnobs, text } from "@storybook/addon-knobs";

export default {
  title: "Test",
  component: Test,
  decorators: [withKnobs]
};

export const Text = () => <Test text={text("Text", "Test")}/>;

export const Second = () => <Test text={text("Text", "Second")}/>;
