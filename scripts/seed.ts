const { PrismaClient } = require('@prisma/client');
const database = new PrismaClient();

async function main() {
  try {
    await database.notification.createMany({
      data: [
        {
          userId: 'clw00yifr00037rn9w0ybiu0u',
          message: 'Chào mừng bạn đến với Linguify!',
        },
        {
          userId: 'clw00yifr00037rn9w0ybiu0u',
          message:
            'Đăng ký khoá học Aptis Grammar and Vocabulary Booster thành công!',
        },
        {
          userId: 'clw00yifr00037rn9w0ybiu0u',
          message: 'Đăng ký khoá học IELTS speaking thành công!',
        },
        {
          userId: 'clw00yifr00037rn9w0ybiu0u',
          message:
            'Đăng ký khoá học Creative Writing Workshop thành công!',
        },
        {
          userId: 'clw00yifr00037rn9w0ybiu0u',
          message:
            'Đăng ký khoá học Test course editted 23 thành công!',
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
