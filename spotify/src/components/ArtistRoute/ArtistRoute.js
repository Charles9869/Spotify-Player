import React from 'react';
import styled from 'styled-components';

import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import {
  fetchArtistProfile,
  fetchRelatedArtist,
  fetchTopTracks,
} from '../../helpers/api-helpers';
import {
  receiveArtist,
  receiveRelatedArtist,
  requestAllInfo,
  receiveAllInfo,
  receiveTopTracks,
} from '../../actions';
import ArtistProfile from './ArtistProfile';

const ArtistRoute = () => {
  const dispatch = useDispatch();

  const accessToken = useSelector((state) => state.auth.token);
  const currentArtist = useSelector((state) => state.artists.currentArtist);
  const status = useSelector((state) => state.artists.status);

  const artistId = useParams().id;

  React.useEffect(() => {
    dispatch(requestAllInfo());
    if (!accessToken) return;

    const artistProfile = fetchArtistProfile(accessToken, artistId).then(
      (data) => {
        dispatch(receiveArtist(data));
      }
    );

    const relatedArtist = fetchRelatedArtist(
      accessToken,
      artistId
    ).then((data) => dispatch(receiveRelatedArtist(data.artists)));

    const topTracks = fetchTopTracks(accessToken, artistId).then((data) =>
      dispatch(receiveTopTracks(data.tracks))
    );

    // Dispatch an action when all fetches are done
    Promise.all([artistProfile, relatedArtist, topTracks]).then(() => {
      console.log('Done!');
      dispatch(receiveAllInfo());
    });
  }, [accessToken, artistId]);

  return (
    <Wrapper>
      {currentArtist && (
        <ArtistProfile profile={currentArtist.profile} status={status} />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default ArtistRoute;
