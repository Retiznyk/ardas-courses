function getElementKey(element) {
  return element.name || element.id;
}

function toElementEntries(element) {
  return [getElementKey(element), element.value];
}

function elementEntryHasKey(entry) {
  const [key] = entry;
  return !!key;
}

export const getDataFromForm = form =>
  Object.fromEntries(
    [...form.elements].map(toElementEntries).filter(elementEntryHasKey)
  );
