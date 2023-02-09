const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    static associate({ Topic }) {
      this.belongsTo(Topic, { foreignKey: 'topic_id' });
    }
  }
  Question.init(
    {
      topic_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Topics',
          key: 'id',
        },
      },
      question: DataTypes.TEXT,
      answer: DataTypes.TEXT,
      price: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Question',
    },
  );
  return Question;
};
