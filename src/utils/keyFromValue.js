export default (obj, value) => {
  return Object.keys(obj).find(key => obj[key] === value)
}
