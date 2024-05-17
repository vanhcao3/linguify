const { PrismaClient } = require('@prisma/client');
const database = new PrismaClient();

async function main() {
  try {
    await database.userProgress.createMany({
      data: [
        // {
        //   userId: 'clw00yifr00037rn9w0ybiu0u',
        //   courseId: '4a8cbd3d-e441-42f2-a945-0820253aa38c',
        // },
        // {
        //   userId: 'clw00yifr00037rn9w0ybiu0u',
        //   courseId: '87110d40-c416-43ee-9f11-cef9902d223b',
        // },
        // {
        //   userId: 'clw00yifr00037rn9w0ybiu0u',
        //   courseId: 'cc7e235a-d133-40fb-861e-f9e0a4aadd1f',
        // },
        {
          userId: 'clw00yifr00037rn9w0ybiu0u',
          chapterId: '6d9193eb-5e29-44c7-b4b1-9914981ede63',
          isCompleted: true,
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
