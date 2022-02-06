import React, { useEffect } from "react";
import styled from "styled-components";

const Root = styled.div`
  margin-top: 4.1%;
  height: 80vh;
  padding: 1rem 4rem 1rem 5rem;
`;
const OurStory = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <Root>hello</Root>;
};

export default OurStory;
