import React from 'react';

import Select from 'react-select';
import makeAnimated from 'react-select/animated';


const animatedComponents = makeAnimated();

// const customStyles = {
//   option: (provided, state) => ({
//     ...provided,
//     borderBottom: '1px dotted pink',
//     color: state.isSelected ? 'red' : 'blue',
//     padding: 20,
//   }),
//   control: () => ({
//     // none of react-select's styles are passed to <Control />
//     width: 800,
//   }),
//   singleValue: (provided, state) => {
//     const opacity = state.isDisabled ? 0.5 : 1;
//     const transition = 'opacity 300ms';

//     return { ...provided, opacity, transition };
//   }
// }

const options = [
  { value: 'Webchat', label: {x:'Français'} },
  { value: 'Facebook Messenger', label: {x:'Facebook Messenger'} },
  { value: 'WhatsApp', label: {x:'WhatsApp'} },
  { value: 'Microsoft Teams', label: {x:'Microsoft Teams'} },
  { value: 'Bot vocal', label: {x:'Bot vocal'} },
  { value: 'Autre', label: {x:'Autre'} }
]

const ChannelSelector = (props) => {
  return (
    <Select
      options={options}
      // styles={customStyles}
      // width='800px'
      closeMenuOnSelect={false}
      components={animatedComponents}
      defaultValue={props.defaultValue}
      onChange={props.onChange}
      isMulti
      getOptionLabel={option => option.label.x}

    />
  );
}

export default ChannelSelector;
