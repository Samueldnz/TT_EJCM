import { PrismaClient } from "../../generated/prisma";
import { UserSeeder } from "./UserSeeder";

const prisma = new PrismaClient();

async function main(){
    await prisma.$connect();
    await UserSeeder(prisma, 20);
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
