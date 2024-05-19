import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Htmlpage = () => {
    document.body.style.fontFamily='Nunito, sans-serif';
    document.body.style.background="#1976D2"
    document.body.style.color="white"

    const but={
        position:'relative',
        left:'1200px',
        bottom:'330px',
       
        width:'100px',
        height:'200px',
        background:'#292828'
    }

    const but1={
      position:'relative',
        left:'900px',
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
    question: '1. What does HTML stand for?',
    options: [
        'Hyper Text Markup Language',
        'High Tech Markup Language',
        'Hyperlink and Text Markup Language',
        'Home Tool Markup Language',
    ],
    answer: 'Hyper Text Markup Language'
},
{
    question: '2. Which HTML tag is used to define an unordered list?',
    options: [
        '<ul>',
        '<ol>',
        '<li>',
        '<list>',
    ],
    answer: '<ul>'
},
{
    question: '3. What is the correct HTML tag for inserting a line break?',
    options: [
        '<br>',
        '<lb>',
        '<break>',
        '<newline>',
    ],
    answer: '<br>'
},
{
    question: '4. What does the HTML <img> tag stand for?',
    options: [
        'Image',
        'Insert',
        'Import',
        'Include',
    ],
    answer: 'Image'
},
{
    question: '5. Which attribute is used to define inline styles in HTML?',
    options: [
        'style',
        'class',
        'id',
        'display',
    ],
    answer: 'style'
},
{
    question: '6. What is the correct HTML for creating a hyperlink?',
    options: [
        '<a href="http://www.example.com">Link</a>',
        '<link href="http://www.example.com">',
        '<href="http://www.example.com">Link</href>',
        '<hyperlink="http://www.example.com">Link</hyperlink>',
    ],
    answer: '<a href="http://www.example.com">Link</a>'
},
{
    question: '7. Which HTML tag is used to define the header for a document or section?',
    options: [
        '<head>',
        '<header>',
        '<title>',
        '<h1>',
    ],
    answer: '<header>'
},
{
    question: '8. In HTML, which character is used to indicate the end of a tag?',
    options: [
        '/',
        '\\',
        '!',
        ':',
    ],
    answer: '/'
},
{
    question: '9. Which HTML element is used to specify a caption for an image?',
    options: [
        '<caption>',
        '<legend>',
        '<label>',
        '<description>',
    ],
    answer: '<caption>'
},
{
    question: '10. Which of the following is an example of a block-level element in HTML?',
    options: [
        '<span>',
        '<div>',
        '<a>',
        '<strong>',
    ],
    answer: '<div>'
}

            // Add more questions and options as needed
          ]);

          
      


  return ( 
    <>
        <div style={{ background: 'black', width: '80%', height: '750px', marginTop: '80px', marginLeft: '200px' }} className='rounded-full'>
                <h1 className='text-4xl ml-48  pt-32'>{questions[currentQuestionIndex].question}</h1>
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

export default Htmlpage