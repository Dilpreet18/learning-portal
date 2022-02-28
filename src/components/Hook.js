import React from 'react'

const Hook = () => {
  return (
    <div><p><h2>Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.
        The first hook introduced was useState hook.  

        We can say this can be reason of introduction of hooks in react department: <br/> 
        We’ve often had to maintain components that started out simple but grew into an unmanageable mess of stateful logic and side effects. Each lifecycle method often contains a mix of unrelated logic. For example, components might perform some data fetching in componentDidMount and componentDidUpdate. However, the same componentDidMount method might also contain some unrelated logic that sets up event listeners, with cleanup performed in componentWillUnmount. Mutually related code that changes together gets split apart, but completely unrelated code ends up combined in a single method. This makes it too easy to introduce bugs and inconsistencies.   </h2></p>

 

    </div>
  )
}

export default Hook