let groupName = '';

module.exports = (name, version, expectedName, rgx) => {
  const vName = `${name}_${version}`;
  if (!groupName) groupName = expectedName;
  if (name === expectedName) groupName = vName;
  return rgx.test(name) ? groupName || vName : vName;
};
