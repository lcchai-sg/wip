const u = [
    "https://www.swissarmy.com/us/en/Products/Watches/Business-Watches/Alliance-Mechanical/p/241869",
    "https://www.swissarmy.com/us/en/Products/Watches/Business-Watches/Alliance-Mechanical/p/241871",
    "https://www.swissarmy.com/us/en/Products/Watches/Business-Watches/Alliance-Mechanical/p/241874",
    "https://www.swissarmy.com/us/en/Products/Watches/Business-Watches/Alliance-Mechanical/p/241898",
    "https://www.swissarmy.com/us/en/Products/Watches/Business-Watches/Alliance/p/241763.1",
    "https://www.swissarmy.com/us/en/Products/Watches/Business-Watches/FieldForce-Classic-Chrono/p/241899",
    "https://www.swissarmy.com/us/en/Products/Watches/Business-Watches/FieldForce-Classic-Chrono/p/241900",
    "https://www.swissarmy.com/us/en/Products/Watches/Business-Watches/FieldForce-Classic-Chrono/p/241901",
    "https://www.swissarmy.com/us/en/Products/Watches/Business-Watches/FieldForce-Classic-Chrono/p/241902",
    "https://www.swissarmy.com/us/en/Products/Watches/Business-Watches/FieldForce-Classic-Chrono/p/241903",
    "https://www.swissarmy.com/us/en/Products/Watches/Business-Watches/FieldForce-Classic-Chrono/p/241928",
    "https://www.swissarmy.com/us/en/Products/Watches/Business-Watches/FieldForce-Classic-Chrono/p/241929",
    "https://www.swissarmy.com/us/en/Products/Watches/Business-Watches/FieldForce-Sport-Chrono/p/241889",
    "https://www.swissarmy.com/us/en/Products/Watches/Business-Watches/FieldForce-Sport-Chrono/p/241890",
    "https://www.swissarmy.com/us/en/Products/Watches/Business-Watches/FieldForce-Sport-Chrono/p/241891",
    "https://www.swissarmy.com/us/en/Products/Watches/Business-Watches/FieldForce-Sport-Chrono/p/241892",
    "https://www.swissarmy.com/us/en/Products/Watches/Business-Watches/FieldForce-Sport-Chrono/p/241893",
    "https://www.swissarmy.com/us/en/Products/Watches/Business-Watches/FieldForce-Sport-Chrono/p/241897",
    "https://www.swissarmy.com/us/en/Products/Watches/Business-Watches/FieldForce-Sport-Chrono/p/241926.1",
    "https://www.swissarmy.com/us/en/Products/Watches/Business-Watches/FieldForce-Sport-Chrono/p/249163.1",
    "https://www.swissarmy.com/us/en/Products/Watches/Diving-Watches/INOX-Professional-Diver-/p/241781",
    "https://www.swissarmy.com/us/en/Products/Watches/Diving-Watches/INOX-Professional-Diver-/p/241782",
    "https://www.swissarmy.com/us/en/Products/Watches/Diving-Watches/Maverick-Chronograph/p/241864",
    "https://www.swissarmy.com/us/en/Products/Watches/Diving-Watches/Maverick-Chronograph/p/241865",
    "https://www.swissarmy.com/us/en/Products/Watches/Diving-Watches/Maverick/p/241862",
    "https://www.swissarmy.com/us/en/Products/Watches/Diving-Watches/Maverick/p/241863",
    "https://www.swissarmy.com/us/en/Products/Watches/Mechanical-Watches/INOX-Mechanical/p/241834",
    "https://www.swissarmy.com/us/en/Products/Watches/Mechanical-Watches/INOX-Mechanical/p/241835",
    "https://www.swissarmy.com/us/en/Products/Watches/Mechanical-Watches/INOX-Mechanical/p/241836",
    "https://www.swissarmy.com/us/en/Products/Watches/Mechanical-Watches/INOX-Mechanical/p/241837",
    "https://www.swissarmy.com/us/en/Products/Watches/Men%27s-Watches/AirBoss-Mechanical-Chronograph/p/241710",
    "https://www.swissarmy.com/us/en/Products/Watches/Men%27s-Watches/AirBoss-Mechanical-Chronograph/p/241716",
    "https://www.swissarmy.com/us/en/Products/Watches/Men%27s-Watches/AirBoss-Mechanical-Chronograph/p/241722",
    "https://www.swissarmy.com/us/en/Products/Watches/Men%27s-Watches/AirBoss-Mechanical-Chronograph/p/241742",
    "https://www.swissarmy.com/us/en/Products/Watches/Men%27s-Watches/AirBoss-Mechanical-Chronograph/p/241795",
    "https://www.swissarmy.com/us/en/Products/Watches/Men%27s-Watches/AirBoss-Mechanical/p/241507",
    "https://www.swissarmy.com/us/en/Products/Watches/Men%27s-Watches/AirBoss-Mechanical/p/241740",
    "https://www.swissarmy.com/us/en/Products/Watches/Men%27s-Watches/AirBoss-Mechanical/p/241820",
    "https://www.swissarmy.com/us/en/Products/Watches/Men%27s-Watches/AirBoss-Mechanical/p/241821",
    "https://www.swissarmy.com/us/en/Products/Watches/Men%27s-Watches/Alliance-Chronograph-44-mm/p/241745.1",
    "https://www.swissarmy.com/us/en/Products/Watches/Men%27s-Watches/Alliance-XS/p/241838",
    "https://www.swissarmy.com/us/en/Products/Watches/Men%27s-Watches/Alliance-XS/p/241839",
    "https://www.swissarmy.com/us/en/Products/Watches/Men%27s-Watches/Alliance-XS/p/241840",
    "https://www.swissarmy.com/us/en/Products/Watches/Men%27s-Watches/Alliance-XS/p/241841",
    "https://www.swissarmy.com/us/en/Products/Watches/Men%27s-Watches/Alliance-XS/p/241842",
    "https://www.swissarmy.com/us/en/Products/Watches/Men%27s-Watches/Alliance-XS/p/241915",
    "https://www.swissarmy.com/us/en/Products/Watches/Men%27s-Watches/Alliance-XS/p/241916",
    "https://www.swissarmy.com/us/en/Products/Watches/Men%27s-Watches/Alliance-XS/p/241917",
    "https://www.swissarmy.com/us/en/Products/Watches/Men%27s-Watches/Alliance/p/241822",
    "https://www.swissarmy.com/us/en/Products/Watches/Men%27s-Watches/Alliance/p/241904",
    "https://www.swissarmy.com/us/en/Products/Watches/Men%27s-Watches/Alliance/p/241904.1",
    "https://www.swissarmy.com/us/en/Products/Watches/Men%27s-Watches/Alliance/p/241905",
    "https://www.swissarmy.com/us/en/Products/Watches/Men%27s-Watches/Alliance/p/241906",
    "https://www.swissarmy.com/us/en/Products/Watches/Men%27s-Watches/Alliance/p/241907",
    "https://www.swissarmy.com/us/en/Products/Watches/Men%27s-Watches/Alliance/p/241908",
    "https://www.swissarmy.com/us/en/Products/Watches/Men%27s-Watches/Alliance/p/241909",
    "https://www.swissarmy.com/us/en/Products/Watches/Men%27s-Watches/Alliance/p/241910",
    "https://www.swissarmy.com/us/en/Products/Watches/Men%27s-Watches/Alliance/p/241910.1",
    "https://www.swissarmy.com/us/en/Products/Watches/Men%27s-Watches/Alliance/p/241911",
    "https://www.swissarmy.com/us/en/Products/Watches/Men%27s-Watches/Alliance/p/241912",
    "https://www.swissarmy.com/us/en/Products/Watches/Men%27s-Watches/Alliance/p/241913",
    "https://www.swissarmy.com/us/en/Products/Watches/Men%27s-Watches/Fieldforce-Chrono/p/241852",
    "https://www.swissarmy.com/us/en/Products/Watches/Men%27s-Watches/Fieldforce-Chrono/p/241853",
    "https://www.swissarmy.com/us/en/Products/Watches/Men%27s-Watches/Fieldforce-Chrono/p/241854",
    "https://www.swissarmy.com/us/en/Products/Watches/Men%27s-Watches/Fieldforce-Chrono/p/241855",
    "https://www.swissarmy.com/us/en/Products/Watches/Men%27s-Watches/Fieldforce-Chrono/p/241856",
    "https://www.swissarmy.com/us/en/Products/Watches/Men%27s-Watches/Fieldforce-Chrono/p/241857",
    "https://www.swissarmy.com/us/en/Products/Watches/Men%27s-Watches/Fieldforce/p/241846",
    "https://www.swissarmy.com/us/en/Products/Watches/Men%27s-Watches/Fieldforce/p/241847",
    "https://www.swissarmy.com/us/en/Products/Watches/Men%27s-Watches/Fieldforce/p/241848",
    "https://www.swissarmy.com/us/en/Products/Watches/Men%27s-Watches/Fieldforce/p/241849",
    "https://www.swissarmy.com/us/en/Products/Watches/Men%27s-Watches/Fieldforce/p/241850",
    "https://www.swissarmy.com/us/en/Products/Watches/Men%27s-Watches/Fieldforce/p/241851",
    "https://www.swissarmy.com/us/en/Products/Watches/Men%27s-Watches/Fieldforce/p/241895",
    "https://www.swissarmy.com/us/en/Products/Watches/Men%27s-Watches/Fieldforce/p/241896",
    "https://www.swissarmy.com/us/en/Products/Watches/Men%27s-Watches/Fieldforce/p/249168",
    "https://www.swissarmy.com/us/en/Products/Watches/Men%27s-Watches/INOX-Carbon-Limited-Edition/p/241927.1",
    "https://www.swissarmy.com/us/en/Products/Watches/Men%27s-Watches/INOX-Carbon-Mechanical/p/241866.1",
    "https://www.swissarmy.com/us/en/Products/Watches/Men%27s-Watches/INOX-Professional-Diver/p/241733",
    "https://www.swissarmy.com/us/en/Products/Watches/Men%27s-Watches/INOX-Professional-Diver/p/241734",
    "https://www.swissarmy.com/us/en/Products/Watches/Men%27s-Watches/INOX-Professional-Diver/p/241736",
    "https://www.swissarmy.com/us/en/Products/Watches/Men%27s-Watches/INOX-Professional-Diver/p/241810",
    "https://www.swissarmy.com/us/en/Products/Watches/Men%27s-Watches/INOX-Professional-Diver/p/241811",
    "https://www.swissarmy.com/us/en/Products/Watches/Men%27s-Watches/INOX-Professional-Diver/p/241812",
    "https://www.swissarmy.com/us/en/Products/Watches/Men%27s-Watches/INOX-Professional-Diver/p/241813",
    "https://www.swissarmy.com/us/en/Products/Watches/Men%27s-Watches/INOX-Professional-Diver/p/241843",
    "https://www.swissarmy.com/us/en/Products/Watches/Men%27s-Watches/INOX-Professional-Diver/p/241844",
    "https://www.swissarmy.com/us/en/Products/Watches/Men%27s-Watches/INOX-Professional-Diver/p/241845",
    "https://www.swissarmy.com/us/en/Products/Watches/Men%27s-Watches/INOX-Titanium/p/241758",
    "https://www.swissarmy.com/us/en/Products/Watches/Men%27s-Watches/INOX-Titanium/p/241883",
    "https://www.swissarmy.com/us/en/Products/Watches/Men%27s-Watches/INOX/p/241682.1",
    "https://www.swissarmy.com/us/en/Products/Watches/Men%27s-Watches/INOX/p/241688.1",
    "https://www.swissarmy.com/us/en/Products/Watches/Men%27s-Watches/INOX/p/241719.1",
    "https://www.swissarmy.com/us/en/Products/Watches/Men%27s-Watches/INOX/p/241723.1",
    "https://www.swissarmy.com/us/en/Products/Watches/Men%27s-Watches/INOX/p/241726",
    "https://www.swissarmy.com/us/en/Products/Watches/Men%27s-Watches/INOX/p/241727",
    "https://www.swissarmy.com/us/en/Products/Watches/Men%27s-Watches/INOX/p/241744",
    "https://www.swissarmy.com/us/en/Products/Watches/Men%27s-Watches/INOX/p/241894",
    "https://www.swissarmy.com/us/en/Products/Watches/Men%27s-Watches/Maverick-Chronograph/p/241689",
    "https://www.swissarmy.com/us/en/Products/Watches/Men%27s-Watches/Maverick-Chronograph/p/241693",
    "https://www.swissarmy.com/us/en/Products/Watches/Men%27s-Watches/Maverick-Chronograph/p/241695",
    "https://www.swissarmy.com/us/en/Products/Watches/Men%27s-Watches/Maverick-Chronograph/p/241791",
    "https://www.swissarmy.com/us/en/Products/Watches/Men%27s-Watches/Maverick-Chronograph/p/241797",
    "https://www.swissarmy.com/us/en/Products/Watches/Men%27s-Watches/Maverick-Large/p/241602",
    "https://www.swissarmy.com/us/en/Products/Watches/Men%27s-Watches/Maverick-Large/p/241603",
    "https://www.swissarmy.com/us/en/Products/Watches/Men%27s-Watches/Maverick-Large/p/241605",
    "https://www.swissarmy.com/us/en/Products/Watches/Men%27s-Watches/Maverick-Large/p/241697",
    "https://www.swissarmy.com/us/en/Products/Watches/Men%27s-Watches/Maverick-Large/p/241698",
    "https://www.swissarmy.com/us/en/Products/Watches/Men%27s-Watches/Maverick-Large/p/241789",
    "https://www.swissarmy.com/us/en/Products/Watches/Men%27s-Watches/Maverick-Large/p/241798",
    "https://www.swissarmy.com/us/en/Products/Watches/Men%27s-Watches/Maverick-Large/p/241824",
    "https://www.swissarmy.com/us/en/Products/Watches/Men%27s-Watches/Maverick-Large/p/241884",
    "https://www.swissarmy.com/us/en/Products/Watches/Pilot-Watches/Airboss-Mechanical/p/241886",
    "https://www.swissarmy.com/us/en/Products/Watches/Pilot-Watches/Airboss-Mechanical/p/241887",
    "https://www.swissarmy.com/us/en/Products/Watches/Pilot-Watches/Airboss-Mechanical/p/241888",
    "https://www.swissarmy.com/us/en/Products/Watches/Pilot-Watches/INOX-Carbon/p/241859",
    "https://www.swissarmy.com/us/en/Products/Watches/Pilot-Watches/INOX-Carbon/p/241860",
    "https://www.swissarmy.com/us/en/Products/Watches/Pilot-Watches/INOX-Carbon/p/241861",
    "https://www.swissarmy.com/us/en/Products/Watches/Women%27s-Watches/Alliance-Small-35-mm/p/241827",
    "https://www.swissarmy.com/us/en/Products/Watches/Women%27s-Watches/Alliance-Small-35-mm/p/241828",
    "https://www.swissarmy.com/us/en/Products/Watches/Women%27s-Watches/Alliance-Small-35-mm/p/241829",
    "https://www.swissarmy.com/us/en/Products/Watches/Women%27s-Watches/Alliance-Small-35-mm/p/241830",
    "https://www.swissarmy.com/us/en/Products/Watches/Women%27s-Watches/Alliance-Small-35-mm/p/241831",
    "https://www.swissarmy.com/us/en/Products/Watches/Women%27s-Watches/Alliance-Small-35-mm/p/241832",
    "https://www.swissarmy.com/us/en/Products/Watches/Women%27s-Watches/Alliance-Small-35-mm/p/241833",
    "https://www.swissarmy.com/us/en/Products/Watches/Women%27s-Watches/Alliance-XS/p/241875",
    "https://www.swissarmy.com/us/en/Products/Watches/Women%27s-Watches/Alliance-XS/p/241876",
    "https://www.swissarmy.com/us/en/Products/Watches/Women%27s-Watches/Alliance-XS/p/241877",
    "https://www.swissarmy.com/us/en/Products/Watches/Women%27s-Watches/Alliance-XS/p/241878",
    "https://www.swissarmy.com/us/en/Products/Watches/Women%27s-Watches/Alliance-XS/p/241879",
    "https://www.swissarmy.com/us/en/Products/Watches/Women%27s-Watches/INOX-V/p/241768",
    "https://www.swissarmy.com/us/en/Products/Watches/Women%27s-Watches/INOX-V/p/241769",
    "https://www.swissarmy.com/us/en/Products/Watches/Women%27s-Watches/INOX-V/p/241770",
    "https://www.swissarmy.com/us/en/Products/Watches/Women%27s-Watches/INOX-V/p/241771",
    "https://www.swissarmy.com/us/en/Products/Watches/Women%27s-Watches/INOX-V/p/241807",
    "https://www.swissarmy.com/us/en/Products/Watches/Women%27s-Watches/INOX-V/p/241808",
    "https://www.swissarmy.com/us/en/Products/Watches/Women%27s-Watches/INOX-V/p/241880",
    "https://www.swissarmy.com/us/en/Products/Watches/Women%27s-Watches/INOX-V/p/241881",
    "https://www.swissarmy.com/us/en/Products/Watches/Women%27s-Watches/INOX-V/p/241918",
    "https://www.swissarmy.com/us/en/Products/Watches/Women%27s-Watches/INOX-V/p/241919",
    "https://www.swissarmy.com/us/en/Products/Watches/Women%27s-Watches/INOX-V/p/241920",
    "https://www.swissarmy.com/us/en/Products/Watches/Women%27s-Watches/INOX-V/p/241921",
    "https://www.swissarmy.com/us/en/Products/Watches/Women%27s-Watches/INOX-V/p/241954",
    "https://www.swissarmy.com/us/en/Products/Watches/Women%27s-Watches/INOX-V/p/241955",
    "https://www.swissarmy.com/us/en/Products/Watches/Women%27s-Watches/Maverick-Small/p/241609",
    "https://www.swissarmy.com/us/en/Products/Watches/Women%27s-Watches/Maverick-Small/p/241610",
    "https://www.swissarmy.com/us/en/Products/Watches/Women%27s-Watches/Maverick-Small/p/241612",
    "https://www.swissarmy.com/us/en/Products/Watches/Women%27s-Watches/Maverick-Small/p/241701",
    "https://www.swissarmy.com/us/en/Products/Watches/Women%27s-Watches/Maverick-Small/p/241790",
    "https://www.swissarmy.com/us/en/Products/c/Alliance-Sport-Chronograph/p/241819.1",
];

module.exports = u;