import prisma from "../../common/prisma";

export class AuthRepository {
  getUserByEmail(email: string) {
    return prisma.user.findUnique({ where: { email } });
  }

  createUser(data: { name: string; email: string; passwordHash: string }) {
    return prisma.user.create({ data });
  }
}
