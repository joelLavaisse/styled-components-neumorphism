import styled from 'styled-components';

const mainSize = '2.5em';
const getSize = (size) => {
  const sizes = {
    small: '14px',
    normal: '18px',
    large: '24px',
  };
  return sizes[size] || sizes.normal;
};

export default styled.button`
  height: ${mainSize};
  width: ${(props) => props.round && mainSize};
  min-width: ${(props) => !props.round && `calc(${mainSize} * 2)`};
  font-weight: 600;
  color: #ADAFBC;
  font-size: ${(props) => getSize(props.size)};
  user-select: none;
  border-radius: ${(props) => (props.round ? '50%' : `calc(${mainSize} / 2)`)};
  padding: 0 ${(props) => !props.round && `calc(${mainSize} / 2)`};
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #505050;
  box-shadow: 
    6px 6px 12px 0 rgba(0, 0, 0, 0.25),
    -2px -2px 6px 0 rgba(255, 255, 255, 0.08);

  &:active {
    box-shadow: 6px 6px 12px 0 rgba(0, 0, 0, 0.25) inset;
    color: #7e7f7a;
  }
`;
