import { useEffect, useState } from 'react'
import './App.css'
import Input from './components/Input'
import Output from './components/Output'
import Myteg from './components/Myteg'

function App() {
  const [valuta, setValuta] = useState({})
  const [inputValue, setInputValue] = useState('')
  const [outputValue, setOutputValue] = useState(0)
  const [inputCurrency, setInputCurrency] = useState('AZN')
  const [outputCurrency, setOutputCurrency] = useState('GBP')

  useEffect(() => {
    fetch('https://www.cbr-xml-daily.ru/daily_json.js')
      .then((res) => res.json())
      .then((json) => setValuta(json['Valute']))
      .catch((err) => console.log(err.message))
  }, [])

  const deafultCurrency = ['AZN', 'GBP', 'CNY', 'BYN']

  const onChangeFromPrice = (inputValue) => {
    const as = valuta[inputCurrency]
    const us = valuta[outputCurrency]
    const price = (inputValue / us?.Value) * as?.Value
    setInputValue(inputValue)
    setOutputValue(price.toFixed(2))
  }

  const cleanForm = () => {
    setInputValue(0)
    setOutputValue(0)
    setInputCurrency('AZN')
    setOutputCurrency('GBP')
  }

  return (
    <div className="App">
      <h1>Конвертор валют</h1>
      <Input
        valuta={valuta}
        currency={inputCurrency}
        deafultCurrency={deafultCurrency}
        inputValue={inputValue}
        setInputValue={setInputValue}
        onCh={(cur) => {
          setInputCurrency(cur)
        }}
        onChangeFromPrice={onChangeFromPrice}
      />
      <Output
        valuta={valuta}
        currency={outputCurrency}
        deafultCurrency={deafultCurrency}
        value={outputValue}
        outputValue={outputValue}
        setOutputValue={setOutputValue}
        onCh={(cur) => {
          setOutputCurrency(cur)
        }}
        cleanForm={cleanForm}
      />
      <Myteg />
      <h1>
        Курс {''}
        {(valuta[inputCurrency]?.Value / valuta[outputCurrency]?.Value).toFixed(
          2
        )}
      </h1>
    </div>
  )
}

export default App
