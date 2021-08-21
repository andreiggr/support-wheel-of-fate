import React from "react";
import styled from "styled-components";

const Text = styled.p`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  cursor: ${(props) => props.cursor};
  text-align: ${(props) => props.textAlign};

  font-style: ${(props) => props.fontStyle};

  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};

  margin: ${(props) => props.margin};

  margin-top: ${(props) => (props.marginTop ? props.marginTop : "")};
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : "")};

  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};

  padding: ${(props) => props.padding};

  padding-top: ${(props) => props.paddingTop};
  padding-bottom: ${(props) => props.paddingBottom};
  padding-left: ${(props) => props.paddingLeft};
  padding-right: ${(props) => props.paddingRight};

  font-size: ${(props) => props.fontSize};

  color: ${(props) => (props.color ? props.color : "black")};
  font-weight: ${(props) => props.fontWeight};

`;
export default Text;
