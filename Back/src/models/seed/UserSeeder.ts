import { Prisma, PrismaClient } from "../../generated/prisma";
import { fakerPT_BR } from "@faker-js/faker";

export async function UserSeeder(prisma: PrismaClient, numUser: number) {
    const users: Prisma.UserCreateInput[] = [];

    for (let i = 0; i < numUser; i++) {
        users.push({
            cpf: fakerPT_BR.number.int({ min: 10000000000, max: 99999999999 }).toString(), 
            telefone: fakerPT_BR.phone.number(),
            name: fakerPT_BR.person.fullName(),
            email: fakerPT_BR.internet.email(),
            password: fakerPT_BR.internet.password(),
        });
    }

    await prisma.user.createMany({
        data: users,
        skipDuplicates: true 
    });
}
