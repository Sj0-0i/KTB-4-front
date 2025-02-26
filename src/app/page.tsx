'use client'

import { useRecorder } from '@/hook/useRecorder/useRecoder'
import Image from 'next/image'

export default function Home() {
  const { recording, transcription, startRecording, stopRecording } =
    useRecorder()

  return (
    <div className="container animate-fade-in">
      <h1 className="text-h1">Home page</h1>
      <button onClick={recording ? stopRecording : startRecording}>
        {recording ? 'Stop Recording' : 'Start Recording'}
      </button>
      <p>{transcription}</p>
    </div>
  )
}
