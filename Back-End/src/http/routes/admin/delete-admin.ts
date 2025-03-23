import { FastifyInstance } from "fastify";
import { prisma } from "../../lib/prisma";

export async function deleteAdmin(app: FastifyInstance) {
  app.delete("/admins/:id", async (request, reply) => {
    const { id } = request.params as { id: string };

    const user = await prisma.administrator.delete({
      where: {
        id: String(id),
      },
    });

    reply.status(204);
  });
}
