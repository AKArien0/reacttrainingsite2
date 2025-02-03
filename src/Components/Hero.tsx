import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

type Hero = {
  id: string;
  name: string;
  biography: {
    "full-name": string // the response uses a - instead of a _, so we’re forced to do this which is ugly, but it gets even worse when accessing it below
    "alter-egos": string // or i can manually assing these when fetching, but i don’t wanna
    "place-of-birth": string
    aliases: Array<string>
    "first-appearance": string
    alignment: string
  };
  work: {
    occupation: string
    base: string
  }
  image: {
    url: string;
  };
  powerstats: { // okay this api is so weird lol
    intelligence: string;
    strength: string;
    speed: string;
    durability: string;
    power: string;
    combat: string;
  };
};

const Hero = () => {
  const { id } = useParams<{ id: string }>();
  const [hero, setHero] = useState<Hero | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHero = async () => {
      try {
        const apiKey = "ae778354697afcadf8531d8da82dd1f2"

        const response = await fetch(`https://corsproxy.io/https://superheroapi.com/api.php/${apiKey}/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setHero(data);
        setLoading(false);
      } catch (err) {
        setError('Something went wrong ! Please try again, it works on my machine.');
        setLoading(false);
      }
    };

    fetchHero();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!hero.id) {
    return <div>We couldn’t find a record for this hero. Perhaps they hide their identity too well ? Or perhaps the link you were provided is wrong.</div>;
  }

  return (
    <div>
      <h1>{hero.name}</h1>
      <img src={hero.image.url} alt={hero.name} width="200" />
      
      <section>
        <h2>Biography</h2>
        <p><strong>Full Name:</strong> {hero.biography["full-name"]}</p>
        <p><strong>Alter Egos:</strong> {hero.biography["alter-egos"]}</p>
        <p><strong>Aliases:</strong> {hero.biography.aliases.join(', ')}</p>
        <p><strong>Place of Birth:</strong> {hero.biography["place-of-birth"]}</p>
        <p><strong>First Appearance:</strong> {hero.biography["first-appearance"]}</p>
        <p><strong>Alignment:</strong> {hero.biography.alignment}</p>
      </section>
      
      <section>
        <h2>Work</h2>
        <p><strong>Occupation:</strong> {hero.work.occupation}</p>
        <p><strong>Base:</strong> {hero.work.base}</p>
      </section>
      
      <section>
        <h2>Powerstats</h2>
        <ul>
          <li><strong>Intelligence:</strong> {hero.powerstats.intelligence}</li>
          <li><strong>Strength:</strong> {hero.powerstats.strength}</li>
          <li><strong>Speed:</strong> {hero.powerstats.speed}</li>
          <li><strong>Durability:</strong> {hero.powerstats.durability}</li>
          <li><strong>Power:</strong> {hero.powerstats.power}</li>
          <li><strong>Combat:</strong> {hero.powerstats.combat}</li>
        </ul>
      </section>
    </div>
  );
};

export default Hero;
