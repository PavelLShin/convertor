import { useEffect, useState } from 'react'
import './App.css'
import Input from './components/Input'
import Output from './components/Output'

function App() {
  const deafultCurrency = ['RUB', 'USD', 'EUR', 'GBR']
  const [valuta, setValuta] = useState({})
  useEffect(() => {
    fetch('https://www.cbr-xml-daily.ru/daily_json.js')
      .then((res) => res.json())
      .then((json) => setValuta(json['Valute']))
      .catch((err) => console.log(err.message))
  }, [])

  console.log(valuta)

  return (
    <div className="App">
      <Input deafultCurrency={deafultCurrency} />
      <Output deafultCurrency={deafultCurrency} />
    </div>
  )
}

export default App
