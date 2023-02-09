module.exports = {
  async up(queryInterface) {
    const setUsers = [
      {
        name: 'пупсик',
        email: 'pups@m.ru',
        password: '12345678',
        points: 10,
      },
      {
        name: 'жопсик',
        email: 'jopa@m.ru',
        password: '12345678',
        points: 10,
      },
      {
        name: 'папаня',
        email: 'papa@m.ru',
        password: '12345678',
        points: 10,
      },
    ];
    const users = setUsers.map((user) => ({
      ...user,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Users', users);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
