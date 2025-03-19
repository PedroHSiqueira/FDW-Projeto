import { Router } from "express"

const router = Router()

router.get("/", async (req, res) => {
  res.status(200).json({ message: "Rota GET em execução" })
})

export default router