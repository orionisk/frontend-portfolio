const tabsMap = (tabsButtons, tabsContents) =>
  new Map([...tabsButtons].map((tabBtn, i) => [tabBtn, tabsContents[i]]));

const initTabs = (containerCn, buttonsCn, contentsCn, event) => {
  const tabsContainers = document.querySelectorAll(containerCn);
  tabsContainers.forEach(container => {
    const tabsButtons = container.querySelectorAll(buttonsCn);
    const tabsContent = container.querySelectorAll(contentsCn);
    const tabs = tabsMap(tabsButtons, tabsContent);
    tabs.forEach(event);
  });
};

const clearActive = tabs =>
  tabs.forEach((content, btn) => {
    content?.classList.remove('active');
    btn.classList.remove('active');
  });

const tabEvent = (content, btn, tabs) =>
  btn.addEventListener('click', () => {
    clearActive(tabs);
    btn.classList.add('active');
    content?.classList.add('active');
  });

const togglableTabsEvent = (content, btn, tabs) =>
  btn.addEventListener('click', e => {
    e.stopPropagation();
    if (!btn.classList.contains('active')) {
      clearActive(tabs);
      btn.classList.add('active');
      content?.classList.add('active');
    } else {
      btn.classList.remove('active');
      content?.classList.remove('active');
    }
  });

const createClickAwayEvent = (containerCn, buttonsCn, contentsCn) => {
  const tabsContainers = document.querySelectorAll(containerCn);

  window.addEventListener('click', e => {
    if (e.target.closest(contentsCn)) return;

    tabsContainers.forEach(container => {
      const tabsButtons = container.querySelectorAll(buttonsCn);
      const tabsContent = container.querySelectorAll(contentsCn);

      tabsButtons.forEach(btn => btn.classList.remove('active'));
      tabsContent.forEach(btn => btn.classList.remove('active'));
    });
  });
};

export const createTabs = (containerCn, buttonsCn, contentsCn) => {
  initTabs(containerCn, buttonsCn, contentsCn, tabEvent);
};

export const createFilterTabs = (containerCn, buttonsCn, contentsCn) => {
  createClickAwayEvent(containerCn, buttonsCn, contentsCn);
  initTabs(containerCn, buttonsCn, contentsCn, togglableTabsEvent);
};
