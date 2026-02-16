import '../styles/Games.css';

export default function GameInfo({ game }){
    return (
        <>
                <div className='game-card-info'>
                    {/* CONTENT */}
                    <div className='game-content'>
                        <img className='img' src={game.img} alt=''/>

                        <div className='game-text'>
                            <h2>{game.name}</h2>
                            <p>{game.description}</p>
                            <p>genre : {game.genre} || platform : {game.platform}</p>
                        </div>
                    </div>
                    <div className='game-btn'>
                        <a target='target-blank' href={game.url}><button className='btn' style={{background: "blueviolet", width: "125px"}}>Click</button></a>
                    </div>
                    {/*======= CONTENT ======*/}

                </div>
        </>
    )
}