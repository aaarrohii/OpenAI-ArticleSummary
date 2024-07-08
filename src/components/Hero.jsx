import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='sumz_logo' className='w-28 object-contain' />

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/aaarrohii", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>
      <h1 className="head_text">
  Summarize Articles with <br className="max-md:hidden"/>
  <span className="orange_gradient">OpenAI GPT-4</span>
</h1>
<h2 className="pink_gradient">Project by Aarohi</h2>
<h2 className='desc'>
Summize is an open-source article summarizer that distills lengthy articles into clear and concise summaries, making it easier for you to grasp the essential information quickly and efficiently.

      </h2>



    </header>
  )
}

export default Hero