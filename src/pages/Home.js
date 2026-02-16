import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
    <div className="home">
      <h1 className="home-title">Discover Something New Today</h1>

      <div className="cards-container">

        {/* Game Card */}
        <div className="card game-card">
          <div className="card-icon">🎮</div>
          <h2>Random Game</h2>
          <p>Discover a new game instantly</p>
          <button onClick={() => navigate("/games")}>
            Explore Games
          </button>
        </div>

        {/* Book Card */}
        <div className="card book-card-home">
          <div className="card-icon">📚</div>
          <h2>Random Book</h2>
          <p>Find your next great read</p>
          <button onClick={() => navigate("/books")}>
            Explore Books
          </button>
        </div>

      </div>
    </div>
    </>
  );
}
