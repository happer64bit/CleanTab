function setValue(Key, Value)
{
    if(!window.localStorage.getItem(Key) === null)
    {
        window.localStorage.clear(Key)
    }
    window.localStorage.setItem(Key, Value);
    return 'Set ' + Key + ' to ' + Value;
}
function getValue(Key)
{
    return window.localStorage.getItem(Key)
}