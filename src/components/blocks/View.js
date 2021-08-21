import React from "react";
import styled from "styled-components";

const View = styled.div`
  background-color: ${(props) => props.themeColor};
  height: ${(props) => props.height};
  width: ${(props) => props.width};

  min-width: ${(props) => props.minWidth};
  min-height: ${(props) => props.minHeight};

  max-width: ${(props) => props.maxWidth};
  max-height: ${(props) => props.maxHeight};

  flex-wrap: ${(props) => props.wrap};

  border: ${(props) => props.border};
  position: ${props=> props.position};

  border-radius: ${(props) => props.borderRadius};

  display: ${(props) => props.display};
  flex-direction: ${(props) => props.direction};
  align-items: ${(props) => (props.alignItems ? props.alignItems : "")};
  justify-content: ${(props) => props.justifyContent};

  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};

  padding-top: ${(props) => props.paddingTop};
  padding-bottom: ${(props) => props.paddingBottom};
  padding-left: ${(props) => props.paddingLeft};
  padding-right: ${(props) => props.paddingRight};

  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};
`;
export default View;
