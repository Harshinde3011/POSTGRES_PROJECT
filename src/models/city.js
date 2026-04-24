'use strict';
import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class City extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Airport, {
        foreignKey: 'cityId'
      });
    }
  }
  City.init({
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    cityCode: {
      type: DataTypes.STRING,
      unique: true
    }
  }, {
    sequelize,
    modelName: 'City',
  });
  return City;
};

// npx sequelize model:generate --name City --attributes name:string,status:integer,cityCode:string - to generate model city
