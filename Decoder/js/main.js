// Abbreviation all capital letters must be entered here
// AcFD will not work 
const lists = {
'//': 'Weather not detected due sensor temporarily inoperative - (used in METAR AUTO only)',
'///': 'Cloud is detected (unable to determine TCU/CB) - (used in METAR AUTO only)',
'////': 'Visibility not reported due faulty sensor - (used in METAR AUTO only)',
'/////////': 'Cloud not reported due faulty sensor - (used in METAR AUTO only)',
'-': 'Light',
'+': 'Heavy',
'9999': 'Visibility 10KM or more',
'AAW': 'Aviation Area Winds',
'ABT': 'About',
'ABV': 'Above',
'AC': 'Altocumulus',
'AD QNH': 'Aerodrome QNH forecast',
'AFT': 'After',
'AGL': 'Above ground level',
'AIP': 'Aeronautical Information Publication',
'AIREP': 'Routine air report from aircraft in flight',
'AIREP SPECIAL': 'Special (non-routine) air report from aircraft in flight',
'AMD': 'Amended',
'AMSL': 'Above mean sea level',
'APRX': 'Approximate',
'AS': 'Altostratus',
'AT': 'At',
'ATIS': 'Automatic terminal information service',
'ATS': 'Air traffic services',
'AWIB': 'Aerodrome and weather information broadcast',
'AWS': 'Automatic weather station (produces METAR AUTO)',
'BASE': 'Cloud base',
'BC': 'Patches',
'BDRY': 'Boundary',
'BECMG': 'Becoming',
'BFR': 'Before',
'BKN': 'Broken (5–7 oktas)',
'BL': 'Blowing',
'BLDG': 'Building',
'BLW': 'Below',
'BR': 'Mist (1000–5000 M vis)',
'BTN': 'Between',
'BWR': 'Basic weather report',
'CAT': 'Clear air turbulence',
'CAVOK': 'Cloud and visibility OK',
'CB': 'Cumulonimbus',
'CLD': 'Cloud',
'CLR': 'Clear',
'CNL': 'Cancel',
'CONS': 'Continuous',
'COR': 'Corrected',
'COT': 'At the coast',
'CU': 'Cumulus',
'DP': 'Dew point temperature',
'DR': 'Low drifting',
'DS': 'DTG',
'DTRT': 'Deteriorating/deteriorate',
'DU': 'Dust',
'DZ': 'Drizzle',
'EMBD': 'Embedded',
'EST': 'Estimated',
'EXC': 'Except',
'EXTD': 'Extended or extending',
'FC': 'Funnel cloud',
'FCST': 'Forecast',
'FEW': 'Few (1–2 oktas)',
'FG': 'Fog (visibility less than 1000 m)',
'FIR': 'Flight information region',
'FISB': 'Flight information service broadcast',
'FL': 'Flight level',
'FM': 'From',
'FRQ': 'Frequent',
'FU': 'Smoke',
'FZ': 'Freezing',
'FZL': 'Freezing level',
'G': 'Gusts',
'GNZSIGWX': 'Graphical NZ significant weather',
'GR': 'Hail (5 mm or more)',
'GRAFOR': 'Graphical aviation forecast',
'GS': 'Small hail (smaller than 5 mm)',
'GSM': 'Graphical SIGMET Monitor',
'HVY': 'Heavy',
'HZ': 'Haze (visibility less than 5000 m)',
'ICAO': 'International Civil Aviation Organization',
'ICE': 'Icing',
'IFR': 'Instrument flight rules',
'IMC': 'Instrument meteorological conditions',
'IMPR': 'Improving',
'INTSF': 'Intensifying',
'ISOL': 'Isolated',
'KM': 'Kilometres',
'KT': 'Knots',
'LAN': 'Inland',
'LCA': 'Local/locally/location/located',
'LYR': 'Layer',
'M': 'Metres',
'MAX': 'Maximum',
'METAR': 'Aerodrome routine meteorological report',
'METAR AUTO': 'Automatic aerodrome routine meteorological report',
'MI': 'Shallow',
'MOD': 'Moderate',
'MOV': 'Moving',
'MS': 'Minus',
'MT': 'Mountain',
'MTW': 'Mountain waves',
'NC': 'No change',
'NCD': 'No cloud detected below 10,000 ft - (used in METAR AUTO only)',
'NM': 'Nautical miles',
'NOSIG': 'No significant change',
'NOTAM': 'Notice to airmen',
'NS': 'Nimbostratus',
'NSC': 'No significant cloud',
'NSW': 'Nil significant weather',
'NXT': 'Next',
'NZZC': 'New Zealand FIR',
'NZZO': 'Auckland Oceanic FIR',
'OBS': 'Observed',
'OBSC': 'Obscured',
'OCNL': 'Occasional',
'OPMET': 'Operational meteorological information',
'OVC': 'Overcast (8 oktas)',
'PIREP': 'Pilot report (AIREP)',
'PL': 'Ice pellets',
'PO': 'Dust/sand whirls',
'PR': 'Partial',
'PROB': 'Probability',
'PS': 'Plus',
'PSN': 'Position',
'Q': 'QNH',
'QNH': 'Altimeter sub-scale setting',
'R': 'Runway',
'RA': 'Rain',
'RDOACT': 'Radioactive',
'RE': 'Recent',
'RMK': 'Remark',
'ROFOR': 'Route forecast',
'RVR': 'Runway visual range',
'SA': 'Sand',
'SC': 'Stratocumulus',
'SCT': 'Scattered (3–4 oktas)',
'SECT': 'Sector',
'SEV': 'Severe',
'SFC': 'Surface',
'SG': 'Snow grains',
'SH': 'Shower',
'SIG': 'Significant',
'SIGMET': 'Significant meteorological information',
'SIGWX': 'Significant weather forecast',
'SKC': 'Sky clear (no cloud at all)',
'SN': 'Snow',
'SPECI': 'Aerodrome special meteorological report',
'SQ': 'Squall',
'SQL': 'Squall line',
'SS': 'Sandstorm',
'ST': 'Stratus',
'STNR': 'Stationary',
'T': 'Temperature, in degrees Celsius',
'TAF': 'Aerodrome forecast',
'TC': 'Tropical cyclone',
'TCU': 'Towering cumulus',
'TEMPO': 'Temporarily',
'TL': 'Till',
'TREND': 'Trend forecast',
'TS': 'Thunderstorm',
'TURB': 'Turbulence',
'UP': 'Unidentified precipitation',
'UTC': 'Coordinated Universal Time',
'V': 'Variations from mean wind direction',
'VA': 'Volcanic ash',
'VAA': 'Volcanic Ash Advisory',
'VAAC': 'Volcanic Ash Advisory Centre',
'VAG': 'Volcanic Ash Graphic',
'VAL': 'In valleys', 
'VC': 'Vicinity of the aerodrome',
'VCY': 'Vicinity',
'VFR': 'Visual flight rules',
'VIS': 'Visibility',
'VMC': 'Visual meteorological conditions',
'VRB': 'Variable',
'VV': 'Vertical visibility',
'WI': 'Within',
'WKN': 'Weakening',
'WDSPR': 'Widespread',
'WS': 'Windshear',
'WX': 'Weather',
'Z': 'Coordinated Universal Time',
'A': 'Amber',
'A/A': 'Air-to-air',
'A/G': 'Air to ground',
'AAA': '(or AAB, AAC ... etc in sequence) Amended meteorological message',
'AAD': 'Assigned altitude deviation',
'AAL': 'Above aerodrome level',
'ABI': 'Advance boundary information',
'ABM': 'Abeam',
'ABN': 'Aerodrome beacon',
'ACARS': 'Aircraft communication addressing and reporting system (pronounced "AY-CARS")',
'ACAS': 'Airborne collision avoidance system (pronounced "AY-CASS")',
'ACC': 'Area control centre or area control',
'ACCID': 'Notification of an aircraft accident',
'ACFT': 'Aircraft',
'ACK': 'Acknowledge',
'ACL': 'Altimeter check location',
'ACN': 'Aircraft classification number',
'ACNZ': 'Airways Corporation of New Zealand Limited',
'ACPT': 'Accept or accepted',
'ACT': 'Active or activated or activity',
'AD': 'Airworthiness Directive',
'ADA': 'Advisory area',
'ADC': 'Aerodrome chart',
'ADDN': '	Addition or additional',
'ADEP': 'Aerodrome of Departure',
'ADES': 'Aerodrome of Destination',
'ADF': 'Automatic direction-finding equipment or automatic direction-finder',
'ADIZ': 'Air defence identification zone (pronounced "AY-DIZ")',
'ADJ': 'Adjacent',
'ADO': 'Aerodrome office (specify service)',
'ADR': 'Advisory route',
'ADS-B': 'Automatic Dependent Surveillance - Broadcast',
'ADS-C': 'Automatic Dependent Surveillance - Contract',
'ADSU': 'Automatic dependent surveillance unit',
'ADVS': 'Advisory service',
'ADZ': 'Advise',
'AES': 'Aircraft earth station',
'AFFF': 'Aqueous film forming foam',
'AFIL': 'Flight plan filed in the air',
'AFIS': 'Aerodrome flight information service',
'AFM': 'Yes or affirm or affirmative or that is correct',
'AFRU': '	Aerodrome frequency response unit',
'AFS': 'Aeronautical fixed service',
'AFT': 'After ... (time or place)',
'AFTN': 'Aeronautical fixed telecommunications network',
'AGA': 'Aerodromes, air routes and ground aids',
'AGN': 'Again',
'AGNIS': 'Azimuth guidance for nose-in stands',
'AIC': '	Aeronautical information circular',
'AIDC': 'Air traffic services inter-facility data communication',
'AIP': 'Aeronautical information publication',
'AIPNZ': 'Aeronautical information publication of New Zealand',
'AIRAC': 'Aeronautical information regulation and control',
'AIRMET': 'Information concerning enroute weather phenomena which may affect the safety of low-level aircraft operations',
'AIS': 'Aeronautical information services',
'ALA': 'Alighting area',
'ALERFA': 'Alert phase',
'ALRS': 'Alerting service',
'ALS': 'Approach lighting system',
'ALT': 'Altitude',
'ALTN': 'Alternate (aerodrome)',
'AMA': 'Area minimum altitude',
'AMD': 'Amend',
'AMDT': 'Amendment (AIP Amendment)',
'AMS': 'Aeronautical mobile service',
  'WRITE THE ABBREVIATION HERE IN ALL CAPS': 'Here is an explanation of what it means',
};

let textareaRead = document.querySelector('.js-textarea-read');
let textareaWrite = document.querySelector('.js-textarea-write');
let buttonDecode = document.querySelector('.button-decode');
let buttonClear = document.querySelector('.button-clear');
buttonDecode.onclick = function () {
  const abbreviation = textareaRead.value.toUpperCase();
  const list = lists[abbreviation] || testFunction();
  let list_data = '';
  for (let key in list) {
    list_data += `${list[key]}`;
    textareaWrite.innerHTML = list_data;
    textareaWrite.classList.remove('red');

  }
}
function testFunction() {
  textareaWrite.innerHTML = 'No result available for this code, please try again.';
  textareaWrite.classList.add('red');
}
buttonClear.onclick = function () {
  textareaWrite.innerHTML = '';
  textareaRead.value = '';
}
function checkForEnter(e) {
  if (e.keyCode == 13) {
    event.preventDefault();
    buttonDecode.click();
  } else if ((e.keyCode == 8) || (e.keyCode == 46)) {
    textareaWrite.innerHTML = '';
  }

}
