export const getSpellsByLevelApi = (level) => {
  return fetch(`https://www.dnd5eapi.co/api/spells/?level=${level}`)
    .then(res => res.json());
};
