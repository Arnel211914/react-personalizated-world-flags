function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

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

module.exports = Flag;
//# sourceMappingURL=index.js.map
