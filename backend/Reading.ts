import { PrismaClient  } from "@prisma/client";
const prisma = new PrismaClient()

export const listReading = async () => {
    
    const lstReading = await prisma.reading.findMany({
        include: {
            answerOptions: {
                select: {
                    id: true,
                    answerText: true,
                    isCorrect: true
                }
            },
            exams: {
                select: {
                    id: true,
                    nameExam: true,
                }
            },
            topics: {
                select: {
                    id: true,
                    nameTopic: true,
                }
            }
        }
    })
    // console.log("lstReading: ",lstReading)
    return lstReading
}

listReading()