import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Cpage = () => {
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
            question: '1. What is C?',
            options: [
                'A high-level programming language',
                'A low-level programming language',
                'An assembly language',
                'A scripting language',
            ],
            answer: 'A high-level programming language'
        },
        {
            question: '2. Which symbol is used to denote the start and end of a block of code in C?',
            options: [
                '{ and }',
                '[ and ]',
                '( and )',
                '< and >',
            ],
            answer: '{ and }'
        },
        {
            question: '3. How do you declare a variable in C?',
            options: [
                'By specifying the variable type followed by the variable name',
                'By using the var keyword',
                'By enclosing the variable name in quotes',
                'By using the declare keyword',
            ],
            answer: 'By specifying the variable type followed by the variable name'
        },
        {
            question: '4. What does the "printf" function do in C?',
            options: [
                'Prints formatted output to the console',
                'Reads input from the user',
                'Allocates memory for variables',
                'Performs mathematical calculations',
            ],
            answer: 'Prints formatted output to the console'
        },
        {
            question: '5. Which data type is used to store integer values in C?',
            options: [
                'int',
                'float',
                'char',
                'double',
            ],
            answer: 'int'
        },
        {
            question: '6. What is the correct way to terminate a C program?',
            options: [
                'Using the return statement in the main function',
                'Using the exit() function',
                'Using the end() function',
                'By pressing Ctrl+C',
            ],
            answer: 'Using the return statement in the main function'
        },
        {
            question: '7. Which operator is used to access the value at a specific memory address in C?',
            options: [
                '*',
                '&',
                '->',
                '.',
            ],
            answer: '*'
        },
        {
            question: '8. What is the purpose of the "scanf" function in C?',
            options: [
                'Reads input from the user',
                'Prints output to the console',
                'Performs mathematical calculations',
                'Allocates memory for variables',
            ],
            answer: 'Reads input from the user'
        },
        {
            question: '9. What does the "break" statement do in C?',
            options: [
                'Exits the loop or switch statement',
                'Starts a new iteration of the loop',
                'Continues to the next case in a switch statement',
                'Terminates the program',
            ],
            answer: 'Exits the loop or switch statement'
        },
        {
            question: '10. Which of the following is NOT a valid C identifier?',
            options: [
                '123variable',
                '_variable',
                'variable123',
                'Variable',
            ],
            answer: '123variable'
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

export default Cpage