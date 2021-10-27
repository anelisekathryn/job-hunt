import quotes from '../quotes.json'
// import axios from "axios";
import { useEffect, useState } from "react"

// const quotes_url = "https://zenquotes.io/api/random";

const Quotes = () => {

  const [quote, setQuote] = useState({})

  // const fetchQuotes = async () => {
  //   const res = await axios.get(quotes_url);
  //   console.log(res)
  //   setQuotes(res.data)
  // }


  useEffect(() => {

    let i = Math.floor(Math.random() * quotes.length);

    setQuote(quotes[i])
  }, [])

  return (
    <div>      
      <em>{quote.q}</em>
      <p>{quote.a}</p>
    </div>
  )
}

export default Quotes;