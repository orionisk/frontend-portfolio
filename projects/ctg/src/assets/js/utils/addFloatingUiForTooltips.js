const { autoUpdate, computePosition, shift, hide } = await import(
  /* webpackChunkName: "npm/floating-ui" */ '@floating-ui/dom'
);

const cleanupFn = (reference, floating, computeOptions, autoUpdateOptions) => {
  const update = async () => {
    const { x, y, middlewareData } = await computePosition(reference, floating, computeOptions);
    Object.assign(floating.style, {
      left: `${x}px`,
      top: `${y}px`
    });

    const referenceHidden = middlewareData?.hide?.referenceHidden;

    Object.assign(floating.style, {
      visibility: referenceHidden ? 'hidden' : 'visible'
    });
  };
  const cleanup = autoUpdate(reference, floating, update, autoUpdateOptions);

  return cleanup;
};

export const addFloatingUiForTooltips = (handles, tooltips, boundary) => {
  let instances = [];

  if (Array.isArray(handles)) {
    for (let i = 0; i < handles.length; i++) {
      const cleanup = cleanupFn(
        handles[i],
        tooltips[i],
        { middleware: [shift({ boundary }), hide()] },
        {
          animationFrame: true
        }
      );
      instances.push(cleanup);
    }
    return instances;
  } else
    return cleanupFn(
      handles,
      tooltips,
      { middleware: [shift({ boundary }), hide()] },
      {
        animationFrame: true
      }
    );
};
