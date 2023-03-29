export function onChange(e, setValue) {
  setValue('entry_1354793341', phoneMask(e.target.value));
}

export function phoneMask(phone) {
  if (phone.length <= 14) {
    return phone.replace(/\D/g, '')
      .replace(/^(\d)/, '($1')
      .replace(/^(\(\d{2})(\d)/, '$1) $2')
      .replace(/(\d{4})(\d{1,5})/, '$1-$2')
      .replace(/(-\d{4})\d+?$/, '$1');
  } else {
    return phone.replace(/\D/g, '')
      .replace(/^(\d)/, '($1')
      .replace(/^(\(\d{2})(\d)/, '$1) $2')
      .replace(/(\d{5})(\d{1,5})/, '$1-$2')
      .replace(/(-\d{4})\d+?$/, '$1');
  }
}