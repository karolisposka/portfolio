import React from "react";
import * as S from "./Input.styles";

type props = {
  label: string;
  placeholder: string;
  value: string;
  name: string;
  handleChange: (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleBlur: (e: any) => void;
  type?: string;
  error?: string;
  touched: boolean | undefined;
  disabled?: boolean | undefined;
};

const Input = ({
  type,
  label,
  placeholder,
  value,
  name,
  error,
  handleChange,
  handleBlur,
  touched,
  disabled,
}: props) => {
  return (
    <S.InputContainer>
      <S.LabelWrapper>
        <S.Label>{label}</S.Label>
        {touched && error ? <S.Error>{error}</S.Error> : null}
      </S.LabelWrapper>
      {type ? (
        <S.Input
          error={error}
          type={type}
          placeholder={placeholder}
          value={value}
          name={name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      ) : (
        <S.Textarea
          error={error}
          disabled={disabled}
          rows={10}
          placeholder={placeholder}
          value={value}
          name={name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      )}
    </S.InputContainer>
  );
};

export default Input;
