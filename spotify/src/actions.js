export const requestAccessToken = () => ({
  type: 'REQUEST_ACCESS_TOKEN',
});

export const receiveAccessToken = (token) => ({
  type: 'RECEIVE_ACCESS_TOKEN',
  token,
});

export const receiveAccessTokenError = () => ({
  type: 'RECEIVE_ACCESS_TOKEN_ERROR',
});

export const requestArtist = () => ({
  type: 'REQUEST_ARTIST',
});

export const receiveArtist = (profile) => ({
  type: 'RECEIVE_ARTIST',
  profile,
});

export const receiveArtistError = () => ({
  type: 'RECEIVE_ARTIST_ERROR',
});

export const receiveRelatedArtist = (relatedArtist) => ({
  type: 'RECEIVE_RELATED_ARTIST',
  relatedArtist,
});

export const receiveTopTracks = (topTracks) => ({
  type: 'RECEIVE_TOP_TRACKS',
  topTracks,
});

export const receiveAllInfo = () => ({ type: 'RECEIVE_ALL_INFO' });
export const requestAllInfo = () => ({ type: 'REQUEST_ALL_INFO' });
