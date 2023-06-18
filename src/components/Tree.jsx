import React, { createRef, useEffect } from 'react';

const Tree = ({ children }) => {
  const refs = children.map(() => createRef());

  useEffect(() => {
    refs.forEach((ref, i) => {
      console.log(`Child ${i}:`, ref.current.current);
    });
  }, [children]);

  return <>{children.map((child, i) => React.cloneElement(child, { ref: refs[i] }))}</>;
};

export default Tree;
