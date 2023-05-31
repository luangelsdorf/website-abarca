import getQueryString from "./getQueryString";

export default async (data, event) => {
  data['entry_1221746117'] = '55' + data['entry_1221746117'].replace('(', '').replace(')', '').replace('-', '').replace(' ', '');
  
  const fields = Array.from(event.target.elements);
  fields.forEach(field => field.disabled = true);
  await new Promise(r => setTimeout(r, 2000));

  const request = await fetch('https://docs.google.com/forms/d/e/1FAIpQLSeZQP_Nepxa8YX1ZYSQbP2sRTpbXaoF-oGrG5N7c0bsYw7qkA/formResponse', {
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