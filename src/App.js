import { Clock } from './Clock'

import githubIcon from './img/GitHub-Mark-Light-64px.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Clock />
      <div className='description'>
        <a className='link' href='https://github.com/Lasterminator'>
          <div>
            <img src={githubIcon} alt='git' />
          </div>
          <p>By LasTerminator</p>
        </a>
      </div>
    </div>
  );
}

export default App;
