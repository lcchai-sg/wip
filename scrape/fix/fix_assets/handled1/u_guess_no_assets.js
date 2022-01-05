const u = [
    "https://www.guess.com/us/en/men/accessories/watches/gold-tone/gold-tone-and-black-multifunction-watch-nocolor/GW0278G2-NC.html",
    "https://www.guess.com/us/en/men/accessories/watches/gold-tone/gold-tone-and-green-croc-watch-multiplecolors/GW0219G2-MULTI.html",
    "https://www.guess.com/us/en/men/accessories/watches/gold-tone/gold-tone-and-leather-multifunction-watch-multiplecolors/GW0262G2-MULTI.html",
    "https://www.guess.com/us/en/men/accessories/watches/gold-tone/gold-tone-croc-strap-analog-watch-multiplecolors/GW0250G2-MULTI.html",
    "https://www.guess.com/us/en/men/accessories/watches/gold-tone/gold-tone-mesh-diamond-analog-watch-multiplecolors/GW0248G2-MULTI.html",
    "https://www.guess.com/us/en/men/accessories/watches/gold-tone/gold-tone-multifunction-watch-multiplecolors/GW0260G2-MULTI.html",
    "https://www.guess.com/us/en/men/accessories/watches/gold-tone/gold-tone-rhinestone-multifunction-watch-multiplecolors/GW0261G2-MULTI.html",
    "https://www.guess.com/us/en/men/accessories/watches/gold-tone/two-tone-and-black-multifunction-watch-silver/U1107G6-SLV.html",
    "https://www.guess.com/us/en/men/accessories/watches/gold-tone/western-analog-watch-multiplecolors/GW0295G1-MULTI.html",
    "https://www.guess.com/us/en/men/accessories/watches/leather/black-diver-multifunction-watch-nocolor/GW0280G1-NC.html",
    "https://www.guess.com/us/en/men/accessories/watches/leather/black-leather-strap-analog-watch-multiplecolors/GW0251G2-MULTI.html",
    "https://www.guess.com/us/en/men/accessories/watches/leather/gold-tone-and-black-leather-strap-analog-watch-multiplecolors/GW0251G1-MULTI.html",
    "https://www.guess.com/us/en/men/accessories/watches/rose-gold-tone/coffee-tone-and-leather-multifunction-watch-multiplecolors/GW0262G3-MULTI.html",
    "https://www.guess.com/us/en/men/accessories/watches/rose-gold-tone/rose-gold-tone-and-blue-analog-watch-multiplecolors/GW0251G3-MULTI.html",
    "https://www.guess.com/us/en/men/accessories/watches/silver-tone/multi-tone-and-leather-multifunction-watch-multiplecolors/GW0262G1-MULTI.html",
    "https://www.guess.com/us/en/men/accessories/watches/silver-tone/silver-tone-and-denimanalog-watch-multiplecolors/GW0229G1-MULTI.html",
    "https://www.guess.com/us/en/men/accessories/watches/silver-tone/silver-tone-croc-strap-analog-watch-multiplecolors/GW0250G1-MULTI.html",
    "https://www.guess.com/us/en/men/accessories/watches/silver-tone/silver-tone-mesh-diamond-analog-watch-multiplecolors/GW0248G1-MULTI.html",
    "https://www.guess.com/us/en/men/accessories/watches/silver-tone/silver-tone-multifunction-watch-multiplecolors/GW0260G1-MULTI.html",
    "https://www.guess.com/us/en/men/accessories/watches/silver-tone/silver-tone-multifunction-watch-nocolor/GW0278G1-NC.html",
    "https://www.guess.com/us/en/men/accessories/watches/silver-tone/silver-tone-rhinestone-multifunction-watch-multiplecolors/GW0261G1-MULTI.html",
    "https://www.guess.com/us/en/men/accessories/watches/view-all/black-mesh-diamond-analog-watch-multiplecolors/GW0248G3-MULTI.html",
    "https://www.guess.com/us/en/men/accessories/watches/view-all/blue-mesh-diamond-analog-watch-multiplecolors/GW0248G4-MULTI.html",
    "https://www.guess.com/us/en/women/accessories/watches/gold-tone/gold-tone-and-black-ceramic-multifunction-watch-multiplecolors/GW0273L2-MULTI.html",
    "https://www.guess.com/us/en/women/accessories/watches/gold-tone/gold-tone-and-black-diamond-analog-watch-multiplecolors/GW0243L2-MULTI.html",
    "https://www.guess.com/us/en/women/accessories/watches/gold-tone/gold-tone-chrono-look-crystal-watch-multiplecolors/GW0037L2-MULTI.html",
    "https://www.guess.com/us/en/women/accessories/watches/gold-tone/gold-tone-diamond-analog-watch-multiplecolors/GW0244L2-MULTI.html",
    "https://www.guess.com/us/en/women/accessories/watches/gold-tone/gold-tone-logo-analog-watch-multiplecolors/GW0292L2-MULTI.html",
    "https://www.guess.com/us/en/women/accessories/watches/gold-tone/gold-tone-rhinestone-analog-watch-multiplecolors/GW0254L2-MULTI.html",
    "https://www.guess.com/us/en/women/accessories/watches/gold-tone/gold-tone-rhinestone-multifunction-watch-multiplecolors/GW0257L1-MULTI.html",
    "https://www.guess.com/us/en/women/accessories/watches/logo/script-logo-analog-watch-multiplecolors/GW0293L1-MULTI.html",
    "https://www.guess.com/us/en/women/accessories/watches/rose-gold-tone/floral-and-white-leather-analog-watch-multiplecolors/GW0240L1-MULTI.html",
    "https://www.guess.com/us/en/women/accessories/watches/rose-gold-tone/floral-transparent-analog-watch-multiplecolors/GW0239L1-MULTI.html",
    "https://www.guess.com/us/en/women/accessories/watches/rose-gold-tone/rose-gold-tone-and-white-ceramic-multifunction-watch-multiplecolors/GW0273L3-MULTI.html",
    "https://www.guess.com/us/en/women/accessories/watches/rose-gold-tone/rose-gold-tone-and-white-chrono-look-watch-multiplecolors/GW0038L2-MULTI.html",
    "https://www.guess.com/us/en/women/accessories/watches/rose-gold-tone/rose-gold-tone-and-white-diamond-analog-watch-multiplecolors/GW0243L3-MULTI.html",
    "https://www.guess.com/us/en/women/accessories/watches/rose-gold-tone/rose-gold-tone-and-white-square-multifunction-watch-nocolor/GW0105L3-NC.html",
    "https://www.guess.com/us/en/women/accessories/watches/rose-gold-tone/rose-gold-tone-crystal-analog-watch-multiplecolors/GW0109L2-MULTI.html",
    "https://www.guess.com/us/en/women/accessories/watches/rose-gold-tone/rose-gold-tone-diamond-analog-watch-multiplecolors/GW0244L3-MULTI.html",
    "https://www.guess.com/us/en/women/accessories/watches/rose-gold-tone/rose-gold-tone-floral-crystal-analog-watch-multiplecolors/GW0242L3-MULTI.html",
    "https://www.guess.com/us/en/women/accessories/watches/rose-gold-tone/rose-gold-tone-rhinestone-analog-watch-multiplecolors/GW0254L3-MULTI.html",
    "https://www.guess.com/us/en/women/accessories/watches/rose-gold-tone/rose-gold-tone-rhinestone-multifunction-watch-multiplecolors/GW0257L2-MULTI.html",
    "https://www.guess.com/us/en/women/accessories/watches/rose-gold-tone/rose-gold-tone-square-multifunction-watch-nocolor/GW0104L3-NC.html",
    "https://www.guess.com/us/en/women/accessories/watches/silver-tone/model-analog-watch-multiplecolors/GW0289L1-MULTI.html",
    "https://www.guess.com/us/en/women/accessories/watches/silver-tone/silver-tone-and-blue-analog-watch-nocolor/GW0033L5-NC.html",
    "https://www.guess.com/us/en/women/accessories/watches/silver-tone/silver-tone-and-blue-diamond-analog-watch-nocolor/GW0073L5-NC.html",
    "https://www.guess.com/us/en/women/accessories/watches/silver-tone/silver-tone-and-denim-logo-analog-watch-multiplecolors/GW0291L1-MULTI.html",
    "https://www.guess.com/us/en/women/accessories/watches/silver-tone/silver-tone-and-denimanalog-watch-multiplecolors/GW0228L1-MULTI.html",
    "https://www.guess.com/us/en/women/accessories/watches/silver-tone/silver-tone-and-pink-diamond-analog-watch-multiplecolors/GW0244L1-MULTI.html",
    "https://www.guess.com/us/en/women/accessories/watches/silver-tone/silver-tone-and-white-ceramic-multifunction-watch-multiplecolors/GW0273L1-MULTI.html",
    "https://www.guess.com/us/en/women/accessories/watches/silver-tone/silver-tone-crystal-chrono-look-watch-multiplecolors/GW0037L1-MULTI.html",
    "https://www.guess.com/us/en/women/accessories/watches/silver-tone/silver-tone-logo-analog-watch-multiplecolors/GW0292L1-MULTI.html",
    "https://www.guess.com/us/en/women/accessories/watches/silver-tone/silver-tone-rhinestone-analog-watch-multiplecolors/GW0254L1-MULTI.html",
    "https://www.guess.com/us/en/women/accessories/watches/silver-tone/silver-tone-rose-crystal-analog-watch-multiplecolors/GW0242L1-MULTI.html",
    "https://www.guess.com/us/en/women/accessories/watches/silver-tone/silver-tone-square-analog-watch-multiplecolors/GW0294L1-MULTI.html",
    "https://www.guess.com/us/en/women/accessories/watches/silver-tone/two-tone-analog-watch-blue/GW0033L4-TTIW.html",
    "https://www.guess.com/us/en/women/accessories/watches/view-all/gold-tone-and-brown-analog-watch-brown/U1230L2-BROWN.html",
];

module.exports = u;