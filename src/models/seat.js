'use strict';
import { Model } from 'sequelize';

export default(sequelize, DataTypes) => {
  class Seat extends Model {
    static associate(models) {
      this.belongsTo(models.Airplane, {
        foreignKey: 'airplaneId'
      })
    }
  }
  Seat.init({
    airplaneId:{ type: DataTypes.INTEGER, allowNull: false },
    row:{ type: DataTypes.INTEGER, allowNull: false },
    col: { type: DataTypes.STRING, allowNull: false},
    class: { type: DataTypes.ENUM, values: ['business', 'economy', 'premium-economy', 'first-class'] },
    defaultValue: 'economy'
  }, {
    sequelize,
    modelName: 'Seat',
  });
  return Seat;
};