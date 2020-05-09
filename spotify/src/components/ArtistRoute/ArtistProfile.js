import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import nFormatter from '../../others';
import TopTrack from './TopTack';
import RelatedArtists from './RelatedArtists';

import SpinnerSrc from '../../assets/spinner.gif';
import { getArtist } from '../../reducers/artists.reducer';

const ArtistProfile = ({ profile, status }) => {
  const { images, name, followers, genres } = profile;
  const state = useSelector(getArtist);
  return (
    <Profile>
      {status === 'idle' ? (
        <>
          {images.length && <ProfilePicture src={images[0].url} />}
          <ProfileName>{name}</ProfileName>
          <FollowersContainer>
            <ProfileFollowers>
              {nFormatter(followers.total, 0)}
            </ProfileFollowers>{' '}
            followers
          </FollowersContainer>
          <TopTrack tracks={state.topTracks.slice(0, 3)} />
          <ProfileTags>Tags</ProfileTags>
          <ProfileGenres>
            {genres.slice(0, 2).map((genre, index) => {
              return <ProfileGenre key={index}>{genre}</ProfileGenre>;
            })}
          </ProfileGenres>
          <RelatedArtists relatedArtists={state.relatedArtist} />
        </>
      ) : (
        <Spinner src={SpinnerSrc}></Spinner>
      )}
    </Profile>
  );
};

const Profile = styled.div`
  position: relative;
  width: 375px;
  height: 812px;
  padding: 10px;
  background-color: #0b0f14;
  text-align: center;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProfilePicture = styled.img`
  position: absolute;
  width: 175px;
  height: 175px;
  left: 104px;
  top: 59px;
  border-radius: 190.5px;
`;

const ProfileName = styled.h3`
  position: absolute;
  width: 268px;
  height: 59px;
  left: 54px;
  top: 120px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 59px;
  color: #ffffff;
  text-shadow: 4px 8px 25px #000000, 0px 4px 4px rgba(0, 0, 0, 0.5),
    1px 2px 2px rgba(0, 0, 0, 0.75);
`;

const FollowersContainer = styled.span`
  position: absolute;
  width: 100px;
  height: 17px;
  left: 141px;
  top: 257px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  text-transform: lowercase;
`;
const ProfileFollowers = styled.span`
  color: #ff4fd8;
  font-weight: bold;
`;

const ProfileGenres = styled.div`
  display: flex;
`;

const ProfileGenre = styled.p`
  background: rgba(75, 75, 75, 0.4);
  border-radius: 4px;
  margin: 10px;
  padding: 10px;
`;

const ProfileTags = styled.h1`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 21px;
  line-height: 26px;
  text-transform: lowercase;
  color: #ffffff;
`;

const Spinner = styled.img`
  height: 50px;
`;
export default ArtistProfile;
