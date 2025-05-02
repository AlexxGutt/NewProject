function BookCard({ book }) {
  return (
    <div className="book">
      <div className="header">
        <div className="bookRating textColor">{book.rate}</div>
      </div>
      <h2 className="bookTitle textColor">{book.title}</h2>
      <img src={book.cover} alt="" className="bookImg" />
      <div className="position">
        <div className="bookAuthor textColor">{book.author}</div>
        <div className="bookMarks textColor">Буду читать</div>
      </div>
    </div>
  );
}
export default BookCard;
