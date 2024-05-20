import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function updateData() {
  try {
    // Update a single record
    const updatedRecord = await prisma.modelName.update({
      where: { id: 1 }, // Specify the condition to identify the record
      data: {
        // Provide the updated fields and values
        field1: 'updatedValue1',
        field2: 'updatedValue2',
        // Add more fields as needed
      },
    });

    console.log('Updated record:', updatedRecord);
  } catch (error) {
    console.error('Error updating data:', error);
  } finally {
    await prisma.$disconnect();
  }
}

updateData();