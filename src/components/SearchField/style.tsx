import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import {black, layoutTextColor, layoutTextColorFaded} from "../../styles/variables";

/*
:host {
  position: relative;
  display: block;

  input {
    padding-left: 2rem;
  }
}
 */

export const SearchFieldBox = styled.div`
  position: relative;
  display: block;
  box-sizing: border-box;
  padding: 0.5rem;
  width: 100%;
`;
export const Icon = styled(FontAwesomeIcon)`
  position: absolute;
  color: ${layoutTextColorFaded};
  top: 1.3rem;
  left:1.1rem;
  z-index: 2;
`;
export const InputBox = styled.div`
  width: 100%;
`;
export const Input = styled.input`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  padding: .375rem .75rem;
  padding-left: 2rem;
  font-size: 1rem;
  line-height: 1.5;
  background-clip: padding-box;
  border: 1px solid #292929;
  border-radius: .25rem;
  color: ${layoutTextColor};
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  background-color: ${black};
  &::-webkit-input-placeholder {
    color: ${layoutTextColorFaded};
  }
  &:-moz-placeholder {
    color: ${layoutTextColorFaded};
    opacity: 1;
  }
  &::-moz-placeholder {
    color: ${layoutTextColorFaded};
    opacity: 1;
  }
  &:-ms-input-placeholder {
    color: ${layoutTextColorFaded};
  }
  &:focus {
    outline: none;
  }
`;
