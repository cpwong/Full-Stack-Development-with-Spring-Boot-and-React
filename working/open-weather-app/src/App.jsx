import { useEffect, useState } from 'react'
import './App.css'

const APIKEY='78f676e99a91189fe82fc759abccd092';

function App() {
  const [temp, setTemp] = useState('');
  const [desc, setDesc] = useState('');
  const [icon, setIcon] = useState('');
  const [isReady, setIsReady] = useState('');

  useEffect(() => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=Singapore&units=metric&appid=${APIKEY}`)
      .then(result => result.json())
      .then(jsonresult => {
        setTemp(jsonresult.main.temp);
        setDesc(jsonresult.weather[0].main);
        setIcon(jsonresult.weather[0].icon);
        setIsReady(true);
      })
      .catch(err => console.log(err))
  }, [])

  if (isReady) {
    return (
      <div className='App'>
        <p>Temperature: {temp} ℃</p>
        <p>Description: {desc}</p>
        <img src="http://openweathermap.org/img/wn/${icon}@2x.png" alt="Weather icon" />
      </div>
    );
  }
  else {
    return <div>Loading...</div>
  }

}

export default App
