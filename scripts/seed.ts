const { PrismaClient } = require('@prisma/client');
const database = new PrismaClient();

async function main() {
  try {
    await database.category.createMany({
      data: [
        { name: 'IELTS' },
        { name: 'TOEFL' },
        { name: 'TOEIC' },
        { name: 'Aptis' },
        { name: 'SAT' },
        { name: 'CAE' },
        { name: 'CPE' },
        { name: 'KET' },
        { name: 'PET' },
        { name: 'Foundation' },
        { name: 'Elementary' },
        { name: 'Pre-intermediate' },
        { name: 'Intermediate' },
        { name: 'Upper-intermediate' },
        { name: 'Advanced' },
        { name: 'Proficiency' },
        { name: 'Vocabulary Intensive' },
        { name: 'Grammar Intensive' },
        { name: 'Reading' },
        { name: 'Writting' },
        { name: 'Speaking' },
        { name: 'Listening' },
        { name: 'Miscellaneous' },
      ],
    });
  } catch (error) {
    console.log('Error seeding the database category', error);
  } finally {
    await database.$disconnect();
  }
}

main();
