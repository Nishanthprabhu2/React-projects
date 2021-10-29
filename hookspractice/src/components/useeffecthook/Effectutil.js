import React, {useEffect} from 'react'

function Effectutil() {
    useEffect(() => {
        alert('useutil component mounted');

        //This function is called when the component is unmounted and will perform some cleanup 
        //of event listeners and other resources.
        return () => {
            alert('useutil component unmounted')
        }
    },[])
    return (
        <div>
            <p>This component will mount and unmout based on the toggle value(boolean) While un unmounting
            it will also call the un mount method returned from the useeffect</p>
        </div>
    )
}

export default Effectutil
