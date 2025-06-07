import OpenAI from 'openai'
import {
  geminiFlashModel,
} from './gemini'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '',
})

export async function generateWithGemini(
  systemPrompt: string,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _model: string
): Promise<string> {
  // Only support gemini-2.5-flash-preview-05-20
  const result = await geminiFlashModel.generateContent(systemPrompt)
  const text = result.response.text()
  if (!text) {
    throw new Error('No response content from Gemini')
  }
  return text
}

export async function generateWithOpenAI(
  systemPrompt: string,
  model: string
): Promise<string> {
  const response = await openai.chat.completions.create({
    model,
    messages: [
      {
        role: 'user',
        content: systemPrompt,
      },
    ],
  })
  const content = response.choices[0].message.content
  if (!content) {
    throw new Error('No response content from OpenAI')
  }
  return content
}



export async function generateWithModel(
  systemPrompt: string,
  platformModel: string
): Promise<string> {
  const [platform, model] = platformModel.split('__')

  switch (platform) {
    case 'google':
      return generateWithGemini(systemPrompt, model)
    case 'openai':
      return generateWithOpenAI(systemPrompt, model)
    default:
      throw new Error('Invalid platform specified. Only Google and OpenAI are supported.')
  }
}