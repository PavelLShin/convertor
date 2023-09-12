import styles from './Output.module.css'

function Output({
  disabled,
  valuta,
  deafultCurrency,
  outputValue,
  setOutputValue,
  onCh,
  currency,
  cleanForm,
}) {
  return (
    <div className={styles.container}>
      <ul className={styles.ul}>
        {deafultCurrency.map((cur, id) => {
          return (
            <li
              title={valuta[cur]?.Name}
              className={`${currency === cur ? styles.active : ''}`}
              onClick={() => onCh(cur)}
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
        value={outputValue}
        onChange={(event) => setOutputValue(event.target.value)}
      />
      <button className={styles.btn} onClick={cleanForm}>
        Очистить
      </button>
    </div>
  )
}

export default Output
