export const regions = [
  'at', // Austria
  'be', // Belgium
  'bg', // Bulgaria
  'hr', // Croatia
  'cy', // Cyprus
  'cz', // Czechia
  'de', // Germany
  'dk', // Denmark
  'ee', // Estonia
  'es', // Spain
  'fi', // Finland
  'fr', // France
  'gr', // Greece
  'hu', // Hungary
  'ie', // Ireland
  'it', // Italy
  'lt', // Lithuania
  'lu', // Luxembourg
  'lv', // Latvia
  'mt', // Malta
  'nl', // Netherlands
  'pl', // Poland
  'pt', // Portugal
  'ro', // Romania
  'si', // Slovenia
  'se', // Sweden
  'sk', // Slovakia
  'mc', // Monaco
  'eu', // Europe
] as const;
export type Region = typeof regions[number];

export const worldRegions = [
  ...regions,
  'af', // Afghanistan
  'al', // Albania
  'dz', // Algeria
  'ad', // Andorra
  'as', // American Samoa
  'ao', // Angola
  'ai', // Anguilla
  'aq', // Antarctica
  'ag', // Antigua and Barbuda
  'ar', // Argentina
  'am', // Armenia
  'aw', // Aruba
  'au', // Australia
  'az', // Azerbaijan
  'bs', // Bahamas
  'bh', // Bahrain
  'bd', // Bangladesh
  'bb', // Barbados
  'by', // Belarus
  'bz', // Belize
  'bj', // Benin
  'bm', // Bermuda
  'bt', // Bhutan
  'bo', // Bolivia
  'ba', // Bosnia and Herzegovina
  'bw', // Botswana
  'bv', // Bouvet Island
  'br', // Brazil
  'io', // British Indian Ocean Territory
  'bn', // Brunei Darussalam
  'bf', // Burkina Faso
  'bi', // Burundi
  'kh', // Cambodia
  'cm', // Cameroon
  'ca', // Canada
  'cv', // Cape Verde
  'ky', // Cayman Islands
  'cf', // Central African Republic
  'td', // Chad
  'cl', // Chile
  'cn', // China
  'cx', // Christmas Island
  'cc', // Cocos (Keeling) Islands
  'co', // Colombia
  'km', // Comoros
  'cg', // Congo
  'cd', // Congo, Democratic Republic of the
  'ck', // Cook Islands
  'cr', // Costa Rica
  'ci', // Côte d'Ivoire
  'cu', // Cuba
  'dj', // Djibouti
  'dm', // Dominica
  'do', // Dominican Republic
  'ec', // Ecuador
  'eg', // Egypt
  'sv', // El Salvador
  'gq', // Equatorial Guinea
  'er', // Eritrea
  'et', // Ethiopia
  'fk', // Falkland Islands (Malvinas)
  'fo', // Faroe Islands
  'fj', // Fiji
  'gf', // French Guiana
  'pf', // French Polynesia
  'tf', // French Southern Territories
  'ga', // Gabon
  'gm', // Gambia
  'ge', // Georgia
  'gh', // Ghana
  'gi', // Gibraltar
  'gl', // Greenland
  'gd', // Grenada
  'gp', // Guadeloupe
  'gu', // Guam
  'gt', // Guatemala
  'gn', // Guinea
  'gw', // Guinea-Bissau
  'gy', // Guyana
  'ht', // Haiti
  'hm', // Heard Island and McDonald Islands
  'va', // Holy See (Vatican City State)
  'hn', // Honduras
  'hk', // Hong Kong
  'is', // Iceland
  'in', // India
  'id', // Indonesia
  'ir', // Iran
  'iq', // Iraq
  'il', // Israel
  'jm', // Jamaica
  'jp', // Japan
  'jo', // Jordan
  'kz', // Kazakhstan
  'ke', // Kenya
  'ki', // Kiribati
  'kp', // Korea, Democratic People's Republic of
  'kr', // Korea, Republic of
  'kw', // Kuwait
  'kg', // Kyrgyzstan
  'la', // Lao People's Democratic Republic
  'lb', // Lebanon
  'ls', // Lesotho
  'lr', // Liberia
  'ly', // Libya
  'li', // Liechtenstein
  'lt', // Lithuania
  'mo', // Macao
  'mk', // North Macedonia
  'mg', // Madagascar
  'mw', // Malawi
  'my', // Malaysia
  'mv', // Maldives
  'ml', // Mali
  'mh', // Marshall Islands
  'mq', // Martinique
  'mr', // Mauritania
  'mu', // Mauritius
  'yt', // Mayotte
  'mx', // Mexico
  'fm', // Micronesia, Federated States of
  'md', // Moldova, Republic of
  'mn', // Mongolia
  'ms', // Montserrat
  'me', // Montenegro
  'ma', // Morocco
  'mz', // Mozambique
  'mm', // Myanmar
  'na', // Namibia
  'nr', // Nauru
  'np', // Nepal
  'nc', // New Caledonia
  'nz', // New Zealand
  'ni', // Nicaragua
  'ne', // Niger
  'ng', // Nigeria
  'nu', // Niue
  'nf', // Norfolk Island
  'mp', // Northern Mariana Islands
  'no', // Norway
  'om', // Oman
  'pk', // Pakistan
  'pw', // Palau
  'ps', // Palestine, State of
  'pa', // Panama
  'pg', // Papua New Guinea
  'py', // Paraguay
  'pe', // Peru
  'ph', // Philippines
  'pn', // Pitcairn
  'pr', // Puerto Rico
  'qa', // Qatar
  're', // Réunion
  'ru', // Russian Federation
  'rw', // Rwanda
  'sh', // Saint Helena, Ascension and Tristan da Cunha
  'kn', // Saint Kitts and Nevis
  'lc', // Saint Lucia
  'pm', // Saint Pierre and Miquelon
  'vc', // Saint Vincent and the Grenadines
  'ws', // Samoa
  'sm', // San Marino
  'st', // Sao Tome and Principe
  'sa', // Saudi Arabia
  'sn', // Senegal
  'rs', // Serbia
  'sc', // Seychelles
  'sl', // Sierra Leone
  'sg', // Singapore
  'sb', // Solomon Islands
  'so', // Somalia
  'za', // South Africa
  'gs', // South Georgia and the South Sandwich Islands
  'lk', // Sri Lanka
  'sd', // Sudan
  'sr', // Suriname
  'sj', // Svalbard and Jan Mayen
  'sz', // Eswatini
  'ch', // Switzerland
  'sy', // Syrian Arab Republic
  'tw', // Taiwan
  'tj', // Tajikistan
  'tz', // Tanzania, United Republic of
  'th', // Thailand
  'tl', // Timor-Leste
  'tg', // Togo
  'tk', // Tokelau
  'to', // Tonga
  'tt', // Trinidad and Tobago
  'tn', // Tunisia
  'tr', // Turkey
  'tm', // Turkmenistan
  'tc', // Turks and Caicos Islands
  'tv', // Tuvalu
  'ug', // Uganda
  'ua', // Ukraine
  'ae', // United Arab Emirates
  'gb', // United Kingdom
  'us', // United States
  'um', // United States Minor Outlying Islands
  'uy', // Uruguay
  'uz', // Uzbekistan
  'vu', // Vanuatu
  've', // Venezuela
  'vn', // Viet Nam
  'vg', // Virgin Islands, British
  'vi', // Virgin Islands, U.S.
  'wf', // Wallis and Futuna
  'eh', // Western Sahara
  'ye', // Yemen
  'zm', // Zambia
  'zw', // Zimbabwe
  'ax', // Åland Islands
  'bq', // Bonaire, Sint Eustatius and Saba
  'cw', // Curaçao
  'gg', // Guernsey
  'im', // Isle of Man
  'je', // Jersey
  'bl', // Saint Barthélemy
  'mf', // Saint Martin (French part)
  'sx', // Sint Maarten (Dutch part)
  'xk', // Kosovo
  'ss', // South Sudan
] as const;

export type WorldRegions = typeof worldRegions[number];
