function inputSanitizer(value: any) {
    if (value) {
      const keysArr = Object.keys(value).map((key) => `_${key}`);
      const newVal = Object.entries(value).map((val, i) => {
          val[0] = keysArr[i];
          return val;
      });
      return Object.fromEntries(newVal);
    }
    return null;
}

/**
 * Retains only non undefined values in an object and returns it
 * @param result Object
 * @return Object with non undefined values 
 */
function removeUndefinedValues(result: any) {
    return Object.keys(result).reduce((acc: any, q) => {
        if (result[q] !== undefined) {
          acc[q] = result[q];
        }
        return acc;
    }, {});
}

export { inputSanitizer, removeUndefinedValues };