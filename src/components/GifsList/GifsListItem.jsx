function GifsListItem({gif}) {
  return <img src={gif.images.original.url} />;
}

export default GifsListItem;
