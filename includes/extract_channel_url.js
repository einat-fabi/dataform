
function ReplaceStr(ngn) {
    return `CASE WHEN INSTR(${ngn}, '&n=', 1, 1) = 0 AND INSTR(${ngn}, '&N=', 1, 1) <> 0 THEN REPLACE(${ngn}, '&N=', '&n=')
                WHEN INSTR(${ngn}, '&n=', 1, 1) = 0 AND INSTR(${ngn}, '&sid=', 1, 1) <> 0 THEN REPLACE(${ngn}, '&sid=', '&n=')
                WHEN INSTR(${ngn}, '&n=', 1, 1) = 0 AND INSTR(${ngn}, 'chname=', 1, 1) <>0 THEN REPLACE(${ngn}, 'chname=', '&n=')
                WHEN INSTR(${ngn}, '&n=', 1, 1) = 0 AND INSTR(${ngn}, 'subid=', 1, 1) <> 0 THEN REPLACE(${ngn}, 'subid=', '&n=')
                WHEN INSTR(${ngn}, '&n=', 1, 1) = 0 AND INSTR(${ngn}, 'sub=', 1, 1) <> 0 THEN REPLACE(${ngn}, 'sub=', '&n=')
                WHEN INSTR(${ngn}, '&n=', 1, 1) = 0 AND INSTR(${ngn}, 'segment=', 1, 1) <> 0 THEN REPLACE(${ngn}, 'segment=', '&n=')
                WHEN INSTR(${ngn}, '&n=', 1, 1) = 0 AND INSTR(${ngn}, 'chnm3=', 1, 1) <> 0 THEN REPLACE(${ngn}, 'chnm3=', '&n=') -- skenzo
                WHEN INSTR(${ngn}, 'campaign_id=', 1, 1) <> 0 AND INSTR(${ngn}, '&pub_id', 1, 1) <> 0 THEN REPLACE(REPLACE(${ngn}, 'campaign_id=', '&n='),'&pub_id','&q=') -- advertiv
            ELSE ${ngn} END`;
}

module.exports = {
    ReplaceStr
};

