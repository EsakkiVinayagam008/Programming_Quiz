import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5,faCss3Alt,faBootstrap,faJs, faReact,faPython,faJava,faPhp,faNodeJs,faAngular } from '@fortawesome/free-brands-svg-icons';
import './Firstpage.css';

const Firstpage = () => {
    document.body.style.background="#1976D2"
    const navigate = useNavigate(); 

    useEffect(() => {
        const timer = setTimeout(() => {
           
            navigate('/Secondpage');
        }, 4000); 

        return () => clearTimeout(timer); 
    }, [navigate]);


    const mainround={
        height:'250px',
        background:'black',
        width:'800px',
        marginTop:'300px',
        marginLeft:'630px'
    }
    const firstround={
        height:'120px',
        
        width:'120px',
        position:'absolute',
        top:'100px',
        left:'100px',
        textAlign:'center'
        
    }
    const secround={
        height:'120px',
        textAlign:'center',
        width:'120px',
        position:'absolute',
        top:'400px',
        left:'100px'
    }
    const thrirdround={
        height:'120px',
        textAlign:'center',
        width:'120px',
        position:'absolute',
        top:'700px',
        left:'100px'
    }
    const fourround={
        height:'120px',
        textAlign:'center',
        width:'120px',
        position:'absolute',
        top:'250px',
        left:'400px'
    }
    const fiveround={
        height:'120px',
        textAlign:'center',
        width:'120px',
        position:'absolute',
        top:'500px',
        left:'400px'
    }
    const sixround={
        height:'120px',
        textAlign:'center',
        width:'120px',
        position:'absolute',
        top:'100px',
        right:'100px'
    }
    const sevenround={
        height:'120px',
        textAlign:'center',
        width:'120px',
        position:'absolute',
        top:'400px',
        right:'100px'
    }
    const eightround={
        height:'120px',
        textAlign:'center',
        width:'120px',
        position:'absolute',
        top:'700px',
        right:'100px'
    }
    const nineround={
        height:'120px',
        
        width:'120px',
        position:'absolute',
        top:'250px',
        right:'400px'
    }
    const tenround={
        height:'120px',
        textAlign:'center',
        width:'120px',
        position:'absolute',
        top:'500px',
        right:'400px'
    }
  return (
    <>
  
    <div style={mainround} className='rounded-full '>
      <h6  className='text-8xl p-10' style={{fontFamily: 'Protest Riot, sans-serif',textAlign:'center', color:'#ffff00'}}>Programming</h6>
      <h2  className='text-6xl' style={{fontFamily: 'Protest Riot, sans-serif',textAlign:'center', color:'#ffff00'}}>Quizz</h2>
    </div>
    <div style={firstround} className='rounded-full icon-container'>
       <FontAwesomeIcon className=' text-9xl' icon={faHtml5} />
    </div>
    <div style={secround} className='rounded-full icon-container'>
    <FontAwesomeIcon className=' text-9xl' icon={faAngular} />
    </div>
    <div style={thrirdround} className='rounded-full icon-container'>
  
    <FontAwesomeIcon className=' text-9xl' icon={faBootstrap} />
    </div>
    <div style={fourround} className='rounded-full icon-container'>
    <FontAwesomeIcon className=' text-9xl' icon={faJs} />
    </div>
    <div style={fiveround} className='rounded-full icon-container'>
    <FontAwesomeIcon className=' text-9xl' icon={faReact} />
    </div>
    <div style={sixround} className='rounded-full icon-container'>
    
    <FontAwesomeIcon className=' text-9xl' icon={faCss3Alt} />
    </div>
    <div style={sevenround} className='rounded-full icon-container'>
    <FontAwesomeIcon className=' text-9xl' icon={faPhp} />
    </div>
    <div style={eightround} className='rounded-full icon-container'>
    <FontAwesomeIcon className=' text-9xl' icon={faNodeJs} />
    </div>
    <div style={nineround} className='rounded-full icon-container'>
   
    <FontAwesomeIcon className=' text-9xl' icon={faPython} />
    </div>
    <div style={tenround} className='rounded-full icon-container'>
    
    <FontAwesomeIcon className=' text-9xl' icon={faJava} />
    <Link to="/secondpage"></Link>
    </div>
    </>
  )
}

export default Firstpage