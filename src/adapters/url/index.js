const redirects = {
  '#/address/': 'address/',
  '#/block/': 'block/',
  '#/transaction/': 'transaction/',
};

export default () => {
  const hash = window.location.hash;

  if (hash) {
    const targetArray = Object.entries(redirects).find(redirect => hash.includes(redirect[0]));

    if (targetArray) {
      const target = hash.replace(targetArray[0], targetArray[1]);
      window.location.replace(target);
    }
  }
}
