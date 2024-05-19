const { PrismaClient } = require('@prisma/client');
const database = new PrismaClient();

async function main() {
  try {
    await database.user.createMany({
      data: [
        {
          name: 'Hoàng Thế Anh',
          email: 'hoangtheanh@gmail.com',
        },
        {
          name: 'Thế Có Tâm',
          email: 'thecotam@gmail.com',
        },
      ],
    });
  } catch (error) {
    console.log('Error seeding the database category', error);
  } finally {
    await database.$disconnect();
  }
}

main();
