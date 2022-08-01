import logo from "./logo.svg";
import "./App.css";
import { useTranslation } from 'react-i18next';


function App() {
  const { t, i18n } = useTranslation();

  const langChange = lng => {
    i18n.changeLanguage(lng);
  }

  return (
    <div className="App">
      <div>
        <button onClick={() => langChange('bn')}>Bangla</button>
        <button onClick={() => langChange('en')}>English</button>
        <button onClick={() => langChange('de')}>Dutch</button>
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{t('Hello')}</h1>
        <p>{t('I am')}</p>
        <p>{t('Greeting')}</p>
        <p></p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
