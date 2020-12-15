// This have a linter problem, it says that we should prefer
// export default
// Would you like to fix this issue ?
// add expor default
export default function isArray(aPossibleArray) {
  return aPossibleArray.constructor.name === 'Array';
}

// export default isArray;
