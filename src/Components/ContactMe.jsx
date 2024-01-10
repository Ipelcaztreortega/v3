import React from "react";


const ContactMe = () => {
    return(
        <div id="contact" className=" font-sGrotesk flex justify-between py-12">
          <div>
            <p className="font-bold ml-8 w-3/5">Designed by Brittany Chiang & Built by Irvin Pelcaztre-Ortega ✌️ 2024</p>
          </div>
          
          <div>
            <a className="ml-4 mr-12 font-bold text-red-900 hover:border-b-2 border-red-900 transition duration-300 ease-in-out" href="#" >EMAIL</a>

            <a className="ml-4 mr-12 font-bold text-red-900 hover:border-b-2 border-red-900 transition duration-300 ease-in-out" href="https://github.com/Ipelcaztreortega" target="_blank" rel="noopener noreferrer">GITHUB</a>

            <a className="ml-4 mr-12 font-bold text-red-900 hover:border-b-2 border-red-900 transition duration-700 ease-in-out" href="https://www.linkedin.com/in/irvin-pelcaztre-ortega/" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
          </div>
          
        </div>
    )
}

export default ContactMe;