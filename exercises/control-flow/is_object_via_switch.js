export function isObject(x) {

  switch (x) {
    case 'object':
    case 'function':
      return true;

    case null:
      return false;

    case undefined:
      return false;
    
    default:
      throw new Error('Illegal value ' +x)
  }
}
