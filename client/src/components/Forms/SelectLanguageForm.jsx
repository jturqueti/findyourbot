import React from "react";

import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

const options = [
  { value: "Français", label: { x: "Français" } },
  { value: "Anglais", label: { x: "Anglais" } },
  { value: "Allemand", label: { x: "Allemand" } },
  { value: "Espagnol", label: { x: "Espagnol" } },
  { value: "Autre", label: { x: "Autre" } },
];

const LanguageSelector = (props) => {
  return (
    <Select
      options={options}
      closeMenuOnSelect={false}
      components={animatedComponents}
      defaultValue={props.defaultValue}
      onChange={props.onChange}
      isMulti
      getOptionLabel={(option) => option.label.x}
      
    />
  );
};

export default LanguageSelector;
