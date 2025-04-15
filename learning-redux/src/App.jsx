import './App.css'
import Testing from './Components/Testing'
import CounterTest1 from './Components/CounterTest1'
import CounterTest2 from './Components/CounterTest2'
import UserComponent from './Components/UserComponent'
import ThemeComponent from './Components/ThemeComponent'
import ReUsingUserInfo from './Components/ReusingUserInfo'

function App() 
{

  return (
    <>
      Yo Buddy 
      <br />
      <Testing />

      {/* Below we are using counter test in which we are passing same reducers hence whatever we will update in countertest1 it will update in counter 2 as well */}

      <CounterTest1 />
      <br/>
      <CounterTest2 />

      <br/>
      <UserComponent />
      <ReUsingUserInfo />
      <br/>
      <ThemeComponent />
    </>
  )
}

export default App
