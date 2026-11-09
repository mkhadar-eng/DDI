/* ---- Editable content (no database): update here, then republish ---- */
/* ========== Content data ========== */
var IMPACT = {
  trees: null,
  hectares: null,
  bunds: null,
  communities: null,
  youth: null,
}; // set verified numbers; null = shows "To be verified"
var NEWS = []; // e.g. {t:{en:"Title",so:"Cinwaan"},d:"2026-12-01",c:{en:"Tree Planting",so:"Beerista Geedaha"},x:{en:"Summary",so:"Soo koobid"}}
var T = {
  en: {
    n1: "Home",
    n2: "About Us",
    n3: "Our Projects",
    n4: "Our Impact",
    n5: "Our Approach",
    n6: "Get Involved",
    n7: "News & Stories",
    n8: "Contact",
    sup: "SUPPORT OUR MISSION",
    tag: "Restoring Our Land, Securing Our Future.",
    h1: "Restoring Somalia’s land. Securing our future.",
    hp: "We are committed to restoring degraded landscapes, planting indigenous trees and building climate-resilient communities through practical, community-led environmental solutions.",
    b1: "Discover Our Mission",
    b2: "Explore Our Projects",
    b3: "Join the Movement",
    ph: "Photo placeholder",
    ih: "A greener future for Somalia starts with us.",
    ip1: "Dhireynta Dhulka Initiative is an environmental restoration initiative working to address desertification, deforestation and land degradation in Somalia.",
    ip2: "We believe restoring the environment requires collective action, community participation, environmental education and sustainable land-management practices.",
    lm: "Learn More",
    mh: "Our Mission",
    mt: "To restore Somalia’s degraded landscapes, combat desertification and strengthen community resilience through indigenous tree planting, sustainable land restoration, water conservation and environmental education.",
    pl1: "PLANET",
    pd1: "Protecting and restoring ecosystems.",
    pl2: "PEOPLE",
    pd2: "Empowering communities and young environmental leaders.",
    pl3: "PROSPERITY",
    pd3: "Promoting sustainable livelihoods and climate resilience.",
    vh: "Vision:",
    vt: "A greener, healthier and more resilient Somalia where communities and nature thrive together.",
    ik: "Our key impact",
    in: "Figures appear here only after authorised administrators verify them. No achievements are claimed until then.",
    tbv: "To be verified",
    st1: "Trees Planted",
    st2: "Hectares Restored",
    st3: "Semi-Circular Bunds Constructed",
    st4: "Communities Engaged",
    st5: "Youth Volunteers Trained",
    ph2: "Restoring nature. Building resilient communities.",
    pn: "All projects shown are proposed programmes, not completed work.",
    lm2: "Learn More",
    ob: "Objectives",
    oc: "Expected outcomes",
    p1: "Greening Somalia",
    p1d: "Planting indigenous, drought-resistant trees, establishing community nurseries and protecting young trees.",
    p1o: "Establish community nurseries; restore deforested areas; protect young trees.",
    p1c: "Healthier tree cover and local ownership of nurseries.",
    p2: "Semi-Circular Bunds for Land Restoration",
    p2d: "Half-moon-shaped earth structures that capture rainwater runoff, improve soil moisture and support vegetation recovery.",
    p2o: "Identify degraded land; assess sites; construct suitable bunds; establish vegetation; monitor restoration.",
    p2c: "Improved soil moisture and recovering vegetation on degraded land.",
    p3: "Green Communities",
    p3d: "Working with communities, schools, universities and local groups on awareness and practical conservation.",
    p3o: "Promote environmental awareness and community participation.",
    p3c: "Stronger local conservation networks.",
    p4: "Save Our Trees",
    p4d: "Protecting indigenous trees, raising awareness about deforestation and encouraging alternatives that reduce pressure on forests.",
    p4o: "Promote sustainable natural-resource management.",
    p4c: "Reduced pressure on forests.",
    p5: "Climate Resilience Somalia",
    p5d: "Climate education, sustainable land management and drought-resilient agricultural and pastoral practices.",
    p5o: "Build climate knowledge and sustainable land-management skills.",
    p5c: "Communities better prepared for drought.",
    ah: "How we create lasting change",
    s1: "UNDERSTAND",
    sd1: "Identify environmental challenges and assess degraded landscapes with local communities.",
    s2: "RESTORE",
    sd2: "Plant appropriate indigenous trees and construct technically suitable semi-circular bunds.",
    s3: "EMPOWER",
    sd3: "Train communities, engage young people and encourage local ownership of restoration.",
    s4: "MONITOR",
    sd4: "Measure tree survival, vegetation recovery, restored land and community participation.",
    fe: "Featured initiative",
    fs: "A Long-Term Vision for a Greener Somalia.",
    fd: "Green Somalia 2030 is a proposed flagship restoration programme combining indigenous tree planting, semi-circular bund construction, community participation and environmental education.",
    fo: "Objectives",
    fol: "<li>Demonstrate practical restoration solutions</li><li>Strengthen local environmental leadership</li><li>Support long-term landscape recovery</li>",
    fa: "Proposed activities",
    fal: "<li>Indigenous tree planting</li><li>Semi-circular bund construction</li><li>Community participation and education</li>",
    fb: "Discover the Initiative",
    jh: "Be part of Somalia’s environmental restoration.",
    jp: "Whether you are a young environmental activist, community member, organisation, donor or development partner, you can help create a greener and more resilient Somalia.",
    j1: "Volunteer With Us",
    jd1: "Participate in tree planting, environmental campaigns and restoration activities.",
    jb1: "Volunteer",
    j2: "Partner With Us",
    jd2: "Collaborate on environmental projects, research, climate action and community development.",
    jb2: "Partner",
    j3: "Support Our Mission",
    jd3: "Help fund environmental restoration and community-based projects.",
    jb3: "Support",
    rh: "Building partnerships for a greener Somalia.",
    rp: "DDI aims to collaborate with Somali government institutions, environmental organisations, United Nations agencies, international NGOs, universities and research institutions, private-sector organisations, climate finance institutions and community-based organisations.",
    rn: "These are ambitions only. No organisation is listed as an official partner until a partnership is confirmed.",
    nh: "News and stories",
    nne: "Stories and updates will be published here soon.",
    rm: "Read More",
    ch: "The future of Somalia can be greener.",
    cp: "Every tree planted, every landscape restored and every community empowered brings us closer to a sustainable future.",
    kh: "Contact us",
    kph: "Placeholder — to be confirmed",
    ka: "Address:",
    kn: "Contact details will be added once confirmed.",
    km: "Interactive map placeholder",
    fn: "Full name",
    fe2: "Email address",
    fm: "Your message",
    fs2: "Send message",
    ok: "Thank you. This form is not yet connected to a server, so nothing was sent.",
    er: "Please complete all fields with a valid email.",
    tg2: "Restoring Our Land, Securing Our Future.",
  },
  so: {
    n1: "Hoyga",
    n2: "Nagu Saabsan",
    n3: "Mashaariicdeena",
    n4: "Saameynteena",
    n5: "Habkeena",
    n6: "Ka Qayb Qaado",
    n7: "Wararka & Sheekooyinka",
    n8: "Nala Xiriir",
    sup: "TAAGEER HADAFKEENA",
    tag: "Dib U Soo Celinta Dhulkeena, Ammaanka Mustaqbalkeena.",
    h1: "Dib u soo celinta dhulka Soomaaliya. Ammaanka mustaqbalkeena.",
    hp: "Waxaan u heellanahay dib u soo celinta dhulka xumaaday, beerista geedo asal ah iyo dhismaha bulshooyin u adkeysta isbeddelka cimilada, annagoo adeegsanaya xalal deegaan oo bulshadu hoggaamiso.",
    b1: "Ogow Hadafkeena",
    b2: "Eeg Mashaariicdeena",
    b3: "Ku Biir Dhaqdhaqaaqa",
    ph: "Meel loogu talagalay sawir",
    ih: "Soomaaliya cagaaran waxay ka bilaabmaysaa annaga.",
    ip1: "Dhireynta Dhulka Initiative waa hindise dib u soo celinta deegaanka oo ka shaqeeya hawlgabka dhulka (desertification), baabi’inta kaymaha iyo xumaanshaha dhulka ee Soomaaliya.",
    ip2: "Waxaan aaminsanahay in dib u soo celinta deegaanku u baahan yahay wadashaqeyn, ka qaybgal bulsho, waxbarasho deegaan iyo hab-maareyn waara oo dhulka ah.",
    lm: "Wax Dheeraad Ah Ogow",
    mh: "Hadafkeena",
    mt: "In dib loo soo celiyo dhulka Soomaaliya ee xumaaday, la la dagaallamo hawlgabka dhulka, lana xoojiyo adkeysiga bulshada iyadoo la beerayo geedo asal ah, dib loo soo celinayo dhulka si waara, la ilaalinayo biyaha, lana horumarinayo waxbarasho deegaan.",
    pl1: "DUNIDA",
    pd1: "Ilaalinta iyo dib u soo celinta nidaamyada deegaanka.",
    pl2: "DADKA",
    pd2: "Xoojinta bulshada iyo hoggaamiyeyaasha da’yarta ah ee deegaanka.",
    pl3: "HORUMARKA",
    pd3: "Dhiirrigelinta xoolo-dhaqasho iyo nolol waara iyo adkeysiga cimilada.",
    vh: "Aragtida:",
    vt: "Soomaaliya cagaaran, caafimaad qabta oo adkeysi leh, halkaas oo bulshada iyo dabiicaddu wada barwaaqoobaan.",
    ik: "Saameynteena muhiimka ah",
    in: "Tirooyinku halkan waxay ka muuqan doonaan kaliya marka maamulayaal sharciga leh la xaqiijiyo. Ma sheeganeyno guulo ka hor intaa.",
    tbv: "Waa la xaqiijin doonaa",
    st1: "Geedo La Beeray",
    st2: "Hektar La Soo Celiyay",
    st3: "Dhismayaal Bund Nus-Wareeg Ah",
    st4: "Bulshooyin La Kaashaday",
    st5: "Mutadawiciin Dhalinyaro Ah Oo La Tababaray",
    ph2: "Soo celinta dabiicadda. Dhismaha bulshooyin adkeysi leh.",
    pn: "Mashaariicda la tusay waa barnaamijyo la soo jeediyay, maaha shaqo dhammaatay.",
    lm2: "Wax Dheeraad Ah",
    ob: "Yoolalka",
    oc: "Natiijooyinka la filayo",
    p1: "Soomaaliya Cagaaran",
    p1d: "Beerista geedo asal ah oo abaarta u adkeysta, aasaaska xaafado geedo lagu soo koriyo iyo ilaalinta geedaha yaryar.",
    p1o: "Aasaas xaafado geedo; dib u soo celi meelaha kaymaha laga jaray; ilaali geedaha yaryar.",
    p1c: "Daboolka geedaha oo caafimaad qaba iyo lahaansho deegaan.",
    p2: "Bund Nus-Wareeg Ah oo Dib u Soo Celinta Dhulka",
    p2d: "Dhismayaal ciid ah oo qaabkoodu yahay bil-bar, kuwaas oo qabta biyaha roobka, hagaajiya qoyaanka ciidda, taageeraana dib u soo noolaanshaha dhirta.",
    p2o: "Aqoonso dhulka xumaaday; qiimee goobaha; dhis bund ku habboon; beer dhir; la soco soo celinta.",
    p2c: "Qoyaan ciid oo wanaagsan iyo dhir dib u soo nooleysa.",
    p3: "Bulshooyin Cagaaran",
    p3d: "Ka shaqaynta bulshooyinka, dugsiyada, jaamacadaha iyo kooxaha deegaanka ee wacyigelinta iyo ilaalinta dhabta ah.",
    p3o: "Kobci wacyiga deegaanka iyo ka qaybgalka bulshada.",
    p3c: "Shabakado ilaalin deegaan oo xoog badan.",
    p4: "Ilaali Geedaheena",
    p4d: "Ilaalinta geedaha asalka ah, wacyigelinta ku saabsan jarista kaymaha iyo dhiirrigelinta beddelaadyo yareeya cadaadiska kaymaha.",
    p4o: "Kobci maareynta waarta ee khayraadka dabiiciga ah.",
    p4c: "Yaraanta cadaadiska kaymaha.",
    p5: "Adkeysiga Cimilada Soomaaliya",
    p5d: "Waxbarasho cimilo, maareynta waarta ee dhulka iyo hab beereed iyo xoolo-dhaqasho oo u adkeysta abaaraha.",
    p5o: "Dhis aqoon cimilo iyo xirfado maareynta dhulka ee waara.",
    p5c: "Bulshooyin u diyaarsan abaaraha.",
    ah: "Sida aan isbeddel waara u abuurno",
    s1: "FAHAM",
    sd1: "Aqoonso caqabadaha deegaanka oo qiimee dhulka xumaaday iyadoo bulshada la jirto.",
    s2: "DIB U SOO CELI",
    sd2: "Beer geedo asal ah oo ku habboon, oo dhis bund nus-wareeg ah oo farsamo ahaan ku habboon.",
    s3: "XOOJI",
    sd3: "Tababar bulshada, kaqeybgeli dhalinyarada oo dhiirrigeli lahaanshaha deegaanka.",
    s4: "LA SOCO",
    sd4: "Cabbir badbaadinta geedaha, dib u soo noolaanshaha dhirta, dhulka la soo celiyay iyo ka qaybgalka bulshada.",
    fe: "Hindise Muuqda",
    fs: "Aragti Muddo Dheer ah oo Soomaaliya Cagaaran.",
    fd: "Soomaaliya Cagaaran 2030 waa barnaamij hoggaamineed oo la soo jeediyay, isku daraya beerista geedo asal ah, dhismaha bund nus-wareeg ah, ka qaybgalka bulshada iyo waxbarasho deegaan.",
    fo: "Yoolalka",
    fol: "<li>Muuji xalal dib u soo celin oo dhab ah</li><li>Xooji hoggaaminta deegaanka ee deegaanka</li><li>Taageer soo kabashada muddada dheer</li>",
    fa: "Hawlaha la soo jeediyay",
    fal: "<li>Beerista geedo asal ah</li><li>Dhismaha bund nus-wareeg ah</li><li>Ka qaybgal bulsho iyo waxbarasho</li>",
    fb: "Ogow Hindisaha",
    jh: "Ka mid noqo dib u soo celinta deegaanka Soomaaliya.",
    jp: "Haddii aad tahay dhaqdhaqaaqe deegaan oo dhalinyaro ah, xubin bulsho, urur, deeq-bixiye ama lammaane horumarineed, waad ka caawin kartaa abuurista Soomaaliya cagaaran oo adkeysi leh.",
    j1: "Nala Mutadawici",
    jd1: "Ka qaybgal beerista geedaha, ololeyaasha deegaanka iyo hawlaha dib u soo celinta.",
    jb1: "Mutadawic Noqo",
    j2: "Nala Shariik Noqo",
    jd2: "Kala shaqee mashaariicda deegaanka, cilmi-baarista, ficilka cimilada iyo horumarinta bulshada.",
    jb2: "Shariik Noqo",
    j3: "Taageer Hadafkeena",
    jd3: "Ka caawi maalgelinta dib u soo celinta deegaanka iyo mashaariicda bulshada.",
    jb3: "Taageer",
    rh: "Dhismaha iskaashi Soomaaliya cagaaran.",
    rp: "DDI waxay higsanaysaa inay la shaqeyso hay’adaha dowladda Soomaaliya, ururada deegaanka, hay’adaha Qaramada Midoobay, NGO-yada caalamiga ah, jaamacadaha iyo machadyada cilmi-baarista, ururada gaarka ah, hay’adaha maaliyadda cimilada iyo ururada bulshada.",
    rn: "Kuwani waa hiigsi kaliya. Hay’ad lagama sheegayo shariik rasmi ah ilaa iskaashigu la xaqiijiyo.",
    nh: "Wararka iyo sheekooyinka",
    nne: "Sheekooyin iyo war-cusub halkan ayaa lagu daabici doonaa dhawaan.",
    rm: "Wax Dheeraad Akhri",
    ch: "Mustaqbalka Soomaaliya wuu cagaarnaan karaa.",
    cp: "Geed kasta oo la beero, dhul kasta oo la soo celiyo iyo bulsho kasta oo la xoojiyo waxay noo dhawaynayaan mustaqbal waara.",
    kh: "Nala xiriir",
    kph: "Meel loogu talagalay — la xaqiijin doonaa",
    ka: "Cinwaan:",
    kn: "Faahfaahinta xiriirka waa lagu dari doonaa marka la xaqiijiyo.",
    km: "Meel loogu talagalay khariidad",
    fn: "Magaca oo dhan",
    fe2: "Cinwaanka iimaylka",
    fm: "Fariintaada",
    fs2: "Dir fariinta",
    ok: "Mahadsanid. Foomkan weli lama xirin server, sidaas darteed waxba lama dirin.",
    er: "Fadlan buuxi dhammaan meelaha oo geli iimayl sax ah.",
    tg2: "Dib U Soo Celinta Dhulkeena, Ammaanka Mustaqbalkeena.",
  },
};
/* ========== UI state and render helpers ========== */
var L = "en";
try {
  L = localStorage.getItem("ddi-l") || "en";
} catch (e) {}
var PJ = ["p1", "p2", "p3", "p4", "p5"],
  ST = [
    ["trees", "st1"],
    ["hectares", "st2"],
    ["bunds", "st3"],
    ["communities", "st4"],
    ["youth", "st5"],
  ];
function $(s) {
  return document.querySelector(s);
}
function render() {
  var d = T[L];
  document.documentElement.lang = L;
  $("#lg").textContent = L === "en" ? "SO" : "EN";
  document.querySelectorAll("[data-t]").forEach(function (e) {
    e.innerHTML = d[e.dataset.t];
  });
  document.querySelectorAll("[data-p]").forEach(function (e) {
    e.placeholder = d[e.dataset.p];
  });
  $("#stats").innerHTML = ST.map(function (s) {
    var v = IMPACT[s[0]];
    return (
      '<div class="card stat"><b data-n="' +
      (v == null ? "" : v) +
      '">' +
      (v == null ? "—" : "0") +
      "</b><small>" +
      d[s[1]] +
      (v == null ? " · " + d.tbv : "") +
      "</small></div>"
    );
  }).join("");
  $("#pj").innerHTML = PJ.map(function (k, i) {
    return (
      '<article class="card proj"><div class="pic"><span>0' +
      (i + 1) +
      '</span></div><div class="b"><h3>' +
      d[k] +
      "</h3><p>" +
      d[k + "d"] +
      '</p><div class="more"><b>' +
      d.ob +
      ":</b> " +
      d[k + "o"] +
      "<br><b>" +
      d.oc +
      ":</b> " +
      d[k + "c"] +
      '</div><button data-i="' +
      i +
      '">' +
      d.lm2 +
      "</button></div></article>"
    );
  }).join("");
  $("#nw").innerHTML = NEWS.length
    ? NEWS.map(function (n) {
        return (
          '<article class="card"><div class="eyebrow">' +
          n.c[L] +
          " · " +
          n.d +
          "</div><h3>" +
          n.t[L] +
          "</h3><p>" +
          n.x[L] +
          "</p></article>"
        );
      }).join("")
    : '<div class="card">' + d.nne + "</div>";
  count();
  watch();
}
/* ========== Animated counters and scroll reveal ========== */
function count() {
  document.querySelectorAll("[data-n]").forEach(function (e) {
    var t = +e.dataset.n;
    if ((!t && t !== 0) || e.dataset.n === "") return;
    var s = performance.now();
    (function f(n) {
      var p = Math.min((n - s) / 1200, 1);
      e.textContent = Math.round(t * p).toLocaleString();
      if (p < 1) requestAnimationFrame(f);
    })(s);
  });
}
var io =
  window.IntersectionObserver &&
  new IntersectionObserver(
    function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.1 },
  );
function watch() {
  document.querySelectorAll(".rv").forEach(function (e) {
    io ? io.observe(e) : e.classList.add("in");
  });
}

/* ========== Event handlers ========== */
$("#lg").onclick = function () {
  L = L === "en" ? "so" : "en";
  try {
    localStorage.setItem("ddi-l", L);
  } catch (e) {}
  render();
};
$("#bg").onclick = function () {
  $("#nv").classList.toggle("open");
};
$("#nv").onclick = function () {
  $("#nv").classList.remove("open");
};
$("#pj").onclick = function (e) {
  var b = e.target.closest("button");
  if (b) b.closest(".proj").classList.toggle("open");
};
$("#fm").onsubmit = function (e) {
  e.preventDefault();
  var ok =
    $("#f1").value.trim() &&
    /^\S+@\S+\.\S+$/.test($("#f2").value) &&
    $("#f3").value.trim();
  $("#msg").textContent = T[L][ok ? "ok" : "er"];
};
addEventListener(
  "scroll",
  function () {
    var y = scrollY + 120,
      c = "";
    document.querySelectorAll("main section[id]").forEach(function (s) {
      if (s.offsetTop <= y) c = s.id;
    });
    document.querySelectorAll("nav a").forEach(function (a) {
      a.classList.toggle("on", a.getAttribute("href") === "#" + c);
    });
  },
  { passive: true },
);

/* ========== Start app ========== */
render();
