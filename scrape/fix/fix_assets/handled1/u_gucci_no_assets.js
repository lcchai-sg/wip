const u = [
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-men/diamantissima-watch-27mm-p-602512J6A708504",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-men/doraemon-x-gucci-dive-watch-40mm-p-656359ICTA08740",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-men/g-chrono-watch-44mm-p-367375I18A08769",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-men/g-chrono-watch-44mm-p-393106I16001402",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-men/g-timeless-watch-38mm-p-529710I18A08489",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-men/g-timeless-watch-38mm-p-529710I18A08489?position=30&listName=ProductGrid&categoryPath=Jewelry-Watches/Watches/Watches-For-Men",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-men/g-timeless-watch-38mm-p-530236I16001402",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-men/g-timeless-watch-38mm-p-530236I16001402?position=12&listName=ProductGrid&categoryPath=Jewelry-Watches/Watches/Watches-For-Men",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-men/g-timeless-watch-38mm-p-530237I86008486",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-men/g-timeless-watch-38mm-p-530237I86008486?position=13&listName=ProductGrid&categoryPath=Jewelry-Watches/Watches/Watches-For-Men",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-men/g-timeless-watch-38mm-p-584145I16008561",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-men/g-timeless-watch-38mm-p-584145I16008561?position=29&listName=ProductGrid&categoryPath=Jewelry-Watches/Watches/Watches-For-Men",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-men/g-timeless-watch-38mm-p-609936I16008489",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-men/g-timeless-watch-38mm-p-609936I16008489?position=21&listName=ProductGrid&categoryPath=Jewelry-Watches/Watches/Watches-For-Men",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-men/g-timeless-watch-38mm-p-632100I18G08494",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-men/g-timeless-watch-38mm-p-632180I86P08494",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-men/g-timeless-watch-38mm-p-632181I86A08494",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-men/g-timeless-watch-40mm-p-559773I18G08605",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-men/g-timeless-watch-40mm-p-559773I18G08605?position=36&listName=ProductGrid&categoryPath=Jewelry-Watches/Watches/Watches-For-Men",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-men/g-timeless-watch-42mm-p-584164I16008460",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-men/g-timeless-watch-42mm-p-584164I16008460?position=32&listName=ProductGrid&categoryPath=Jewelry-Watches/Watches/Watches-For-Men",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-men/gg-multicolor-g-timeless-watch-38mm-p-663951I18I08521",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-men/gg2570-watch-41mm-p-445816I16001402",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-men/gg2570-watch-41mm-p-446008I18208461",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-men/gg2570-watch-41mm-p-446009I18208652",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-men/grip-38-mm-p-652698I16008605",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-men/grip-watch-38-mm-p-652698I16008605",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-men/grip-watch-38mm-p-632061I86001000",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-men/grip-watch-40-mm-p-652711I18206421",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-men/grip-watch-40mm-p-609924I16X08489",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-men/grip-watch-40mm-p-610033I16001108",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-men/gucci-dive-watch-40mm-p-632064I16X08504",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-men/gucci-dive-watch-40mm-p-632996I16008489",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-men/gucci-dive-watch-40mm-p-633001I16X01000",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-men/gucci-dive-watch-45mm-p-559810I16001402",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-men/gucci-dive-watch-45mm-p-559810I16001402?position=20&listName=ProductGrid&categoryPath=Jewelry-Watches/Watches/Watches-For-Men",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-men/gucci-dive-watch-45mm-p-559817I86108757",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-men/gucci-dive-watch-45mm-p-559817I86108757?position=16&listName=ProductGrid&categoryPath=Jewelry-Watches/Watches/Watches-For-Men",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-men/gucci-dive-watch-45mm-p-561680I18208652",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-women/diamantissima-watch-27mm-p-404233I86E08646",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-women/diamantissima-watch-27mm-p-602518IBAA08462",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-women/diamantissima-watch-32mm-p-404243I86E08646",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-women/diamantissima-watch-32mm-p-602494IBAA08462",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-women/disney-x-gucci-donald-duck-g-timeless-contemporary-38-mm-p-652707ICSA08521",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-women/doraemon-x-gucci-dive-watch-40mm-p-656375ICSA08740",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-women/g-frame-watch-21x34mm-p-559662J6A708652",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-women/g-frame-watch-21x34mm-p-602737IATA09786",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-women/g-timeless-iconic-27-mm-p-652712I16F08489",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-women/g-timeless-iconic-38-mm-p-652720J6A708561",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-women/g-timeless-watch-27mm-p-530242I16001402",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-women/g-timeless-watch-27mm-p-530242I16001402?position=13&listName=ProductGrid&categoryPath=Jewelry-Watches/Watches/Watches-For-Women",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-women/g-timeless-watch-27mm-p-530243I86008486",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-women/g-timeless-watch-27mm-p-530243I86008486?position=14&listName=ProductGrid&categoryPath=Jewelry-Watches/Watches/Watches-For-Women",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-women/g-timeless-watch-27mm-p-561451I16001402",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-women/g-timeless-watch-27mm-p-561451I16001402?position=15&listName=ProductGrid&categoryPath=Jewelry-Watches/Watches/Watches-For-Women",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-women/g-timeless-watch-27mm-p-609961J6A708591",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-women/g-timeless-watch-27mm-p-609961J6A708591?position=16&listName=ProductGrid&categoryPath=Jewelry-Watches/Watches/Watches-For-Women",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-women/g-timeless-watch-29mm-p-632111I18W08761",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-women/g-timeless-watch-29mm-p-632115I16001402",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-women/g-timeless-watch-29mm-p-632119I86009812",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-women/g-timeless-watch-29mm-p-632120I86A09730",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-women/g-timeless-watch-29mm-p-632794I86A01000",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-women/g-timeless-watch-36mm-p-632116I16001402",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-women/g-timeless-watch-38mm-p-561241I18A08606",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-women/g-timeless-watch-38mm-p-561365I16008489",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-women/g-timeless-watch-38mm-p-561365I16008489?position=12&listName=ProductGrid&categoryPath=Jewelry-Watches/Watches/Watches-For-Women",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-women/g-timeless-watch-38mm-p-561365I16008489?position=14&listName=ProductGrid&categoryPath=Jewelry-Watches/Watches/Watches-For-Men",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-women/g-timeless-watch-38mm-p-561372IAMB08759",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-women/g-timeless-watch-38mm-p-561378I86Q09786",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-women/g-timeless-watch-38mm-p-561378I86Q09786?position=18&listName=ProductGrid&categoryPath=Jewelry-Watches/Watches/Watches-For-Women",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-women/g-timeless-watch-38mm-p-561389I86Q09786",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-women/g-timeless-watch-38mm-p-584144IAKA08605",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-women/g-timeless-watch-38mm-p-584150I16008606",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-women/g-timeless-watch-38mm-p-584150I16008606?position=11&listName=ProductGrid&categoryPath=Jewelry-Watches/Watches/Watches-For-Men",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-women/g-timeless-watch-38mm-p-584150I16008606?position=11&listName=ProductGrid&categoryPath=Jewelry-Watches/Watches/Watches-For-Women",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-women/g-timeless-watch-38mm-p-584154I86A08505",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-women/g-timeless-watch-38mm-p-584154I86A08505?position=25&listName=ProductGrid&categoryPath=Jewelry-Watches/Watches/Watches-For-Women",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-women/g-timeless-watch-38mm-p-584156I16008489",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-women/g-timeless-watch-38mm-p-584157I86008155",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-women/g-timeless-watch-38mm-p-632094I18208494",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-women/g-timeless-watch-40mm-p-559787I86A08759",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-women/g-timeless-watch-40mm-p-559787I86A08759?position=21&listName=ProductGrid&categoryPath=Jewelry-Watches/Watches/Watches-For-Women",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-women/g-timeless-watch-40mm-p-609929I16008489",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-women/g-timeless-watch-40mm-p-609966I16001108",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-women/g-timeless-watch-40mm-p-609966I16001108?position=9&listName=ProductGrid&categoryPath=Jewelry-Watches/Watches/Watches-For-Women",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-women/g-timeless-watch-40mm-p-632044I86008155",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-women/g-timeless-watch-42mm-p-584170I18G08489",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-women/gg-multicolor-g-timeless-watch-38mm-p-663950I18I08521",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-women/gg2570-watch-29mm-p-446093I16001402",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-women/gg2570-watch-29mm-p-446096I16001402",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-women/grip-watch-27-mm-p-652722I16008504",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-women/grip-watch-27-mm-p-652728I86008740",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-women/grip-watch-35-mm-p-652697I86008872",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-women/grip-watch-35mm-p-584267I16008504",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-women/grip-watch-35mm-p-584267I16008504?position=1&listName=ProductGrid&categoryPath=Jewelry-Watches/Watches/Watches-For-Men",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-women/grip-watch-35mm-p-584267I16008504?position=1&listName=ProductGrid&categoryPath=Jewelry-Watches/Watches/Watches-For-Women",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-women/grip-watch-35mm-p-584271ICBA08576",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-women/grip-watch-35mm-p-584271ICBA08576?position=6&listName=ProductGrid&categoryPath=Jewelry-Watches/Watches/Watches-For-Men",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-women/grip-watch-35mm-p-584271ICBA08576?position=6&listName=ProductGrid&categoryPath=Jewelry-Watches/Watches/Watches-For-Women",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-women/grip-watch-35mm-p-584272I86008740",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-women/grip-watch-35mm-p-584272I86008740?position=2&listName=ProductGrid&categoryPath=Jewelry-Watches/Watches/Watches-For-Men",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-women/grip-watch-35mm-p-584272I86008740?position=2&listName=ProductGrid&categoryPath=Jewelry-Watches/Watches/Watches-For-Women",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-women/grip-watch-35mm-p-584275I18V08508",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-women/grip-watch-35mm-p-584275I18V08508?position=5&listName=ProductGrid&categoryPath=Jewelry-Watches/Watches/Watches-For-Men",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-women/grip-watch-35mm-p-584275I18V08508?position=5&listName=ProductGrid&categoryPath=Jewelry-Watches/Watches/Watches-For-Women",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-women/grip-watch-38-mm-p-652696I16008489",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-women/grip-watch-38mm-p-596509I86008740",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-women/grip-watch-38mm-p-596509I86008740?position=3&listName=ProductGrid&categoryPath=Jewelry-Watches/Watches/Watches-For-Men",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-women/grip-watch-38mm-p-596509I86008740?position=3&listName=ProductGrid&categoryPath=Jewelry-Watches/Watches/Watches-For-Women",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-women/grip-watch-38mm-p-596512I16008504",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-women/grip-watch-38mm-p-596512I16008504?position=4&listName=ProductGrid&categoryPath=Jewelry-Watches/Watches/Watches-For-Men",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-women/grip-watch-38mm-p-596512I16008504?position=4&listName=ProductGrid&categoryPath=Jewelry-Watches/Watches/Watches-For-Women",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-women/grip-watch-38mm-p-596517ICBA08576",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-women/grip-watch-38mm-p-596517ICBA08576?position=7&listName=ProductGrid&categoryPath=Jewelry-Watches/Watches/Watches-For-Men",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-women/grip-watch-38mm-p-596517ICBA08576?position=7&listName=ProductGrid&categoryPath=Jewelry-Watches/Watches/Watches-For-Women",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-women/grip-watch-38mm-p-596518I18V08508",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-women/grip-watch-38mm-p-596518I18V08508?position=8&listName=ProductGrid&categoryPath=Jewelry-Watches/Watches/Watches-For-Men",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-women/grip-watch-38mm-p-596518I18V08508?position=8&listName=ProductGrid&categoryPath=Jewelry-Watches/Watches/Watches-For-Women",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-women/grip-watch-38mm-p-609930I18G08608",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-women/gucci-dive-watch-40mm-p-559818I16X08489",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-women/gucci-dive-watch-40mm-p-559821I86108504",
    "https://www.gucci.com/us/en/pr/jewelry-watches/watches/watches-for-women/le-marche-des-merveilles-watch-38mm-p-561241I18A08606?position=27&listName=ProductGrid&categoryPath=Jewelry-Watches/Watches/Watches-For-Men",
];

module.exports = u;