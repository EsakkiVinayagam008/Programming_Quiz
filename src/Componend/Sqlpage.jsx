import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Sqlpage = () => {
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
            question: "1. What does SQL stand for?",
            options: [
                "Structured Query Language",
                "Sequential Query Language",
                "Simple Query Language",
                "Systematic Query Language",
            ],
            answer: "Structured Query Language"
        },
        {
            question: "2. Which SQL keyword is used to retrieve data from a database?",
            options: [
                "SELECT",
                "GET",
                "FETCH",
                "RETRIEVE",
            ],
            answer: "SELECT"
        },
        {
            question: "3. What is the SQL command used to create a new table?",
            options: [
                "CREATE TABLE",
                "ADD TABLE",
                "NEW TABLE",
                "INSERT TABLE",
            ],
            answer: "CREATE TABLE"
        },
        {
            question: "4. Which SQL clause is used to filter records based on a specified condition?",
            options: [
                "WHERE",
                "FILTER",
                "CONDITION",
                "SELECT",
            ],
            answer: "WHERE"
        },
        {
            question: "5. What is the SQL function used to count the number of rows in a table?",
            options: [
                "COUNT()",
                "SUM()",
                "AVG()",
                "MAX()",
            ],
            answer: "COUNT()"
        },
        {
            question: "6. Which SQL statement is used to delete records from a database table?",
            options: [
                "DELETE",
                "REMOVE",
                "DROP",
                "ERASE",
            ],
            answer: "DELETE"
        },
        {
            question: "7. What is the SQL command used to update existing records in a table?",
            options: [
                "UPDATE",
                "MODIFY",
                "CHANGE",
                "ALTER",
            ],
            answer: "UPDATE"
        },
        {
            question: "8. Which SQL keyword is used to sort the result set in ascending order?",
            options: [
                "ASC",
                "SORT",
                "ORDER BY",
                "ASCENDING",
            ],
            answer: "ASC"
        },
        {
            question: "9. What is the purpose of the SQL GROUP BY clause?",
            options: [
                "To group rows that have the same values",
                "To order the result set",
                "To filter the result set",
                "To join multiple tables",
            ],
            answer: "To group rows that have the same values"
        },
        {
            question: "10. Which SQL join returns all rows when there is a match in either of the tables being joined?",
            options: [
                "FULL OUTER JOIN",
                "LEFT JOIN",
                "RIGHT JOIN",
                "INNER JOIN",
            ],
            answer: "FULL OUTER JOIN"
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

export default Sqlpage