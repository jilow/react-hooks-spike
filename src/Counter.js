import React, { useState, useEffect } from 'react'

export function Counter(properties) {
  const [count, setCount] = useState(1)
  const [name, setName] = useState(properties.name)
  const [location, setLocation] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handlePointerMove = (e) => setLocation({ x: e.pageX.toFixed(2), y: e.pageY.toFixed(2) })
    document.addEventListener('pointermove', handlePointerMove)
    return () => {
      document.removeEventListener('pointermove', handlePointerMove)
    }
  })

  return (
    <div>
      <p>{name}</p>
      <input value={name} onChange={(e) => setName(e.target.value)}/>
      <br/>
      <br/>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <br/>
      <br/>
      <code>Pointer location: {location.x}x, {location.y}y</code>
    </div>
  )
}
