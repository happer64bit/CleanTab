import '../styles/index.page.css';
import { useState, useEffect } from 'react';

const onEnter = (event) => {
    if (event.key === 'Enter') {
        SearchGoogle(event)
    }
}

const SearchGoogle = (event) => {
    // API https://google.com/search?q={item}
    // *fix searching # in search bar not working*
    const q = event.target.value.replace("#", "%23");
    // TODO: will be fixed in next update
    window.open(`https://google.com/search?q=${q}`, "_blank")
}

const App = () => {
    const [ time, setTime ] = useState();
    useEffect(() => {
        var date = new Date()
        setTime(`${String(date.getHours()).padStart(2, 0)}:${String(date.getMinutes()).padStart(2, 0)}`)
    })
    return (
        <div className="app">
            <div className="flex flex-end">
                <h1 className='clock'>{time}</h1>
            </div>
            <div className="flex flex-center">
                <input type='text' placeholder='Search on Google' className='field-search' onKeyPress={onEnter}/>
            </div>
        </div>
    )
}
export { App };