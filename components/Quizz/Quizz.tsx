'use client';

import React, { useEffect, useState } from 'react'
import './Quizz.css'
import Like from '@/components/Like/Like';
import Link from 'next/link'


const Quizz = ({reading}) => {
    
    const questions = reading
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [showScore, setShowScore] = useState(false)
    const [score, setScore] = useState(0)
    const [stt, setStt] = useState(0)
    const [answer,setAnswer] = useState([])
    const handleAnswerButtonClick = (isCorrect, answerText) => {
        
        if (isCorrect === true) {
            setScore(score + 1)
            
        }
        const nextQuestion = currentQuestion + 1
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion)
        
        } else {
            // setShowScore(true)
        }
        setAnswer([...answer, answerText])
    }

    

    const handleNext = () => {
        
        const nextQuestion = currentQuestion + 1
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion)
        } else {
            // setShowScore(true)
        }
    }
    const handlePrev = () => {
        
        const nextQuestion = currentQuestion - 1
        if (nextQuestion >= 0) {
            setCurrentQuestion(nextQuestion)
        } else {
            // setShowScore(true)
        }
    }

    const [isRunning, setIsRunning] = useState(true);
    const [currentTime, setCurrentTime] = useState(600);

    useEffect(() => {
        let intervalId;

        if (isRunning) {
        intervalId = setInterval(() => {
            setCurrentTime((prevTime) => {
            if (prevTime <= 0) {
                clearInterval(intervalId);
                setIsRunning(false);
                return 0;
            }
            return prevTime - 1;
            });
        }, 1000);
        } else {
            clearInterval(intervalId);
        }
        if (currentTime === 0) {
            setShowScore(true)
        }

        return () => clearInterval(intervalId);
    }, [isRunning]);

    const handleStart = () => {
        setIsRunning(true);
    };
    const handleStop = () => {
        setIsRunning(false);
      };

    const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };

    
  return (
    
    <div className='app flex flex-col'>
        <div className='submit w-auto flex justify-between gap-10 p-4'>
            <Link href={"/exam"}  className='text-white bg-blue-800 p-2 rounded-md hover:bg-red-500'>Back</Link>
            <p className='bg-green-600 p-2 px-4 text-white text-xl'>{formatTime(currentTime)}</p>
            <button className='text-white bg-blue-800 p-2 rounded-md hover:bg-red-500' onClick={()=>{handleStop();setShowScore(true)}}  >Submit</button>
        </div>
        <div className='cart relative'>
            {
                showScore ? (
                    <div className="popup">
                        <div className='score-section flex justify-start flex-col'>
                            <p>You scored <span className='text-red-500'>{score}</span> out of {questions.length}</p>
                            <p>Result</p>
                            {questions.map((anwserOption,index) => (
                                
                                <div className=''>
                                    <div className=''>{index+1}. {anwserOption.questionText}</div>
                                        <div>dap an dung:
                                            {
                                                anwserOption.answerOptions.map((data, index)=>(
                                                    data.isCorrect === true?<p> {data.answerText}</p>:<p></p>
                                                ))
                                            }
                                        </div>      
                                    <div>
                                        dap an dang chon: {answer[index]}
                                </div> 
                                        
                        </div>
                                
                            ))}

                    </div>
            
            
        </div>
                ) :(
                    <>
                        <div className='question-section'>
                            <div className='question-count'>
                                <span>Question {currentQuestion + 1}</span>/{questions.length}
                            </div>
                            <div className='question-text'>{questions[currentQuestion].questionText}</div>
                            <Like/>
                        </div>
                        <div className='answer-section'>
                            {questions[currentQuestion].answerOptions.map((anwserOption) => (
                                <div className='flex items-center'>
                                    <button onClick={()=>handleAnswerButtonClick(anwserOption.isCorrect, anwserOption.answerText)}>{anwserOption.answerText}</button>
                                </div>
                                
                            ))}
                        </div>
                    </>
                )
            }
        </div>
    </div>
  )
}

export default Quizz