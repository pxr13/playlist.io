export const setPathSuccess = (path) => ({
  type: 'SET_PATH',
  path
});

export const savePlaylistSuccess = (playlistId, { title, tracks }) => ({
  type: 'SAVE_PLAYLIST',
  payload: { playlistId, title, tracks }
});

export const setCurrentPlaylistSuccess = (playlistId) => ({
  type: 'SET_CURRENT_PLAYLIST',
  playlistId
});

export const fetchAllPlaylistsSuccess = ({ playlists, cache }) => ({
  type: 'UPDATE_ALL_PLAYLISTS',
  saved: playlists,
  cache
});

export const resolveCurrentPlaylist = () => ({
  type: 'RESOLVE_CURRENT_PLAYLIST'
});

export const fetchPlaylistSuccess = (playlist) => ({
  type: 'ADD_PLAYLIST',
  playlist
});

export const deleteCurrentPlaylist = () => ({
  type: 'DELETE_CURRENT_PLAYLIST'
});

export const updateFavorites = ({ data }) => ({
  type: 'UPDATE_FAVORITES',
  favorites: data.favorites
});

export const updateCache = ({ data }) => ({
  type: 'UPDATE_CACHE',
  cache: data.cache
});

export const updateCurrentPlaylist = ({ data }) => ({
  type: 'UPDATE_CURRENT_PLAYLIST',
  current: data.current
});

export const currentPlaylistSuccess = () => ({
  type: 'CURRENT_PLAYLIST_SUCCESS'
});

export const refreshAccessTokenSuccess = ({ access_token }) => ({
  type: 'REFRESH_ACCESS_TOKEN',
  accessToken: access_token
});
