import logo from './logo.svg';
import './App.css';
import recettes from './data';
import { matchSorter } from "match-sorter";

import { useEffect, useState } from 'react';
function App() {
  const [recetteFiltree, setRecetteFiltree] = useState(recettes)
  const [usedFilter, setUsedFilter] = useState(null)
  const handleDevicesSearch = (e) => {
    const a = matchSorter(recettes, e.target.value, { keys: ["nom"] });
    setRecetteFiltree(a)
    // setFilteredInstrument(a);
  };
  useEffect(() => {
    if (usedFilter == null) setRecetteFiltree(recettes)
  }, [usedFilter])

  // for (let i = 0; i < recettes.length; i++) {
  //   const element = recettes[i];
  //   if (i < 7) element.type = "entrée"
  //   if (i > 6 && i < 101) element.type = "plat"
  //   if (i > 100 && i < 186) element.type = "dessert"
  //   if (i > 185 && i < 191) element.type = "Apéro"
  //   if (i > 190) element.type = "soupe"
  // }
  console.log("recette")
  console.log(recettes)
  const handleEntree = () => {
    console.log('entrée');
    if (usedFilter == "entree") setUsedFilter(null)
    else setUsedFilter('entree')
    const a = matchSorter(recettes, "entrée", { keys: ["type"] });
    setRecetteFiltree(a)
  }
  const handlePlat = () => {
    if (usedFilter == "plat") setUsedFilter(null)
    else setUsedFilter('plat')
    const a = matchSorter(recettes, "plat", { keys: ["type"] });
    setRecetteFiltree(a)
  }
  const handleApero = () => {
    if (usedFilter == "apero") setUsedFilter(null)
    else setUsedFilter('apero')
    const a = matchSorter(recettes, "Apéro", { keys: ["type"] });
    setRecetteFiltree(a)
  }
  const handleSoupe = () => {
    if (usedFilter == "soupe") setUsedFilter(null)
    else setUsedFilter('soupe')
    const a = matchSorter(recettes, "soupe", { keys: ["type"] });
    setRecetteFiltree(a)
  }
  const handleDessert = () => {
    if (usedFilter == "dessert") setUsedFilter(null)
    else setUsedFilter('dessert')
    const a = matchSorter(recettes, "dessert", { keys: ["type"] });
    setRecetteFiltree(a)
  }
  return (
    <div className="main">
      <div className='buttonContainer'>
        <button
          className={usedFilter == "entree" ? "actif" : ""}
          onClick={handleEntree} >Entrée</button>
        <button
          className={usedFilter == "plat" ? "actif" : ""}

          onClick={handlePlat} >Plat</button>
        <button
          className={usedFilter == "dessert" ? "actif" : ""}

          onClick={handleDessert} >Dessert</button>
        <button
          className={usedFilter == "apero" ? "actif" : ""}

          onClick={handleApero} >Apéro</button>
        <button
          className={usedFilter == "soupe" ? "actif" : ""}

          onClick={handleSoupe} >Soupe</button>

      </div>
      <div className='inputContainer'><input
        className='input'
        placeholder="Recettes..." onChange={handleDevicesSearch} />
      </div>
      <div className='recette'>
        {recetteFiltree && recetteFiltree.map((recette, i) => <div key={i}>
          <h3>
            <a href={recette.lien} target="_blank" >{recette.nom}</a></h3>
        </div>)}</div>
    </div>
  );
}

export default App;
