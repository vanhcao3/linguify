const { PrismaClient } = require('@prisma/client');
const database = new PrismaClient();

async function main() {
  try {
    await database.favoriteBlog.createMany({
      data: [
        {
          userId: 'clwdlhgsg00002a9tclvpc0ca',
          blogId: '876851a8-2f8f-4b55-beb2-62ef36669bab',
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
