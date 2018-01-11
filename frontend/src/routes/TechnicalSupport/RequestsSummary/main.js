import React, { PropTypes } from 'react';

const Main = (props) => {
  const childrenWithProps = React.Children.map(props.children,
    child => React.cloneElement(child, {
      ...props,
    })
  );
  return (
    <div>
      {childrenWithProps}
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.node,
};


export default Main;
