function MakeGoogleSearch(q)
{
    window.open(`https://google.com/search?q=${q}`)
}

function MakeBingSearch(q)
{
    window.open(`https://bing.com/search?q=${q}`)
}

function MakeDDGSearch(q)
{
    window.open(`https://duckduckgo.com/?q=${q}&ia=web`)
}

function Search(q)
{
    if(getValue("Engine") === "DuckDuckGo")
    {
        MakeDDGSearch(q)
    }
    else if(getValue("Engine") === "Google")
    {
        MakeGoogleSearch(q)
    }
    else if(getValue("Engine") === "Bing")
    {
        MakeBingSearch(q)
    }
    else {
        alert("Search Engine Not Found!")
    }
}