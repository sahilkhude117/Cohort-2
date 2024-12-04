import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getTodo(userId:number) {

    const res = await prisma.todo.findMany({
      where:{
        userId : userId
      },
      select: {
        id : true,
        title: true,
        description: true,
        user: true
      }
    })
    console.log(res);
}

getTodo(1);
