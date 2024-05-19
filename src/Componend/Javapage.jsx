import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Javapage = () => {
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
            question: "1. What is Java?",
            options: [
                "A programming language",
                "A coffee brand",
                "An operating system",
                "A web browser",
            ],
            answer: "A programming language"
        },
        {
            question: "2. Which keyword is used to define a class in Java?",
            options: [
                "class",
                "void",
                "new",
                "this",
            ],
            answer: "class"
        },
        {
            question: "3. What is the entry point of a Java program?",
            options: [
                "public static void main(String[] args)",
                "public static void start(String[] args)",
                "public static void run(String[] args)",
                "public static void execute(String[] args)",
            ],
            answer: "public static void main(String[] args)"
        },
        {
            question: "4. Which data type is used to store single characters in Java?",
            options: [
                "char",
                "int",
                "String",
                "boolean",
            ],
            answer: "char"
        },
        {
            question: "5. What does the 'extends' keyword indicate in Java?",
            options: [
                "Inheritance",
                "Overloading",
                "Abstraction",
                "Encapsulation",
            ],
            answer: "Inheritance"
        },
        {
            question: "6. Which statement is used to terminate a loop in Java?",
            options: [
                "break",
                "exit",
                "continue",
                "return",
            ],
            answer: "break"
        },
        {
            question: "7. What is the purpose of the 'static' keyword in Java?",
            options: [
                "To create class-level variables and methods",
                "To create instance-level variables and methods",
                "To define constants",
                "To restrict access to variables and methods",
            ],
            answer: "To create class-level variables and methods"
        },
        {
            question: "8. What is the default value of a boolean variable in Java?",
            options: [
                "false",
                "true",
                "0",
                "1",
            ],
            answer: "false"
        },
        {
            question: "9. Which method is used to compare two objects for equality in Java?",
            options: [
                "equals()",
                "compareTo()",
                "compare()",
                "==",
            ],
            answer: "equals()"
        },
        {
            question: "10. What is the output of 'System.out.println(10 + 20 + 'Java')'?",
            options: [
                "30Java",
                "1020Java",
                "Error",
                "Java1020",
            ],
            answer: "30Java"
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

export default Javapage