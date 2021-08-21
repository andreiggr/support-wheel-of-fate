import React, { useState } from "react";
import styled from "styled-components";

const Image = ({ src, alt, ...props }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="smooth-image-wrapper">
      <StyledImg
        src={src}
        alt={alt}
        visible={imageLoaded}
        className={`smooth-image`}
        onLoad={() => setImageLoaded(true)}
        {...props}
      />
      {!imageLoaded && <Loader />}
    </div>
  );
};

export default Image;

const Loader = styled.div`
  background-image: linear-gradient(90deg, #ccc, #999, #ccc);
  color: #fff;
`;

const StyledImg = styled.img`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  cursor: ${(props) => props.cursor};

  border: ${(props) => (props.border ? props.border : "none")};

  margin: ${(props) => props.margin};

  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};

  transition: opacity 0.5s;

  opacity: ${({ visible }) => (visible ? 1 : 0)};
`;

// /** styles.css */

// .smooth-image {
//   transition: opacity 1s;
// }
// .image-visible {
//   opacity: 1;
// }
// .image-hidden {
//   opacity: 0;
// }
