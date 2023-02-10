module.exports = {
  async up(queryInterface) {
    const setQuest = [

      {
        question: 'В каком веке происходит действие сериала?',
        answer: '21 век',
        topic_id: 1,
        price: 200,
      },
      {
        question: 'Назовите друга Шерлока?',
        answer: 'Доктор Ватсон',
        topic_id: 1,
        price: 300,
      },
      {
        question: 'На каком инструменте играл Шерлок?',
        answer: 'Скрипка',
        topic_id: 1,
        price: 400,
      },
      {
        question: 'Какой была невеста в специальном рождественском выпуске?',
        answer: 'Молчаливой',
        topic_id: 1,
        price: 500,
      },

      {
        question: 'Какой самый точный способ идентификации личности?',
        answer: 'Отпечатки пальцев',
        topic_id: 2,
        price: 200,
      },
      {
        question: 'Как называется излюбленный метод Шерлока Холмса?',
        answer: 'Дедукция',
        topic_id: 2,
        price: 300,
      },
      {
        question: 'Какой протокол используется для шифрования данных при отправке через интернет?',
        answer: 'SSL',
        topic_id: 2,
        price: 400,
      },
      {
        question: 'Какое животное имеет отпечатки пальцев как у человека?',
        answer: 'Коала',
        topic_id: 2,
        price: 500,
      },
      {
        question: 'Как называется строка, которая беговая?',
        answer: 'Бегущая',
        topic_id: 3,
        price: 200,
      },
      {
        question: 'Кто оставил кружку после стенд-апа???',
        answer: 'не я, кто-то за меня',
        topic_id: 3,
        price: 300,
      },
      {
        question: 'Если поменять бутылку в куллере, какой чай ты будешь пить?',
        answer: 'Горячий, у нас ведь есть микроволновка!',
        topic_id: 3,
        price: 400,
      },
      {
        question: 'Джулия купила две шоколадки, Вова, Таня и Лейла пошли пить чай с Джулией. Вопрос, сколько шоколадок съела Джулия? Прояви свою дедукцию',
        answer: 'Одну, спасибо Джулия, ты лучшая!!!',
        topic_id: 3,
        price: 500,
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
