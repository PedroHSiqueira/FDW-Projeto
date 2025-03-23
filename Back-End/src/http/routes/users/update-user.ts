import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../../lib/prisma";

export async function updateUser(app: FastifyInstance) {
  app.put("/users/:id", async (request, reply) => {
    const updateUserBody = z.object({
      name: z.string(),
      email: z.string().email(),
    });

    const { id } = request.params as { id: string };
    const { name, email } = updateUserBody.parse(request.body);

    const user = await prisma.user.update({
      where: {
        id: String(id),
      },
      data: {
        name: name,
        email: email,
      },
    });

    reply.send(user);
  });
}