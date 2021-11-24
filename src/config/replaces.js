export default function replaces(newString) {
  return newString
    .replaceAll(`&quot;`, `"`)
    .replaceAll(`&#034;`, `"`)
    .replaceAll(`&#039;`, `'`)
    .replaceAll(`&lsquo;`, `'`)
    .replaceAll(`&rsquo;`, `'`)
    .replaceAll(`&Uuml;`, `Ü`)
    .replaceAll(`&uuml;`, `ü`)
    .replaceAll('&ldquo;', '"')
    .replaceAll('&rdquo;', '"');
}
