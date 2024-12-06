import GifsListItem from '../GifsList/GifsListItem';

function GifsList({gifs}) {

  return (
    <div>
      <h2>Search Results:</h2>
      {gifs.map((gif, index) => (
        <GifsListItem key={index} gif={gif} />
      ))}
    </div>
  );

}

export default GifsList;
