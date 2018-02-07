import { debounce } from 'min-dash/lib/fn';
import { isNumber } from 'min-dash/lib/lang';

const DEFAULT_DEBOUNCE_TIME = 300;

export default function debounceInput(shouldDebounce) {
  return function _debounceInput(fn) {
    if (shouldDebounce !== false) {

      var debounceTime =
        isNumber(shouldDebounce) ?
          shouldDebounce :
          DEFAULT_DEBOUNCE_TIME;

      return debounce(fn, debounceTime);
    } else {
      return fn;
    }
  };
}

debounceInput.$inject = [ 'config.debounceInput' ];