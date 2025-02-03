import { useState } from 'react';
import { Link } from 'react-router-dom';

type Hero = {
  id: string;
  name: string;
  image: {
    url: string;
  };
};

const Search = ({ apiKey }) => {
  const [query, setQuery] = useState<string>(''); // why, react, WHY
  const [results, setResults] = useState<Hero[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchSearchResults = async (searchQuery: string) => {
    if (searchQuery.trim() === '') {
      setResults([]);
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`https://corsproxy.io/https://superheroapi.com/api.php/${apiKey}/search/${searchQuery}`);
      if (!response.ok) {
        throw new Error("Oops ! Something went extremely wrong. Call a super hero to save the day, maybe ?");
      }
      const data = await response.json();
      setResults(data.results || []);
    } catch (error) {
      console.error(error);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  // why react part 2 : electric boogaloo
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    fetchSearchResults(e.target.value);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        value={query}
        onChange={handleSearchChange}
        placeholder="Search superheroes..."
      />
      {query && (
        <div className="search-results">
          {loading ? (
            <div>Loading...</div>
          ) : results.length > 0 ? (
            <ul>
              {results.map((hero) => (
                <li key={hero.id}>
                  <Link to={`/hero/${hero.id}`}>
                    <div>
                      <img src={hero.image.url} alt={hero.name} />
                      {hero.name}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <div>No results found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
