'use strict';
import { Model } from "sequelize";

export default(sequelize, DataTypes) => {
  class Airport extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.City, {
        foreignKey: 'cityId',
        onDelete: 'CASCADE'
      });

      this.hasMany(models.Flight, {
        as: 'arrivals',
        foreignKey: 'arrivalAirportId',
        sourceKey: 'code',
        onDelete: 'CASCADE'
      });

      this.hasMany(models.Flight, {
        as: 'departures',
        foreignKey: 'departureAirportId',
        sourceKey: 'code',
        onDelete: 'CASCADE'
      });
    }
  }
  Airport.init({
    name: { type: DataTypes.STRING, allowNull: false },
    code: { type: DataTypes.STRING, allowNull:false, unique: true},
    address: { type: DataTypes.STRING },
    cityId: {type: DataTypes.INTEGER, allowNull: false }
  }, {
    sequelize,
    modelName: 'Airport',
  });
  return Airport;
};

// npx sequelize migration:generate --name update-city-airport-association, which will generate new file in migration where we will write code for association of 2 tables
// js level control
