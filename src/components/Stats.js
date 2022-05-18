import { useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 50px;
  display: flex;

  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;

  @media (max-width: 900px) {
    flex-wrap: wrap;
  }
`;

const LeftBox = styled.div`
  background-color: #1c1938;
  width: 455px;
  padding: 60px 100px 50px 50px;

  @media (max-width: 900px) {
    margin-bottom: 20px;
  }
`;

const RightBox = styled.div``;

const Title = styled.h1`
  color: #fff;
  text-align: center;
  font-size: 30px;
  margin-bottom: 25px;
`;

const StatsImage = styled.img`
  display: block;
  filter: opacity(0.4) drop-shadow(0 0 0 violet);
  width: 455px;
  height: 410px;

  @media (max-width: 900px) {
    margin-bottom: 25px;
  }
`;

const Span = styled.span`
  color: #985bc3;
`;

const Text = styled.p`
  color: #8b89a3;
  line-height: 23px;
  margin-bottom: 60px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const WrapperBox = styled.div``;

const WrapperTitle = styled.h4`
  margin-bottom: 5px;
  color: #fff;
`;

const WrapperSubtitle = styled.h5`
  color: #716e89;
  text-transform: uppercase;
`;

const Stats = () => {
  useEffect(() => {
    document.title = 'Stats card';
  }, []);

  return (
    <Container>
      <LeftBox>
        <Title>
          Get <Span>insights</Span> that help your business grow.
        </Title>
        <Text>
          Discover the benefits of data analytics and makebetter decisions
          ragerading revenue, customer experience, and overall efficiency.
        </Text>
        <Wrapper>
          <WrapperBox>
            <WrapperTitle>10k+</WrapperTitle>
            <WrapperSubtitle>Companies</WrapperSubtitle>
          </WrapperBox>
          <WrapperBox>
            <WrapperTitle>314</WrapperTitle>
            <WrapperSubtitle>Templates</WrapperSubtitle>
          </WrapperBox>
          <WrapperBox>
            <WrapperTitle>12M+</WrapperTitle>
            <WrapperSubtitle>Queries</WrapperSubtitle>
          </WrapperBox>
        </Wrapper>
      </LeftBox>
      <RightBox>
        <StatsImage src="./images/image-header-desktop.jpg" alt="stats image" />
      </RightBox>
    </Container>
  );
};

export default Stats;
