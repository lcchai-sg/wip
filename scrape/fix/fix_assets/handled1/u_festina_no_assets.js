const u = [
    "https://festina.com/en-GB/watch/infantil/festina/festina-infantils-black-junior-collection-steel-watch-bracelete-f16907_3.html",
    "https://festina.com/en-GB/watch/infantil/festina/festina-infantils-black-leather-watch-bracelete-f20458_3.html",
    "https://festina.com/en-GB/watch/infantil/festina/festina-infantils-black-steel-watch-bracelete-f16903_3.html",
    "https://festina.com/en-GB/watch/infantil/festina/festina-infantils-black-steel-watch-bracelete-f16905_3.html",
    "https://festina.com/en-GB/watch/infantil/festina/festina-infantils-black-steel-watch-bracelete-f16905_4.html",
    "https://festina.com/en-GB/watch/infantil/festina/festina-infantils-black-steel-watch-bracelete-f16908_3.html",
    "https://festina.com/en-GB/watch/infantil/festina/festina-infantils-blue-steel-watch-bracelete-f16903_2.html",
    "https://festina.com/en-GB/watch/infantil/festina/festina-infantils-blue-steel-watch-bracelete-f16907_2.html",
    "https://festina.com/en-GB/watch/infantil/festina/festina-infantils-blue-steel-watch-bracelete-f16908_2.html",
    "https://festina.com/en-GB/watch/infantil/festina/festina-infantils-silver-steel-watch-bracelete-f16903_1.html",
    "https://festina.com/en-GB/watch/infantil/festina/festina-infantils-silver-steel-watch-bracelete-f16905_1.html",
    "https://festina.com/en-GB/watch/infantil/festina/festina-infantils-white-steel-watch-bracelete-f16907_1.html",
    "https://festina.com/en-GB/watch/infantil/festina/festina-infantils-white-steel-watch-bracelete-f16908_1.html",
    "https://festina.com/en-GB/watch/infantil/festina/festina-junior-collection-watchf20345_2-blue-steel-bracelet-junior.html",
    "https://festina.com/en-GB/watch/infantil/festina/festina-junior-collection-watchf20345_3-black-steel-bracelet-junior.html",
    "https://festina.com/en-GB/watch/infantil/festina/festina-junior-collection-watchf20457_3-black-steel-bracelet-junior.html",
    "https://festina.com/en-GB/watch/infantil/festina/festina-junior-collection-watchf20458_1-white-leather-strap-junior.html",
    "https://festina.com/en-GB/watch/man/festina/festina-automatic-watch-f20478_2-blue-steel-bracelet-man.html",
    "https://festina.com/en-GB/watch/man/festina/festina-automatic-watch-f20478_4-green-steel-bracelet-man.html",
    "https://festina.com/en-GB/watch/man/festina/festina-chrono-bike-watch-f20522_2-blue-steel-bracelet-man.html",
    "https://festina.com/en-GB/watch/man/festina/festina-chrono-bike-watch-f20522_5-black-steel-bracelet-man.html",
    "https://festina.com/en-GB/watch/man/festina/festina-chrono-sport-collection-watch-f16488_b-blue-steel-bracelet-man.html",
    "https://festina.com/en-GB/watch/man/festina/festina-chrono-sport-collection-watch-f16489_3-black-leather-strap-man.html",
    "https://festina.com/en-GB/watch/man/festina/festina-chrono-sport-collection-watch-f20448_1-blue-steel-bracelet-man.html",
    "https://festina.com/en-GB/watch/man/festina/festina-chrono-sport-collection-watch-f20519_3-grey-leather-strap-man.html",
    "https://festina.com/en-GB/watch/man/festina/festina-classic-steel-watch-f16744_3-blue-steel-bracelet-man.html",
    "https://festina.com/en-GB/watch/man/festina/festina-classic-steel-watch-f16744_4-black-steel-bracelet-man.html",
    "https://festina.com/en-GB/watch/man/festina/festina-classic-steel-watch-f20357_1-silver-colour-steel-bracelet-man.html",
    "https://festina.com/en-GB/watch/man/festina/festina-classic-steel-watch-f20357_3-blue-steel-bracelet-man.html",
    "https://festina.com/en-GB/watch/man/festina/festina-classic-steel-watch-f20437_7-blue-steel-bracelet-man.html",
    "https://festina.com/en-GB/watch/man/festina/festina-classic-steel-watch-f20446_1-white-leather-strap-man.html",
    "https://festina.com/en-GB/watch/man/festina/festina-classic-strap-watch-f16478_1-white-leather-strap-man.html",
    "https://festina.com/en-GB/watch/man/festina/festina-classic-strap-watch-f16745_1-silver-colour-leather-strap-man.html",
    "https://festina.com/en-GB/watch/man/festina/festina-classic-strap-watch-f16747_1-white-leather-strap-man.html",
    "https://festina.com/en-GB/watch/man/festina/festina-mans-black-leather-watch-bracelete-f16872_4.html",
    "https://festina.com/en-GB/watch/man/festina/festina-mans-black-leather-watch-bracelete-f16898_1.html",
    "https://festina.com/en-GB/watch/man/festina/festina-mans-black-leather-watch-bracelete-f16899_1.html",
    "https://festina.com/en-GB/watch/man/festina/festina-mans-black-leather-watch-bracelete-f16901_1.html",
    "https://festina.com/en-GB/watch/man/festina/festina-mans-black-leather-watch-bracelete-f16902_1.html",
    "https://festina.com/en-GB/watch/man/festina/festina-mans-black-leather-watch-bracelete-f20205_4.html",
    "https://festina.com/en-GB/watch/man/festina/festina-mans-black-leather-watch-bracelete-f20279_c.html",
    "https://festina.com/en-GB/watch/man/festina/festina-mans-black-leather-watch-bracelete-f20347_6.html",
    "https://festina.com/en-GB/watch/man/festina/festina-mans-black-leather-watch-bracelete-f20351_5.html",
    "https://festina.com/en-GB/watch/man/festina/festina-mans-black-leather-watch-bracelete-f20519_4.html",
    "https://festina.com/en-GB/watch/man/festina/festina-mans-black-rubber-watch-bracelete-f20378_5.html",
    "https://festina.com/en-GB/watch/man/festina/festina-mans-black-rubber-watch-bracelete-f20449_2.html",
    "https://festina.com/en-GB/watch/man/festina/festina-mans-black-steel-watch-bracelete-f16242_9.html",
    "https://festina.com/en-GB/watch/man/festina/festina-mans-black-steel-watch-bracelete-f16632_3.html",
    "https://festina.com/en-GB/watch/man/festina/festina-mans-black-steel-watch-bracelete-f16807_2.html",
    "https://festina.com/en-GB/watch/man/festina/festina-mans-black-steel-watch-bracelete-f16884_4.html",
    "https://festina.com/en-GB/watch/man/festina/festina-mans-black-steel-watch-bracelete-f20357_4.html",
    "https://festina.com/en-GB/watch/man/festina/festina-mans-black-steel-watch-bracelete-f20443_1.html",
    "https://festina.com/en-GB/watch/man/festina/festina-mans-black-steel-watch-bracelete-f20463_4.html",
    "https://festina.com/en-GB/watch/man/festina/festina-mans-black-steel-watch-bracelete-f20481_1.html",
    "https://festina.com/en-GB/watch/man/festina/festina-mans-black-steel-watch-bracelete-f6833_2.html",
    "https://festina.com/en-GB/watch/man/festina/festina-mans-black-steel-watch-bracelete-f6833_4.html",
    "https://festina.com/en-GB/watch/man/festina/festina-mans-black-watch-f16639_2.html",
    "https://festina.com/en-GB/watch/man/festina/festina-mans-blue-leather-watch-bracelete-f20279_b.html",
    "https://festina.com/en-GB/watch/man/festina/festina-mans-blue-leather-watch-bracelete-f20347_8.html",
    "https://festina.com/en-GB/watch/man/festina/festina-mans-blue-leather-watch-bracelete-f20519_1.html",
    "https://festina.com/en-GB/watch/man/festina/festina-mans-blue-leather-watch-bracelete-f6839_4.html",
    "https://festina.com/en-GB/watch/man/festina/festina-mans-blue-leather-watch-bracelete-f6848_2.html",
    "https://festina.com/en-GB/watch/man/festina/festina-mans-blue-rubber-watch-bracelete-f16851_1.html",
    "https://festina.com/en-GB/watch/man/festina/festina-mans-blue-rubber-watch-bracelete-f20450_7.html",
    "https://festina.com/en-GB/watch/man/festina/festina-mans-blue-steel-watch-bracelete-f16242_4.html",
    "https://festina.com/en-GB/watch/man/festina/festina-mans-blue-steel-watch-bracelete-f16242_a.html",
    "https://festina.com/en-GB/watch/man/festina/festina-mans-blue-steel-watch-bracelete-f16632_2.html",
    "https://festina.com/en-GB/watch/man/festina/festina-mans-blue-steel-watch-bracelete-f16807_3.html",
    "https://festina.com/en-GB/watch/man/festina/festina-mans-blue-steel-watch-bracelete-f16884_3.html",
    "https://festina.com/en-GB/watch/man/festina/festina-mans-blue-steel-watch-bracelete-f20356_5.html",
    "https://festina.com/en-GB/watch/man/festina/festina-mans-blue-steel-watch-bracelete-f20442_1.html",
    "https://festina.com/en-GB/watch/man/festina/festina-mans-cream-leather-watch-bracelete-f20205_1.html",
    "https://festina.com/en-GB/watch/man/festina/festina-mans-green-steel-watch-bracelete-f20356_6.html",
    "https://festina.com/en-GB/watch/man/festina/festina-mans-green-steel-watch-bracelete-f20362_3.html",
    "https://festina.com/en-GB/watch/man/festina/festina-mans-green-steel-watch-bracelete-f20364_4.html",
    "https://festina.com/en-GB/watch/man/festina/festina-mans-grey-steel-watch-bracelete-f16242_1.html",
    "https://festina.com/en-GB/watch/man/festina/festina-mans-grey-steel-watch-bracelete-f16242_7.html",
    "https://festina.com/en-GB/watch/man/festina/festina-mans-grey-steel-watch-bracelete-f20357_2.html",
    "https://festina.com/en-GB/watch/man/festina/festina-mans-orange-rubber-watch-bracelete-f20449_c.html",
    "https://festina.com/en-GB/watch/man/festina/festina-mans-silver-leather-watch-bracelete-f16476_4.html",
    "https://festina.com/en-GB/watch/man/festina/festina-mans-silver-leather-watch-bracelete-f16745_2.html",
    "https://festina.com/en-GB/watch/man/festina/festina-mans-silver-leather-watch-bracelete-f16825_1.html",
    "https://festina.com/en-GB/watch/man/festina/festina-mans-silver-leather-watch-bracelete-f16872_1.html",
    "https://festina.com/en-GB/watch/man/festina/festina-mans-silver-leather-watch-bracelete-f16885_2.html",
    "https://festina.com/en-GB/watch/man/festina/festina-mans-silver-leather-watch-bracelete-f20278_a.html",
    "https://festina.com/en-GB/watch/man/festina/festina-mans-silver-leather-watch-bracelete-f20279_a.html",
    "https://festina.com/en-GB/watch/man/festina/festina-mans-silver-leather-watch-bracelete-f6848_1.html",
    "https://festina.com/en-GB/watch/man/festina/festina-mans-silver-leather-watch-bracelete-f6851_1.html",
    "https://festina.com/en-GB/watch/man/festina/festina-mans-silver-leather-watch-bracelete-f6858_2.html",
    "https://festina.com/en-GB/watch/man/festina/festina-mans-silver-steel-watch-bracelete-f16374_7.html",
    "https://festina.com/en-GB/watch/man/festina/festina-mans-silver-steel-watch-bracelete-f16884_1.html",
    "https://festina.com/en-GB/watch/man/festina/festina-mans-silver-steel-watch-bracelete-f16884_2.html",
    "https://festina.com/en-GB/watch/man/festina/festina-mans-silver-watch-f2024_1.html",
    "https://festina.com/en-GB/watch/man/festina/festina-mans-violet-steel-watch-bracelete-f20448_d.html",
    "https://festina.com/en-GB/watch/man/festina/festina-mans-white-leather-watch-bracelete-f20347_5.html",
    "https://festina.com/en-GB/watch/man/festina/festina-mans-white-steel-watch-bracelete-f16374_5.html",
    "https://festina.com/en-GB/watch/man/festina/festina-mans-white-steel-watch-bracelete-f16576_1.html",
    "https://festina.com/en-GB/watch/man/festina/festina-mans-white-steel-watch-bracelete-f6832_1.html",
    "https://festina.com/en-GB/watch/man/festina/festina-mans-white-steel-watch-bracelete-f6833_1.html",
    "https://festina.com/en-GB/watch/man/festina/festina-mans-white-steel-watch-bracelete-f6867_1.html",
    "https://festina.com/en-GB/watch/man/festina/festina-mans-white-steel-watch-bracelete-f6868_1.html",
    "https://festina.com/en-GB/watch/man/festina/festina-mans-white-watch-f2020_1.html",
    "https://festina.com/en-GB/watch/man/festina/festina-mans-white-watch-f2022_1.html",
    "https://festina.com/en-GB/watch/man/festina/festina-mans-white-watch-f2023_1.html",
    "https://festina.com/en-GB/watch/man/festina/festina-mans-white-watch-f2025_1.html",
    "https://festina.com/en-GB/watch/man/festina/festina-mans-white-watch-f2028_1.html",
    "https://festina.com/en-GB/watch/man/festina/festina-mans-white-watch-f2029_1.html",
    "https://festina.com/en-GB/watch/man/festina/festina-mans-white-watch-f2030_1.html",
    "https://festina.com/en-GB/watch/man/festina/festina-mans-white-watch-f2031_1.html",
    "https://festina.com/en-GB/watch/man/festina/festina-prestige-watch-f20361_3-blue-steel-bracelet-man.html",
    "https://festina.com/en-GB/watch/man/festina/festina-prestige-watch-f20361_4-black-steel-bracelet-man.html",
    "https://festina.com/en-GB/watch/man/festina/festina-prestige-watch-f20364_3-black-steel-bracelet-man.html",
    "https://festina.com/en-GB/watch/man/festina/festina-prestige-watch-f20492_1-golden-steel-bracelet-man.html",
    "https://festina.com/en-GB/watch/man/festina/festina-prestige-watch-f20492_2-golden-steel-bracelet-man.html",
    "https://festina.com/en-GB/watch/man/festina/festina-prestige-watch-f20492_3-golden-steel-bracelet-man.html",
    "https://festina.com/en-GB/watch/man/festina/festina-prestige-watch-f20492_4-black-steel-bracelet-man.html",
    "https://festina.com/en-GB/watch/man/festina/festina-retro-collection-watch-f16573_4-black-leather-strap-man.html",
    "https://festina.com/en-GB/watch/man/festina/festina-the-originals-collection-watch-f20330_3-black-rubber-strap-man.html",
    "https://festina.com/en-GB/watch/man/festina/festina-the-originals-collection-watch-f20367_1-black-rubber-strap-man.html",
    "https://festina.com/en-GB/watch/man/festina/festina-the-originals-collection-watch-f20378_2-black-rubber-strap-man.html",
    "https://festina.com/en-GB/watch/man/festina/festina-the-originals-collection-watch-f20378_4-black-rubber-strap-man.html",
    "https://festina.com/en-GB/watch/man/festina/festina-timeless-watch-chronograph-f16680_4-black-steel-bracelet-man.html",
    "https://festina.com/en-GB/watch/man/festina/festina-timeless-watch-chronograph-f16759_5-blue-steel-bracelet-man.html",
    "https://festina.com/en-GB/watch/man/festina/festina-timeless-watch-chronograph-f16820_2-blue-steel-bracelet-man.html",
    "https://festina.com/en-GB/watch/man/festina/festina-timeless-watch-chronograph-f20343_9-blue-steel-bracelet-man.html",
    "https://festina.com/en-GB/watch/man/festina/festina-timeless-watch-chronograph-f20424_2-blue-leather-strap-man.html",
    "https://festina.com/en-GB/watch/man/festina/festina-timeless-watch-chronograph-f20424_3-black-leather-strap-man.html",
    "https://festina.com/en-GB/watch/man/festina/festina-timeless-watch-chronograph-f20424_7-black-leather-strap-man.html",
    "https://festina.com/en-GB/watch/man/festina/festina-timeless-watch-chronograph-f20424_8-black-leather-strap-man.html",
    "https://festina.com/en-GB/watch/man/festina/festina-timeless-watch-chronograph-f6854_7-black-steel-bracelet-man.html",
    "https://festina.com/en-GB/watch/man/festina/festina-titanium-calendar-watch-f20466_1-white-titanium-strap-man.html",
    "https://festina.com/en-GB/watch/man/festina/festina-titanium-calendar-watch-f20466_3-black-titanium-strap-man.html",
    "https://festina.com/en-GB/watch/man/festina/festina-watch-timeless-chronograph-f16678_8-stainless-steel-case-stainless-steel-bracelet-men.html",
    "https://festina.com/en-GB/watch/man/festina/festina-watch-timeless-chronograph-f16759_3-stainless-steel-case-stainless-steel-bracelet-men.html",
    "https://festina.com/en-GB/watch/man/festina/festina-watch-timeless-chronograph-f16759_4-stainless-steel-case-stainless-steel-bracelet-men.html",
    "https://festina.com/en-GB/watch/man/festina/festina-watch-timeless-chronograph-f16760_4-black-leather-strap-men.html",
    "https://festina.com/en-GB/watch/man/festina/festina-watch-timeless-chronograph-f16760_5--men.html",
    "https://festina.com/en-GB/watch/man/festina/festina-watch-timeless-chronograph-f16820_b-stainless-steel-case-stainless-steel-bracelet-men.html",
    "https://festina.com/en-GB/watch/man/festina/festina-watch-timeless-chronograph-f6861_1-stainless-steel-case-stainless-steel-bracelet-men.html",
    "https://festina.com/en-GB/watch/man/festina/festina-watch-timeless-chronograph-f6861_2-stainless-steel-case-stainless-steel-bracelet-men.html",
    "https://festina.com/en-GB/watch/man/festina/festina-watch-timeless-chronograph-f6861_3-stainless-steel-case-stainless-steel-bracelet-men.html",
    "https://festina.com/en-GB/watch/woman/festina/festina-boyfriend-collection-watch-f20391_1-white-steel-bracelet-woman.html",
    "https://festina.com/en-GB/watch/woman/festina/festina-boyfriend-collection-watch-f20397_3-pink-steel-bracelet-woman.html",
    "https://festina.com/en-GB/watch/woman/festina/festina-boyfriend-collection-watch-f20401_1-grey-steel-bracelet-woman.html",
    "https://festina.com/en-GB/watch/woman/festina/festina-boyfriend-collection-watch-f20412_2-pink-leather-strap-woman.html",
    "https://festina.com/en-GB/watch/woman/festina/festina-boyfriend-collection-watch-f20412_3-blue-leather-strap-woman.html",
    "https://festina.com/en-GB/watch/woman/festina/festina-boyfriend-collection-watch-f20475_1-white-steel-bracelet-woman.html",
    "https://festina.com/en-GB/watch/woman/festina/festina-boyfriend-collection-watch-f20475_3-blue-steel-bracelet-woman.html",
    "https://festina.com/en-GB/watch/woman/festina/festina-boyfriend-collection-watch-f20476_1-white-steel-bracelet-woman.html",
    "https://festina.com/en-GB/watch/woman/festina/festina-boyfriend-collection-watch-f20476_2-black-steel-bracelet-woman.html",
    "https://festina.com/en-GB/watch/woman/festina/festina-boyfriend-collection-watch-f20477_1-pink-steel-bracelet-woman.html",
    "https://festina.com/en-GB/watch/woman/festina/festina-boyfriend-collection-watch-f20477_2-black-steel-bracelet-woman.html",
    "https://festina.com/en-GB/watch/woman/festina/festina-ceramic-watch-f16530_3-white-steel-bracelet-woman.html",
    "https://festina.com/en-GB/watch/woman/festina/festina-ceramic-watch-f20474_2-white-steel-bracelet-woman.html",
    "https://festina.com/en-GB/watch/woman/festina/festina-ceramic-watch-f20474_4-black-steel-bracelet-woman.html",
    "https://festina.com/en-GB/watch/woman/festina/festina-ceramic-watch-f20499_1-white-steel-bracelet-woman.html",
    "https://festina.com/en-GB/watch/woman/festina/festina-classic-steel-watch-f16375_7-silver-colour-steel-bracelet-woman.html",
    "https://festina.com/en-GB/watch/woman/festina/festina-classic-steel-watch-f16375_9-silver-colour-steel-bracelet-woman.html",
    "https://festina.com/en-GB/watch/woman/festina/festina-classic-steel-watch-f16748_1-white-steel-bracelet-woman.html",
    "https://festina.com/en-GB/watch/woman/festina/festina-classic-steel-watch-f20438_c-black-steel-bracelet-woman.html",
    "https://festina.com/en-GB/watch/woman/festina/festina-classic-steel-watch-f20447_1-white-leather-strap-woman.html",
    "https://festina.com/en-GB/watch/woman/festina/festina-classic-steel-watch-f20455_1-silver-colour-steel-bracelet-woman.html",
    "https://festina.com/en-GB/watch/woman/festina/festina-classic-steel-watch-f20455_2-pink-steel-bracelet-woman.html",
    "https://festina.com/en-GB/watch/woman/festina/festina-classic-steel-watch-f20455_3-blue-steel-bracelet-woman.html",
    "https://festina.com/en-GB/watch/woman/festina/festina-classic-steel-watch-f20456_3-blue-leather-strap-woman.html",
    "https://festina.com/en-GB/watch/woman/festina/festina-mademoiselle-watch-f16936_a-silver-colour-steel-bracelet-woman.html",
    "https://festina.com/en-GB/watch/woman/festina/festina-mademoiselle-watch-f16936_b-silver-colour-steel-bracelet-woman.html",
    "https://festina.com/en-GB/watch/woman/festina/festina-mademoiselle-watch-f16937_a-silver-colour-steel-bracelet-woman.html",
    "https://festina.com/en-GB/watch/woman/festina/festina-mademoiselle-watch-f16937_b-golden-steel-bracelet-woman.html",
    "https://festina.com/en-GB/watch/woman/festina/festina-mademoiselle-watch-f16937_d-silver-colour-steel-bracelet-woman.html",
    "https://festina.com/en-GB/watch/woman/festina/festina-mademoiselle-watch-f16940_a-silver-colour-steel-bracelet-woman.html",
    "https://festina.com/en-GB/watch/woman/festina/festina-mademoiselle-watch-f16940_d-grey-steel-bracelet-woman.html",
    "https://festina.com/en-GB/watch/woman/festina/festina-mademoiselle-watch-f20382_3-black-steel-bracelet-woman.html",
    "https://festina.com/en-GB/watch/woman/festina/festina-mademoiselle-watch-f20385_1-silver-colour-steel-bracelet-woman.html",
    "https://festina.com/en-GB/watch/woman/festina/festina-mademoiselle-watch-f20496_2-black-steel-bracelet-woman.html",
    "https://festina.com/en-GB/watch/woman/festina/festina-petite-watch-f20247_2-silver-colour-steel-bracelet-woman.html",
    "https://festina.com/en-GB/watch/woman/festina/festina-petite-watch-f20312_1-white-steel-bracelet-woman.html",
    "https://festina.com/en-GB/watch/woman/festina/festina-pocket-watch-f2032_1-white-woman.html",
    "https://festina.com/en-GB/watch/woman/festina/festina-pocket-watch-f2033_1-white-woman.html",
    "https://festina.com/en-GB/watch/woman/festina/festina-womans-black-steel-watch-bracelete-f16395_2.html",
    "https://festina.com/en-GB/watch/woman/festina/festina-womans-black-steel-watch-bracelete-f16536_2.html",
    "https://festina.com/en-GB/watch/woman/festina/festina-womans-black-steel-watch-bracelete-f16748_4.html",
    "https://festina.com/en-GB/watch/woman/festina/festina-womans-black-steel-watch-bracelete-f20311_2.html",
    "https://festina.com/en-GB/watch/woman/festina/festina-womans-black-steel-watch-bracelete-f20385_3.html",
    "https://festina.com/en-GB/watch/woman/festina/festina-womans-blue-leather-watch-bracelete-f20334_2.html",
    "https://festina.com/en-GB/watch/woman/festina/festina-womans-blue-steel-watch-bracelete-f16748_3.html",
    "https://festina.com/en-GB/watch/woman/festina/festina-womans-grey-leather-watch-bracelete-f20412_4.html",
    "https://festina.com/en-GB/watch/woman/festina/festina-womans-grey-steel-watch-bracelete-f20216_2.html",
    "https://festina.com/en-GB/watch/woman/festina/festina-womans-nacre-steel-watch-bracelete-f20422_1.html",
    "https://festina.com/en-GB/watch/woman/festina/festina-womans-pink-leather-watch-bracelete-f20415_2.html",
    "https://festina.com/en-GB/watch/woman/festina/festina-womans-pink-leather-watch-bracelete-f20456_2.html",
    "https://festina.com/en-GB/watch/woman/festina/festina-womans-pink-steel-watch-bracelete-f20211_1.html",
    "https://festina.com/en-GB/watch/woman/festina/festina-womans-pink-steel-watch-bracelete-f20240_3.html",
    "https://festina.com/en-GB/watch/woman/festina/festina-womans-pink-steel-watch-bracelete-f20384_2.html",
    "https://festina.com/en-GB/watch/woman/festina/festina-womans-silver-leather-watch-bracelete-f16479_3.html",
    "https://festina.com/en-GB/watch/woman/festina/festina-womans-silver-leather-watch-bracelete-f20334_1.html",
    "https://festina.com/en-GB/watch/woman/festina/festina-womans-silver-leather-watch-bracelete-f20406_1.html",
    "https://festina.com/en-GB/watch/woman/festina/festina-womans-silver-steel-watch-bracelete-f16530_1.html",
    "https://festina.com/en-GB/watch/woman/festina/festina-womans-silver-steel-watch-bracelete-f16536_1.html",
    "https://festina.com/en-GB/watch/woman/festina/festina-womans-silver-steel-watch-bracelete-f20216_1.html",
    "https://festina.com/en-GB/watch/woman/festina/festina-womans-silver-steel-watch-bracelete-f20315_1.html",
    "https://festina.com/en-GB/watch/woman/festina/festina-womans-silver-steel-watch-bracelete-f20319_1.html",
    "https://festina.com/en-GB/watch/woman/festina/festina-womans-silver-steel-watch-bracelete-f20320_1.html",
    "https://festina.com/en-GB/watch/woman/festina/festina-womans-silver-steel-watch-bracelete-f20320_2.html",
    "https://festina.com/en-GB/watch/woman/festina/festina-womans-white-leather-watch-bracelete-f16479_1.html",
    "https://festina.com/en-GB/watch/woman/festina/festina-womans-white-steel-watch-bracelete-f16377_1.html",
    "https://festina.com/en-GB/watch/woman/festina/festina-womans-white-steel-watch-bracelete-f16534_1.html",
    "https://festina.com/en-GB/watch/woman/festina/festina-womans-white-steel-watch-bracelete-f16536_3.html",
    "https://festina.com/en-GB/watch/woman/festina/festina-womans-white-steel-watch-bracelete-f20241_2.html",
    "https://festina.com/en-GB/watch/woman/festina/festina-womans-white-steel-watch-bracelete-f20312_2.html",
];

module.exports = u;