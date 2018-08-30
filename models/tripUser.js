'use strict';
module.exports = (sequelize, DataTypes) => {
  const TripUser = sequelize.define('TripUser', {
    user_id: DataTypes.INTEGER,
    trip_id: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {});
  TripUser.associate = function(models) {
    
    TripUser.belongsTo(models.User, {
      foreignKey : 'user_id',
      as: 'TripUserToUser'
    })

    TripUser.belongsTo(models.Trip, {
      foreignKey : 'user_id',
      as: 'TripUserToTrip'
    })

  };
  return TripUser;
};