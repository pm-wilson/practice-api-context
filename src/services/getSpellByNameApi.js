export const getSpellByIndexApi = (index) => {
  return fetch(`https://www.dnd5eapi.co/api/spells/${index}`)
    .then(res => res.json());
};
