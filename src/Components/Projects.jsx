
import React from "react";

const Projects = () => {
  return (
    <div id="projects" className=" font-sGrotesk h-[180vh] flex flex-col items-center ml-44 mt-20">
      <div className="max-w-6xl flex flex-col gap-y-28">
        <h1 className="font-bold text-2xl my-12">Projects That I've Built</h1>

        {/* First Project */}
        <div className="flex gap-x-24 relative">
          <div className="w-[50%] h-full overflow-hidden relative z-[10]">
            <div className="overlay-tint"></div>
            <img className="rounded w-full h-full object-cover shadow-2xl" src="./images/WC2.png" alt="Workout" />
          </div>

          <div className="flex flex-col items-end w-[50%] p-4 z-[20]" style={{ marginLeft: "-20%" }}>
            <h2 className="text-2xl font-bold mb-4 mt-8">Workout Chat</h2>
            <p className="mb-8 mt-2 bg-red-900 text-white rounded p-4 ">A web application where users can share their workout experiences by posting images and captions. Explore posts from fellow fitness enthusiasts within the community. Utilize a navigation bar to easily search for specific posts and implement filters to sort posts by both the oldest and newest entries.</p>
            <ul className="flex text-gray-600">
              <li>React</li>
              <li className="ml-4">Javascript</li>
              <li className="ml-4">Supabase</li>
              <li className="ml-4">Styled Component</li>
            </ul>
            <a href="https://ipelcaztreortega-workout-chat.netlify.app/" target="_blank" rel="noopener noreferrer"><img className="w-4 mt-4" src="./images/external-link.png" alt="External Linke" /></a>
          </div>
        </div>

        {/* Second Project */}
        <div className="flex gap-x-24 relative">
          <div className="flex flex-col items-start w-[50%] p-4" style={{ marginRight: "-20%" }}>
            <h2 className="text-2xl font-bold mb-4 mt-8">Data Visualization</h2>
            <p className="mt-2 mb-8 bg-red-900 text-white z-10 p-4 rounded">Engage in a collaborative project focused on analyzing and presenting insights from a CSV file. Create a variety of charts to vividly depict the findings and conclusions derived from the data analysis.</p>
            <ul className="flex  w-9/12 text-gray-600">
              <li>Python</li>
              <li className="ml-4">Numpy</li>
              <li className="ml-4">Matplotlib</li>
            </ul>
            <a href="https://github.com/Ipelcaztreortega/Data_Visualization_Project" target="_blank" rel="noopener noreferrer"><img className="w-4 mt-4" src="./images/external-link.png" alt="External Linke" /></a>
          </div>

          <div className="w-[50%] h-full overflow-hidden relative">
            <div className="overlay-tint"></div>
            <img className="rounded w-full h-full object-cover shadow-2xl" src="./images/DV4.png" alt="Data" />
          </div>
        </div>

        {/* Third Project */}
        <div className="flex gap-x-24 relative">
          <div className="w-[50%] h-full overflow-hidden relative z-[10]">
            <div className="overlay-tint"></div>
            <img className="rounded w-full h-full shadow-2xl" src="./images/Portfolio_Pic.png" alt="PF1" />
          </div>

          <div className="flex flex-col items-end w-[50%] p-4  z-[20]" style={{ marginLeft: "-20%" }}>
            <h2 className="text-2xl font-bold mb-4 mt-8">Portfolio</h2>
            <p className="mb-8 mt-2 bg-red-900 text-white rounded p-4">The third deployment/version of my portfolio, leveraging extensive learning experiences. Developed a web application meticulously designed to showcase my collection of projects derived from relevant experiences.</p>
            <ul className="flex justify-end w-9/12 text-gray-600">
              <li className="ml-4">React</li>
              <li className="ml-4">TailwindCSS</li>
              <li className="ml-4">Javascript</li>
            </ul>
            <a href="#"><img className="w-4 mt-4" src="./images/external-link.png" alt="External Linke" /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
