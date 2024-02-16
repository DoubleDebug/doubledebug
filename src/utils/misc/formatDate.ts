const formatter = new Intl.DateTimeFormat('en', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

export function formatDate(date?: string) {
  const dateObject = date ? new Date(date) : new Date();
  return formatter.format(dateObject);
}
