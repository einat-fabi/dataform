function addBrowserName(browser) {
    return `CASE
          WHEN ${browser} = "Edge" OR lower(${browser}) LIKE "%chromium%" OR lower(${browser}) LIKE "%edge_chrome%" THEN "edge chromium"
          WHEN lower(${browser}) LIKE '%chrome%' THEN 'chrome'
          WHEN lower(${browser}) LIKE '%safari%' THEN 'safari'
          WHEN lower(${browser}) LIKE '%firefox%' or lower(${browser}) LIKE '%mozilla%' THEN 'firefox'
          WHEN lower(${browser}) LIKE '%apple mail%' THEN 'apple mail'
          WHEN lower(${browser}) LIKE '%ie%' or lower(${browser}) LIKE '%explorer%' THEN 'internet explorer'
          WHEN lower(${browser}) LIKE '%opera%' THEN 'opera'
          WHEN lower(${browser}) = 'edge' or  lower(${browser}) LIKE '%chromium%' THEN 'edge chromium'
          WHEN lower(${browser}) LIKE '%edge%' THEN 'edge'
          WHEN lower(${browser}) LIKE '%yandex%' THEN 'yandex'
          WHEN lower(${browser}) LIKE '%jakarta%' THEN 'jakarta'
          WHEN lower(${browser}) is null or lower(${browser}) LIKE '%unknown%' THEN 'unknown'
          WHEN lower(${browser}) LIKE '%vivaldi%' THEN 'vivaldi'
          WHEN lower(${browser}) LIKE '%proximic%' THEN 'proximic'
          WHEN lower(${browser}) LIKE '%curl%' THEN 'curl'
          ELSE "other" END`;
}

module.exports = {
    addBrowserName
};