import React from "react";
import ReactDOM from "react-dom";

export default function validate(name, emission) {
  const errors = [];

  if (name.length === 0) {
    errors.push("Name can't be empty");
  }
  if (emission.length === 0) {
    errors.push("Emission can't be empty");
  }
  return errors;
}
