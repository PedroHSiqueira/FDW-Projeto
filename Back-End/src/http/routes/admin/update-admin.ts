import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../../lib/prisma";

export async function updateAdmin(app: FastifyInstance) {
  app.put("/admins/:id", async (request, reply) => {
    const updateUserBody = z.object({
      name: z.string(),
      email: z.string().email(),
    });

    const { id } = request.params as { id: string };
    const { name, email } = updateUserBody.parse(request.body);

    const user = await prisma.administrator.update({
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