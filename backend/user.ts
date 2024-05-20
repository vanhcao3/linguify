import { PrismaClient  } from "@prisma/client";
const prisma = new PrismaClient()

export const listuser = async () => {
    // await prisma.user.create({
    //     data: {
    //         age: 10,
    //         name:'loc'
    //     }
    // })
    
    const datausers = await prisma.user.findMany()

    // console.log(datausers)

    return datausers
}