import React from 'react';

import Select from 'react-select';
import makeAnimated from 'react-select/animated';


const animatedComponents = makeAnimated();

const options = [
  { value: 'Particulier', label: {x: 'Particulier'} },
  { value: 'TPE-PME', label: {x: 'TPE-PME'} },
  { value: 'Grande Entreprise', label: {x: 'Grande Entreprise'} },
  { value: 'Administration publique', label: {x: 'Administration publique'} },
]

const ClientTypeSelector = (props) => {
  return (
    <Select
      options={options}
      closeMenuOnSelect={false}
      components={animatedComponents}
      defaultValue={props.defaultValue}
      onChange={props.onChange}
      isMulti
      getOptionLabel={option => option.label.x}
    />
  );
}

export default ClientTypeSelector;
