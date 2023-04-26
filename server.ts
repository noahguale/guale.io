import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  async function main() {
    await prisma.$connect();

    await prisma.user.create({
      data: {
        email: "hello@prisma.com",
      },
    });

    const allUsers = await prisma.user.findMany({
      include: {
        posts: true,
      },
    });
    console.dir(allUsers, { depth: null });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
