export function filtrar(array) {
  const uniqueIds = [];

  const unique = array.filter((element) => {
    const isDuplicate = uniqueIds.includes(element.Direccion);

    if (!isDuplicate) {
      uniqueIds.push(element.Direccion);

      return true;
    }

    return false;
  });
  return unique;
}
