import React from 'react'
import styled from 'styled-components';

const Button = styled.div`
  background-color: ${props => props.themeColor ? props.themeColor : "transparent"};
  height: ${props => props.height};
  width: ${props => props.width};
  text-align: center;


  cursor: pointer;
  color: ${props=> props.color? props.color : "black"};

  border-radius: ${props => props.borderRadius};

  display: flex;
  flex-direction: ${props => props.direction};
  align-items: ${props => props.alignItems ? props.alignItems : "center"};
  justify-content: ${props => props.justifyContent? props.justifyContent : 'center'};

  padding: ${props => props.padding};
  margin: ${props => props.margin};

  padding-top: ${props => props.paddingTop};
  padding-bottom: ${props => props.paddingBottom};
  padding-left: ${props => props.paddingLeft};
  padding-right: ${props => props.paddingRight};

  margin-top: ${props => props.marginTop};
  margin-bottom: ${props => props.marginBottom};
  margin-left: ${props => props.marginLeft};
  margin-right: ${props => props.marginRight};
  
`
export default Button;