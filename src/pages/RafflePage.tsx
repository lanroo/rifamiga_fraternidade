import React from 'react';


const RafflePage: React.FC = () => {
  const rifas = [
    { id: 1, nome: 'Rifa 1', descricao: '' },
    { id: 2, nome: 'Rifa 2', descricao: '' },
    // Adicione mais rifas aqui
  ];

  return (
    <div>
      <h1>Rifas Disponíveis//exemplo</h1>
      <div>
        {rifas.map((rifa) => (
          <div key={rifa.id}>
            <h2>{rifa.nome}</h2>
            <p>{rifa.descricao}</p>
        
          </div>
        ))}
      </div>
    </div>
  );
};

export default RafflePage;
