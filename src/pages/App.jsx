import '../styles/index.page.css';
import { useState } from 'react';

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
    return (
        <div className="app">
            <div className="flex flex-end">
                <input type='text' placeholder={'Search on '} className='field-search' onKeyPress={onEnter}/>
            </div>
        </div>
    )
}
export { App };