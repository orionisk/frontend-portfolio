const focusfix = function (event) {
  this.$nextTick(() => {
    // console.log(this.instance?.popper.id);
    if (event.relatedTarget && !this.instance?.popper.contains(event.relatedTarget)) {
      this.instance?.hide();
    }
  });
};

export const tippyFocusfix = [
  'tippyFocusfix',
  () => ({
    focusfix
  })
];

export const tippySubmenu = [
  'tippySubmenu',
  (offset = [0, 10], params = {}) => {
    const opts = {
      preventOverflow: true,
      boundary: 'clippingParents',
      rootBoundary: 'viewport',
      flip: true,
      ...params
    };
    const { preventOverflow, rootBoundary, boundary, flip } = opts;
    return {
      instance: null,
      get tooltip() {
        return {
          content: this.$el.nextSibling.innerHTML,
          appendTo: 'parent',
          triggerTarget: this.$el.previousElementSibling,
          onMount: i => (this.instance = i),
          offset,
          popperOptions: {
            modifiers: [
              {
                name: 'preventOverflow',
                enabled: preventOverflow,
                options: {
                  padding: 0,
                  mainAxis: false
                }
              },
              {
                name: 'flip',
                enabled: flip,
                options: {
                  fallbackPlacements: ['bottom-start'],
                  rootBoundary,
                  boundary
                }
              }
            ]
          }
        };
      }
    };
  }
];

export const tippyMenu = [
  'tippyMenu',
  () => ({
    instance: null,
    get tooltip() {
      return {
        content: this.$el.nextElementSibling.innerHTML,
        appendTo: 'parent',
        onMount: i => (this.instance = i),
        popperOptions: {
          modifiers: [
            {
              name: 'preventOverflow',
              options: {
                padding: 0,
                tether: false
              }
            },
            {
              name: 'flip',
              options: {
                fallbackPlacements: []
              }
            }
          ]
        }
      };
    }
  })
];
