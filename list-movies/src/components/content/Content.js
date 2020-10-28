import React, {useState, useEffect} from 'react'
import { obterFilmes } from "../../actions/api";


export default function Content(){
    const [result, setResult ] = React.useState(null)
    console.log("Result", result)
    useEffect(() => {
        obterFilmes(result).then((res) => {
          console.log("res => ", res);
          setResult(res)
        });
      }, [result]);
    return(
  
    <h1>Teste</h1>
    )

}