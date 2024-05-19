import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Javascript = () => {
    document.body.style.fontFamily='Nunito, sans-serif';
    document.body.style.background="#1976D2"
    document.body.style.color="white"

    const but={
        position:'relative',
        left:'1400px',
        bottom:'330px',
       
        width:'100px',
        height:'200px',
        background:'#292828'
    }

    const but1={
      position:'relative',
        left:'1100px',
        top:'60px',
       
        width:'160px',
        height:'80px',
        background:'green'
    }
    
    const [selectedOptions, setSelectedOptions] = useState(Array(10).fill(''));
   
    const navigate = useNavigate();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Define currentQuestionIndex

    const handleOptionChange = (index, event) => {
      const newSelectedOptions = [...selectedOptions];
      newSelectedOptions[index] = event.target.value;
      setSelectedOptions(newSelectedOptions);
  };

  const calculateScore = () => {
    let totalScore = 0;
    for (let i = 0; i < questions.length; i++) {
        if (selectedOptions[i] === questions[i].answer) {
            totalScore++;
        }
    }
    return totalScore; // Return the calculated score
};
const handleNextQuestion = () => {
    if (selectedOptions[currentQuestionIndex] !== '') {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
        alert('Please select an answer before moving to the next question.');
    }
};
const handleCalculateScore = () => {
    const calculatedScore = calculateScore();
   
    navigate('/Scorepage', { state: { score: calculatedScore, selectedOptions, questions } });
};



      const [questions] = useState([
        {
            question: '1. What is JavaScript?',
            options: [
                'A programming language used for creating dynamic websites',
                'A style sheet language used for styling web pages',
                'A markup language used for defining the structure of web pages',
                'A database management language used for storing data',
            ],
            answer: 'A programming language used for creating dynamic websites'
        },
        {
            question: '2. Which symbol is used for single-line comments in JavaScript?',
            options: [
                '//',
                '/* */',
                '#',
                '--',
            ],
            answer: '//'
        },
        {
            question: '3. What keyword is used to declare a variable in JavaScript?',
            options: [
                'var',
                'let',
                'const',
                'variable',
            ],
            answer: 'var'
        },
        {
            question: '4. What does the "=== " operator do in JavaScript?',
            options: [
                'Checks for strict equality',
                'Assigns a value to a variable',
                'Concatenates two strings',
                'Checks for equality with type conversion',
            ],
            answer: 'Checks for strict equality'
        },
        {
            question: '5. Which function is used to print output in JavaScript?',
            options: [
                'console.log()',
                'print()',
                'alert()',
                'write()',
            ],
            answer: 'console.log()'
        },
        {
            question: '6. What does the "typeof" operator in JavaScript return?',
            options: [
                'The data type of a variable',
                'The value of a variable',
                'The length of a string',
                'The index of an element',
            ],
            answer: 'The data type of a variable'
        },
        {
            question: '7. What does the "NaN" value represent in JavaScript?',
            options: [
                'Not a Number',
                'Null and None',
                'No Answer',
                'Negative And Null',
            ],
            answer: 'Not a Number'
        },
        {
            question: '8. Which loop is used to iterate over the elements of an array in JavaScript?',
            options: [
                'for loop',
                'while loop',
                'do-while loop',
                'foreach loop',
            ],
            answer: 'for loop'
        },
        {
            question: '9. What is an example of a JavaScript framework?',
            options: [
                'React',
                'HTML',
                'CSS',
                'MySQL',
            ],
            answer: 'React'
        },
        {
            question: '10. What does the "this" keyword refer to in JavaScript?',
            options: [
                'The current object',
                'The parent object',
                'The global object',
                'The previous object',
            ],
            answer: 'The current object'
        }
        
        
            // Add more questions and options as needed
          ]);

          
      


  return ( 
    <>
        <div style={{ background: 'black', width: '90%', height: '750px', marginTop: '80px', marginLeft: '100px' }} className='rounded-full'>
                <h1 className='text-4xl ml-44  pt-32'>{questions[currentQuestionIndex].question}</h1>
                <div className="flex flex-col gap-2 pt-20 ml-56 text-4xl">
                    {questions[currentQuestionIndex].options.map((option, index) => (
                        <label key={index} className="inline-flex items-center">
                            <input
                                type="radio"
                                value={option}
                                checked={selectedOptions[currentQuestionIndex] === option}
                                onChange={(e) => handleOptionChange(currentQuestionIndex, e)}
                                className="form-radio text-blue-500 h-5 w-5"
                            />
                            <span className="ml-2">{option}</span>
                        </label>
                    ))}
                    <p className="mt-24">
                        <span className='text-4xl' style={{ color: '#3d8fdb' }}>Selected Answer : </span>
                        <span className='text-5xl' style={{ color: 'green' }}>{selectedOptions[currentQuestionIndex]}</span>
                    </p>
                    {currentQuestionIndex === questions.length - 1 ? (
                        <button style={but1} className='rounded-full' onClick={handleCalculateScore}>
                           Submit
                        </button>
                    ) : (
                        <button style={but} className='rounded-full' onClick={handleNextQuestion}>
                            <FontAwesomeIcon icon={faArrowRight} className="text-3xl" />
                        </button>
                    )}
                </div>
          
            </div>
    </>
  )
}

export default Javascript