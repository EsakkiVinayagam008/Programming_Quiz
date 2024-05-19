import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Answerpage = () => {
    document.body.style.fontFamily='Nunito, sans-serif';
    document.body.style.background="#1976D2"
    document.body.style.color="white"

    const location = useLocation();
    const { selectedOptions, questions } = location.state;

    const calculateScore = () => {
        let correctAnswers = 0;
        let wrongAnswers = 0;
        const result = [];
        
        for (let i = 0; i < questions.length; i++) {
            const { question, answer } = questions[i];
            const selectedOption = selectedOptions[i];
            
            if (selectedOption === answer) {
                correctAnswers++;
            } else {
                wrongAnswers++;
            }

            result.push({ question, selectedOption, answer });
        }
        
        return { correctAnswers, wrongAnswers, result };
    };

    const { correctAnswers, wrongAnswers, result } = calculateScore();

    return (
        <>
        <div className='rounded-lg' style={{ background: 'black', height: '1350px', width: '50%', marginTop: '150px', marginLeft: '500px', marginBottom:'50px', padding:'20px' }}>
            <h1 className='text-5xl' style={{color:'green',textAlign:'center'}}>Correct Answers: {correctAnswers}</h1>
            <h1 className='text-4xl' style={{color:'red',textAlign:'center'}}>Wrong Answers: {wrongAnswers}</h1>
            <br/>
            <hr/>
            <div className='ml-16 mt-10'>
                {result.map((item, index) => (
                     <div key={index}>
                     <h3 className='text-3xl' style={{ color:'white'}}>
                         {item.question}
                     </h3>
                     <p className='text-2xl ml-32' style={{ color: 'yellow' }}>
                         Selected Answer: {item.selectedOption}
                     </p>
                     <p className='text-2xl ml-32' style={{ color: item.selectedOption === item.answer ? 'green' : 'red' }}>
                         Correct Answer: {item.answer}
                     </p>
                 </div>
                ))}
            </div>
            <Link to="/secondpage"><button className='rounded-full text-2xl mt-44 mb-64 ml-96' style={{ padding: '10px', backgroundColor: 'black', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Go to Back</button></Link>
        </div>
        </>
    );
};

export default Answerpage;
