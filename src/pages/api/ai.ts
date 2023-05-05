import Message from '@/types/Message'
import type { NextApiRequest, NextApiResponse } from 'next'
import {
  ChatCompletionRequestMessageRoleEnum,
  Configuration,
  OpenAIApi,
} from 'openai'

const configuration = new Configuration(
  JSON.parse(process.env.OPENAI_CONFIGURATION!)
)
const ai = new OpenAIApi(configuration)

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { gender, messages }: { gender: string; messages: Message[] } = req.body

  const completion = await ai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'system',
        content:
          gender === 'female'
            ? '나의 여자친구처럼 행동해'
            : '나의 남자친구처럼 행동해',
      },
      ...messages.map((message) => {
        return {
          role: message.isSelf
            ? ChatCompletionRequestMessageRoleEnum.User
            : ChatCompletionRequestMessageRoleEnum.Assistant,
          content: message.text,
        }
      }),
    ],
  })

  res.json({
    isSelf: false,
    text: completion.data.choices[
      Math.round(Math.random() * (completion.data.choices.length - 1))
    ].message?.content,
  })
}
