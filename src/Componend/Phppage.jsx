import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Phppage = () => {
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
            question: "1. What does PHP stand for?",
            options: [
                "Hypertext Preprocessor",
                "Personal Home Page",
                "Programming Hypertext Processor",
                "Public Hosting Platform",
            ],
            answer: "Hypertext Preprocessor"
        },
        {
            question: "2. Which symbol is used to denote the start and end of PHP code blocks?",
            options: [
                "<?php ?>",
                "<% %>",
                "{{ }}",
                "{ }",
            ],
            answer: "<?php ?>"
        },
        {
            question: "3. What is the correct way to declare a variable in PHP?",
            options: [
                "$variable_name",
                "var variable_name",
                "variable_name",
                "declare variable_name",
            ],
            answer: "$variable_name"
        },
        {
            question: "4. Which PHP function is used to output text to the browser?",
            options: [
                "echo",
                "print",
                "printf",
                "display",
            ],
            answer: "echo"
        },
        {
            question: "5. What does the PHP function 'isset()' do?",
            options: [
                "Checks if a variable is set and is not NULL",
                "Sets the value of a variable",
                "Creates a new variable",
                "Deletes a variable",
            ],
            answer: "Checks if a variable is set and is not NULL"
        },
        {
            question: "6. Which PHP operator is used for concatenating strings?",
            options: [
                ".",
                "+",
                "&",
                "|",
            ],
            answer: "."
        },
        {
            question: "7. What is the purpose of the 'include' statement in PHP?",
            options: [
                "To include and evaluate a specified file",
                "To create a new variable",
                "To define a function",
                "To loop through an array",
            ],
            answer: "To include and evaluate a specified file"
        },
        {
            question: "8. What does the PHP function 'strlen()' do?",
            options: [
                "Returns the length of a string",
                "Returns the number of words in a string",
                "Returns the position of a substring within a string",
                "Returns the character at a specified position in a string",
            ],
            answer: "Returns the length of a string"
        },
        {
            question: "9. Which PHP function is used to redirect the user to another web page?",
            options: [
                "header()",
                "redirect()",
                "location()",
                "forward()",
            ],
            answer: "header()"
        },
        {
            question: "10. What is the correct way to end a PHP statement?",
            options: [
                ";",
                ":",
                ".",
                ",",
            ],
            answer: ";"
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

export default Phppage