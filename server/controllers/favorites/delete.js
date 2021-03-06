const request = require('request');

const code = require('../../utils/statusCodes');
const User = require('../../models/User');
const deleteFromFavorites = require('./utils/deleteFromFavorites');
const deleteFavoriteFromCache = require('./utils/deleteFavoriteFromCache');
const getCurrentTracks = require('./utils/getCurrentTracks');
const { isTestEnv } = require('../../utils/helpers');

module.exports = async (req, res, next) => {
  // TODO: Figure out how to send req using query param in test env
  const { userid } = req.params;
  const { query, trackData } = isTestEnv() ? req.body.data : req.query;

  const parsedTrackData = JSON.parse(trackData);

  const targetUser = await User.findById(userId);

  deleteFromFavorites(parsedTrackData, targetUser);

  deleteFavoriteFromCache(targetUser, query, parsedTrackData);

  await targetUser.save();

  const { favorites, cache } = targetUser;
  const current = getCurrentTracks(cache, query);

  // if current playlist is empty, return an empty object -- useful for testing
  res.send({ success: true, favorites, cache, current: current ? current.tracks : {} });
};
