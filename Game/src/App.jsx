import { useState, useEffect } from 'react'
import './App.css'
import useSWR from 'swr';

function fetcher(...args){
  fetch(...args).then((response) => response.json())
}

function App() {

  const [gameTitle, setgameTitle] = useState('');
  const [searchedGames, setsearchedGames] = useState([]);
  // const [gameDeals, setgameDeals] = useState([]);


  const { data, error } = useSWR('https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15&pageSize=3', fetcher);


  function searchGame(){
    fetch(`https://www.cheapshark.com/api/1.0/games?title=${gameTitle}&limit=3`).then((response) => response.json())
    .then((data) => {
      setsearchedGames(data);
      console.log(data);
    });
  };


  return (
    <div className="app">
      <div className="search">
          <h2>Search Here for Games</h2>
          <input type="text" placeholder='Search...' maxLength={20} onChange={(e) => setgameTitle(e.target.value)}/>
          <button onClick={searchGame}>Search Game Title</button>
          <div className="games">
            {searchedGames.map((game) => {
              return(
                <div className="game" key={game.gameID}>
                  {game.external}
                  <img src={game.thumb} alt="" />
                  <p>${game.cheapest}</p>
                </div>
              )
            })}
          </div>
      </div>
      <div className="deals">
            <h3>Top Deals</h3>
            <div className="deal-container">
                {data && data.map((deal) => {
                  return(
                        <div className="deal" key={deal.gameID}>
                            <h4 >{deal.title}</h4>
                            <p>Original Price: ${deal.normalPrice}</p>
                            <p>Deal Price: ${deal.salePrice}</p>
                            <h4>{deal.savings.substr(0,2)}% Saved!</h4>
                        </div>  
                  )
                })}
            </div>
      </div>
    </div>
  )
}

export default App
