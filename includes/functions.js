function addBrowserName(browser) {
    return `CASE
          WHEN ${browser} = "Edge" OR lower(${browser}) LIKE "%chromium%" OR lower(${browser}) LIKE "%edge_chrome%" THEN "edge chromium"
          WHEN lower(${browser}) LIKE '%chrome%' THEN 'chrome'
          WHEN lower(${browser}) LIKE '%safari%' THEN 'safari'
          WHEN lower(${browser}) LIKE '%firefox%' or lower(${browser}) LIKE '%mozilla%' THEN 'firefox'
          WHEN lower(${browser}) LIKE '%apple mail%' THEN 'apple mail'
          WHEN lower(${browser}) LIKE '%ie%' or lower(${browser}) LIKE '%explorer%' THEN 'internet explorer'
          WHEN lower(${browser}) LIKE '%opera%' THEN 'opera'
          WHEN ${browser} = 'Edge' or  lower(${browser}) LIKE '%chromium%' THEN 'edge chromium'
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



function STReplace(ngn) {
    return `CASE WHEN INSTR(${ngn}, '&n=', 1, 1) = 0 AND INSTR(${ngn}, '&N=', 1, 1) <> 0 THEN REPLACE(${ngn}, '&N=', '&n=')
                WHEN INSTR(${ngn}, '&n=', 1, 1) = 0 AND INSTR(${ngn}, '&sid=', 1, 1) <> 0 THEN REPLACE(${ngn}, '&sid=', '&n=')
                WHEN INSTR(${ngn}, '&n=', 1, 1) = 0 AND INSTR(${ngn}, 'chname=', 1, 1) <>0 THEN REPLACE(${ngn}, 'chname=', '&n=')
                WHEN INSTR(${ngn}, '&n=', 1, 1) = 0 AND INSTR(${ngn}, 'subid=', 1, 1) <> 0 THEN REPLACE(${ngn}, 'subid=', '&n=')
                WHEN INSTR(${ngn}, '&n=', 1, 1) = 0 AND INSTR(${ngn}, 'sub=', 1, 1) <> 0 THEN REPLACE(${ngn}, 'sub=', '&n=')
                WHEN INSTR(${ngn}, '&n=', 1, 1) = 0 AND INSTR(${ngn}, 'segment=', 1, 1) <> 0 THEN REPLACE(${ngn}, 'segment=', '&n=')
                WHEN INSTR(${ngn}, '&n=', 1, 1) = 0 AND INSTR(${ngn}, 'chnm3=', 1, 1) <> 0 THEN REPLACE(${ngn}, 'chnm3=', '&n=') -- skenzo
                WHEN INSTR(${ngn}, 'campaign_id=', 1, 1) <> 0 AND INSTR(${ngn}, '&pub_id', 1, 1) <> 0 THEN REPLACE(REPLACE(${ngn}, 'campaign_id=', '&n='),'&pub_id','&q=') -- advertiv
            ELSE ngn END`;
}

module.exports = {
    STReplace
};

function FeedReplace(ngn) {
    return `CASE 
       WHEN INSTR(${ngn}, 'gd=', 1, 1) = 0 AND INSTR(${ngn}, 'CTID=', 1, 1) <> 0 THEN REPLACE(${ngn}, 'CTID=', 'gd=')
       ELSE ${ngn} END`;
}

module.exports = {
    FeedReplace
};
