import styled from 'styled-components';

const mainSize = '2.5em';

export const Textfield = styled.input`
  height: ${mainSize};
  border-radius: calc(${mainSize} / 2);
  padding: 0 calc(${mainSize} / 2);
  background-color: #ADAFBC;
  color: #505050;
  border: none;
  box-shadow: 3px 3px 3px 0 rgba(0, 0, 0, 0.5) inset;
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  height: 0;
  width: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:before {
    height: ${mainSize};
    width: ${mainSize};
    content: "";
    position: absolute;
    border-radius: 50%;
    border: none;
    background-color: #505050;
    box-shadow:
      6px 6px 12px 0 rgba(0, 0, 0, 0.25),
      -2px -2px 6px 0 rgba(255, 255, 255, 0.08);
  }
  
  &:after {
    background: #3C3C3C;
    border-radius: 50%;
    height: calc(${mainSize} / 2);
    width: calc(${mainSize} / 2);
    content: "";
    position: absolute;
    box-shadow:  2px 2px 2px 0 rgba(0, 0, 0, 0.5) inset;
  }
  
  &:checked:after {
    background: #00FF00;
  }

  &:active {
    &:before {
      box-shadow: 6px 6px 12px 0 rgba(0, 0, 0, 0.25) inset;
    }
    &:after {
      background: #323232;
    }
    &:checked:after {
      background: #00BF00;
    }
  }
`;
