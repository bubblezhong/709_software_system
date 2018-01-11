import React, { PropTypes } from 'react';


const App = (props) => {
  console.log('props: ', props);
  const childrenWithProps = React.Children.map(props.children,
    child => React.cloneElement(child, {
      ...props,
    })
  );
  return (
    <div>
      { childrenWithProps }
    </div>
  );
};


App.propTypes = {
  children: PropTypes.object,
};


export default App;
