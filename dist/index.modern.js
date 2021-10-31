import React from 'react';

var CO = "CO~bawQqbkp.png";

var useFlags = function useFlags() {
  return {
    CO: CO
  };
};

var Flag = function Flag(props) {
  var code = props.code;
  var flagName = code.toUpperCase();
  var flag = useFlags[flagName];
  return React.createElement("img", {
    src: flag
  });
};

export default Flag;
//# sourceMappingURL=index.modern.js.map
