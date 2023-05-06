import React from 'react';

import { InputProps } from '../type';
import './InputCardData.css';

const InputCardData = ({
  required,
  inputType,
  placeholder,
  inputMode,
  passwordType,
  className,
  value,
  maxLength,
  minLength,
  name,
  dataId,
  refObject: Ref,
  handleError,
  onChange,
  nextFocus,
  onFlip,
  handleInputData,
}: InputProps) => {
  return inputType === 'password' ? (
    <input
      className={`input-password-container ${passwordType}`}
      type="password"
      value={value}
      placeholder={placeholder}
      inputMode={inputMode}
      maxLength={maxLength}
      minLength={minLength}
      data-id={dataId}
      ref={Ref}
      onChange={(e) => {
        onChange(e);
        nextFocus(e);
        handleInputData(dataId, e);
        if (handleError) handleError(e);
      }}
      onFocus={onFlip}
      name={name}
      required={required}
    />
  ) : (
    <input
      className={`input-box ${className}`}
      value={value}
      placeholder={placeholder}
      type={inputType}
      inputMode={inputMode}
      maxLength={maxLength}
      minLength={minLength}
      data-id={dataId}
      ref={Ref}
      onChange={(e) => {
        onChange(e);
        nextFocus(e);
        handleInputData(dataId, e);
        if (handleError) handleError(e);
      }}
      onFocus={onFlip}
      name={name}
      required={required}
    />
  );
};

export default InputCardData;
