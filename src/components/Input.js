import React from 'react';
import { Input as AntInput } from 'antd';

const Input = ({ type, placeholder }) => {
  return <AntInput type={type} placeholder={placeholder} className="mb-4" />;
};

export default Input;