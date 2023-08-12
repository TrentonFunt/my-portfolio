import { Link } from "react-router-dom";
import './index.scss';
import { useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import Loader from "react-loaders";
import Lottie from "lottie-react"
import animationData from "../../assets/animation/animation_lkszblju.json"


const Home = () => {
  const [letterClass] = useState('text-animate')
  const nameArray = ['I',' ','am','','T','i', 'w', 'a']
  const jobArray = ['W','e','b','','d','e','v','e','l','o','p','e','r']

  

  return (

    <>
    <div className="container home-page">
      <div className="text-zone">
        <h1>Hi, <br />
        <AnimatedLetters letterClass={letterClass}
        strArray={nameArray} idx={15}/>
        <br />
        <AnimatedLetters letterClass={letterClass}
        strArray={jobArray} idx={22}/>
        
        </h1>
        <h2>Frontend Developer - Designer </h2>
        <Link to="/contact" className='flat-button'>CONTACT ME</Link>
      </div>
      <div className="lottie-logo">
        <Lottie animationData={animationData} />
      </div>
    </div>
    <Loader type="pacman"/>
    </>
  )
}

export default Home