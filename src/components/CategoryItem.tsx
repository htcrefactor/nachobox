import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const Poster = styled.img<{ width: number }>`
  height: ${({ width }) => width * 1.5 + "px"};
  border-radius: 10px;
`;

const Overlay = styled.div`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.7);

  opacity: 0;
  transition: opacity 0.3s ease-in-out;

  padding: 5px 10px;
  display: flex;
  flex-direction: column;
`;

const OverlayRow = styled.div`
  display: flex;
  padding: 5px 0;
`;

const OverlayStatusBar = styled(OverlayRow)`
  font-size: 1.2rem;
  justify-content: space-between;
`;

const OverlayTitle = styled(OverlayRow)`
  font-size: 1.1rem;
`;

const OverlayReleaseDate = styled(OverlayRow)`
  font-size: 0.8rem;
  color: #aaa;
  flex: 1;
`;

const OverlayRating = styled(OverlayRow)`
  font-size: 0.8rem;
  justify-content: flex-end;
`;

const PosterContainer = styled.div`
  position: relative;
  margin-bottom: 5px;

  &:hover ${Overlay} {
    opacity: 1;
  }
`;

const Title = styled.h2`
  font-size: 1rem;
  padding: 5px 0;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Year = styled.h3`
  font-size: 0.9rem;
  color: #aaa;
`;

type CategoryItemProps = {
  posterURL: string;
  width: number;
  title: string;
  releaseDate: string;
  rating: number;
};

function CategoryItem({
  posterURL,
  width,
  title,
  releaseDate,
  rating,
}: CategoryItemProps) {
  return (
    <Container>
      <PosterContainer>
        <Overlay>
          <OverlayStatusBar>
            <span>+</span>
            <span>♡</span>
          </OverlayStatusBar>
          <OverlayTitle>{title}</OverlayTitle>
          <OverlayReleaseDate>개봉일: {releaseDate}</OverlayReleaseDate>
          <OverlayRating>★ {rating} / 10</OverlayRating>
        </Overlay>
        <Poster src={posterURL} width={width} />
      </PosterContainer>
      <Title>{title}</Title>
      <Year>{releaseDate.split("-")[0]}</Year>
    </Container>
  );
}

export default CategoryItem;