import { useState } from 'react';
import { levels, calculateImc } from './helpers/imc'

import poweredImage from './assets/powered.png'
import styles from './App.module.css';


export function App() {
  const [ heightField, setHeightField] = useState<number>(0)
  const [ weightField, setWeightField] = useState<number>(0)

  function handleCalculateButton() {
    if (heightField && weightField) {

    } else {
      alert('Digite todos os campos')
    }
  }

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImage} alt="" width={150} />
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule seu IMC</h1>
          <p>
            IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa. 
          </p>
          <input 
            type="number" 
            placeholder="Digite sua altura. Ex: 1.5 (em metros)"
            value={heightField > 0 ? heightField : ''}
            onChange={e => setHeightField(parseFloat(e.target.value))}
          />
          <input 
            type="number" 
            placeholder="Digite seu peso. Ex: 75.3 (em kg)"
            value={weightField > 0 ? weightField : ''}
            onChange={e => setWeightField(parseFloat(e.target.value))}
          />
          <button onClick={handleCalculateButton}>Calcular</button>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.grid}>
            {levels.map((item, key) => (
              <div key={key}> {item.title} </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


