

function FeedReplace(a) {
    return `CASE 
       WHEN INSTR(${a}, 'gd=', 1, 1) = 0 AND INSTR(${a}, 'CTID=', 1, 1) <> 0 THEN REPLACE(${a}, 'CTID=', 'gd=')
       ELSE ${a} END`;
}

module.exports = {
    FeedReplace
};