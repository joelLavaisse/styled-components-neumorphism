import styled from 'styled-components'

const mainSize = '3em'

const Button = styled.button`
  height: ${mainSize};
  width: ${props => props.round && mainSize};
  font-weight: 600;
  font-size: 22px;
  user-select: none;
  border-radius: ${props => props.round ? '50%' : `calc(${mainSize} / 2)`};
  padding: 0 ${props => !props.round && `calc(${mainSize} / 2)`};
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(135deg, rgba(80,80,80,1) 0%, rgba(37,37,37,1) 100%);
  box-shadow: 
    6px 6px 12px 0 rgba(0, 0, 0, 0.25),
    -6px -6px 12px 0 rgba(255, 255, 255, 0.025);
  
    &:active {
      box-shadow:
        6px 6px 12px 0 rgba(0, 0, 0, 0.25) inset,
        -6px -6px 12px 0 rgba(255, 255, 255, 0.025) inset;
      color: #7e7f7a;
    }
`;

export default Button;