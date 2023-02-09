module.exports = {
  async up(queryInterface) {
    const setTopics = [
      {
        title: 'Как хорошо ты знаешь сериал СЧАСТЛИВЫ ВМЕСТЕ???',
      },
      {
        title: 'Насколько хорошо ты знаешь котиков?🐱',
      },
      {
        title: 'Угадай фильм по эмодзи',
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
