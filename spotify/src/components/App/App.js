import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';

import ArtistRoute from '../ArtistRoute';
import {
  requestAccessToken,
  receiveAccessToken,
  receiveAccessTokenError,
} from '../../actions';

import GlobalStyles from '../GlobalStyles';

const DEFAULT_ARTIST_ID = '2CIMQHirSU0MQqyYHq0eOx';

const App = () => {
  // Create the dispatch
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(requestAccessToken());
    fetch('/spotify_access_token')
      .then((res) => res.json())
      .then((json) => {
        dispatch(receiveAccessToken(json.access_token));
      })
      .catch((err) => {
        dispatch(receiveAccessTokenError());
      });
  }, []);

  return (
    <Router>
      <GlobalStyles />
      <Switch>
        <Route path='/artist/:id'>{<ArtistRoute />}</Route>
        <Redirect to={`/artist/${DEFAULT_ARTIST_ID}`} />
      </Switch>
    </Router>
  );
};

export default App;
