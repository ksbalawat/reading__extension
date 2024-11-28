import React from "react";
  


const Landing = () => {
    return (

              <div className='w-full h-16 bg-blue-100'>
      
              <div className='flex items-center justify-between w-full px-8 '>
                <div className='ml-0 mt-5'>Easify</div> 
                
               
                <div className='flex justify-start -ml-11 items-center space-x-9 cursor-pointer '>
                  <div>Working</div>
                  <div>Books</div>
                  <div>Education</div>
                  <div>Pricing</div>
                  <div>Resources</div>
                </div>
            
        
                <div className="flex items-center space-x-9">
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-300">Github</button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-300">Contact Us</button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-300">Add to Browser</button>
                </div>
              </div>
            </div>


   
    );
};

export default Landing ;