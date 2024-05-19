import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Intro = () => {
    document.body.style.fontFamily='Nunito, sans-serif';
    document.body.style.background="#1976D2"
    document.body.style.color="white"

    const location = useLocation();
    const navigate = useNavigate();
    const [redirectPage, setRedirectPage] = useState(null);

    // Check for the redirectPage parameter when the component mounts
    React.useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const page = searchParams.get('redirect');
        if (page) {
            setRedirectPage(page);
        }
    }, [location.search]);

    const handleStartQuiz = () => {
      // Navigate to the HTML page if redirectPage is 'Htmlpage'
      if (redirectPage === 'Htmlpage') {
          navigate('/Htmlpage');
      }
      else if (redirectPage === 'Csspage') {
        navigate('/Csspage');
    } 
    else if (redirectPage === 'Javascript') {
      navigate('/Javascript');
  } 
  else if (redirectPage === 'C') {
    navigate('/C');
} 
else if (redirectPage === 'Java') {
  navigate('/Java');
} 
else if (redirectPage === 'Python') {
  navigate('/Python');
} 
else if (redirectPage === 'Sql') {
  navigate('/Sql');
} 
else if (redirectPage === 'Php') {
  navigate('/Php');
} 
else if (redirectPage === 'Reactjs') {
  navigate('/Reactjs');
} 
      // Add conditions for other pages if needed
  };


  return (
   <>
   <div style={{background:"black",width:'80%',height:'750px',marginTop:'80px',marginLeft:'200px'}} className='rounded-full'>
<h1 className='text-7xl ml-10 pl-24 pt-32' >Test :</h1>
<h1 className='text-4xl ml-48 p-4'>⭐ The test contains 10 questions and there is no time limit. </h1>

<h1 className='text-4xl ml-48 p-4'> ⭐ You will get 1 point for each correct answer. At the end of the Quiz, your total score will be displayed. </h1>
<h1 className='text-7xl mt-5 ml-10 pl-24 p-4' style={{color:'green'}}>Good Luck!</h1>
<div style={{ display: 'flex', justifyContent: 'center', }} >

  <button onClick={handleStartQuiz} className='text-4xl p-4 mt-24 bg-sky-700 hover:bg-sky-500' style={{border: '2px solid blue'}}>Start the Quiz <FontAwesomeIcon icon={faArrowRight} className="text-3xl mr-2" /></button>
</div>

<Link to="/Htmlpage"></Link>
   </div>
   </>
  )
}

export default Intro