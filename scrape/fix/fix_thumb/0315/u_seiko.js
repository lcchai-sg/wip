const u = [
  "https://www.seikowatches.com/in-en/products/discovermore/SRZ450P1",
  "https://www.seikowatches.com/jp-ja/special/products/en/astron/SBXC001",
  "https://www.seikowatches.com/jp-ja/special/products/en/astron/SBXC003",
  "https://www.seikowatches.com/jp-ja/special/products/en/astron/SBXC004",
  "https://www.seikowatches.com/jp-ja/special/products/en/astron/SBXC006",
  "https://www.seikowatches.com/jp-ja/special/products/en/astron/SBXC009",
  "https://www.seikowatches.com/jp-ja/special/products/en/astron/SBXC011",
  "https://www.seikowatches.com/jp-ja/special/products/en/astron/SBXC013",
  "https://www.seikowatches.com/jp-ja/special/products/en/astron/SBXC015",
  "https://www.seikowatches.com/jp-ja/special/products/en/astron/SBXC019",
  "https://www.seikowatches.com/jp-ja/special/products/en/astron/SBXC021",
  "https://www.seikowatches.com/jp-ja/special/products/en/astron/SBXC023",
  "https://www.seikowatches.com/jp-ja/special/products/en/astron/SBXC024",
  "https://www.seikowatches.com/jp-ja/special/products/en/astron/SBXC025",
  "https://www.seikowatches.com/jp-ja/special/products/en/astron/SBXC027",
  "https://www.seikowatches.com/jp-ja/special/products/en/astron/SBXC029",
  "https://www.seikowatches.com/jp-ja/special/products/en/astron/SBXC031",
  "https://www.seikowatches.com/jp-ja/special/products/en/astron/SBXC033",
  "https://www.seikowatches.com/jp-ja/special/products/en/astron/SBXC034",
  "https://www.seikowatches.com/jp-ja/special/products/en/astron/SBXC035",
  "https://www.seikowatches.com/jp-ja/special/products/en/astron/SBXC037",
  "https://www.seikowatches.com/jp-ja/special/products/en/astron/SBXC039",
  "https://www.seikowatches.com/jp-ja/special/products/en/astron/SBXC043",
  "https://www.seikowatches.com/jp-ja/special/products/en/astron/SBXC045",
  "https://www.seikowatches.com/jp-ja/special/products/en/astron/SBXC047",
  "https://www.seikowatches.com/jp-ja/special/products/en/astron/SBXC049",
  "https://www.seikowatches.com/jp-ja/special/products/en/astron/SBXC051",
  "https://www.seikowatches.com/jp-ja/special/products/en/astron/SBXC053",
  "https://www.seikowatches.com/jp-ja/special/products/en/astron/SBXC055",
  "https://www.seikowatches.com/jp-ja/special/products/en/astron/SBXC057",
  "https://www.seikowatches.com/jp-ja/special/products/en/astron/SBXC059",
  "https://www.seikowatches.com/jp-ja/special/products/en/astron/SBXC060",
  "https://www.seikowatches.com/jp-ja/special/products/en/astron/SBXC062",
  "https://www.seikowatches.com/jp-ja/special/products/en/astron/SBXC063",
  "https://www.seikowatches.com/jp-ja/special/products/en/astron/SBXC065",
  "https://www.seikowatches.com/jp-ja/special/products/en/astron/SBXC067",
  "https://www.seikowatches.com/jp-ja/special/products/en/astron/SBXC069",
  "https://www.seikowatches.com/jp-ja/special/products/en/astron/SBXC071",
  "https://www.seikowatches.com/jp-ja/special/products/en/astron/SBXC073",
  "https://www.seikowatches.com/jp-ja/special/products/en/astron/SBXC075",
  "https://www.seikowatches.com/jp-ja/special/products/en/astron/SBXC077",
  "https://www.seikowatches.com/jp-ja/special/products/en/astron/SBXC079",
  "https://www.seikowatches.com/jp-ja/special/products/en/astron/SBXC081",
  "https://www.seikowatches.com/jp-ja/special/products/en/astron/SBXC085",
  "https://www.seikowatches.com/jp-ja/special/products/en/astron/SBXC087",
  "https://www.seikowatches.com/jp-ja/special/products/en/astron/SBXC088",
  "https://www.seikowatches.com/jp-ja/special/products/en/astron/SBXC089",
  "https://www.seikowatches.com/jp-ja/special/products/en/astron/SBXD002",
  "https://www.seikowatches.com/jp-ja/special/products/en/astron/STXD001",
  "https://www.seikowatches.com/jp-ja/special/products/en/astron/STXD002",
  "https://www.seikowatches.com/jp-ja/special/products/en/astron/STXD004",
  "https://www.seikowatches.com/jp-ja/special/products/en/astron/STXD005",
  "https://www.seikowatches.com/jp-ja/special/products/en/astron/STXD007",
  "https://www.seikowatches.com/jp-ja/special/products/en/astron/STXD009",
  "https://www.seikowatches.com/jp-ja/special/products/en/astron/STXD011",
  "https://www.seikowatches.com/jp-ja/special/products/en/prospex/SBBN045",
  "https://www.seikowatches.com/jp-ja/special/products/en/prospex/SBBN047",
  "https://www.seikowatches.com/jp-ja/special/products/en/prospex/SBDB021",
  "https://www.seikowatches.com/jp-ja/special/products/en/prospex/SBDB023",
  "https://www.seikowatches.com/jp-ja/special/products/en/prospex/SBDB025",
  "https://www.seikowatches.com/jp-ja/special/products/en/prospex/SBDB027",
  "https://www.seikowatches.com/jp-ja/special/products/en/prospex/SBDB029",
  "https://www.seikowatches.com/jp-ja/special/products/en/prospex/SBDB031",
  "https://www.seikowatches.com/jp-ja/special/products/en/prospex/SBDB039",
  "https://www.seikowatches.com/jp-ja/special/products/en/prospex/SBDB041",
  "https://www.seikowatches.com/jp-ja/special/products/en/prospex/SBDC081",
  "https://www.seikowatches.com/jp-ja/special/products/en/prospex/SBDC083",
  "https://www.seikowatches.com/jp-ja/special/products/en/prospex/SBDC087",
  "https://www.seikowatches.com/jp-ja/special/products/en/prospex/SBDC089",
  "https://www.seikowatches.com/jp-ja/special/products/en/prospex/SBDC091",
  "https://www.seikowatches.com/jp-ja/special/products/en/prospex/SBDC101",
  "https://www.seikowatches.com/jp-ja/special/products/en/prospex/SBDC103",
  "https://www.seikowatches.com/jp-ja/special/products/en/prospex/SBDC105",
  "https://www.seikowatches.com/jp-ja/special/products/en/prospex/SBDC109",
  "https://www.seikowatches.com/jp-ja/special/products/en/prospex/SBDC111",
  "https://www.seikowatches.com/jp-ja/special/products/en/prospex/SBDC113",
  "https://www.seikowatches.com/jp-ja/special/products/en/prospex/SBDC114",
  "https://www.seikowatches.com/jp-ja/special/products/en/prospex/SBDC115",
  "https://www.seikowatches.com/jp-ja/special/products/en/prospex/SBDC117",
  "https://www.seikowatches.com/jp-ja/special/products/en/prospex/SBDC119",
  "https://www.seikowatches.com/jp-ja/special/products/en/prospex/SBDC121",
  "https://www.seikowatches.com/jp-ja/special/products/en/prospex/SBDC123",
  "https://www.seikowatches.com/jp-ja/special/products/en/prospex/SBDC125",
  "https://www.seikowatches.com/jp-ja/special/products/en/prospex/SBDC127",
  "https://www.seikowatches.com/jp-ja/special/products/en/prospex/SBDC129",
  "https://www.seikowatches.com/jp-ja/special/products/en/prospex/SBDC131",
  "https://www.seikowatches.com/jp-ja/special/products/en/prospex/SBDJ047",
  "https://www.seikowatches.com/jp-ja/special/products/en/prospex/SBDL057",
  "https://www.seikowatches.com/jp-ja/special/products/en/prospex/SBDL061",
  "https://www.seikowatches.com/jp-ja/special/products/en/prospex/SBDL063",
  "https://www.seikowatches.com/jp-ja/special/products/en/prospex/SBDL067",
  "https://www.seikowatches.com/jp-ja/special/products/en/prospex/SBDX023",
  "https://www.seikowatches.com/jp-ja/special/products/en/prospex/SBDX025",
  "https://www.seikowatches.com/jp-ja/special/products/en/prospex/SBDX038",
  "https://www.seikowatches.com/jp-ja/special/products/en/prospex/SBDX039",
  "https://www.seikowatches.com/jp-ja/special/products/en/prospex/SBDX041",
  "https://www.seikowatches.com/jp-ja/special/products/en/prospex/SBDY025",
  "https://www.seikowatches.com/jp-ja/special/products/en/prospex/SBDY027",
  "https://www.seikowatches.com/jp-ja/special/products/en/prospex/SBDY033",
  "https://www.seikowatches.com/jp-ja/special/products/en/prospex/SBDY035",
  "https://www.seikowatches.com/jp-ja/special/products/en/prospex/SBDY037",
  "https://www.seikowatches.com/jp-ja/special/products/en/prospex/SBDY045",
  "https://www.seikowatches.com/jp-ja/special/products/en/prospex/SBDY047",
  "https://www.seikowatches.com/jp-ja/special/products/en/prospex/SBDY057",
  "https://www.seikowatches.com/jp-ja/special/products/en/prospex/SBDY059",
  "https://www.seikowatches.com/jp-ja/special/products/en/prospex/SBDY061",
  "https://www.seikowatches.com/jp-ja/special/products/en/prospex/SBDY063",
  "https://www.seikowatches.com/jp-ja/special/products/en/prospex/SBDY065",
  "https://www.seikowatches.com/jp-ja/special/products/en/prospex/SBEF045",
  "https://www.seikowatches.com/jp-ja/special/products/en/prospex/SBEF047",
  "https://www.seikowatches.com/jp-ja/special/products/en/prospex/SBEF051",
  "https://www.seikowatches.com/jp-ja/special/products/en/prospex/SBEF055",
  "https://www.seikowatches.com/jp-ja/special/products/en/prospex/SBEP015",
  "https://www.seikowatches.com/jp-ja/special/products/en/prospex/SBEP017",
  "https://www.seikowatches.com/jp-ja/special/products/en/prospex/SBEP019",
  "https://www.seikowatches.com/jp-ja/special/products/en/prospex/SBEQ001",
  "https://www.seikowatches.com/jp-ja/special/products/en/prospex/SBEQ003",
  "https://www.seikowatches.com/jp-ja/special/products/en/prospex/SBEQ007",
  "https://www.seikowatches.com/jp-ja/special/products/en/prospex/SBEQ009",
  "https://www.seikowatches.com/jp-ja/special/products/en/prospex/STBR019",
  "https://www.seikowatches.com/jp-ja/special/products/en/prospex/STBR026",
  "https://www.seikowatches.com/jp-ja/special/products/en/prospex/STBR027",
  "https://www.seikowatches.com/nz-en/products/discovermore/SPL055P1",
  "https://www.seikowatches.com/nz-en/products/discovermore/SPL057P1",
  "https://www.seikowatches.com/nz-en/products/discovermore/SPL060P1",
  "https://www.seikowatches.com/nz-en/products/prospex/SLA039J1",
  "https://www.seikowatches.com/nz-en/products/prospex/SNE498P1",
  "https://www.seikowatches.com/nz-en/products/prospex/SPB149J1",
  "https://www.seikowatches.com/nz-en/products/prospex/SSC761J1",
  "https://www.seikowatches.com/ph-en/products/discovermore/S23589P1",
  "https://www.seikowatches.com/ph-en/products/discovermore/S23601P1",
  "https://www.seikowatches.com/ph-en/products/discovermore/S23603P1",
  "https://www.seikowatches.com/ph-en/products/discovermore/SFQ802P1",
  "https://www.seikowatches.com/ph-en/products/discovermore/SFQ803P1",
  "https://www.seikowatches.com/ph-en/products/discovermore/SFQ804P1",
  "https://www.seikowatches.com/ph-en/products/discovermore/SFQ810P1",
  "https://www.seikowatches.com/ph-en/products/discovermore/SFQ816P1",
  "https://www.seikowatches.com/ph-en/products/discovermore/SKA745P1",
  "https://www.seikowatches.com/ph-en/products/discovermore/SKA747P1",
  "https://www.seikowatches.com/ph-en/products/discovermore/SKA775P1",
  "https://www.seikowatches.com/ph-en/products/discovermore/SKA777P1",
  "https://www.seikowatches.com/ph-en/products/discovermore/SNDC27J1",
  "https://www.seikowatches.com/ph-en/products/discovermore/SNDC81P1",
  "https://www.seikowatches.com/ph-en/products/discovermore/SNDC89P2",
  "https://www.seikowatches.com/ph-en/products/discovermore/SNDV51P1",
  "https://www.seikowatches.com/ph-en/products/discovermore/SNDV56P1",
  "https://www.seikowatches.com/ph-en/products/discovermore/SNDV57P1",
  "https://www.seikowatches.com/ph-en/products/discovermore/SNE363P1",
  "https://www.seikowatches.com/ph-en/products/discovermore/SNE364J1",
  "https://www.seikowatches.com/ph-en/products/discovermore/SNE391P1",
  "https://www.seikowatches.com/ph-en/products/discovermore/SNKE01K1",
  "https://www.seikowatches.com/ph-en/products/discovermore/SNKE04J1",
  "https://www.seikowatches.com/ph-en/products/discovermore/SNKE49J1",
  "https://www.seikowatches.com/ph-en/products/discovermore/SNKE54J1",
  "https://www.seikowatches.com/ph-en/products/discovermore/SNKE56J1",
  "https://www.seikowatches.com/ph-en/products/discovermore/SNKE57J1",
  "https://www.seikowatches.com/ph-en/products/discovermore/SNKE63J1",
  "https://www.seikowatches.com/ph-en/products/discovermore/SNKM92J1",
  "https://www.seikowatches.com/ph-en/products/discovermore/SNKN11J1",
  "https://www.seikowatches.com/ph-en/products/discovermore/SNKN37P9",
  "https://www.seikowatches.com/ph-en/products/discovermore/SNKN55J1",
  "https://www.seikowatches.com/ph-en/products/discovermore/SNKN67J1",
  "https://www.seikowatches.com/ph-en/products/discovermore/SNKP09K1",
  "https://www.seikowatches.com/ph-en/products/discovermore/SNKP11K1",
  "https://www.seikowatches.com/ph-en/products/discovermore/SNKP12K1",
  "https://www.seikowatches.com/ph-en/products/discovermore/SNKP14K1",
  "https://www.seikowatches.com/ph-en/products/discovermore/SNKP15K1",
  "https://www.seikowatches.com/ph-en/products/discovermore/SNKP17K1",
  "https://www.seikowatches.com/ph-en/products/discovermore/SNKP18K1",
  "https://www.seikowatches.com/ph-en/products/discovermore/SRPC09K1",
  "https://www.seikowatches.com/ph-en/products/discovermore/SRPC11K1",
  "https://www.seikowatches.com/ph-en/products/discovermore/SRPC85K1",
  "https://www.seikowatches.com/ph-en/products/discovermore/SRPC87K1",
  "https://www.seikowatches.com/ph-en/products/discovermore/SRPC89K1",
  "https://www.seikowatches.com/ph-en/products/discovermore/SRW782P1",
  "https://www.seikowatches.com/ph-en/products/discovermore/SRW784P1",
  "https://www.seikowatches.com/ph-en/products/discovermore/SRW807P1",
  "https://www.seikowatches.com/ph-en/products/discovermore/SRZ491P1",
  "https://www.seikowatches.com/ph-en/products/discovermore/SRZ492P1",
  "https://www.seikowatches.com/ph-en/products/discovermore/SRZ494P1",
  "https://www.seikowatches.com/ph-en/products/discovermore/SRZ495P1",
  "https://www.seikowatches.com/ph-en/products/discovermore/SRZ496P1",
  "https://www.seikowatches.com/ph-en/products/discovermore/SRZ504P1",
  "https://www.seikowatches.com/ph-en/products/discovermore/SRZ508P1",
  "https://www.seikowatches.com/ph-en/products/discovermore/SRZ524P1",
  "https://www.seikowatches.com/ph-en/products/discovermore/SRZ526P1",
  "https://www.seikowatches.com/ph-en/products/discovermore/SRZ528P1",
  "https://www.seikowatches.com/ph-en/products/prospex/SLA035J1",
  "https://www.seikowatches.com/ph-en/products/prospex/SLA039J1",
  "https://www.seikowatches.com/ph-en/products/prospex/SLA041J1",
  "https://www.seikowatches.com/ph-en/products/prospex/SPB125J1",
  "https://www.seikowatches.com/ph-en/products/prospex/SPB149J1",
  "https://www.seikowatches.com/ph-en/products/prospex/SSC761J1",
  "https://www.seikowatches.com/uk-en/products/astron/SSH045J1",
  "https://www.seikowatches.com/uk-en/products/prospex/SLA035J1",
  "https://www.seikowatches.com/uk-en/products/prospex/SLA039J1",
  "https://www.seikowatches.com/uk-en/products/prospex/SLA041J1",
  "https://www.seikowatches.com/uk-en/products/prospex/SPB125J1",
  "https://www.seikowatches.com/us-en/products/coutura/SNE444",
  "https://www.seikowatches.com/us-en/products/diamondcollection/SUP373P9",
  "https://www.seikowatches.com/us-en/products/discovermore/SNE036P9",
];

module.exports = u;