import { useContext } from 'react'
import { CalcContext } from '../context/CalcContext'

const Button = ({ value }) => {
  const { calc, setCalc } = useContext(CalcContext)

  // user click comma
  const commaClick = () => {
    setCalc({
      ...calc,
      num: !calc.numb.toString().includes('.') ? calc.num + value : calc.num,
    })
  }

  // user click C
  const resetClick = () => {
    setCalc({ sign: '', num: 0, res: 0 })
  }

  // user clicks number
  const handleClickButton = () => {
    const numberString = value.toString()

    let numberValue
    if (numberString === '0' && calc.num === 0) {
      numberValue = '0'
    } else {
      numberValue = Number(calc.num + numberString)
    }

    setCalc({
      ...calc,
      num: numberValue,
    })
  }

  const handleBtnClick = () => {
    const results = {
      '.': commaClick,
      c: resetClick,
    }
    if (results[value]) {
      return results[value]()
    }
  }

  return (
    <button onClick={handleBtnClick} className="button">
      {value}
    </button>
  )
}

export default Button
