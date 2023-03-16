//1
async function getUsers(names) {
 return names.map(async (el) => {
      const res = await fetch(`https://api.github.com/users/${el}`);
      if (res.ok) {
        return res.json();
      }
      return null
    })
}
