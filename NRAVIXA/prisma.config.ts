import { defineConfig } from '@prisma/config'

export default defineConfig({
  earlyAccess: true,
  schema: {
    path: './prisma/schema.prisma',
  },
  migrate: {
    databaseUrl: process.env.DATABASE_URL || 'postgresql://placeholder:5432/db',
  },
})
