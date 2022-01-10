import "./SearchInput.css";

const SearchInput = () => {
   
   return(
   <form adction="/" method="get" onSubmit>
        <label htmlFor="header-search">
            <span className="visually-hidden">Search blog posts</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search blog posts"
            name="s" 
        />
    </form>)}

export default SearchInput;