import styled from 'styled-components'

const mainSize = '2.5em';
const getSize = (size) => {
  const sizes = {
    small: '14px',
    normal: '18px',
    large: '24px',
  };
  return sizes[size] || sizes.normal;
}

const ButtonText = styled.div`
  background-image: linear-gradient(135deg, rgba(173,175,188,1) 0%, rgba(93,94,102,1) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ButtonBody = styled.button`
  height: ${mainSize};
  width: ${props => props.round && mainSize};
  min-width: ${props => !props.round && `calc(${mainSize} * 2)`};
  font-weight: 600;
  font-size: ${props => getSize(props.size)};
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

const ButtonLight = styled.div`
  background: ${props => props.active ? '#1eff0a' : '#fa000b'};
  border-radius: 50%;
  height: ${props => getSize(props.size)};
  width: ${props => getSize(props.size)};
  box-shadow:
        3px 3px 3px 0 rgba(0, 0, 0, 0.5) inset,
        -6px -6px 12px 0 rgba(255, 255, 255, 0.025) inset;
  
  &:active {
    background: #0fb300;
  }
`;


const Button = (props) => {
  return (
    <ButtonBody round={props.round} size={props.size} onClick={props.onClick}>
      {props.type === 'switch' ?
        <ButtonLight active={props.active}/>
        :
        <ButtonText props={props}>
          {props.children}
        </ButtonText>
      }
    </ButtonBody>
  )
}

export default Button;