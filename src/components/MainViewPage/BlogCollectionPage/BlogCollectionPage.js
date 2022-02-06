import React, { useEffect } from "react";
import styled from "styled-components";
import Menutab from "./MenuTab/MenuTab";

const Root = styled.div`
  margin-top: 3.5rem;
  padding-right: 4rem;
  padding-left: 5rem;
  background-color: #f2f4f8;
  min-height: 100vh;
  @media screen and (max-width: 1000px) {
    padding-right: 1rem;
    padding-left: 1rem;
  }
`;

const TabContainor = styled.div``;
const ViewAllCotainor = styled.div`
  margin-left: 1rem;
  margin-right: 1rem;
`;
const BlogCollectionPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Root>
      <TabContainor>
        <Menutab />
      </TabContainor>
      <ViewAllCotainor>All Data</ViewAllCotainor>
    </Root>
  );
};

export default BlogCollectionPage;
