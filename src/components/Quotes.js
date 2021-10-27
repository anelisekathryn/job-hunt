import axios from "axios";
import { useEffect, useState } from "react"

const quotes_url = "https://zenquotes.io/api/random";

const Quotes = () => {

  const [quotes, setQuotes] = useState('')

  const fetchQuotes = async () => {
    const res = await axios.get(quotes_url);
    console.log(res)
    setQuotes(res.data)
  }

  useEffect(() => {
    fetchQuotes()
  }, [])

  return (
    <div>
      <em>quote will be here</em>
      
      <em>{quotes.q}</em>
      <p>{quotes.a}</p>

    </div>
  )
}

export default Quotes;