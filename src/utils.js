export const formatDate = (data) => {
  const dateObj = new Date(data);
  const date = String(dateObj.getDate()).padStart(2, '0');
  const month = String(dateObj.getMonth() + 1).padStart(2, '0');
  const year = String(dateObj.getFullYear());
  return `${date}/${month}/${year}`;
}
