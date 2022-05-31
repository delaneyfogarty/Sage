// call text located in supabase
//
const [books, setBooks] = useState([]);
  console.log('books', books);
  /*
  const story = await getStoryById(storyId)

  First use effect to call fetch function
  */



useEffect(() => {
    async function fetch() {
      const story = await getAllStories();
      const convertedStory = await convertText(story[0].story_text);
      console.log(convertedStory, 'converted Story');
      setBooks(convertedStory);
    }
    fetch();
  }, []);


<div className="App">
<div dangerouslySetInnerHTML={{ __html: books }} />

{/* {books.map((book, i) => (
<>
  <div key={book + i} book={book} />
  <h2>{book.title}</h2>
  <p>{book.story_text}</p>
</>
))} */}