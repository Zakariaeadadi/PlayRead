import '../styles/Books.css';


export default function BookInfo({ book }) {
    
    return (
        <>
            <div className='book-card'>
                <img src={book.image} alt=''/>

                <div className='book-info'>
                    <h2>{book.title}</h2>
                    <p>Authors: {book.authors?.join(",")}</p>
                    <p style={{color: !book.description ? "red": "gray"}}>{book.description ? book.description.substring(0, 200) + "..." : "No description available"}</p>
                    <a target='target-blank' href={book.infoLink}><button>Read More</button></a>
                </div>
            </div>
        </>
    );
}