import { isError } from '../utils/helpers';

import api from '../api';
import * as h from '../utils/dispatchHelpers';

const noSavedFavorites = (data) => data.favorites.error;

export const fetchAllFavorites = (spotifyId) => async (dispatch) => {
  const response = await api.fetchAllFavoritesSent(spotifyId);
  const { data } = response;

  if (noSavedFavorites(data)) return;

  dispatch(h.updateFavorites(response));
};

const favoriteAction = (apiReq) => (spotifyId, query, trackData) => async (dispatch) => {
  const response = await apiReq(spotifyId, query, trackData);

  if (isError(response)) {
    console.log(response.data.error.message);
    return;
  }

  dispatch(h.updateFavorites(response));
  dispatch(h.updateCache(response));
  dispatch(h.updateCurrentPlaylist(response));
};

export const addFavorite = favoriteAction(api.addFavoriteSent);

export const deleteFavorite = favoriteAction(api.deleteFavoriteSent);
