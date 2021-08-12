import React, { useState, useEffect } from 'react';

import ReactionsCounter from '../components/ReactionsCounter';

function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [reactionsList, setReactions] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch('http://localhost:3001/reactions')
      .then(response => response.json())
      .then(reactions => {
        setReactions(reactions)
        setIsLoading(false)
      });
  }, []);
  // atualizando a contagem toda vez que carregar a pagina

  if (isLoading) return <h2>Carregando...</h2>

  return (
    <div>
      <h1> Reações ao vídeo</h1>
        {/* Vídeo */}
        {reactionsList.map(
          (reaction) => (
            <ReactionsCounter
              reactIcon={reaction}
              key={reaction._id}
            />
          )
        )}
    </div>
  )
}

export default Home;
