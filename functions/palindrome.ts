const checkPalindrome = (str: string) => {
  let chaine = str.toLowerCase();
  chaine = chaine.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
  chaine = chaine.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  chaine = chaine.replace(/\s/g, "");

  const chaineInverse = chaine.split("").reverse().join("");

  return chaine === chaineInverse;
};

export default checkPalindrome;
