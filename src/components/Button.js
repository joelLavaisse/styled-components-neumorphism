import styled from 'styled-components'

const Button = styled.button`
  height: 3em;
  width: 3em;
  font-weight: 600;
  font-size: 16px;
  border-radius: 50%;
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
    }
`;

export default Button;