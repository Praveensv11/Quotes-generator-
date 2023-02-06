import React from 'react'

const App = () => {
  const [quotes, setQuotes] = React.useState("")
  console.log(quotes)

  const [change, setChange] = React.useState(0)
  
  React.useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then(res => res.json())
      .then(data => setQuotes(data))
  },[change])

  function newQuote(){
    setChange(count => count + 1)
  }

  return (
      <main>
        <div className='container'>
          <div className='quotes'>
              <h2>{quotes.content}</h2>
            </div>
            <div className='author'>
              <button onClick={newQuote}>New Quotes</button>
              <p>- {quotes.author}</p>
            </div>
        </div>
      </main>
    
  )
}

export default App
