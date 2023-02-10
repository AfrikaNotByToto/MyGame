module.exports = {
  async up(queryInterface) {
    const setQuest = [

      {
        question: 'Кем работает Гена Букин?',
        answer: 'Продавцом обуви',
        topic_id: 1,
        price: 1,
      },
      {
        question: 'Какая машина у Гены?',
        answer: 'Пятёрка',
        topic_id: 1,
        price: 1,
      },
      {
        question: 'Какого цвета волосы у Даши?',
        answer: 'Рыжие',
        topic_id: 1,
        price: 1,
      },
      {
        question: 'Где работает Лена? В кафе или в банке?',
        answer: 'В банке',
        topic_id: 1,
        price: 1,
      },

      {
        question: 'А сколько усиков? (На одной стороне)? 24, 6 или 12?',
        answer: '12',
        topic_id: 2,
        price: 1,
      },
      {
        question: 'Почему кот точит когти, когда хозяин приходит домой?',
        answer: 'Радуется',
        topic_id: 2,
        price: 1,
      },
      {
        question: 'Какие цвета котики НЕ различают?',
        answer: 'оранжевый, желтый и красный',
        topic_id: 2,
        price: 1,
      },
      {
        question: 'Кошки умны, как... ребеное в 1 год, в 3 года или в 7 лет?',
        answer: 'В 3 года',
        topic_id: 2,
        price: 1,
      },
      {
        question:
          '🍔🧑🏿‍🦱🧑🏻: «Двойная порция», «Криминальное чтиво», «Основатель»?',
        answer: 'Криминальное чтиво',
        topic_id: 3,
        price: 1,
      },
      {
        question: '👨🏻‍✈️🥄🌳: «Зеленая миля», «Побег из Шоушенка», «Древо жизни»?',
        answer: 'Побег из Шоушенка',
        topic_id: 3,
        price: 1,
      },
      {
        question:
          '👴🏻⏳👶🏻: «Отцы и дети», «Назад в будущее», «Загадочная история Бенджамина Баттона»?',
        answer: 'Загадочная история Бенджамина Баттона',
        topic_id: 3,
        price: 1,
      },
      {
        question:
          '🧢👟🍫: «Форрест Гамп», «Чарли и шоколадная фабрика», «Убойный футбол»?',
        answer: 'Форрест Гамп',
        topic_id: 3,
        price: 1,
      },

    ];

    const quests = setQuest.map((que) => ({
      ...que,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Questions', quests);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Questions', null, {});
  },
};
