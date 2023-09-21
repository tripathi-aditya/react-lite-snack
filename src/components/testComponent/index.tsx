import React from "react";

const TestButton = ({ label }: PropTypes): React.ReactElement => (
  <button>{label}</button>
);

type PropTypes = {
  label: string;
};

export default TestButton;
