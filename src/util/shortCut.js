export default function shortCut(str) {
  let length = 88; // 표시할 글자수 기준
  if (str.length > length) {
    str = str.substr(0, length - 2) + '...';
  }
  return str;
}
