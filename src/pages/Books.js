import { useState } from 'react';
import '../styles/Books.css';
import Library from '../images/Library.jpg';
import BookInfo from '../components/BookInfo';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// MATERIAL UI
import CircularProgress from '@mui/material/CircularProgress';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';



export default function Books() {

  const navigate = useNavigate();

    // STATE
    const [book, setBook] = useState({
        title: null,
        authors: [],
        description: null,
        image: null,
        infoLink: null,
    });
    const [selectedCategory, setSelectedCategory] = useState("");
    const [loading, setLoading] = useState(false);
    const [visible, setVisible] = useState(false);

    const categories = [
      "Fiction",
      "Art",
      "Programming",
      "Science",
      "History",
      "Philosophy",
      "Psychology",
      "Business",
      "Technology",
      "Poetry",
      "Sports",
      "Biography"
    ];

    // HANDEL
    function handelRandomClick() {
        
        if(!selectedCategory) {
            alert("Please select a category first");
            return;
        }
        setLoading(true);
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${selectedCategory}`)
    .then(function (response) {

        const books = response.data.items;
        const randomNumber = Math.floor(Math.random() * (response.data.items).length);

        const title = books[randomNumber].volumeInfo.title;
        const authors = books[randomNumber].volumeInfo.authors;
        const description = books[randomNumber].volumeInfo.description;
        const image = books[randomNumber].volumeInfo.imageLinks.thumbnail;
        const infoLink = books[randomNumber].volumeInfo.infoLink;

        setBook({title, authors, description, image, infoLink});
        setLoading(false);
        setVisible(true);
    })
    .catch(function (error) {
        console.log(error);
    })
    }


    return (
        <>
            <button className='b-i-b' onClick={() => navigate("/")}><ArrowBackIcon className='back-icon-book' /></button>
            {/* CARD */}
            <div className='book-container'>
                {/* IMAGE */}
                <div className='img'>
                    <img src={Library} alt='Library' />
                </div>
                {/* ======IMAGE====== */}

                <div className='content'>
                    <h1>Discover a Random Book</h1>

                    <div className="book-category">
                        <h2>Choose Your Favorite Category</h2>

                            <select
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className="category-select"
                            >
                                <option value="">-- Select a Category --</option>

                                {categories.map((category, index) => (
                                    <option key={index} value={category.toLowerCase()}>
                                    {category}
                                    </option>
                            ))}
                            </select>

                    </div>

                    <p>Explore new ideas and stories every day</p>
                    <button onClick={handelRandomClick}>Get a Book</button>
                </div>
            </div>
            {/* =======CARD======== */}

            <div style={{textAlign: "center"}}>
                {loading && <CircularProgress size="3rem" style={{color: "brown"}} />}
            </div>
            {/* CARD INFO */}
            {visible && <BookInfo book={book} />}
            {/* =========CARD INFO======== */}
        </>
    );
}