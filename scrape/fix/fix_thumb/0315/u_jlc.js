const u = [
    "https://www.jaeger-lecoultre.com/us/en/watches/duometre/duometre-chronographe/6012421.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/duometre/duometre-quantieme-lunaire/6042421.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/duometre/duometre-quantieme-lunaire/6042422.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/duometre/duometre-quantieme-lunaire/6043420.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/duometre/duometre-unique-travel-time/6062420.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/jaeger-lecoultre-plrs/jaeger-lecoultre-plrs-automatic/9008170.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/jaeger-lecoultre-plrs/jaeger-lecoultre-plrs-automatic/9008180.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/jaeger-lecoultre-plrs/jaeger-lecoultre-plrs-automatic/9008471.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/jaeger-lecoultre-plrs/jaeger-lecoultre-plrs-automatic/9008480.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/jaeger-lecoultre-plrs/jaeger-lecoultre-plrs-chronograph-wt/905T470.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/jaeger-lecoultre-plrs/jaeger-lecoultre-plrs-chronograph-wt/905T471.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/jaeger-lecoultre-plrs/jaeger-lecoultre-plrs-chronograph-wt/905T480.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/jaeger-lecoultre-plrs/jaeger-lecoultre-plrs-chronograph/9022450.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/jaeger-lecoultre-plrs/jaeger-lecoultre-plrs-chronograph/9028170.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/jaeger-lecoultre-plrs/jaeger-lecoultre-plrs-chronograph/9028180.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/jaeger-lecoultre-plrs/jaeger-lecoultre-plrs-chronograph/9028471.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/jaeger-lecoultre-plrs/jaeger-lecoultre-plrs-chronograph/9028480.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/jaeger-lecoultre-plrs/jaeger-lecoultre-plrs-date/9068180.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/jaeger-lecoultre-plrs/jaeger-lecoultre-plrs-date/9068670.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/jaeger-lecoultre-plrs/jaeger-lecoultre-plrs-memovox/9038180.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/master/master-calendar/4142520.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/master/master-calendar/4148420.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/master/master-control-chronograph-calendar/4132520.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/master/master-control-chronograph-calendar/4138420.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/master/master-control-date/4018420.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/master/master-control-memovox-timer/410848J.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/master/master-geographic/4122520.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/master/master-geographic/4128420.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/master/master-grande-tradition-gyrotourbillon-3/5032441.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/master/master-grande-tradition-gyrotourbillon-3/5036420.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/master/master-grande-tradition-gyrotourbillon-westminster-perpetual/5253420.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/master/master-grande-tradition-repetition-minutes-quantieme-perpetuel/5233420.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/master/master-grande-tradition-repetition-minutes-quantieme-perpetuel/52334E1.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/master/master-grande-tradition-tourbillon-celeste0/5273480.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/master/master-grande-tradition-tourbillon-cylindrique-a-quantieme-perpe/5042420.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/master/master-grande-tradition-tourbillon-cylindrique-a-quantieme-perpe/5046520.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/master/master-grande-tradition-tourbillon-cylindrique/5082420.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/master/master-grande-tradition-tourbillon-cylindrique/5086420.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/master/master-memovox/4118420.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/master/master-tourbillon/1562401.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/master/master-tourbillon/1562421.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/master/master-tourbillon/1563480.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/master/master-ultra-thin-date/1232501.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/master/master-ultra-thin-date/1232510.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/master/master-ultra-thin-date/1238420.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/master/master-ultra-thin-knife/1152520.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/master/master-ultra-thin-minute-repeater-flying-tourbillon/1313520.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/master/master-ultra-thin-moon/1252501.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/master/master-ultra-thin-moon/1252520.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/master/master-ultra-thin-moon/1258401.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/master/master-ultra-thin-moon/1258420.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/master/master-ultra-thin-moon/1362501.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/master/master-ultra-thin-moon/1362520.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/master/master-ultra-thin-moon/136255J.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/master/master-ultra-thin-moon/1363540.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/master/master-ultra-thin-moon/1368420.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/master/master-ultra-thin-moon/1368470.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/master/master-ultra-thin-perpetual/1302501.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/master/master-ultra-thin-perpetual/1302520.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/master/master-ultra-thin-perpetual/1303501.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/master/master-ultra-thin-perpetual/1303520.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/master/master-ultra-thin-perpetual/130354J.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/master/master-ultra-thin-perpetual/130842J.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/master/master-ultra-thin-perpetual/1308470.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/master/master-ultra-thin-reserve-de-marche/1372501.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/master/master-ultra-thin-reserve-de-marche/1372520.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/master/master-ultra-thin-reserve-de-marche/1378420.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/master/master-ultra-thin-reserve-de-marche/1378480.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/master/master-ultra-thin-small-second/1212501.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/master/master-ultra-thin-small-second/1212510.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/master/master-ultra-thin-small-second/1218420.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/master/master-ultra-thin-tourbillon-moon/1692410.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/master/master-ultra-thin-tourbillon/1682401.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/master/master-ultra-thin-tourbillon/1682410.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/master/metiers-rares-master-grande-tradition-gyrotourbillon3/5033401.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/rendez-vous/rendez-vous-celestial/3482520.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/rendez-vous/rendez-vous-date-medium-quartz/3472530.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/rendez-vous/rendez-vous-date-small-quartz/3402530.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/rendez-vous/rendez-vous-date-small-quartz/3408530.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/rendez-vous/rendez-vous-moon-39/3532490.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/rendez-vous/rendez-vous-moon-39/3533490.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/rendez-vous/rendez-vous-moon-medium/3572430.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/rendez-vous/rendez-vous-moon-medium/3578430.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/rendez-vous/rendez-vous-moon/3522480.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/rendez-vous/rendez-vous-moon/3523490.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/rendez-vous/rendez-vous-moon/3523570.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/rendez-vous/rendez-vous-night-and-day-medium/3432570.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/rendez-vous/rendez-vous-night-and-day-medium/3433570.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/rendez-vous/rendez-vous-night-and-day-medium/3442130.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/rendez-vous/rendez-vous-night-and-day-medium/3442430.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/rendez-vous/rendez-vous-night-and-day-medium/3442440.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/rendez-vous/rendez-vous-night-and-day-medium/3448110.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/rendez-vous/rendez-vous-night-and-day-medium/3448130.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/rendez-vous/rendez-vous-night-and-day-medium/3448410.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/rendez-vous/rendez-vous-night-and-day-medium/3448430.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/rendez-vous/rendez-vous-night-and-day-medium/3448480.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/rendez-vous/rendez-vous-night-and-day/3462130.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/rendez-vous/rendez-vous-night-and-day/3462430.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/rendez-vous/rendez-vous-night-and-day/3468110.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/rendez-vous/rendez-vous-night-and-day/3468130.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/rendez-vous/rendez-vous-night-and-day/3468410.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/rendez-vous/rendez-vous-night-and-day/3468430.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/rendez-vous/rendez-vous-night-and-day/3468480.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/rendez-vous/rendez-vous-perpetual-calendar/3492420.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/rendez-vous/rendez-vous-perpetual-calendar/3493420.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/rendez-vous/rendez-vous-tourbillon/3412410.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/rendez-vous/rendez-vous-tourbillon/3413403.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/rendez-vous/rendez-vous-tourbillon/3413480.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/reverso/reverso-classic-large-duoface-manuel/3842520.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/reverso/reverso-classic-large-duoface-manuel/3848420.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/reverso/reverso-classic-large-duoface-manuel/3848422.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/reverso/reverso-classic-large-monoface-manuel/3858520.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/reverso/reverso-classic-large-monoface-manuel/3858520.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/reverso/reverso-classic-large-monoface-manuel/3858522.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/reverso/reverso-classic-large-monoface-manuel/3858522.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/reverso/reverso-classic-medium-duetto-manuel/2588120.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/reverso/reverso-classic-medium-duetto-manuel/2588422.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/reverso/reverso-classic-medium-duetto/2572420.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/reverso/reverso-classic-medium-duetto/2578120.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/reverso/reverso-classic-medium-duetto/2578422.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/reverso/reverso-classic-medium-duoface-manuel/2458420.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/reverso/reverso-classic-medium-duoface-manuel/2458422.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/reverso/reverso-classic-medium-monoface-manuel/2438520.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/reverso/reverso-classic-medium-monoface-manuel/2438520.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/reverso/reverso-classic-medium-monoface-manuel/2438522.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/reverso/reverso-classic-medium-monoface-manuel/2438522.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/reverso/reverso-classic-medium-thin-monoface-manuel/2542540.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/reverso/reverso-classic-medium-thin-monoface-manuel/2542540.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/reverso/reverso-classic-medium-thin-monoface-manuel/2548140.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/reverso/reverso-classic-medium-thin-monoface-manuel/2548140.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/reverso/reverso-classic-medium-thin-monoface-manuel/2548440.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/reverso/reverso-classic-medium-thin-monoface-manuel/2548440.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/reverso/reverso-classic-medium-thin-monoface-manuel/2548441.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/reverso/reverso-classic-medium-thin-monoface-manuel/2548441.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/reverso/reverso-classic-medium-thin-monoface-quartz/2518140.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/reverso/reverso-classic-medium-thin-monoface-quartz/2518140.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/reverso/reverso-classic-medium-thin-monoface-quartz/2518540.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/reverso/reverso-classic-medium-thin-monoface-quartz/2518540.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/reverso/reverso-classic-small-duetto/2662130.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/reverso/reverso-classic-small-duetto/2662430.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/reverso/reverso-classic-small-duetto/2668130.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/reverso/reverso-classic-small-duetto/2668432.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/reverso/reverso-classic-small-monoface-manual/2602540.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/reverso/reverso-classic-small-monoface-manual/2602540.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/reverso/reverso-classic-small-monoface-manual/2608140.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/reverso/reverso-classic-small-monoface-manual/2608140.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/reverso/reverso-classic-small-monoface-manual/2608440.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/reverso/reverso-classic-small-monoface-manual/2608440.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/reverso/reverso-classic-small-monoface-manual/2608441.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/reverso/reverso-classic-small-monoface-manual/2608441.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/reverso/reverso-classic-small/2618140.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/reverso/reverso-classic-small/2618140.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/reverso/reverso-classic-small/2618540.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/reverso/reverso-classic-small/2618540.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/reverso/reverso-one-duetto-jewelry/3362201.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/reverso/reverso-one-duetto-jewelry/3363401.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/reverso/reverso-one-duetto-jewelry/3363402.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/reverso/reverso-one-duetto-moon/3352120.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/reverso/reverso-one-duetto-moon/3352420.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/reverso/reverso-one-duetto-moon/3358120.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/reverso/reverso-one-duetto-moon/3358420.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/reverso/reverso-one-duetto/3342520.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/reverso/reverso-one-duetto/3348120.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/reverso/reverso-one-duetto/3348420.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/reverso/reverso-one-quartz/3288120.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/reverso/reverso-one-quartz/3288420.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/reverso/reverso-one-quartz/3288560.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/reverso/reverso-tribute-calendar/3912420.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/reverso/reverso-tribute-duoface-medium/3988482.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/reverso/reverso-tribute-gyrotourbillon/3946420.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/reverso/reverso-tribute-monoface/397846J.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/reverso/reverso-tribute-monoface/3978480.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/reverso/reverso-tribute-moon/3958420.html",
    "https://www.jaeger-lecoultre.com/us/en/watches/reverso/reverso-tribute-tourbillon/3926480.html",
];

module.exports = u;
