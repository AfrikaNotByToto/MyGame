module.exports = {
  async up(queryInterface) {
    const setQuest = [
      {
        question: 'Кто самый тупой в семье Букиных?',
        answer: 'Света',
        topic_id: 1,
        price: 1,
      },
      {
        question:
          'Как звали первого мужа Лены (соседки Букиных)? Женя или Толик?',
        answer: 'Женя',
        topic_id: 1,
        price: 1,
      },
      {
        question: 'В каком году вышел сериал? 2006 или в 2007?',
        answer: '2006',
        topic_id: 1,
        price: 1,
      },
      {
        question: 'Кого играет Александр Якин? Гену или Рому?',
        answer: 'Рому',
        topic_id: 1,
        price: 1,
      },
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
        question: 'Даша любит готовить?',
        answer: 'Нет',
        topic_id: 1,
        price: 1,
      },
      {
        question: 'Как зовут нового сына Гены и Даши? Паша или Сема?',
        answer: 'Сема',
        topic_id: 1,
        price: 1,
      },
      {
        question: 'Начнём с простого. Сколько у котов лап?',
        answer: '4',
        topic_id: 2,
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
      {
        question: '🤠🤠🐎: «Скачки», «Горбатая гора», «1+1» ?',
        answer: 'Горбатая гора',
        topic_id: 3,
        price: 1,
      },
      {
        question: '💊🕶🖥: «Социальная сеть», «Матрица», «Области тьмы» ?',
        answer: 'Матрица',
        topic_id: 3,
        price: 1,
      },
      {
        question: '🦫⏰🦫: «День сурка», «Мы купили зоопарк», «Крутые бобры» ?',
        answer: 'День сурка',
        topic_id: 3,
        price: 1,
      },
      {
        question:
          '🫀🗝🏝 : «Изгой», «Пираты Карибского моря: Сундук мертвеца», «Голубая лагуна» ?',
        answer: 'Пираты Карибского моря: Сундук мертвеца',
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
