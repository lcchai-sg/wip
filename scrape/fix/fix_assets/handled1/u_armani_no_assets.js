const u = [
    "https://www.armani.com/sg/armanicom/emporio-armani/_cod50230691ef.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/_cod50230740kl.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/_cod50232372hg.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/_cod50236379uh.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/_cod50236516ld.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/_cod50237185ao.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/_cod50239604lu.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/_cod50239606lw.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/_cod50239607cb.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/_cod50240639ke.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/_cod50252580xw.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/_cod50252585pw.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/_cod50252587tg.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/_cod50252588gv.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/_cod50252592iu.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/_cod50253872ai.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/_cod50253873so.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/_cod50253874ke.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/_cod50253942df.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/automatic-black-leather-meccanico-watch_cod50252958jf.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/automatic-black-leather-meccanico-watch_cod50253463vr.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/automatic-gunmetal-stainless-steel-watch_cod50249307an.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/chronograph-black-ceramic-watch_cod50241603he.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/chronograph-black-leather-watch_cod50252959wl.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/chronograph-black-stainless-steel-mesh-watch_cod50253085qh.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/chronograph-brown-alligator-embossed-leather-watch_cod50253088ab.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/chronograph-stainless-steel-watch_cod50252956ku.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/emporio-armani-man-leather-hybrid-smartwatch_cod50218775dh.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/emporio-armani-man-stainless-steel-hybrid-smartwatch_cod50201198qq.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/emporio-armani-man-stainless-steel-hybrid-smartwatch_cod50219300fu.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/emporio-armani-swiss-made-man-automatic-leather-watch_cod50218758uu.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/leather-watch_cod50239604lu.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/leather-watch_cod50239607cb.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/man-automatic-leather-watch_cod50207467mw.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/man-automatic-stainless-steel-watch_cod50207902jo.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/man-ceramic-cronograph_cod50220446kk.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/man-leather-cronograph_cod50220441ts.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/man-rubber-cronograph_cod50220453uq.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/man-stainless-steel-cronograph_cod50208513hl.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/man-stainless-steel-cronograph_cod50218749nu.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/man-three-hands-leather-watch_cod50227126hf.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/men-s-automatic-leather-watch_cod50232372hg.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/men-s-leather-cronograph_cod50234762mb.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/men-s-stainless-steel-cronograph_cod50234896dv.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/men-s-stainless-steel-cronograph_cod50234905qt.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/men-s-swiss-made-classic-automatic-open-balance-wheel-watch_cod50198120rh.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/men-s-swiss-made-esedra-chronograph-watch_cod50208006fn.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/men-s-swiss-made-rectangle-automatic-two-hand-watch_cod50219379kk.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/men-s-watch-with-visible-gears-and-leather-strap_cod50207466jk.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/multifunction-black-leather-watch_cod50253463vr.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/multifunction-stainless-steel-watch_cod50253461vr.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/orologio-con-cinturino-in-pelle-e-movimento-al-quarzo_cod50236424ln.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/orologio-con-cinturino-in-pelle-e-movimento-al-quarzo_cod50249837sq.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/orologio-con-cinturino-in-pelle-e-movimento-automatico_cod50232372hg.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/orologio-con-movimento-meccanico-e-quadrante-con-fondo-trasparente_cod50236516ld.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/orologio-con-movimento-meccanico-e-quadrante-con-fondo-trasparente_cod50240639ke.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/orologio-con-movimento-meccanico-e-quadrante-con-fondo-trasparente_cod50249307an.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/orologio-con-quadrante-tondo-e-cinturino-in-pelle_cod50239604lu.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/orologio-con-quadrante-tondo-e-cinturino-in-pelle_cod50239607cb.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/orologio-da-donna-a-due-lancette-in-acciaio_cod50237185ao.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/orologio-da-donna-al-quarzo-in-acciaio-inox_cod50249838on.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/orologio-in-acciaio-con-movimento-al-quarzo_cod50230740kl.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/orologio-in-acciaio-con-movimento-al-quarzo_cod50236380ox.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/orologio-swiss-made-in-acciaio_cod50232371tb.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/pearl-and-rose-gold-tone-double-wrap-watch_cod50247260ul.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/smartwatch-3-matte-black_cod50242710ii.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/smartwatch-3-matte-blue_cod50242713ip.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/smartwatch-3-matte-gold_cod50242715gg.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/smartwatch-3-matte-silver_cod50242712bs.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/smartwatch-connected-con-cinturino-in-pelle_cod50231154pv.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/steel-quartz-watch_cod50230740kl.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/swiss-made-watch_cod50232371tb.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/three-hand-black-leather-watch_cod50241599xj.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/three-hand-black-leather-watch_cod50252957uq.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/three-hand-black-leather-watch_cod50253462hh.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/three-hand-blue-leather-watch_cod50253090sw.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/three-hand-brown-leather-watch_cod50246830ha.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/three-hand-brown-leather-watch_cod50252958jf.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/three-hand-brown-leather-watch_cod50253460rj.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/three-hand-brown-leather-watch_cod50253461vr.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/three-hand-stainless-steel-watch_cod50253086qp.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/three-hand-two-tone-stainless-steel-watch_cod50241608ai.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/three-hand-two-tone-stainless-steel-watch_cod50253087uc.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/two-hand-black-leather-watch_cod50241545nc.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/two-hand-freshwater-pearl-watch_cod50247261gc.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/two-hand-gold-tone-stainless-steel-watch_cod50246828ii.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/two-hand-red-leather-watch_cod50249837sq.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/two-hand-rose-gold-tone-stainless-steel-watch_cod50241607me.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/two-hand-rose-gold-tone-stainless-steel-watch_cod50246825xl.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/two-hand-rose-gold-tone-stainless-steel-watch_cod50246827ha.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/two-hand-rose-gold-tone-stainless-steel-watch_cod50249838on.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/two-hand-stainless-steel-watch_cod50246826gc.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/two-hand-stainless-steel-watch_cod50252592iu.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/two-tone-stainless-steel-watch-set_cod50253444vd.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/watch-and-cufflink-set_cod50253443ox.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/watch-and-earrings-gift-set_cod50250440vv.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/watch-with-clockwork-mechanism_cod50236516ld.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/watch-with-clockwork-mechanism_cod50240639ke.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/woman-stainless-steel-watch_cod50227554im.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/woman-two-hand-stainless-steel-watch_cod50227728dg.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/woman-two-hands-leather-watch_cod50219340fu.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/woman-two-hands-stainless-steel-watch_cod50212411bh.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/woman-two-hands-stainless-steel-watch_cod50220488nt.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/women-s-leather-two-hand-watch_cod50234766eo.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/women-s-quartz-watch-with-rose-gold-case-and-leather-strap_cod50220869rr.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/women-s-rose-gold-plated-analogue-watch-with-rhinestones_cod50220480fa.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/women-s-stainless-steel-two-hand-watch_cod50234650lt.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/women-s-stainless-steel-two-hand-watch_cod50234765ss.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/women-s-swiss-made-esedra-two-hand-watch_cod50230557mb.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/women-s-swiss-made-fluid-deco-two-hand-watch_cod50207948nu.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/women-s-swiss-made-rectangle-two-hand-watch_cod50219342ua.html#dept=wtchs",
    "https://www.armani.com/sg/armanicom/emporio-armani/women-s-watch_cod50237185ao.html#dept=wtchs",
];

module.exports = u;