import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomeContainer from '../Home/HomeContainer';
import WebPlayerContainer from '../WebPlayer/WebPlayerContainer';
import NavContainer from '../Nav/NavContainer';
import NowPlayingContainer from '../NowPlaying/NowPlayingContainer';
import YourPlaylistsContainer from '../YourPlaylists/YourPlaylistsContainer';
import { Wrapper, AppStyles } from './AppStyles';

export default ({ playTrack, currentPlaylist }) => (
  <MuiThemeProvider>
    <Router>
      <Wrapper>
        <NavContainer />
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route path="/playing" component={NowPlayingContainer} />
          <Route path="/playlists" component={YourPlaylistsContainer} />
        </Switch>
        {currentPlaylist && <WebPlayerContainer playTrack={playTrack} />}
      </Wrapper>
    </Router>
  </MuiThemeProvider>
);
