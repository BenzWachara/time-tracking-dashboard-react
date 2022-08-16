import './App.css';
import React,{useState} from 'react';
import moredetal from './images/icon-ellipsis.svg';
import datatime from './data.json';

import work from './images/icon-work.svg';
import play from './images/icon-play.svg';
import study from './images/icon-study.svg';
import exercise from './images/icon-exercise.svg';
import social from './images/icon-social.svg';
import selfcare from './images/icon-self-care.svg'

function App() {

  const bgImages = {
    "0":work,
    "1":play,
    "2":study, 
    "3":exercise,
    "4":social,
    "5":selfcare,
  }

  const colors = {
    '0': "hsl(15, 100%, 70%)",
    '1': "hsl(195, 74%, 62%)",
    '2': "hsl(348, 100%, 68%)",
    '3': "hsl(145, 58%, 55%)",
    '4': "hsl(264, 64%, 52%)",
    '5': "hsl(43, 84%, 65%)", 
  }

  const [typeTime,setTypetime] = useState("daily");
  const [lastTimer,setLastTimer] = useState("Yesterday")

  const stateTime = datatime.map((time,index)=>{
    return<div className="card-time" key={index} style={{backgroundColor:`${colors[index]}`}}>
            <div className="img-bg-card">
              <img src={bgImages[index]}/>
            </div>
            <div className="time-work">
              <div className="head-title">
                <h2>{time.title}</h2>
                 <img src={moredetal}/>
              </div>
              <div className="time-hrs">
                <main>{time.timeframes[typeTime].current}hrs</main>
                <footer>{lastTimer} - {time.timeframes[typeTime].previous}hrs</footer>
              </div>
            </div>
          </div>
  })

  return (
    <div className="App">
      <div className="report-for">
        <div className="card-profile">
          <img src={require('./images/image-jeremy.png')}/>
          <div className="card-name">
            <p>Report for</p>
            <h1>Jeremy Robson</h1>
          </div>
        </div>
        <div className="time-section">
          <ul className="time-ul">
            <li className={typeTime === 'daily'&& 'active'} onClick={()=>{setTypetime("daily") || setLastTimer("Yesterday")}}>Daily</li>
            <li className={typeTime === 'weekly'&& 'active'} onClick={()=>{setTypetime("weekly") || setLastTimer("Last Week")}}>Weekly</li>
            <li className={typeTime === 'monthly'&& 'active'} onClick={()=>{setTypetime("monthly") || setLastTimer("Last Month")}}>Monthly</li>
          </ul>
        </div>
      </div>
      {stateTime}
    </div>
  );
}

export default App;
