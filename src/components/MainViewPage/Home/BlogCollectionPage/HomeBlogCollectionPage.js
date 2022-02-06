import React, { useEffect } from "react";
import styled from "styled-components";
import Menutab from "./MenuTab/MenuTab";
import add from "../../../../Assets/add.PNG";

const Root = styled.div`
  // margin-top: 4.1%;
  padding-right: 4rem;
  padding-left: 5rem;
  background-color: #f2f4f8;
  min-height: 100vh;
  @media screen and (max-width: 1327px) {
    padding-right: 2rem;
    padding-left: 2rem;
  }
  @media screen and (max-width: 750px) {
    padding-right: 1rem;
    padding-left: 1rem;
  }
`;

const TabContainor = styled.div``;
const ViewAllCotainor = styled.div`
  margin-left: 1rem;
  margin-right: 1rem;
  img {
    width: 100%;
  }
`;
const HomeBlogCollectionPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Root>
      <TabContainor>
        <Menutab />
      </TabContainor>
      <ViewAllCotainor>
        <img src={add} alt="add" />
      </ViewAllCotainor>
    </Root>
  );
};

export default HomeBlogCollectionPage;
