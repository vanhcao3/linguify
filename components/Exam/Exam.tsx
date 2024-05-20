import React from 'react'
import './Exam.css'
import Link from 'next/link'

const Exam = ({data}) => {

  return (
    <div className='exam-main'>
        <div className='exam-practice'>
            <h1 className='exam-heading'>Practice Test {data.lstTopic[0].nameTopic}</h1>
            <div className='exam-skill'>
                <Link href={"/listening"} className='exam-option'>Listening</Link>
                <Link href={"/reading"}  className='exam-option'>Reading</Link>
                <Link href={"/writing"} className='exam-option'>Writing</Link>
                <Link href={"/speaking"} className='exam-option'>Speaking</Link>
            </div>
        </div>
        
    </div>
  )
}

export default Exam