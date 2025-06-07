import {
  GoogleGenerativeAI,
  HarmBlockThreshold,
  HarmCategory,
} from '@google/generative-ai'

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '')

const generationJsonConfig = {
  temperature: 1,
  maxOutputTokens: 100000,
  responseMimeType: 'application/json',
}

const generationPlainTextConfig = {
  temperature: 1,
  maxOutputTokens: 100000,
  responseMimeType: 'text/plain',
}

const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_NONE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_NONE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
    threshold: HarmBlockThreshold.BLOCK_NONE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
    threshold: HarmBlockThreshold.BLOCK_NONE,
  },
]

// (removed)

export const geminiFlashModel = genAI.getGenerativeModel({
  model: 'gemini-2.5-flash-preview-05-20',
  safetySettings,
  generationConfig: generationJsonConfig,
})
// Models removed
