import { prisma } from "../../config";

export const userDao = {
  createUser: async (userData) => {
    return await prisma.user.create({
      data: userData,
    });
  },
  findUserByEmail: async (email) => {
    return await prisma.user.findUnique({
        where: { email },
    });
  },
  findUserById: async (id) => {
    return await prisma.user.findUnique({
        where: { id },
    });
  },
  updateUser: async (id, updateData) => {
    return await prisma.user.update({
        where: { id },
        data: updateData,
    });
  },
  deleteUser: async (id) => {
    return await prisma.user.delete({
        where: { id },
    });
  },
  getAllUsers: async (limit=10, offset=0) => {
    return await prisma.user.findMany({
      take: limit,
      skip: offset,
    });
  }
}