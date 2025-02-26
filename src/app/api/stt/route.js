import { SpeechClient } from '@google-cloud/speech'

const client = new SpeechClient()

export async function POST(req) {
  try {
    const body = await req.json()

    if (!body.audio) {
      return Response.json({ error: 'No audio data provided' }, { status: 400 })
    }

    const audioBuffer = Buffer.from(body.audio, 'base64')

    const request = {
      config: {
        encoding: 'WEBM_OPUS',
        sampleRateHertz: 48000,
        languageCode: 'ko-KR',
      },
      audio: {
        content: audioBuffer.toString('base64'),
      },
    }

    const [response] = await client.recognize(request)
    console.log('STT Response:', response)

    const transcription = response.results
      .map((result) => result.alternatives[0].transcript)
      .join('\n')

    return Response.json({ text: transcription })
  } catch (error) {
    console.error('❌ STT Error:', error)
    return Response.json({ error: 'Speech-to-Text Failed' }, { status: 500 })
  }
}
