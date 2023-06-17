export default (object) => {
  const data = { ...object };
  const params = new URLSearchParams();

  const utmParams = new URLSearchParams(location.search);
  let utmValues = '';
  utmParams.forEach((val, key) => utmValues += `${key}: ${val};` + '\n');

  for (let key in data) {
    let value = data[key];
    if (key.includes('entry')) {
      if (typeof value === 'object') {
        for (let nestedKey in value) {
          let nestedValue = value[nestedKey];
          if (nestedValue) params.append(key, nestedKey);
        }
      } else {
        params.append(key.replace('_', '.'), value);
      }
    }
  }

  params.append('entry.1201206036', utmValues);

  return params;
}