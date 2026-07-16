export const manifest = {
  screens: {
    scr_ak9xxo: { name: "Home", route: "/", position: { "x": 160, "y": 220 } },
    scr_qogxw7: { name: "Solutions", route: "/solutions", position: { "x": 1560, "y": 220 } },
    scr_woj2pn: { name: "Products", route: "/products", position: { "x": 2960, "y": 220 } },
    scr_jr5gst: { name: "Industries", route: "/industries", position: { "x": 4360, "y": 220 } },
    scr_sbusj9: { name: "Pricing", route: "/pricing", position: { "x": 5760, "y": 220 } },
    scr_fbleax: { name: "About", route: "/about", position: { "x": 160, "y": 2200 } },
    scr_5laqb5: { name: "Blog", route: "/blog", position: { "x": 160, "y": 4180 } },
    scr_csa2z6: { name: "Careers", route: "/careers", position: { "x": 1560, "y": 2200 } },
    scr_tgbr1g: { name: "Contact", route: "/contact", position: { "x": 1560, "y": 4180 } }
  },
  sections: {
    sec_jrlni2: { name: "Main Navigation Pages", x: 0, y: 0, width: 7120, height: 1180 },
    sec_c5u98t: { name: "Company Info", x: 0, y: 1980, width: 2920, height: 1180 },
    sec_szbrva: { name: "Resources & Support", x: 0, y: 3960, width: 2920, height: 1180 }
  },
  layers: [
  { kind: "section", id: "sec_jrlni2", children: [
    { kind: "screen", id: "scr_ak9xxo" },
    { kind: "screen", id: "scr_qogxw7" },
    { kind: "screen", id: "scr_woj2pn" },
    { kind: "screen", id: "scr_jr5gst" },
    { kind: "screen", id: "scr_sbusj9" }]
  },
  { kind: "section", id: "sec_c5u98t", children: [
    { kind: "screen", id: "scr_fbleax" },
    { kind: "screen", id: "scr_csa2z6" }]
  },
  { kind: "section", id: "sec_szbrva", children: [
    { kind: "screen", id: "scr_5laqb5" },
    { kind: "screen", id: "scr_tgbr1g" }]
  }]

};