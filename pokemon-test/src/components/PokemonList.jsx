/* eslint-disable no-unused-vars */

import { useState, useEffect } from "react";
import axios from "axios";
import PokemonCard from "./PokemonCard";

function PokemonList() {
  // TODO: Tambahkan state untuk menyimpan list pokemon
  const [pokemons, setPokemons] = useState([]);

  const handleApi = async () => {
    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20')
    setPokemons(data.results)
  }

  useEffect(() => {
    // TODO:
    // 1. Gunakan axios.get untuk mengambil data dari:
    //    https://pokeapi.co/api/v2/pokemon?limit=20
    // 2. Simpan data dari response.data.results ke dalam state
    handleApi()
  }, []);

  return <div className="pokemon-grid">{/* TODO: Tampilkan nama pokemon menggunakan PokemonCard */}
    {
      pokemons.map((item, index) => { return <PokemonCard name={item.name} key={index} /> })
    }
  </div>;
}

export default PokemonList;
