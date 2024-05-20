import React, { useEffect, useState } from 'react'

const Listenning = () => {
    const initialTime = 600
  const [isRunning, setIsRunning] = useState(false);
  const [currentTime, setCurrentTime] = useState(initialTime);

  useEffect(() => {
    let intervalId;
    
    if (isRunning) {
      intervalId = setInterval(() => {
        setCurrentTime((prevTime) => {
          if (prevTime >= 0) {
            clearInterval(intervalId);
            setIsRunning(false);
            playSound();
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

  const handleStart = () => {
    // setIsRunning(true);
    playSound()
  };

  

  

  const playSound = () => {
    // const audio = new Audio('/public/audio/sound.mp3');
    const audio = new Audio('https://ieltsonlinetests.oss-ap-southeast-1.aliyuncs.com/Audio/Succeed_in_IELTS/10/Practice%20test%201.mp3');
    console.log("audio", audio)
    audio.play();
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };
  return (
    <div>
        <button className='bg-red-500 p-2 rounded-full text-white hover:bg-red-700' onClick={()=>handleStart()}>Start Listen</button>
        <div>
            <p>Anser</p>
            <p>Questions 1</p>
            <p>Complete the form below.Write NO MORE THAN THREE WORDS AND/OR A NUMBER for each answer.</p>
        </div>
    </div>
  )
}

export default Listenning