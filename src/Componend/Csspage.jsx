import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Csspage = () => {
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
            question: '1. What does CSS stand for?',
            options: [
                'Cascading Style Sheets',
                'Creative Style Sheets',
                'Colorful Style Sheets',
                'Computer Style Sheets',
            ],
            answer: 'Cascading Style Sheets'
        },
        {
            question: '2. Which CSS property is used to change the text color of an element?',
            options: [
                'color',
                'text-color',
                'font-color',
                'foreground-color',
            ],
            answer: 'color'
        },
        {
            question: '3. What is the correct CSS syntax to select an element with id "demo"?',
            options: [
                '#demo',
                '.demo',
                'demo',
                '*demo',
            ],
            answer: '#demo'
        },
        {
            question: '4. Which CSS property is used to control the spacing between lines of text?',
            options: [
                'line-height',
                'letter-spacing',
                'word-spacing',
                'text-spacing',
            ],
            answer: 'line-height'
        },
        {
            question: '5. What does the "float" property in CSS do?',
            options: [
                'Allows an element to be positioned relative to its normal position',
                'Creates a floating effect for an element',
                'Aligns text to the left or right within its container',
                'Specifies the distance between the borders of adjacent elements',
            ],
            answer: 'Creates a floating effect for an element'
        },
        {
            question: '6. Which CSS property is used to make text bold?',
            options: [
                'font-weight',
                'text-style',
                'font-style',
                'bold',
            ],
            answer: 'font-weight'
        },
        {
            question: '7. What is the default value of the "position" property in CSS?',
            options: [
                'static',
                'relative',
                'absolute',
                'fixed',
            ],
            answer: 'static'
        },
        {
            question: '8. What does the CSS property "z-index" control?',
            options: [
                'The vertical stacking order of elements',
                'The horizontal positioning of elements',
                'The size of elements',
                'The opacity of elements',
            ],
            answer: 'The vertical stacking order of elements'
        },
        {
            question: '9. What does the CSS property "display: none;" do?',
            options: [
                'Hides the element completely',
                'Changes the display to block-level',
                'Creates a transparent background for the element',
                'Moves the element out of the document flow',
            ],
            answer: 'Hides the element completely'
        },
        {
            question: '10. Which CSS property is used to add shadows to elements?',
            options: [
                'box-shadow',
                'text-shadow',
                'element-shadow',
                'shadow-effect',
            ],
            answer: 'box-shadow'
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

export default Csspage