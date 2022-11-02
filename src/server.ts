import Fastify from "fastify"
import { PrismaClient} from '@prisma/client'
import cors from '@fastify/cors'
import ShortUniqueId from 'short-unique-id'
import z from 'zod'

async function bootstrap() {
  const fastify = Fastify({
    logger: true
  })

  await fastify.register(cors, {
    origin: true
  })

  const prisma = new PrismaClient({
    log: ['query']
  })

  const generate = new ShortUniqueId({ length: 6 })



  fastify.get('/pools/count', async () => {
    const count = await prisma.pool.count()

    return { count }
  })

    fastify.get('/users/count', async () => {
      const count = await prisma.user.count()

      return { count }
    })

    fastify.get('/guesses/count', async () => {
      const count = await prisma.guess.count()

      return { count }
    })

  fastify.post('/pools', async (request, reply) => {
    const createPoolBody = z.object({
      title: z.string()
    })
    const code =  String(generate()).toUpperCase()
    try {
      const { title } = createPoolBody.parse(request.body)
      if (title) {
        await prisma.pool.create({
          data: {
            title,
            code
          }
        })
      }
      return reply.status(201).send({ code })
    } catch (err) {
      return reply.status(500).send({
        status: 500,
        message: 'Unable to create pool without name. Try again.'
      })
    }
  })

  await fastify.listen({ port: 3333 })
}

bootstrap()