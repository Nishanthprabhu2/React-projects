import React from 'react'
import { useContext } from 'react'
import { UserContext, FoodContext } from '../../App'

function ComponentC() {
    const user = useContext(UserContext);
    const food = useContext(FoodContext);
    return (
        <div>
           <p> Component C </p>
              <p> {user} </p>
              <p> {food} </p>

        </div>
    )
}

export default ComponentC
