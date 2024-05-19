import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Scorepage = () => {
    document.body.style.fontFamily = 'Nunito, sans-serif';
    document.body.style.background = "#1976D2";
    document.body.style.color = "white";

    const location = useLocation();
    const state = location.state;
    const navigate = useNavigate();

    if (!state || !state.score) {
        // If state is null or score is not available, display a message or redirect to another page
        return (
            <div>
                <h1>Score Not Available</h1>
                <Link to="/">Go Home</Link>
            </div>
        );
    }

    const { score, selectedOptions, questions } = state;

    let message;
    if (score >= 8 && score <= 10) {
        message = "Very good!";
    } else if (score >= 5 && score < 8) {
        message = "Good!";
    } else {
        message = "Better luck next time!";
    }

    const handleCheckAnswer = () => {
        navigate('/Answerpage', { state: { selectedOptions, questions } });
    };

    return (
        <>
       
       <div style={{ background: 'black', height: '600px', width: '60%', marginTop: '150px', marginLeft: '450px' }}>
    <div style={{ display: 'inline-block',paddingLeft:'400px',paddingTop:'50px' }}>
        <h1 className='text-7xl' style={{ textAlign: 'center' }}>Your Score</h1>
        <h1 className='text-8xl p-7' style={{ textAlign: 'center' }}>{score} <span className='text-6xl'>of 10</span></h1>
        <h2 className='text-4xl p-7' style={{ textAlign: 'center' }}>{message}</h2>
    </div>
    <br/>
    <br/>
    <div style={{ display: 'inline-block' ,marginLeft:'400px'}}>
        <button onClick={handleCheckAnswer} className='rounded-full text-2xl' style={{ padding: '10px', backgroundColor: 'green', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer',marginRight:'15px' }}>
            Check the Answer
        </button>
    </div>
    <div style={{ display: 'inline-block' }}>
       <Link to='/secondpage'> <button className='rounded-full text-2xl' style={{ padding: '10px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Back to Home</button></Link>
    </div>
</div>

         </>
    );
};

export default Scorepage;
