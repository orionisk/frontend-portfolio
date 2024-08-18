const { createPopper } = await import(
  /* webpackChunkName: "npm/popper_2.11.6" */
  '@popperjs/core'
);

export const addPopperForTooltips = (handles, tooltips, boundary, options) => {
  let instances = [];
  const pOptions = options ?? {
    placement: 'bottom',
    modifiers: [
      {
        name: 'preventOverflow',
        options: {
          boundary
        }
      },
      {
        name: 'flip',
        enabled: false
      }
    ]
  };

  if (Array.isArray(handles)) {
    for (let i = 0; i < handles.length; i++) {
      const instance = createPopper(handles[i], tooltips[i], pOptions);
      instances.push(instance);
    }
    return instances;
  } else return createPopper(handles, tooltips, pOptions);
};
