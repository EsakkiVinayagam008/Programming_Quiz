import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Pythonpage = () => {
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
            question: "1. What is Python?",
            options: [
                "A programming language",
                "A species of snake",
                "A type of software",
                "A programming concept",
            ],
            answer: "A programming language"
        },
        {
            question: "2. Which symbol is used for comments in Python?",
            options: [
                "#",
                "//",
                "--",
                "'",
            ],
            answer: "#"
        },
        {
            question: "3. How do you declare a variable in Python?",
            options: [
                "By assigning a value to a name",
                "Using the var keyword",
                "By enclosing the variable name in quotes",
                "By using the declare keyword",
            ],
            answer: "By assigning a value to a name"
        },
        {
            question: "4. What is the correct way to print 'Hello, World!' in Python?",
            options: [
                "print('Hello, World!')",
                "echo('Hello, World!')",
                "System.out.println('Hello, World!')",
                "console.log('Hello, World!')",
            ],
            answer: "print('Hello, World!')"
        },
        {
            question: "5. Which data type is used to store a sequence of characters in Python?",
            options: [
                "str",
                "int",
                "float",
                "list",
            ],
            answer: "str"
        },
        {
            question: "6. What does the 'elif' keyword do in Python?",
            options: [
                "It is short for 'else if' and is used for multiple condition checks",
                "It is used to define a loop",
                "It is a built-in function",
                "It is a data type",
            ],
            answer: "It is short for 'else if' and is used for multiple condition checks"
        },
        {
            question: "7. Which operator is used for exponentiation in Python?",
            options: [
                "**",
                "^",
                "*",
                "//",
            ],
            answer: "**"
        },
        {
            question: "8. What is the output of '3 * 'python' in Python?",
            options: [
                "pythonpythonpython",
                "Error",
                "pythonpython",
                "3python",
            ],
            answer: "pythonpythonpython"
        },
        {
            question: "9. What does the 'len()' function do in Python?",
            options: [
                "Returns the length of a string or list",
                "Converts a string to lowercase",
                "Returns the largest item in a list",
                "Returns the smallest item in a list",
            ],
            answer: "Returns the length of a string or list"
        },
        {
            question: "10. What is the correct way to import the 'math' module in Python?",
            options: [
                "import math",
                "import Math",
                "from math import *",
                "from Math import *",
            ],
            answer: "import math"
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
                        <span className='text-3xl' style={{ color: '#3d8fdb' }}>Selected Answer : </span>
                        <span className='text-4xl' style={{ color: 'green' }}>{selectedOptions[currentQuestionIndex]}</span>
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

export default Pythonpage