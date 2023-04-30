import type { NextApiRequest, NextApiResponse } from 'next'
import { encode } from 'gpt-3-encoder'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { text } = req.body

  if (!text) {
    res.json({ tokens: 0 })
    return
  }

  res.json({ tokens: encode(text).length })
}
