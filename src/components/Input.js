function Input({ deafultCurrency }) {
  return (
    <div>
      {deafultCurrency.map((cur) => {
        return (
          <ul>
            <li>{cur}</li>
          </ul>
        )
      })}
      <input type="number" placeholder="0" />
    </div>
  )
}

export default Input
