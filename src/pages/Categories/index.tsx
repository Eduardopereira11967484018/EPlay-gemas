
import { ProductsList } from "../../components/ProductsList"

import { useGetActionGamesQuery, useGetRpgGamesQuery,useGetSimulationGamesQuery, useGetSportGamesQuery, useGetFightGamesQuery} from '../../services/api'


const Categories = () => {
  const {data: actionGames} = useGetActionGamesQuery ()
  const {data: rpgGames} = useGetRpgGamesQuery ()
  const {data: simulationGames} = useGetSimulationGamesQuery ()
  const {data: sportGames} = useGetSportGamesQuery ()
  const {data: fightGames} = useGetFightGamesQuery ()

  if(actionGames && rpgGames && simulationGames && sportGames && fightGames) {
    return (
      <>
        <ProductsList games={actionGames} title='Ação' background='black' id="action"/>
        <ProductsList games={rpgGames} title='RPG' background='gray' id="rpg" />
        <ProductsList games={simulationGames} title='Simulação' background='black' id="simulation" />
        <ProductsList games={sportGames} title='Esportes' background='gray' id="sports" />
        <ProductsList games={fightGames} title='Luta' background='black' id="fight" />
      </>
  )
  }

  return <h4>Caregando</h4>

  }


export default Categories
