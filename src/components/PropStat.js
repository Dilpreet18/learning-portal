import React from 'react'

const PropStat = () => {
  return (
      <>
      <div>
    <h3>Props are arguments passed into React components. Props are passed to components via HTML attributes. props stands for properties.<br/> 
    Props make component reusable
    </h3>
    <h3>State: A plain JavaScript object used by React to represent an information about the component's current situation. <br/>
    State cannot make components reusable.
    When the state object changes, the component re-renders.


</h3> <br/>
<h4>
    State example: 
    <a href='../Images/Screenshot (22).png'>is here</a>

</h4>
<h2>Difference between props and state:  </h2>
 <h3>Props are used to pass data, whereas state is for managing data
</h3>
<h3>Props can only be passed from parent component to child (unidirectional flow)
 and Modifying state should happen with the setState ( ) method
  setState method comes under <i><u><a href='../Hook'> useState hook</a></u></i> which we will discuss later on.</h3>
  </div>
</>
  )
}

export default PropStat