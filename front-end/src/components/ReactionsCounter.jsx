import { useState } from 'react'
import socket from '../utils/socket';

const initialState = {
  count: 0,
  isClicked: false
}

export const ReactionsCounter = (reactICon) => {
  const { _id, name, image, count } = reactICon;
  const MAXIMUM_USER_REACTION = 20;
  const [reactionState, setreactionState] = useState(initialState)

  const ReactionCount = ({count}) => {
    return <span>+ {count}</span>
  }

  const handleClick = () => {
    setreactionState((prevState) => ({
      isClicked: true,
      count: Math.min(prevState.count + 1, MAXIMUM_USER_REACTION),
    }))
  }

  return (
    <button onClick={handleClick}>
    <img alt='reaction-icon' src={image} />
    <ReactionCount count={count}/>
    </button>
  )
};
