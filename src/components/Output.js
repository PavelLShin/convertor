function Output({ deafultCurrency }) {
  return (
    <div>
      {deafultCurrency.map((cur) => {
        return (
          <ul>
            <li>{cur}</li>
          </ul>
        )
      })}
      <input type="number" />
    </div>
  )
}

export default Output
