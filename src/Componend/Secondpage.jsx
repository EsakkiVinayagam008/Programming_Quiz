import React from 'react'



const Secondpage = () => {
   document.body.style.fontFamily='Bree Serif, serif';
    document.body.style.background="#1976D2"

   

    const handleClick = (page) => {
       
        window.location.href = `/Intro?redirect=${page}`;
    };

  return (
   <>
   
   <div className="grid grid-cols-3  ml-40 mt-20  ">

   <div onClick={() => handleClick('Htmlpage')} style={{background:'#0a0a0a',color:'white',height:'250px',width:'500px',textAlign:'center'}} className='hover:scale-110 transform transition-transform duration-300 cursor-pointer rounded-lg'>
    <h1 className='text-8xl pt-16 '>HTML</h1>
   </div>
   
   
   <div onClick={() => handleClick('Csspage')} style={{background:'#0a0a0a',color:'white',height:'250px',width:'500px',textAlign:'center'}} className='hover:scale-110 transform transition-transform duration-300 cursor-pointer rounded-lg'>
    <h1 className='text-8xl pt-16 '>CSS</h1>
   </div>
   
   <div onClick={() => handleClick('Javascript')} style={{background:'#0a0a0a',color:'white',height:'250px',width:'500px',textAlign:'center'}} className='hover:scale-110 transform transition-transform duration-300 cursor-pointer rounded-lg'>
    <h1 className='text-8xl pt-16  '>Java script</h1>
   </div>
  
   </div>
<br />
   <div className="grid grid-cols-3  ml-40">


<div onClick={() => handleClick('C')} style={{background:'#0a0a0a',color:'white',height:'250px',width:'500px',textAlign:'center'}} className='hover:scale-110 transform transition-transform duration-300 cursor-pointer rounded-lg'>
 <h1 className='text-8xl pt-16 '>C</h1>
</div>

<div onClick={() => handleClick('Java')} style={{background:'#0a0a0a',color:'white',height:'250px',width:'500px',textAlign:'center'}} className='hover:scale-110 transform transition-transform duration-300 cursor-pointer rounded-lg'>
 <h1 className='text-8xl pt-16'>Java</h1>
</div>
<div onClick={() => handleClick('Python')} style={{background:'#0a0a0a',color:'white',height:'250px',width:'500px',textAlign:'center'}} className='hover:scale-110 transform transition-transform duration-300 cursor-pointer rounded-lg'>
 <h1 className='text-8xl pt-16'>Python</h1>
</div>
</div>
<br />
<div className="grid grid-cols-3  ml-40 mb-10">


<div onClick={() => handleClick('Sql')} style={{background:'#0a0a0a',color:'white',height:'250px',width:'500px',textAlign:'center'}} className='hover:scale-110 transform transition-transform duration-300 cursor-pointer rounded-lg'>
 <h1 className='text-8xl pt-12'>SQL</h1>
</div>
<div onClick={() => handleClick('Php')} style={{background:'#0a0a0a',color:'white',height:'250px',width:'500px',textAlign:'center'}} className='hover:scale-110 transform transition-transform duration-300 cursor-pointer rounded-lg'>
 <h1 className='text-8xl pt-12'>PHP</h1>
</div>
<div onClick={() => handleClick('Reactjs')} style={{background:'#0a0a0a',color:'white',height:'250px',width:'500px',textAlign:'center'}} className='hover:scale-110 transform transition-transform duration-300 cursor-pointer rounded-lg'>
 <h1 className='text-8xl pt-12'>React Js</h1>
</div>

</div>
   </>
  )
}

export default Secondpage