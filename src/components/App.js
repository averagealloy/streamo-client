import React from 'react'
import { BrowserRouter, Route} from 'react-router-dom'

const PageOne = () => {
    return (
    <div>
        PageOne
        <a href="/pagetwo">go to page two</a>
    </div>
    )
}


const PageTwo = () => {
    return(
        <div>
            PageTwo
            <button>click meh</button> 
            <a href="/">go to page one</a>
        </div>
        ) 
}

const App = () => {
    return (
        <div>
            <BrowserRouter>
             <div>
                <Route path="/" exact component={PageOne}/>
                <Route path="/pagetwo" component={PageTwo}/>
             </div>
            </BrowserRouter>
        </div>
        ) 
}

export default App