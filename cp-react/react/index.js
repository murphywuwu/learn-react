'use strict'

if (process.env.NODE_ENV !== 'production') {
  (function() {
    'use strict' 

    exports.Fragment = 0xeacb;

    function isValidElementType(type) {
      if (typeof type === 'string' || typeof type === 'function') {
        return true;
      }

      if (type === exports.Fragment
       || type === exports.Profiler
       || type ===  )
    }


    function createElementWithValidation(type, props, children) {
      var validType = isValidElementType(type);
    }
    
    var createElement$1 = createElementWithValidation;

    exports.createElement = createElement$1;
  })();
}