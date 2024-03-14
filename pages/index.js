import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/navigation'

import styles from '@/styles/home.module.css'
import { useState } from 'react';

export default function Home() {
  const router = useRouter()
  const [roomId, setRoomId] = useState('')

  const createAndJoin = () => {
    const roomId = uuidv4()
    router.push(`/${roomId}`)
  }

  const joinRoom = () => {
    if (roomId) router.push(`/${roomId}`)
    else {
      alert("Please provide a valid room id")
    }
  }
  return (
    <div className='flex items-center  h-screen bg-gradient-to-bl from-[#09203F]  to-[#537895]'>

    <div className={styles.homeContainer}>
        <h1>video chat app</h1>
        <div className={styles.enterRoom}>
          <input placeholder='Enter Room ID' value={roomId} onChange={(e) => setRoomId(e?.target?.value)}/>
          <button onClick={joinRoom}>Join Room</button>
        </div>
        <span  className={styles.separatorText} >--------------- OR ---------------</span>
        <button onClick={createAndJoin}>Create a new room</button>
        </div>
    </div>
  )
}
