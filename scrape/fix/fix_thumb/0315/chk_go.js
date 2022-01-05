const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const u = [
  "https://www.glashuette-original.com/collection/senator/senator-tourbillon-edition-alfred-helwig/1-94-03-05-04-30",
  "https://www.glashuette-original.com/collection/senator/senator-tourbillon/1-94-03-04-04-04",
  "https://www.glashuette-original.com/collection/senator/senator-chronometer-tourbillon-limited-edition/1-58-05-01-03-30",
  "https://www.glashuette-original.com/collection/senator/senator-chronometer/1-58-01-02-05-01",
  "https://www.glashuette-original.com/collection/senator/senator-chronometer/1-58-01-05-34-30",
  "https://www.glashuette-original.com/collection/senator/senator-chronometer-regulator/1-58-04-04-05-04",
  "https://www.glashuette-original.com/collection/senator/senator-chronometer-regulator/1-58-04-04-04-04",
  "https://www.glashuette-original.com/collection/senator/senator-manual-winding-skeletonized-edition/1-49-18-01-05-30",
  "https://www.glashuette-original.com/collection/senator/senator-cosmopolite/1-89-02-03-02-01",
  "https://www.glashuette-original.com/collection/senator/senator-cosmopolite/1-89-02-01-04-30",
  "https://www.glashuette-original.com/collection/senator/senator-cosmopolite/1-89-02-01-05-30",
  "https://www.glashuette-original.com/collection/senator/senator-chronograph-panorama-date/1-37-01-05-02-07",
  "https://www.glashuette-original.com/collection/senator/senator-chronograph-panorama-date/1-37-01-05-02-06",
  "https://www.glashuette-original.com/collection/senator/senator-chronograph-panorama-date/1-37-01-05-02-70",
  "https://www.glashuette-original.com/collection/senator/senator-chronograph-panorama-date/1-37-01-02-03-30",
  "https://www.glashuette-original.com/collection/senator/senator-chronograph-panorama-date/1-37-01-01-05-30",
  "https://www.glashuette-original.com/collection/senator/senator-chronograph-panorama-date/1-37-01-03-02-35",
  "https://www.glashuette-original.com/collection/senator/senator-chronograph-panorama-date/1-37-01-03-02-33",
  "https://www.glashuette-original.com/collection/senator/senator-chronograph-panorama-date/1-37-01-03-02-70",
  "https://www.glashuette-original.com/collection/senator/senator-excellence-perpetual-calendar/1-36-02-03-04-01",
  "https://www.glashuette-original.com/collection/senator/senator-excellence-perpetual-calendar/1-36-02-02-05-30",
  "https://www.glashuette-original.com/collection/senator/senator-excellence-perpetual-calendar/1-36-02-01-02-30",
  "https://www.glashuette-original.com/collection/senator/senator-excellence-perpetual-calendar/1-36-02-01-02-70",
  "https://www.glashuette-original.com/collection/senator/senator-excellence-panorama-date-moon-phase/1-36-04-03-02-02",
  "https://www.glashuette-original.com/collection/senator/senator-excellence-panorama-date-moon-phase/1-36-04-03-02-70",
  "https://www.glashuette-original.com/collection/senator/senator-excellence-panorama-date-moon-phase/1-36-04-04-02-01",
  "https://www.glashuette-original.com/collection/senator/senator-excellence-panorama-date-moon-phase/1-36-04-04-02-70",
  "https://www.glashuette-original.com/collection/senator/senator-excellence-panorama-date-moon-phase/1-36-04-05-02-02",
  "https://www.glashuette-original.com/collection/senator/senator-excellence-panorama-date-moon-phase/1-36-04-05-02-70",
  "https://www.glashuette-original.com/collection/senator/senator-excellence-panorama-date-moon-phase/1-36-04-02-05-30",
  "https://www.glashuette-original.com/collection/senator/senator-excellence-panorama-date-moon-phase/1-36-04-01-02-30",
  "https://www.glashuette-original.com/collection/senator/senator-excellence-panorama-date-moon-phase/1-36-04-01-02-70",
  "https://www.glashuette-original.com/collection/senator/senator-excellence-panorama-date/1-36-03-03-02-02",
  "https://www.glashuette-original.com/collection/senator/senator-excellence-panorama-date/1-36-03-03-02-70",
  "https://www.glashuette-original.com/collection/senator/senator-excellence-panorama-date/1-36-03-04-02-01",
  "https://www.glashuette-original.com/collection/senator/senator-excellence-panorama-date/1-36-03-04-02-70",
  "https://www.glashuette-original.com/collection/senator/senator-excellence-panorama-date/1-36-03-05-02-02",
  "https://www.glashuette-original.com/collection/senator/senator-excellence-panorama-date/1-36-03-05-02-70",
  "https://www.glashuette-original.com/collection/senator/senator-excellence-panorama-date/1-36-03-02-05-30",
  "https://www.glashuette-original.com/collection/senator/senator-excellence-panorama-date/1-36-03-01-02-30",
  "https://www.glashuette-original.com/collection/senator/senator-excellence-panorama-date/1-36-03-01-02-70",
  "https://www.glashuette-original.com/collection/senator/senator-excellence/1-36-01-01-02-30",
  "https://www.glashuette-original.com/collection/senator/senator-excellence/1-36-01-02-05-30",
  "https://www.glashuette-original.com/collection/senator/senator-excellence/1-36-01-03-02-30",
  "https://www.glashuette-original.com/collection/senator/senator-observer/100-14-07-02-30",
  "https://www.glashuette-original.com/collection/senator/senator-observer/100-14-07-02-70",
  "https://www.glashuette-original.com/collection/senator/senator-observer/100-14-05-02-04",
  "https://www.glashuette-original.com/collection/senator/senator-observer/100-14-05-02-05",
  "https://www.glashuette-original.com/collection/senator/senator-observer/100-14-05-02-14",
  "https://www.glashuette-original.com/collection/senator/senator-observer/100-14-02-02-05",
  "https://www.glashuette-original.com/collection/senator/senator-observer/100-14-02-02-04",
  "https://www.glashuette-original.com/collection/senator/senator-observer/100-14-02-02-14",
  "https://www.glashuette-original.com/collection/pano/panomaticlunar/1-90-02-13-32-02",
  "https://www.glashuette-original.com/collection/pano/panomaticlunar/1-90-02-13-32-70",
  "https://www.glashuette-original.com/collection/pano/panolunartourbillon/1-93-02-05-05-04",
  "https://www.glashuette-original.com/collection/pano/panolunartourbillon/1-93-02-05-05-05",
  "https://www.glashuette-original.com/collection/pano/panoinverse-limited-edition/1-66-08-01-03-30",
  "https://www.glashuette-original.com/collection/pano/panoinverse/1-66-06-04-22-05",
  "https://www.glashuette-original.com/collection/pano/panoinverse/1-66-06-04-22-14",
  "https://www.glashuette-original.com/collection/pano/panomaticinverse/1-91-02-01-05-30",
  "https://www.glashuette-original.com/collection/pano/panomaticinverse/1-91-02-02-02-30",
  "https://www.glashuette-original.com/collection/pano/panomaticinverse/1-91-02-02-02-70",
  "https://www.glashuette-original.com/collection/pano/panomaticlunar/1-90-02-12-32-01",
  "https://www.glashuette-original.com/collection/pano/panomaticlunar/1-90-02-11-35-01",
  "https://www.glashuette-original.com/collection/pano/panomaticlunar/1-90-02-45-35-05",
  "https://www.glashuette-original.com/collection/pano/panomaticlunar/1-90-02-45-35-04",
  "https://www.glashuette-original.com/collection/pano/panomaticlunar/1-90-02-49-35-30",
  "https://www.glashuette-original.com/collection/pano/panomaticlunar/1-90-02-42-32-05",
  "https://www.glashuette-original.com/collection/pano/panomaticlunar/1-90-02-42-32-24",
  "https://www.glashuette-original.com/collection/pano/panomaticlunar/1-90-02-43-32-05",
  "https://www.glashuette-original.com/collection/pano/panomaticlunar/1-90-02-43-32-24",
  "https://www.glashuette-original.com/collection/pano/panomaticlunar/1-90-02-46-32-35",
  "https://www.glashuette-original.com/collection/pano/panomaticlunar/1-90-02-46-32-70",
  "https://www.glashuette-original.com/collection/pano/panoreserve/1-65-01-25-15-04",
  "https://www.glashuette-original.com/collection/pano/panoreserve/1-65-01-25-15-05",
  "https://www.glashuette-original.com/collection/pano/panoreserve/1-65-01-29-15-30",
  "https://www.glashuette-original.com/collection/pano/panoreserve/1-65-01-22-12-04",
  "https://www.glashuette-original.com/collection/pano/panoreserve/1-65-01-22-12-24",
  "https://www.glashuette-original.com/collection/pano/panoreserve/1-65-01-23-12-04",
  "https://www.glashuette-original.com/collection/pano/panoreserve/1-65-01-23-12-24",
  "https://www.glashuette-original.com/collection/pano/panoreserve/1-65-01-26-12-35",
  "https://www.glashuette-original.com/collection/pano/panoreserve/1-65-01-04-15-01",
  "https://www.glashuette-original.com/collection/pano/panoreserve/1-65-01-26-12-70",
  "https://www.glashuette-original.com/collection/pano/panograph/1-61-03-25-15-04",
  "https://www.glashuette-original.com/collection/pano/panograph/1-61-03-25-15-05",
  "https://www.glashuette-original.com/collection/pano/panomaticcounter-xl/1-96-01-02-02-01",
  "https://www.glashuette-original.com/collection/spezialist/seaq-1969/1-39-11-01-80-06",
  "https://www.glashuette-original.com/collection/spezialist/seaq-1969/1-39-11-01-80-08",
  "https://www.glashuette-original.com/collection/spezialist/seaq/1-39-11-06-80-70",
  "https://www.glashuette-original.com/collection/spezialist/seaq/1-39-11-06-80-06",
  "https://www.glashuette-original.com/collection/spezialist/seaq/1-39-11-06-80-08",
  "https://www.glashuette-original.com/collection/seaq-panorama-date-black-steel/1-36-13-01-80-70",
  "https://www.glashuette-original.com/collection/spezialist/seaq-panorama-date/1-36-13-01-80-06",
  "https://www.glashuette-original.com/collection/spezialist/seaq-panorama-date/1-36-13-01-80-08",
  "https://www.glashuette-original.com/collection/spezialist/seaq-panorama-date/1-36-13-02-81-70",
  "https://www.glashuette-original.com/collection/spezialist/seaq-panorama-date/1-36-13-02-81-06",
  "https://www.glashuette-original.com/collection/spezialist/seaq-panorama-date/1-36-13-02-81-08",
  "https://www.glashuette-original.com/collection/vintage/sixties/1-39-52-14-02-04",
  "https://www.glashuette-original.com/collection/vintage/sixties-chronograph/1-39-34-04-22-04",
  "https://www.glashuette-original.com/collection/vintage/seventies-chronograph-panorama-date/1-37-02-05-02-35",
  "https://www.glashuette-original.com/collection/vintage/seventies-chronograph-panorama-date/1-37-02-04-02-35",
  "https://www.glashuette-original.com/collection/vintage/seventies-chronograph-panorama-date/1-37-02-02-02-30",
  "https://www.glashuette-original.com/collection/vintage/seventies-chronograph-panorama-date/1-37-02-02-02-33",
  "https://www.glashuette-original.com/collection/vintage/seventies-chronograph-panorama-date/1-37-02-02-02-70",
  "https://www.glashuette-original.com/collection/vintage/seventies-chronograph-panorama-date/1-37-02-01-02-30",
  "https://www.glashuette-original.com/collection/vintage/seventies-chronograph-panorama-date/1-37-02-01-02-33",
  "https://www.glashuette-original.com/collection/vintage/seventies-chronograph-panorama-date/1-37-02-01-02-70",
  "https://www.glashuette-original.com/collection/vintage/seventies-chronograph-panorama-date/1-37-02-03-02-30",
  "https://www.glashuette-original.com/collection/vintage/seventies-chronograph-panorama-date/1-37-02-03-02-33",
  "https://www.glashuette-original.com/collection/vintage/seventies-chronograph-panorama-date/1-37-02-03-02-70",
  "https://www.glashuette-original.com/collection/vintage/seventies-panorama-date/2-39-47-12-12-04",
  "https://www.glashuette-original.com/collection/vintage/seventies-panorama-date/2-39-47-12-12-06",
  "https://www.glashuette-original.com/collection/vintage/seventies-panorama-date/2-39-47-12-12-14",
  "https://www.glashuette-original.com/collection/vintage/seventies-panorama-date/2-39-47-13-12-04",
  "https://www.glashuette-original.com/collection/vintage/seventies-panorama-date/2-39-47-13-12-06",
  "https://www.glashuette-original.com/collection/vintage/seventies-panorama-date/2-39-47-13-12-14",
  "https://www.glashuette-original.com/collection/vintage/sixties-panorama-date/2-39-47-01-01-04",
  "https://www.glashuette-original.com/collection/vintage/sixties-panorama-date/2-39-47-02-01-04",
  "https://www.glashuette-original.com/collection/vintage/sixties-panorama-date/2-39-47-01-02-04",
  "https://www.glashuette-original.com/collection/vintage/sixties-panorama-date/2-39-47-03-02-04",
  "https://www.glashuette-original.com/collection/vintage/sixties-panorama-date/2-39-47-06-02-04",
  "https://www.glashuette-original.com/collection/vintage/sixties/1-39-52-01-01-04",
  "https://www.glashuette-original.com/collection/vintage/sixties/1-39-52-02-01-04",
  "https://www.glashuette-original.com/collection/vintage/sixties/1-39-52-01-02-04",
  "https://www.glashuette-original.com/collection/vintage/sixties/1-39-52-04-02-04",
  "https://www.glashuette-original.com/collection/vintage/sixties/1-39-52-06-02-04",
  "https://www.glashuette-original.com/collection/vintage/sixties-chronograph/1-39-34-03-22-04",
  "https://www.glashuette-original.com/collection/vintage/sixties-chronograph/1-39-34-02-22-04",
  "https://www.glashuette-original.com/collection/ladies/panomatic-luna/1-90-12-05-30-01",
  "https://www.glashuette-original.com/collection/ladies/panomatic-luna/1-90-12-03-12-02",
  "https://www.glashuette-original.com/collection/ladies/panomatic-luna/1-90-12-01-12-01",
  "https://www.glashuette-original.com/collection/ladies/panomatic-luna/1-90-12-01-12-02",
  "https://www.glashuette-original.com/collection/ladies/panomatic-luna/1-90-12-01-12-04",
  "https://www.glashuette-original.com/collection/ladies/panomatic-luna/1-90-12-02-12-02",
  "https://www.glashuette-original.com/collection/ladies/panomatic-luna/1-90-12-02-12-04",
  "https://www.glashuette-original.com/collection/ladies/lady-serenade/1-39-22-10-30-04",
  "https://www.glashuette-original.com/collection/ladies/lady-serenade/1-39-22-18-11-04",
  "https://www.glashuette-original.com/collection/ladies/lady-serenade/1-39-22-18-01-04",
  "https://www.glashuette-original.com/collection/ladies/lady-serenade/1-39-22-20-22-04",
  "https://www.glashuette-original.com/collection/ladies/lady-serenade/1-39-22-20-22-34",
  "https://www.glashuette-original.com/collection/ladies/lady-serenade/1-39-22-20-02-04",
  "https://www.glashuette-original.com/collection/ladies/lady-serenade/1-39-22-20-02-34",
  "https://www.glashuette-original.com/collection/ladies/lady-serenade/1-39-22-09-16-04",
  "https://www.glashuette-original.com/collection/ladies/lady-serenade/1-39-22-09-16-34",
  "https://www.glashuette-original.com/collection/ladies/lady-serenade/1-39-22-09-06-04",
  "https://www.glashuette-original.com/collection/ladies/lady-serenade/1-39-22-09-06-34",
  "https://www.glashuette-original.com/collection/ladies/lady-serenade/1-39-22-09-11-04",
  "https://www.glashuette-original.com/collection/ladies/lady-serenade/1-39-22-09-01-04",
  "https://www.glashuette-original.com/collection/ladies/lady-serenade/1-39-22-11-22-04",
  "https://www.glashuette-original.com/collection/ladies/lady-serenade/1-39-22-11-22-34",
  "https://www.glashuette-original.com/collection/ladies/lady-serenade/1-39-22-11-02-04",
  "https://www.glashuette-original.com/collection/ladies/lady-serenade/1-39-22-11-02-34",
  "https://www.glashuette-original.com/collection/ladies/lady-serenade/1-39-22-12-11-04",
  "https://www.glashuette-original.com/collection/ladies/lady-serenade/1-39-22-12-01-04",
  "https://www.glashuette-original.com/collection/ladies/lady-serenade/1-39-22-12-22-04",
  "https://www.glashuette-original.com/collection/ladies/lady-serenade/1-39-22-12-22-34",
  "https://www.glashuette-original.com/collection/ladies/lady-serenade/1-39-22-12-02-04",
  "https://www.glashuette-original.com/collection/ladies/lady-serenade/1-39-22-12-02-34",
  "https://www.glashuette-original.com/collection/ladies/lady-serenade/1-39-22-04-11-04",
  "https://www.glashuette-original.com/collection/ladies/lady-serenade/1-39-22-04-01-04",
  "https://www.glashuette-original.com/collection/ladies/lady-serenade/1-39-22-02-22-04",
  "https://www.glashuette-original.com/collection/ladies/lady-serenade/1-39-22-02-22-34",
  "https://www.glashuette-original.com/collection/ladies/lady-serenade/1-39-22-02-02-04",
  "https://www.glashuette-original.com/collection/ladies/lady-serenade/1-39-22-02-02-34",
  "https://www.glashuette-original.com/collection/ladies/lady-serenade/1-39-22-08-22-04",
  "https://www.glashuette-original.com/collection/ladies/lady-serenade/1-39-22-08-22-34",
  "https://www.glashuette-original.com/collection/ladies/lady-serenade/1-39-22-08-02-04",
  "https://www.glashuette-original.com/collection/ladies/lady-serenade/1-39-22-08-02-34",
  "https://www.glashuette-original.com/collection/ladies/pavonina/1-03-02-05-05-31",
  "https://www.glashuette-original.com/collection/ladies/pavonina/1-03-02-05-05-30",
  "https://www.glashuette-original.com/collection/ladies/pavonina/1-03-02-05-05-14",
  "https://www.glashuette-original.com/collection/ladies/pavonina/1-03-02-05-16-30",
  "https://www.glashuette-original.com/collection/ladies/pavonina/1-03-02-05-16-31",
  "https://www.glashuette-original.com/collection/ladies/pavonina/1-03-02-05-16-35",
  "https://www.glashuette-original.com/collection/ladies/pavonina/1-03-02-05-06-14",
  "https://www.glashuette-original.com/collection/ladies/pavonina/1-03-02-05-12-30",
  "https://www.glashuette-original.com/collection/ladies/pavonina/1-03-02-05-12-31",
  "https://www.glashuette-original.com/collection/ladies/pavonina/1-03-02-05-12-14",
  "https://www.glashuette-original.com/collection/ladies/pavonina/1-03-02-05-02-30",
  "https://www.glashuette-original.com/collection/ladies/pavonina/1-03-02-05-02-31",
  "https://www.glashuette-original.com/collection/ladies/pavonina/1-03-02-05-02-14",
  "https://www.glashuette-original.com/collection/ladies/pavonina-date/1-03-01-05-34-30",
  "https://www.glashuette-original.com/collection/ladies/pavonina-date/1-03-01-03-15-34",
  "https://www.glashuette-original.com/collection/ladies/pavonina-date/1-03-01-03-15-11",
  "https://www.glashuette-original.com/collection/ladies/pavonina-date/1-03-01-04-15-35",
  "https://www.glashuette-original.com/collection/ladies/pavonina-date/1-03-01-04-15-11",
  "https://www.glashuette-original.com/collection/ladies/pavonina/1-03-02-04-05-30",
  "https://www.glashuette-original.com/collection/ladies/pavonina/1-03-02-04-05-14",
  "https://www.glashuette-original.com/collection/ladies/pavonina/1-03-02-09-05-30",
  "https://www.glashuette-original.com/collection/ladies/pavonina/1-03-02-09-05-14",
  "https://www.glashuette-original.com/collection/ladies/pavonina-date/1-03-01-08-05-34",
  "https://www.glashuette-original.com/collection/ladies/pavonina-date/1-03-01-08-05-14",
  "https://www.glashuette-original.com/collection/ladies/pavonina-date/1-03-01-28-05-30",
  "https://www.glashuette-original.com/collection/ladies/pavonina-date/1-03-01-28-05-14",
  "https://www.glashuette-original.com/collection/ladies/pavonina/1-03-02-04-16-14",
  "https://www.glashuette-original.com/collection/ladies/pavonina/1-03-02-04-16-34",
  "https://www.glashuette-original.com/collection/ladies/pavonina-date/1-03-01-08-16-34",
  "https://www.glashuette-original.com/collection/ladies/pavonina-date/1-03-01-08-06-14",
  "https://www.glashuette-original.com/collection/ladies/pavonina-date/1-03-01-25-16-34",
  "https://www.glashuette-original.com/collection/ladies/pavonina-date/1-03-01-25-06-14",
  "https://www.glashuette-original.com/collection/ladies/pavonina/1-03-02-03-06-34",
  "https://www.glashuette-original.com/collection/ladies/pavonina/1-03-02-03-06-14",
  "https://www.glashuette-original.com/collection/ladies/pavonina-date/1-03-01-26-06-34",
  "https://www.glashuette-original.com/collection/ladies/pavonina-date/1-03-01-26-06-14",
  "https://www.glashuette-original.com/collection/ladies/pavonina-date/1-03-01-27-06-34",
  "https://www.glashuette-original.com/collection/ladies/pavonina-date/1-03-01-27-06-14",
  "https://www.glashuette-original.com/collection/ladies/pavonina/1-03-02-06-12-34",
  "https://www.glashuette-original.com/collection/ladies/pavonina/1-03-02-06-12-14",
  "https://www.glashuette-original.com/collection/ladies/pavonina/1-03-02-12-12-35",
  "https://www.glashuette-original.com/collection/ladies/pavonina/1-03-02-12-12-14",
  "https://www.glashuette-original.com/collection/ladies/pavonina/1-03-02-10-02-34",
  "https://www.glashuette-original.com/collection/ladies/pavonina/1-03-02-10-02-14",
  "https://www.glashuette-original.com/collection/ladies/pavonina-date/1-03-01-06-12-34",
  "https://www.glashuette-original.com/collection/ladies/pavonina-date/1-03-01-06-12-14",
  "https://www.glashuette-original.com/collection/ladies/pavonina-date/1-03-01-15-02-34",
  "https://www.glashuette-original.com/collection/ladies/pavonina/1-03-01-15-02-14",
  "https://www.glashuette-original.com/collection/ladies/pavonina-date/1-03-01-14-02-34",
  "https://www.glashuette-original.com/collection/ladies/pavonina-date/1-03-01-14-02-14",
  "https://www.glashuette-original.com/collection/ladies/pavonina-date/1-03-01-10-12-14",
  "https://www.glashuette-original.com/collection/ladies/pavonina-date/1-03-01-10-12-34",
  "https://www.glashuette-original.com/collection/ladies/panomatic-luna/1-90-12-06-12-01",
  "https://www.glashuette-original.com/collection/senator/senator-moon-phase-skeletonized-edition/1-49-13-15-04-30",
  "https://www.glashuette-original.com/collection/senator/alfred-helwig-tourbillon-1920-limited-edition/1-54-01-01-01-01",
  "https://www.glashuette-original.com/collection/senator/senator-tourbillon-%E2%80%93-edition-alfred-helwig/1-94-03-05-04-30",
  "https://www.glashuette-original.com/collection/senator/senator-chronometer-limited-edition/1-58-03-01-04-30",
  "https://www.glashuette-original.com/collection/senator/senator-cosmopolite/1-89-02-05-02-01",
  "https://www.glashuette-original.com/collection/senator/senator-cosmopolite/1-89-02-05-02-70",
  "https://www.glashuette-original.com/collection/pano/panolunartourbillon-%E2%80%93-limited-edition/1-93-12-01-03-30",
  "https://www.glashuette-original.com/collection/pano/panoinverse-%E2%80%93-limited-edition/1-66-08-01-03-30",
  "https://www.glashuette-original.com/collection/spezialist/seaq/1-39-11-09-81-08",
  "https://www.glashuette-original.com/collection/spezialist/seaq/1-39-11-09-81-06",
  "https://www.glashuette-original.com/collection/spezialist/seaq/1-39-11-09-81-70",
  "https://www.glashuette-original.com/collection/spezialist/seaq/1-39-11-09-82-08",
  "https://www.glashuette-original.com/collection/spezialist/seaq/1-39-11-09-82-70",
  "https://www.glashuette-original.com/collection/spezialist/seaq-panorama-date/1-36-13-03-90-34",
  "https://www.glashuette-original.com/collection/spezialist/seaq-panorama-date/1-36-13-03-90-33",
  "https://www.glashuette-original.com/collection/spezialist/seaq-panorama-date/1-36-13-04-91-08",
  "https://www.glashuette-original.com/collection/spezialist/seaq-panorama-date/1-36-13-04-91-06",
];

(async () => {
  let redi = 0;
  for (let i = 0; i < u.length; i++) {
    try {
      const { data } = await axios.get(u[i]);
      const $ = cheerio.load(data);
      const url = $('meta[property="og:url"]').attr('content');
      if (url !== u[i]) {
        console.log('redirected : ', u[i]);
        console.log('             ', url);
        redi++;
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        const cmd = `db.reference_product.updateMany({url: "${u[i]}"},{$set:{code:404,updateBy:"LCC",updatedOn:new Date()}})\n`;
        fs.appendFile('up_go404.txt', cmd, (err) => { if (err) throw err; });
      }
    }
  }
  console.log();
  console.log(u.length, redi);
  console.log('done.')
  process.exit(0);
})();