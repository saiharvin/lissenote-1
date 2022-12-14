import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Navbar from './navbar/navbar.js';
import Landing from './landing page/landing.js';
import './App.css';
import product from './assets/temp.png';
import ExampleText from './examples/ExampleSide.js'
import UseCase from './whyLissenote/Why.js'
import Team from './team/Team.js'
import pic from './assets/user.png';

function App() {
  return (
    <div>
      <div className='bod'>
        <div className='head'>
          <p>Examples</p>
        </div>
        
        <div className='completecompo1'>
          <img className='image' src={product} alt="result-pic" />
          <div className='example-text1'>
            <ExampleText text="High accuracy transcription fine-tuned for Indian English"/>
          </div>
        </div>
        
        <div className='completecompo2'>
          <img className='image' src={product} alt="result-pic" />
          <div className='example-text2'>
            <ExampleText text="Important keywords, " text2="highlighted" text3=" with Wikipedia links"/>
          </div>
        </div>

        <div className='completecompo3'>
          <img className='image' src={product} alt="result-pic" />
          <div className='example-text3'>
            <ExampleText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
          </div>
        </div>
      </div>
      <div className='why-lis'>
        <p className='head-text'>Why lissenote?</p>
        <div className='wrappup'>
          <div className='why-compo1'>
            <UseCase content="Lectures to Documentaries, Podcasts to Meetings" title="Convert anything and everything"/>
          </div>
          <div className='why-compo2'>
            <UseCase content="Quickly go through the notes to catch up anything you missed" title="Missed something?"/>
          </div>
          <div className='why-compo3'>
            <UseCase content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." title="Lorem Ipsum"/>
          </div>
        </div>
      </div>
      <div className='team-compo'>
        <p className='head-text-team'>The Team</p>
        <div className='team'>
          <div className='temp'>
            <Team pfp={pic} name="Lorem Ipsum" linked="#"/>
            <Team pfp={pic} name="Lorem Ipsum" linked="#"/>
            <Team pfp={pic} name="Lorem Ipsum" linked="#"/>
            <Team pfp={pic} name="Lorem Ipsum" linked="#"/>
            <Team pfp={pic} name="Lorem Ipsum" linked="#"/>
            <Team pfp={pic} name="Lorem Ipsum" linked="#"/>
          </div>
          
          
        </div>
      </div>
      
    </div>
  );
}

export default App;
