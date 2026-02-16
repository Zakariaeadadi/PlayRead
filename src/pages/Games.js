import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Games.css';
import GameInfo from '../components/GameInfo';
import axios from 'axios';

// ICONS || MATERIAL UI
import GamepadIcon from '@mui/icons-material/Gamepad';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function Games() {

  const navigate = useNavigate();

  // STATE
  const [game, setGame] = useState({
    name: "",
    id: null,
    description: null,
    genre: null,
    platform: null,
    img: null,
    url: null
  });
  const [isVisible, setIsVisible] = useState(false);
  const [selectedGame, setSelectedGame] = useState("All");
  const [loading, setLoading] = useState(false);

    function handelClickGame() {

      setLoading(true);

      const url = selectedGame === "All"
        ? "https://corsproxy.io/?https://www.freetogame.com/api/games"
        : `https://corsproxy.io/?https://www.freetogame.com/api/games?category=${selectedGame.toLowerCase()}`;
    
      axios.get(url)
      .then((response) => {
    
        if(!response.data || response.data.length === 0) {
          alert("No games found!");
          return;
        }
    
        const randomNumber = Math.floor(Math.random() * (response.data).length);
        const g = response.data[randomNumber];
    
        setGame({
          name: g.title,
          id: g.id,
          description: g.short_description,
          genre: g.genre,
          platform: g.platform,
          img: g.thumbnail,
          url: g.game_url
        });

        setLoading(false);
        setIsVisible(true);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
    });
    }


  return (
    <>
    <div className='body'>
      <button style={{}} onClick={() => navigate("/")}><ArrowBackIcon className='back-icon' /></button>
      {/* <ArrowBackIcon className='back-btn'><button onClick={() => navigate("/")}></button></ArrowBackIcon> */}
      <div className='container'>

        <div className='header'>
          <GamepadIcon style={{color: "red"}}/>
          <h1 className='title' style={{textAlign: "center"}}>Suggest me a game</h1>
          <SportsEsportsIcon style={{color: "red"}} />
        </div>

        {/* FILTER GAME */}
        <div style={{display: "flex", justifyContent:"center", marginTop: "20px"}}>
          <select
            multiple={false}
            value={selectedGame}
            onChange={(e) => {setSelectedGame(e.target.value)}}
            style={{padding: "10px", borderRadius:"8px", minWidth: "200px"}}
          >
              <option value="">-- Select an option --</option>
              <option value="All">All</option>
              <option value="MMO">MMO</option>
              <option value="MMORPG">MMORPG</option>
              <option value="Shooter">Shooter</option>
              <option value="Strategy">Strategy</option>
              <option value="Moba">Moba</option>
              <option value="Racing">Racing</option>
              <option value="Sports">Sports</option>
              <option value="Social">Social</option>
              <option value="Fighting">Fighting</option>
              <option value="MMOFPS">MMOFPS</option>
              <option value="Sandbox">Sandbox</option>
              <option value="Survival">Survival</option>
              <option value="MMOTPS">MMOTPS</option>
              <option value="MMORTS">MMORTS</option>
              <option value="Fantasy">Fantasy</option>
              <option value="Action">Action</option>
              <option value="Zombie">Zombie</option>
              <option value="Space">Space</option>
              <option value="Sailing">Sailing</option>
              <option value="Superhero">Superhero</option>
          </select>
</div>
        {/* =======FILTER GAME======= */}

        <p className='pargh' style={{textAlign: "center", marginTop: "75px"}}>Press the button to get a new game</p>

        <div className='center'>
            <button disabled={loading} className='btn' style={{textAlign: "center"}} onClick={handelClickGame} >
              {loading ? "Loading..." : "Random game"}
            </button>
        </div>
      </div>

      <Stack spacing={2} direction="row" alignItems="center" justifyContent="center" marginTop="20px">
        {loading && <CircularProgress size="3rem" />}
      </Stack>
      {isVisible && <GameInfo game={game} />}
    </div>
    </>
  );
}