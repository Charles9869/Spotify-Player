import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const RelatedArtists = ({ relatedArtists }) => {
  return (
    <ProfileRelated>
      related artists
      <Artists>
        {relatedArtists.map((artist) => {
          console.log(artist);
          return (
            <Link
              to={`/artist/${artist.id}`}
              style={{ textDecoration: 'none' }}
            >
              <Avatar key={artist.id} src={artist.images[0].url} />
              <Name>{artist.name}</Name>
            </Link>
          );
        })}
      </Artists>
    </ProfileRelated>
  );
};

const ProfileRelated = styled.h1`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 21px;
  line-height: 26px;
  text-transform: lowercase;
  color: #ffffff;
  padding-top: 40px;
  position: absolute;
  bottom: 20px;
  width: 100%;
`;

const Artists = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
`;

const Avatar = styled.img`
  border-radius: 50%;
  height: 60px;
  scroll-snap-align: start;
  margin: 40px 10px 10px 10px;
`;

const Name = styled.span`
  color: #fff;
  text-decoration: none;
  font-size: 15px;
`;

export default RelatedArtists;
