import { prisma } from "../../config";

export const postDao = {
  createPost: async (postData) => {
    return await prisma.post.create({
        data: postData,
    });
  },
  findPostById: async (id) => {
    return await prisma.post.findUnique({
        where: { id },
    });
  },
  updatePost: async (id, updateData) => {
    return await prisma.post.update({
        where: { id },
        data: updateData,
    });
  },
  deletePost: async (id) => {
    return await prisma.post.delete({
        where: { id },
    });
  },
  getAllPosts: async (limit=10, offset=0) => {
    return await prisma.post.findMany({
        take: limit,
        skip: offset,
    });
  },
    getPostsByUserId: async (userId, limit=10, offset=0) => {
    return await prisma.post.findMany({
        where: { authorId: userId },
        take: limit,
        skip: offset,
    });
  },
    searchPosts: async (query, limit=10, offset=0) => {
    return await prisma.post.findMany({
        where: {
            OR: [
                { title: { contains: query } },
                { content: { contains: query } }
            ]
        },
        take: limit,
        skip: offset,
    });
  },
}