module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members)) {
    return false;
  }
  if (!members.length) {
    return '';
  }

  let team = [];
  
  for (let i = 0; i < members.length; i++) {
    if (typeof(members[i]) == 'string') {
      team.push(members[i].trim().charAt(0).toUpperCase());
    }
  }
  return team.sort().join('');
};