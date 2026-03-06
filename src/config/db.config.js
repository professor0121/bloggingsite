import { PrismaClient } from '@prisma/client'
import dotenv from 'dotenv'

dotenv.config()

const globalForPrisma = globalThis

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ['error', 'warn']
  })

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma
}

process.on('beforeExit', async () => {
  await prisma.$disconnect()
})

export default prisma