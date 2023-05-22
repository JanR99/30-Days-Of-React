import React from 'react'
import ReactDOM from 'react-dom'
import emmiImage from './images/emmi.jpg'

const author = {
  firstName: 'Jan',
  lastName: 'Rehnert',
}
const yearBorn = 1999
const currentYear = new Date().getFullYear()
const age = currentYear - yearBorn

const showDate = (time) => {
  const months = [
    'January', 
    'February', 
    'March', 
    'April', 
    'May', 
    'June',
    'July', 
    'August', 
    'September', 
    'October',
    'November', 
    'December',
  ]
  const month = months[time.getMonth()].slice(0, 3)
  const year = time.getFullYear()
  const date = time.getDate()
  return ` ${month} ${date}, ${year}`
}

// JSX element, header
const Header = (props) => {
  return (
    <header>
      <div className='header-wrapper'>
        <h1>{props.welcome}</h1>
        <h2>{props.title}</h2>
        <h3>{props.subtitle}</h3>
        <p>
          {props.firstName} {props.lastName}
        </p>
        <small>{showDate(props.date)}</small>
      </div>
    </header>
  )
}

const action = 'Action'
const Button = (props) => {
  return(
    <button className='buttonStyles' onClick={props.onClick}>
      {props.action}
    </button>
  )
}

// JSX element, main
const Main = (props) => {
  const technologies = props.techs.map((tech) => 
  <li>{tech}</li>)
  return (  
    <main>
      <div className='main-wrapper'>
        <p>
          Prerequisite to get started{' '}
          <strong>
            <em>react.js</em>
          </strong>
          :
        </p>
        <ul>
          {technologies}
        </ul>
        I am {age} years old.
      </div>
    </main>
  )
}

const Emmi = () => (
  <div>
    <img src={emmiImage} alt='emmiImage' width="300" height="400" />
  </div>
)

// JSX element, app
const App = () => {
  const welcome = 'Welcome to 30 Days Of React'
  const title = 'Getting Started React'
  const subtitle = 'JavaScript Library'
  const date = new Date()
  const technologies = ['HTML', 'CSS', 'JavaScript']
  const personAge = (
    <p>
      {' '}
      {author.firstName} {author.lastName} is {age} years old
    </p>
  )

  return (
    <div className='app'>
      <Header 
        welcome={welcome}
        title={title}
        subtitle={subtitle}
        firstName={author.firstName}
        lastName={author.lastName}
        date={date}
      />
      <Button 
        action={action}
        onClick={() => alert(new Date())}
      />
      <Main 
        techs = {technologies}
        age={personAge}
      />
      <Emmi />
    </div>
  )
}

const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(<App />, rootElement)