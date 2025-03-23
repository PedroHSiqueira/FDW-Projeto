import { FastifyInstance } from "fastify";
import { prisma } from "../../lib/prisma";

export async function getAdmins(app: FastifyInstance) {
  app.get("/admins", async (request, reply) => {
    const users = await prisma.administrator.findMany();

    reply.send(users);
  });
}