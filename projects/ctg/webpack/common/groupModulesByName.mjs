let groupName = '';

export default (name, version, expectedName) => {
  const vName = `${name}_${version}`;
  if (!groupName) groupName = expectedName;
  if (name === expectedName) groupName = vName;
  return groupName;
};
