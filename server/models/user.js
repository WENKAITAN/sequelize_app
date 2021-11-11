'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsToMany(models.Product, { as: "ProductsInUsers", through: models.Order, foreignKey:"user_id"})
    }
    // toJSON(){
    //   return{...this.get(), id: undefined}
    // }
  };
  User.init({
    user_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "User must have a name."},
        notEmpty: { msg: "Name must not be empty."}
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "User must have a email."},
        notEmpty: { msg: "Email must not be empty."},
        isEmail: { msg: "Must be a valid email address."}
      }
    }
  }, {
    sequelize,
    tableName: "users",
    modelName: 'User',
  });
  return User;
};