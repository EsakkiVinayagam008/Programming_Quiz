import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Reactpage = () => {
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
            question: "1. What is ReactJS?",
            options: [
                "A JavaScript library for building user interfaces",
                "A server-side scripting language",
                "A database management system",
                "A programming language",
            ],
            answer: "A JavaScript library for building user interfaces"
        },
        {
            question: "2. Which function is used to render a React component to the DOM?",
            options: [
                "ReactDOM.render()",
                "React.render()",
                "component.render()",
                "renderDOM()",
            ],
            answer: "ReactDOM.render()"
        },
        {
            question: "3. What is JSX?",
            options: [
                "JavaScript XML",
                "JavaScript Extension",
                "JavaScript Syntax Extension",
                "JavaScript XML Syntax",
            ],
            answer: "JavaScript XML"
        },
        {
            question: "4. What is the purpose of state in React?",
            options: [
                "To store data that can change over time",
                "To represent the structure of a component",
                "To define the layout of a component",
                "To handle user input",
            ],
            answer: "To store data that can change over time"
        },
        {
            question: "5. Which lifecycle method is called after a component is rendered for the first time?",
            options: [
                "componentDidMount()",
                "componentWillMount()",
                "rendered()",
                "componentDidRender()",
            ],
            answer: "componentDidMount()"
        },
        {
            question: "6. What is a React fragment?",
            options: [
                "A way to group multiple children without adding extra nodes to the DOM",
                "A component that renders nothing",
                "A feature used for routing in React applications",
                "A virtual representation of a DOM element",
            ],
            answer: "A way to group multiple children without adding extra nodes to the DOM"
        },
        {
            question: "7. What is the purpose of props in React?",
            options: [
                "To pass data from parent to child components",
                "To handle user events",
                "To define the state of a component",
                "To access the DOM directly",
            ],
            answer: "To pass data from parent to child components"
        },
        {
            question: "8. Which method is used to update the state of a component in React?",
            options: [
                "setState()",
                "updateState()",
                "changeState()",
                "modifyState()",
            ],
            answer: "setState()"
        },
        {
            question: "9. What is the role of keys in React lists?",
            options: [
                "To give elements a stable identity",
                "To specify the order of elements",
                "To add styling to elements",
                "To handle user interactions",
            ],
            answer: "To give elements a stable identity"
        },
        {
            question: "10. What is the purpose of the useEffect() hook in React?",
            options: [
                "To perform side effects in function components",
                "To handle user input",
                "To define the initial state of a component",
                "To render a component to the DOM",
            ],
            answer: "To perform side effects in function components"
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

export default Reactpage