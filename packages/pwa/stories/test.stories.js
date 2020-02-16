import React from "react";
import { Test } from "../components/test";

export default {
  title: "Test",
  component: Test
};

export const Text = () => <Test text="Test"/>;

export const Second = () => <Test text="Second"/>;
