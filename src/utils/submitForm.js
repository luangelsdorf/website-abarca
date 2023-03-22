import getQueryString from "./getQueryString";

export default async (data, event) => {
  const fields = Array.from(event.target.elements);
  fields.forEach(field => field.disabled = true);
  await new Promise(r => setTimeout(r, 2000));

  const request = await fetch('https://docs.google.com/forms/u/1/d/e/1FAIpQLSfzqZq8vFpdno3w49wMUTZqEvw-rQUZLTqJpzdGITNaeOUj6w/formResponse', {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: getQueryString(data),
  });


  if (!request) {
    window.location.reload();
    return;
  }

  window?.dispatchEvent(new Event('submitted'));
}