const initialState = {
  currentArtist: null,
  status: 'idle',
};

export default function artistReducer(state = initialState, action) {
  switch (action.type) {
    // case 'REQUEST_ARTIST': {
    //   return {
    //     ...state,
    //   };
    // }

    case 'RECEIVE_ARTIST': {
      return {
        ...state,
        currentArtist: {
          profile: action.profile,
        },
      };
    }

    // case 'RECEIVE_ARTIST_ERROR': {
    //   return {
    //     ...state,
    //     status: 'error',
    //   };
    // }

    case 'RECEIVE_RELATED_ARTIST': {
      return {
        ...state,
        currentArtist: {
          ...state.currentArtist,
          relatedArtist: action.relatedArtist,
        },
      };
    }

    case 'RECEIVE_TOP_TRACKS': {
      return {
        ...state,
        currentArtist: {
          ...state.currentArtist,
          topTracks: action.topTracks,
        },
      };
    }

    case 'REQUEST_ALL_INFO': {
      return { ...state, status: 'loading' };
    }

    case 'RECEIVE_ALL_INFO': {
      return { ...state, status: 'idle' };
    }
    default:
      return state;
  }
}

export const getArtist = (state) => state.artists.currentArtist;
// export const getArtistStatus = (state) => state.artists.status;
