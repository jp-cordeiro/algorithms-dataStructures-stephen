export function reverse(str) {
  const arrayOfString = [...str];
  return arrayOfString.reverse().join().replace(/,/g, "");
}
