// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
const mealDBAPI = process.env.MEALDB_API;

type Data = {
  data: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const body = req.body

  res.status(200).json({ data: `${body.search}` })
}