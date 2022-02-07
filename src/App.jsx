import { useState } from 'react'
import './App.css'

export default function App(props) {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [menssagem, setMenssagem] = useState('');
    
    function calcularIMC() {
        const alt = altura/100;
        const imc = peso/(alt*alt)

        if (imc < 18.5) {
            setMenssagem('Você está abaixo do peso! Seu IMC: '+imc.toFixed(2))
        } else if(imc >= 18.5 && imc <= 24.9) {
            setMenssagem('Você está com peso normal! Seu IMC: '+imc.toFixed(2))
        } else if(imc >= 25 && imc <= 29.9) {
            setMenssagem('Você está com sobrepeso! Seu IMC: '+imc.toFixed(2))
        } else if(imc >= 30 && imc <= 34.9) {
            setMenssagem('Cuidado! Você esta com obesidade grau I! Seu IMC: '+imc.toFixed(2))
        }
        else if(imc >= 35 && imc <= 39.9) {
            setMenssagem('Cuidado! Você esta com obesidade grau II!Seu IMC: '+imc.toFixed(2))
        }
        else if(imc >=40) {
            setMenssagem('Cuidado! Você esta com obesidade grau III ou Morbida! Seu IMC: '+imc.toFixed(2))
        }
    }
    return(
        <div className="App">
          <h1>CALCULADORA IMC</h1>
          <span>Vamos calcular seu IMC</span>   
          <div className="areaInputs">
              <input 
              type="text"
              placeholder='Peso em KG' 
              value={peso}
              onChange={(env)=>setPeso(env.target.value)}
              />
              <input 
              type="text"
              placeholder='Altura em CM' 
              value={altura}
              onChange={(env)=>setAltura(env.target.value)}
              />    
              <button onClick={calcularIMC}>
                  Calcular
              </button>
              <h2>{menssagem}</h2>
          </div>
        </div>
    )
}