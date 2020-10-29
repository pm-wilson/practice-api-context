export const getSpellsApi = () => {
  return fetch('https://www.dnd5eapi.co/api/spells/')
    .then(res => res.json());
};
