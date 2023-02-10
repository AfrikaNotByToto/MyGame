module.exports = {
  async up(queryInterface) {
    const setTopics = [
      {
        title: 'Сериал Шерлок',
      },
      {
        title: 'Криминалистика для малышей',
      },
      {
        title: 'Следствие ведут колобки',
      },
    ];
    const topics = setTopics.map((topic) => ({
      ...topic,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Topics', topics);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Topics', null, {});
  },
};
