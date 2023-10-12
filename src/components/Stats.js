export default function Stats({items}) {
    if(!items.length) 
      return (
        <p className="stats">
          <em>Comece adicionando alguns itens para sua lista de viagem</em>
        </p>
      );
  
    const numItems = items.length; 
    const numPacked = items.filter((item)=>item.packed)
    .length;
    const percentage = Math.round((numPacked / numItems) * 100);
  
    return (
      <footer className="stats">
        <em>
          {percentage === 100 
            ? "Você está com tudo pronto!"
            : `Você possui ${numItems} items na sua lista, e já colocou na mala ${numPacked} (${percentage}%)`
          }
        </em>
      </footer>
    );
  }