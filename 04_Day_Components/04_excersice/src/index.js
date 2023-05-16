// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import emmiImage from './images/emmi.jpg'
// To get the root element from the HTML document

// JSX element, header
const welcome = 'Welcome to 30 Days Of React'
const title = 'Getting Started React'
const subtitle = 'JavaScript Library'
const author = {
  firstName: 'Jan',
  lastName: 'Rehnert',
}
const date = '15 May 2015'

// JSX element, header
const Header = () => (
  <header>
    <div className='header-wrapper'>
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>
        Instructor: {author.firstName} {author.lastName}
      </p>
      <small>Date: {date}</small>
    </div>
  </header>
)

const action = 'Test'

const Button = () => <button className='buttonStyles'> {action} </button>

const yearBorn = 1999
const currentYear = new Date().getFullYear()
const age = currentYear - yearBorn
const personAge = (
  <p>
    {' '}
    {author.firstName} {author.lastName} is {age} years old
  </p>
)

// JSX element, main
const techs = ['HTML', 'CSS', 'JavaScript']
const techsFormatted = techs.map((tech) => <li>{tech}</li>)

// JSX element, main
const Main = () => (
  <main>
    <div className='main-wrapper'>
      <p>
        Prerequisite to get started{' '}
        <strong>
          <em>react.js</em>
        </strong>
        :
      </p>
      <ul>{techsFormatted}</ul>
      {personAge}
    </div>
  </main>
)

const Emmi = () => (
  <div>
    <img src={emmiImage} alt='emmiImage' width="300" height="400" />
  </div>
)

// JSX element, app
const app = (
  <div className='app'>
    <Header />
    <Button />
    <Main />
    <Emmi />
  </div>
)

const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(app, rootElement)