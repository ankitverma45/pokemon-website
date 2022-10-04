import React from "react";
import Input from "./component/Input";
import Section from "./component/Section";
import { useEffect, useState } from "react";
import axios from "axios";

const Menu=()=>{
  
  const [pokemonData,setPokemonData]=useState([])
  const [pokemon,setPokemon]=useState([])
  console.log("ankit", pokemon)

  async function getdata(){
      const res=await axios.get("https://pokeapi.co/api/v2/pokemon/")
      getPokemon(res.data.results)
  }
  const getPokemon=async(res)=>{
      res.map(async(item)=>{
        const result=await axios.get(item.url)
        setPokemon(preValue=>{
          preValue=[...preValue,result.data]
          return preValue
        })
        setPokemonData(preValue=>{
          preValue=[...preValue,result.data]
          return preValue
        })
      })
  }
   useEffect(()=>{
      getdata()
   },[])
  const changeHandler=(name)=>{
    const updatedList=pokemonData.filter((item)=>{
      return item.name.toLowerCase().includes(name)
    })
    setPokemon(updatedList)
  }

   return (
    <>
      <Input change={changeHandler}/>
      <Section nameItem={pokemon}/>
    </>
   )
}
export default Menu