/* Forest Kings – translations for the 3D configurator (assets/configurator.js stays English and shared by all languages).
   Loaded only by the German page (de/index.html), before configurator.js. It does nothing on a page whose <html lang> is not "de",
   and nothing in admin mode (?admin), so the admin stays English.
   How it works: every text the configurator writes into the page (text, title, aria-label, placeholder, alt) is looked up here:
     1. exact text in DE below,
     2. RULES (texts with numbers: "8 jets", "7 o'clock", "3 pcs" ...),
     3. split into parts at " · " and "Label: value", prices "1,234€" -> "1.234 €".
   The order JSON, the e-mail to Forest Kings and the database stay English (only line_items_local is German).
   New English text in configurator.js: add it to DE. Open the German page with ?i18n=debug and look at FK_I18N.miss in the console
   to list texts that are still English. After editing this file raise its ?v= in de/index.txt of kubilai-svetaine-tools and run build-de.ps1 there. */
(function(){
 'use strict';
 var DE={
  /* tabs, labels */
  'Shape & finish':'Form & Material','Equipment':'Ausstattung','Accessories':'Zubehör',
  'Tube size':'Größe','Inner shape':'Innenform','Size':'Größe','Size:':'Größe:','Shape':'Form','Model':'Modell',
  'Tube cladding Thermowood':'Verkleidung Thermoholz','Tube cladding WPC':'Verkleidung WPC',
  'Thermowood':'Thermoholz','Wood':'Holz','WPC finish':'WPC-Verkleidung','Wood cladding':'Holzverkleidung',
  'Acrylic inner':'Acryl-Innenwanne','Gelcoat inner':'Gelcoat-Innenwanne','Acrylic':'Acryl','Gelcoat':'Gelcoat',
  'Choose a colour':'Farbe wählen','Previous colours':'Vorherige Farben','Next colours':'Weitere Farben',
  'Previous shapes':'Vorherige Formen','Next shapes':'Weitere Formen',
  'Catalogue':'Katalog','From catalogue':'Aus dem Katalog','Inner shape from catalogue':'Innenform aus dem Katalog',
  'Inner shape from our catalogue: send us your details':'Innenform aus unserem Katalog: Senden Sie uns Ihre Angaben',
  'Inner shape 1: shape with outside type stove. Inside stove for this type costs extra.':'Innenform 1: für einen Außenofen. Ein Innenofen ist bei dieser Form gegen Aufpreis möglich.',
  'Inner shape 2: inner type only with inside stove type.':'Innenform 2: nur mit Innenofen.',
  'Inner shape 3: only with inside stove type.':'Innenform 3: nur mit Innenofen.',
  'Inner shape 4: only with outside stove type.':'Innenform 4: nur mit Außenofen.',
  'Round':'Rund','Square':'Eckig',
  'Inner 185×85 cm':'innen 185×85 cm','Outer 220×220 cm':'außen 220×220 cm','Outer 205 cm':'außen 205 cm',
  'Inner 200×90 cm':'innen 200×90 cm','Outer 225 cm':'außen 225 cm',
  '5–6 people':'5–6 Personen','6–8 people':'6–8 Personen',
  'approx. 1,100 l':'ca. 1.100 l','approx. 1,500 l':'ca. 1.500 l','approx. 2.5 h':'ca. 2,5 Std.','approx. 3 h':'ca. 3 Std.',
  /* wood colours */
  'Spruce':'Fichte','Larch':'Lärche','Natural pine':'Kiefer natur','Red cedar':'Rotzeder','Walnut':'Walnuss','Grey wash':'Grau lasiert','Black stain':'Schwarz gebeizt',
  /* liner colours (RAL numbers and product names stay) */
  'Ice blue':'Eisblau','Pearl white':'Perlweiß','Graphite':'Graphit','Mocha brown':'Mokkabraun','Sky blue':'Himmelblau','Deep blue':'Tiefblau',
  'Sand beige':'Sandbeige','Sage green':'Salbeigrün','Grey pearl':'Perlgrau','Blue pearl':'Perlblau',
  'Granite 3D Obsidian':'Granit 3D Obsidian','Granite 3D Moonstone':'Granit 3D Moonstone','Granite 3D Gold dust':'Granit 3D Gold Dust',
  /* stove */
  'Stove':'Ofen','Stove type':'Ofentyp','Stove position':'Ofenposition','Outside':'Außen','Inside':'Innen',
  'Wood-fired stove':'Holzofen','Integrated wood-fired stove':'Integrierter Holzofen','External stove':'Außenofen','Wood-fired':'Holzbefeuert',
  'Wood-fired stove with chimney':'Holzofen mit Schornstein',
  'Stove 20 kW':'Ofen 20 kW','Stove 30 kW':'Ofen 30 kW','Stove power':'Ofenleistung','Stove exterior':'Ofentür','Stove metal':'Edelstahl des Ofens',
  'Stove metal thickness':'Wandstärke des Ofens','Stove 90° elbow':'90°-Rohrbogen am Ofen',
  'Without glass':'Ohne Sichtfenster','With glass':'Mit Sichtfenster','without glass':'ohne Sichtfenster','with glass':'mit Sichtfenster',
  'Without elbow':'Ohne Rohrbogen','90° elbow':'90°-Rohrbogen','Vertical':'Senkrecht',
  'Power':'Leistung','Glass':'Sichtfenster','Metal':'Metall','Elbow':'Rohrbogen','Fuel':'Brennstoff',
  'Electric 9 kW':'Elektroheizer 9 kW','Not applicable to the electric heater':'Nicht beim Elektroheizer möglich',
  'Heater (12 o’clock)':'Ofen (12 Uhr)','o’clock · heater at 12':'Uhr · Ofen bei 12',
  /* steps */
  'Steps':'Treppe','Wooden steps':'Holztreppe','No steps':'Ohne Treppe','Closed':'Geschlossen','Individual':'Individuell','Individual order':'Individuelle Anfertigung',
  'Steps at':'Treppe bei','Steps position on the clock':'Position der Treppe (Uhrzeit)','Square tub: 3, 6 or 9 o’clock':'Eckiges Badefass: 3, 6 oder 9 Uhr',
  'Wooden steps outside plus a step inside the tub':'Holztreppe außen und eine Stufe im Badefass',
  /* accessories */
  'Hydro massage system':'Hydromassage','Massage jets':'Massagedüsen','Hydro massage jet':'Hydromassagedüse','Hydro massage':'Hydromassage',
  'Jet placement':'Position der Düsen','standard placement':'Standardposition',
  'Air massage system':'Luftmassage','Air bubbles':'Luftsprudel','Air massage nozzle':'Luftmassagedüse','Nozzle placement':'Position der Düsen',
  'Control buttons':'Bedientasten','Control buttons · mounting position':'Bedientasten · Montageposition','Mounted at':'Montiert bei',
  'Control buttons position on the clock':'Position der Bedientasten (Uhrzeit)',
  'Stainless push-button panel on the tub wall (hydro, air, temperature, LED); choose where it is mounted':'Tastenfeld aus Edelstahl an der Wannenwand (Hydromassage, Luft, Temperatur, LED); Montageposition frei wählbar',
  'Water thermometer':'Wasserthermometer','Integrated electronic thermometer':'Integriertes elektronisches Thermometer',
  'Integrated electronic thermometer, free':'Integriertes elektronisches Thermometer, kostenlos',
  'Drink shelf':'Getränkeablage','Wooden':'Holz','Wooden or metal shelf on the rim':'Ablage aus Holz oder Metall am Rand',
  'Chimney':'Schornstein','Chimney guard':'Schornsteinschutz','Extra chimney +1 m':'Schornsteinverlängerung +1 m','Extra chimney pipe 1 m':'Schornsteinverlängerung 1 m',
  'Extra 1 m':'Verlängerung 1 m',
  'Chimney options: guard, extra section. Spark arrestor included (needs a stove)':'Schornsteinoptionen: Schutz, Verlängerung. Funkenschutz inklusive (nur mit Ofen)',
  'LED lighting':'LED-Beleuchtung','LED RGB lighting':'LED-RGB-Beleuchtung','LED Mini lighting':'LED-Mini-Beleuchtung','Colour lighting under the rim':'Farbige Beleuchtung unter dem Rand',
  'Small LED lights':'Kleine LED-Leuchten','LED lamp':'LED-Leuchte','LED placement':'Position der LEDs','Lamps at':'Leuchten bei',
  'Tube cover':'Abdeckung','Thermo cover':'Thermoabdeckung','Insulated lid that keeps the heat in':'Isolierter Deckel, der die Wärme im Wasser hält',
  'Black':'Schwarz','Brown':'Braun','Grey':'Grau',
  'Filtration system':'Filteranlage','Water filtration':'Wasserfilterung','Filter box':'Filterbox','Sand filter':'Sandfilter','Filter connection':'Filteranschluss',
  'No box':'Ohne Box','Connection':'Anschluss','Round box':'Runde Box','Square box':'Eckige Box','Filter connection position on the clock':'Position des Filteranschlusses (Uhrzeit)',
  'Hot tub control (Wi-Fi)':'Badefass-Steuerung (WLAN)','Control your hot tub via Wi-Fi':'Steuern Sie Ihr Badefass per WLAN',
  'Electric heating system 3 kW':'Elektroheizung 3 kW','3 kW electric heater that keeps the water warm':'3-kW-Elektroheizung, die das Wasser warm hält',
  'Headrests':'Kopfstützen','Headrest':'Kopfstütze','Headrests (price per pc)':'Kopfstützen (Preis pro Stück)',
  'Soft head pillows for the tub seats, 25 € each':'Weiche Kopfstützen für die Sitzplätze, 25 € pro Stück','25 € / pc':'25 € / Stk.',
  /* summary, readout, messages */
  'Total':'Gesamt','included':'inklusive','incl.':'inkl.','Basic price':'Grundpreis','Not chosen':'Nicht gewählt','None':'Keine','change':'ändern',
  'o’clock':'Uhr','Drag to rotate':'Zum Drehen ziehen',
  'This is a visualization only. The actual hot tub and accessories may differ in colour, shape and details.':'Dies ist nur eine Visualisierung. Das tatsächliche Badefass und das Zubehör können in Farbe, Form und Details abweichen.',
  '3D view paused by the browser':'Die 3D-Ansicht wurde vom Browser angehalten',
  'Too many 3D pages may be open. Close other tabs and press the button.':'Möglicherweise sind zu viele 3D-Seiten geöffnet. Schließen Sie andere Tabs und klicken Sie auf die Schaltfläche.',
  'Reload 3D view':'3D-Ansicht neu laden','HEATER':'OFEN',
  'Thank you,':'Vielen Dank,','Thank you for your request. We will contact you within 24 hours.':'Vielen Dank für Ihre Anfrage. Wir melden uns innerhalb von 24 Stunden bei Ihnen.',
  'unknown error':'unbekannter Fehler','no answer from the mail service (timeout)':'keine Antwort vom Mail-Dienst (Zeitüberschreitung)'
 };
 /* texts with numbers; m = match, t = translate a part */
 var RULES=[
  [/^Shape (\d+)$/,function(m){ return 'Form '+m[1]; }],
  [/^Inner shape (\d+)$/i,function(m){ return 'Innenform '+m[1]; }],
  [/^(\d+(?:, \d+)*(?: and \d+)?) o’clock$/,function(m){ return m[1].replace(' and ',' und ')+' Uhr'; }],
  [/^(\d+) pcs?$/,function(m){ return m[1]+' Stk.'; }],
  [/^(\d+) jets$/,function(m){ return m[1]+' Düsen'; }],
  [/^(\d+) hydro jets$/,function(m){ return m[1]+' Hydromassagedüsen'; }],
  [/^(.+), (\d+) pcs?$/,function(m,t){ return t(m[1])+', '+m[2]+' Stk.'; }],
  [/^Lamps at (.+) o’clock$/,function(m){ return 'Leuchten bei '+m[1].replace(' and ',' und ')+' Uhr'; }],
  [/^standard placement \((.+) o’clock\)$/,function(m){ return 'Standardposition ('+m[1].replace(' and ',' und ')+' Uhr)'; }],
  /* request form messages (configurator.js) */
  [/^Your email app should open with the request\. Press Send there to deliver it to (\S+)\. \(Automatic sending works only on the published website\.\)$/,function(m){ return 'Ihr E-Mail-Programm sollte sich mit der Anfrage öffnen. Klicken Sie dort auf „Senden“, um sie an '+m[1]+' zu schicken. (Der automatische Versand funktioniert nur auf der veröffentlichten Website.)'; }],
  [/^Sorry, sending failed\. Please try again or write to (\S+)\. \[(.*)\]$/,function(m,t){ return 'Leider ist beim Senden ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder schreiben Sie an '+m[1]+'. ['+t(m[2])+']'; }],
  /* "King L (Inner 200×90 cm · outer 225×105 cm)" */
  [/^([^()·]+) \(([^()]+)\)$/,function(m,t){ return t(m[1])+' ('+t(m[2])+')'; }]
 ];
 var has=Object.prototype.hasOwnProperty, miss=new Set();
 var deNum=function(n){ return n.replace(/,/g,'.')+' €'; };   /* 3,025 -> 3.025 € */
 function tc(c){
  if(!c) return c;
  if(has.call(DE,c)) return DE[c];
  for(var i=0;i<RULES.length;i++){ var m=c.match(RULES[i][0]); if(m) return RULES[i][1](m,tc); }
  if(c.indexOf('·')>=0){ var p=c.split(/(\s*·\s*)/); if(p.length>1) return p.map(function(x,i){ return i%2?x:tc(x); }).join(''); }
  var pm=c.match(/^(.*?)(\s?)(\+?)(\d{1,3}(?:,\d{3})+|\d+)€$/);
  if(pm) return (pm[1]?tc(pm[1]):'')+pm[2]+pm[3]+deNum(pm[4]);
  var lm=c.match(/^([^:]+):(\s(.+))?$/);
  if(lm&&has.call(DE,lm[1])) return DE[lm[1]]+':'+(lm[2]?' '+tc(lm[3]):'');
  if(/[a-z]{3}/.test(c)) miss.add(c);
  return c;
 }
 function t(s){
  if(typeof s!=='string') return s;
  var m=s.match(/^(\s*)([\s\S]*?)(\s*)$/), r=tc(m[2]);
  return r===m[2]?s:m[1]+r+m[3];
 }
 window.FK_I18N={lang:'de',t:t,miss:miss};
 if(document.documentElement.lang!=='de'||/[?&]admin\b/.test(location.search)||location.hash==='#admin') return;
 var ATTR=['title','aria-label','placeholder','alt'], seen=new WeakMap();
 function text(n){
  var p=n.parentNode; if(!p||p.nodeName==='SCRIPT'||p.nodeName==='STYLE') return;
  var v=n.nodeValue; if(seen.get(n)===v||!v.trim()) return;
  var r=t(v); if(r!==v) n.nodeValue=r; seen.set(n,r);
 }
 function attrs(el){ for(var i=0;i<ATTR.length;i++){ var v=el.getAttribute(ATTR[i]); if(v){ var r=t(v); if(r!==v) el.setAttribute(ATTR[i],r); } } }
 function walk(root){
  if(root.nodeType===3){ text(root); return; }
  if(root.nodeType!==1||root.nodeName==='SCRIPT'||root.nodeName==='STYLE') return;
  attrs(root);
  var w=document.createTreeWalker(root,5,null), n;   /* elements + text */
  while((n=w.nextNode())){ if(n.nodeType===3) text(n); else attrs(n); }
 }
 function start(){
  walk(document.body);
  new MutationObserver(function(list){
   for(var i=0;i<list.length;i++){ var x=list[i];
    if(x.type==='characterData') text(x.target);
    else if(x.type==='attributes') attrs(x.target);
    else for(var j=0;j<x.addedNodes.length;j++) walk(x.addedNodes[j]); }
  }).observe(document.body,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:ATTR});
 }
 if(document.body) start(); else document.addEventListener('DOMContentLoaded',start);
 if(/[?&]i18n=debug\b/.test(location.search)) window.addEventListener('load',function(){ console.info('FK_I18N: texts still English are listed in FK_I18N.miss'); });
})();
