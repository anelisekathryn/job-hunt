import quotes from '../../quotes.json'
import './Quotes.css'
import { useEffect, useState } from "react"


const Quotes = () => {

  const [quote, setQuote] = useState({});

  useEffect(() => {
    let i = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[i])
  }, []);

  return (
    <div>
      <em>{quote.q}</em>
      <p>{quote.a}</p>
    </div>
  )
};

export default Quotes;