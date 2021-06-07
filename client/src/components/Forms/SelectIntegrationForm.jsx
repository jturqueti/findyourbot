import React from 'react';

import Select from 'react-select';
import makeAnimated from 'react-select/animated';


const animatedComponents = makeAnimated();

const options = [
  { value: 'Salesforce', label: {x:'Salesforce'} },
  { value: 'Mailchimp', label: {x:'Mailchimp'} },
  { value: 'Zapier', label: {x:'Zapier'} },
  { value: 'Autre', label: {x:'Autre'} }
]

const IntegrationSelector = (props) => {
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

export default IntegrationSelector;
