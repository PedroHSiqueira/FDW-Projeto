import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../../lib/prisma";
import bcrypt from "bcrypt";

export async function loginUser(app: FastifyInstance) {
  app.post("/admins/login", async (request, reply) => {
    const loginUserBody = z.object({
      email: z.string().email(),
      password: z.string(),
    });

    const { email, password } = loginUserBody.parse(request.body);

    const user = await prisma.administrator.findUnique({
      where: {
        email: email,
      },
    });

    if (!user) {
      reply.status(404).send({ message: "Admin not found" });
      return;
    }

    const isPasswordValid = bcrypt.compareSync(password, user.password);

    if (!isPasswordValid) {
      reply.status(401).send({ message: "Invalid Password" });
      return;
    }

    reply.send({ message: "User logged in successfully" });
  });
}
