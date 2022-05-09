import '../styles/index.page.css';
import { useState, useEffect } from 'react';

const onEnter = (event) => {
    if (event.key === 'Enter') {
        SearchGoogle(event)
    }
    
}

const SearchGoogle = (event) => {
    // API https://google.com/search?q={item}
    window.open(`https://google.com/search?q=${event.target.value}`, "_blank")
}

const App = () => {
    const [ openSettings, setOpenSettings] = useState(false)
    const [ time, setTime ] = useState();
    const SettingPopuponClick = () => {
        if(openSettings == true)
        {
            setOpenSettings(false)
        }
        else
        {
            setOpenSettings(true)
        }
    }
    useEffect(() => {
        var date = new Date()
        setTime(`${date.getHours()}:${mins = ('0'+date.getMinutes()).slice(-2)}`)
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