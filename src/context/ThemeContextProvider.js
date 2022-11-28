import React, { useState } from 'react';

import themeContext from './themeContext';

function ThemeContextProvider(props) {
  // const counter = useRef(0);

  const [isDark, setisDark] = useState(false);

  const handelTheme = () => {
    setisDark((isD) => !isD);
    // counter.current += 1;
    // console.log(counter.current);
  };

  const context = { isDark, handelTheme };

  return (
    <div>
      <h1>Theme is : {isDark ? 'Dark' : 'Light'}</h1>
      <button onClick={handelTheme}>Switch Theme</button>
      <themeContext.Provider value={context}>
        {props.children}
      </themeContext.Provider>
    </div>
  );
}

export default ThemeContextProvider;
