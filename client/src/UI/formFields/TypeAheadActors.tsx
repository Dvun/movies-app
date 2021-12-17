import React, {FC, ReactElement, useState} from 'react';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import {IActorMovieDTO} from '../../interfaces/interfaces';
import {Typeahead} from 'react-bootstrap-typeahead';


interface TypeAheadActorsProps {
  name: string
  label: string
  actors: IActorMovieDTO[]
  onAdd: (actors: IActorMovieDTO[]) => void
  listUI: (actor: IActorMovieDTO) => ReactElement
  onRemove: (actor: IActorMovieDTO) => void
}

const TypeAheadActors: FC<TypeAheadActorsProps> = (props: TypeAheadActorsProps) => {
  const [dragElement, setDragElement] = useState<IActorMovieDTO | undefined>(undefined)
  
  const handleDragStart = (actor: IActorMovieDTO) => {
    setDragElement(actor)
  }

  const handleDragOver = (actor: IActorMovieDTO) => {
    if (!dragElement) return
    if (actor.id !== dragElement.id) {
      const draggedElementIndex = props.actors.findIndex(x => x.id === dragElement.id)
      const actorIndex = props.actors.findIndex(x => x.id === actor.id)
      
      const actors = [...props.actors]
      actors[actorIndex] = dragElement
      actors[draggedElementIndex] = actor
      props.onAdd(actors)
    }
  }

  return (
    <>
      <label htmlFor={props.name}>{props.label}</label>
      <Typeahead
        id={props.name}
        onChange={actors => {
          if (props.actors.findIndex(x => x.id === actors[0].id) === -1) {
            props.onAdd([...props.actors, actors[0]])
          }
        }}
        options={props.actors}
        labelKey={actors => actors.name}
        filterBy={['name']}
        placeholder="Write the name of the actor"
        minLength={1}
        selected={[]}
        renderMenuItemChildren={actor => (
          <>
            <img src={actor.picture} alt="actor" style={{height: '64px', marginRight: '10px', width: '60px'}}/>
            <span>{actor.name}</span>
          </>
        )}
      />

      <ul className="list-group">
        {props.actors.map(actor =>
          <li 
            draggable={true}
            onDragStart={() => handleDragStart(actor)}
            onDragOver={() => handleDragOver(actor)}
            key={actor.id} 
            className="list-group-item list-group-item-action"
          >
            {props.listUI(actor)}
            <span
              className="badge bg-primary rounded-pill text-dark"
              style={{marginLeft: '0.5rem', cursor: 'pointer'}}
              onClick={() => props.onRemove(actor)}
            >X</span>
          </li>)}
      </ul>

    </>
  );
};

export default TypeAheadActors;