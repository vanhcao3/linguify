import { PrismaClient  } from "@prisma/client";
const prisma = new PrismaClient()

export const listExam = async () => {
    
    const lstExam = await prisma.exam.findMany({
        include: {
            lstTopic: {
                select: {
                    id: true,
                    nameTopic: true,
                }
            }
        }
    })
    // console.log("lstExam: ",lstExam)
    return lstExam
}

listExam()