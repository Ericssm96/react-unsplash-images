export const SearchForm = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    if(!searchValue) return;
  }

  return (
    <section>
      <h1 className="title">Unsplash Images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input type="text" className="form-input search-input" placeholder="Cat" name="search" />
        <button type="submit" className="btn">search</button>
      </form>
    </section>
  )
}