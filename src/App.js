import React from 'react';


/**this two components get nested
 * in the app
 */
 const Person = () => <h2> Erick Rodriguez </h2>;

 const Message = () => {
   return <p> Tray Complete </p>
  }


function App() {
  return (
    <div>
      {/**this way i can build like lego blocks
       * 
       */}
      <Person/>
      <Message/>
    </div>
  );
}

export default App;
