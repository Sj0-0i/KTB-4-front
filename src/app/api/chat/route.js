import { NextResponse } from 'next/server'

export async function POST(req) {
  try {
    const { text } = await req.json()

    if (!text) {
      return NextResponse.json(
        { error: 'No text data provided' },
        { status: 400 },
      )
    }

    const result = text.repeat(3)

    return NextResponse.json({ text: result })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: 'post error' }, { status: 500 })
  }
}
