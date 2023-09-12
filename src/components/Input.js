import styles from './Input.module.css'

function Input({
  valuta,
  currency,
  deafultCurrency,
  inputValue,
  setInputValue,
  onCh,
  onChangeFromPrice,
}) {
  return (
    <div className={styles.container}>
      <ul className={styles.ul}>
        {deafultCurrency.map((cur, id) => {
          return (
            <li
              title={valuta[cur]?.Name}
              className={`${currency === cur ? styles.active : ''}`}
              onClick={() => {
                onCh(cur)
              }}
              key={id}
            >
              {cur}
            </li>
          )
        })}
      </ul>
      <input
        className={styles.input}
        type="number"
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value)
        }}
      />
      <button
        className={styles.btn}
        onClick={() => onChangeFromPrice(inputValue)}
      >
        Рассчитать
      </button>
    </div>
  )
}

export default Input
