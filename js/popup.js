let createBookmark = document.getElementById("createBookmark");

createBookmark.addEventListener("click", async () => {
  const folderName = document.getElementById("folder");
  const date = new Date();
  const bookmark = await chrome.bookmarks.create({
    title: folderName.value || date.toISOString(),
  });

  let tabs = await chrome.tabs.query({ currentWindow: true });
  const tabsIds = [];

  for await (tab of tabs) {
    await chrome.bookmarks.create({
      parentId: bookmark.id,
      url: tab.url,
      title: tab.url,
    });

    tabsIds.push(tab.id);
  }
  chrome.tabs.remove(tabsIds);
});
