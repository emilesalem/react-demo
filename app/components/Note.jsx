import React from 'react';

/*destructuring the props makes our implementation simpler*/
// export default({task, onDelete}) => (
//     <div>
//         <span>{task}</span>
//         <button onClick={onDelete}>x</button>
//     </div>
// );

export default ({children, ...props}) => (
  <div {...props}>
    {children}
  </div>
);
