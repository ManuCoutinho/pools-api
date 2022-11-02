import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const user = await prisma.user.create({
    data: {
      name: 'John Doe',
      email: 'john.doe@gmail.com',
      avatarUrl: 'https://github.com/ManuCoutinho.png'
    }
  })

  const pool = await prisma.pool.create({
    data:{
      title: 'Example Pool',
      code: 'BOL123',
      ownerId: user.id,
      participants:{
        create: {
          userId: user.id
        }
      }
    }
  })

   await prisma.game.create({
     data: {
       date: '2022-11-21T22:09:51.093Z',
       firstTeamCountryCode: 'DE',
       secondTeamCountryCode: 'BR'
     }
   })

   await prisma.game.create({
     data: {
       date: '2022-11-25T20:00:51.093Z',
       firstTeamCountryCode: 'AR',
       secondTeamCountryCode: 'JP',

       guesses:{
        create: {
          firstTeamPoint: 2,
          secondTeamPoint: 1,

          participant: {
            connect: {
              userId_poolId: {
                userId: user.id,
                poolId: pool.id
              }
            }
          }
        }
       }
     }
   })

}

main()