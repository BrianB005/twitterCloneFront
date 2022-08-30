import React from "react";
import styled from "styled-components";
const TweetBody = ({ title }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <ImageContainer>
        <Image src="https://images.pexels.com/photos/9679630/pexels-photo-9679630.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></Image>
      </ImageContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 1px;
  width: 100%;
`;

const Title = styled.h5`
  width: 90%;
  margin: 0 auto 10px;
`;

const ImageContainer = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
`;

export default TweetBody;
