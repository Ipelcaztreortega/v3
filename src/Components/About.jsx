import React from "react";

const About = () => {

    
  return (
    <div id="about" className=" font-sGrotesk h-[100vh] flex flex-col items-center justify-center ">

        {/* This is the big div holding the actual content */}
        {/* The gap-y-44, adds a space in between the two divs inside for the rows */}
        <div className="max-w-4xl py-6 flex flex-col "> 

            {/* About me section */}
            <div>
                    <h1 className="font-bold text-2xl mb-12">About Me</h1>
            </div>
            <div className="big-container flex gap-x-12 items-start">
                
                <div className="about-container flex flex-col w-4/6 mr-2">
                    
                    <p className='text-lg text-gray-600'>
                        Hello! I'm Irvin, and I bring three years of personal coding experience to the table. I am a junior enrolled in the Computer Science program with a focus on Data Science at Georgia State University. I am proficient in OOP languages: Python and Java, while currently working on improving my Web Development skills using the MERN stack.
                    </p>
                    <p className='text-lg mt-4 text-gray-600'>
                        I am passionate about Software Engineering and I would love to be able to contribute my skills and enthusiasm as an intern in an innovative and customer-obsessed organization where I can continue to grow and make a meaningful impact. I'm looking for roles in Software Engineering, Full-Stack development, and Data Analyst. 
                    </p>
                </div>

                <div className="w-2/6 relative flex-shrink-0">
                    <div className="overlay-tint absolute top-0 right-0 bottom-0 left-0"></div>
                    <img className="w-full h-full rounded object-cover shadow-2xl" src="./images/toji.jpg" alt="Self-Image" />
                </div>
            </div>

            {/* Skills section */}
            <div className="flex justify-between p-6 mt-20">
                <div className="mb-4 w-1/6">
                    <p className="font-bold text-red-900">SKILLS</p>
                </div>

                <div className="mx-4 w-1/6">
                    <p className="font-bold pb-2">LANGUAGES</p>
                    <p>Python</p>
                    <p>JavaScript/TypeScript</p>
                    <p>Java</p>
                    <p>HTML</p>
                    <p>CSS/Tailwind</p>
                    <p>SQL (MySQL)</p>
                </div>

                <div className="mx-4 mb-4 w-1/6">
                    <p className="font-bold pb-2">LIBRARIES/FRAMEWORKS</p>
                    <p>React</p>
                    <p>Numpy</p>
                    <p>Matplotlib</p>
                    <p>Node.js</p>
                </div>

                <div className="mx-4 mb-4 w-1/6">
                    <p className="font-bold pb-2">TOOLS</p>
                    <p>Bash</p>
                    <p>Git & Github</p>
                    <p>Netlify</p>
                    <p>Supabase</p>
                    <p>MS Excel</p>
                    <p>Tableau</p>
                </div>
            </div>
            
        </div>


        {/* This is the second bottom half */}
        {/* <div className="flex justify-between max-w-6xl p-6">
    
            <div className="mb-4 w-1/6">
                <p className="font-bold">SKILLS</p>
            </div>

            <div className=" mx-4 w-1/6">
                <p className="font-bold">LANGUAGES</p>
                <p>Python</p>
                <p>JavaScript/TypeScript</p>
                <p>Java</p>
                <p>Swift</p>
            </div>

            <div className=" mx-4 mb-4 w-1/6">
                <p className="font-bold">FRAMEWORKS</p>
                <p>React</p>
            </div>

            <div className="mx-4 mb-4 w-1/6">
                <p className="font-bold ">TOOLS</p>
                <p>Bash</p>
                <p>Git & Github</p>
                <p>Netlify</p>
                <p>Supabase</p>
            </div>

        </div> */}
        

    </div>
  );
}

export default About;
