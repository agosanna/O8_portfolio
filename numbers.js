const numbers = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    21: "twenty-one",
    22: "twenty-two",
    23: "twenty-three",
    24: "twenty-four",
    25: "twenty-five",
    26: "twenty-six",
    27: "twenty-seven",
    28: "twenty-eight",
    29: "twenty-nine",
    30: "thirty",
    31: "thirty-one",
    32: "thirty-two",
    33: "thirty-three",
    34: "thirty-four",
    35: "thirty-five",
    36: "thirty-six",
    37: "thirty-seven",
    38: "thirty-eight",
    39: "thirty-nine",
    40: "forty",
    41: "forty-one",
    42: "forty-two",
    43: "forty-three",
    44: "forty-four",
    45: "forty-five",
    46: "forty-six",
    47: "forty-seven",
    48: "forty-eight",
    49: "forty-nine",
    50: "fifty",
    51: "fifty-one",
    52: "fifty-two",
    53: "fifty-three",
    54: "fifty-four",
    55: "fifty-five",
    56: "fifty-six",
    57: "fifty-seven",
    58: "fifty-eight",
    59: "fifty-nine",
    60: "sixty",
    61: "sixty-one",
    62: "sixty-two",
    63: "sixty-three",
    64: "sixty-four",
    65: "sixty-five",
    66: "sixty-six",
    67: "sixty-seven",
    68: "sixty-eight",
    69: "sixty-nine",
    70: "seventy",
    71: "seventy-one",
    72: "seventy-two",
    73: "seventy-three",
    74: "seventy-four",
    75: "seventy-five",
    76: "seventy-six",
    77: "seventy-seven",
    78: "seventy-eight",
    79: "seventy-nine",
    80: "eighty",
    81: "eighty-one",
    82: "eighty-two",
    83: "eighty-three",
    84: "eighty-four",
    85: "eighty-five",
    86: "eighty-six",
    87: "eighty-seven",
    88: "eighty-eight",
    89: "eighty-nine",
    90: "ninety",
    91: "ninety-one",
    92: "ninety-two",
    93: "ninety-three",
    94: "ninety-four",
    95: "ninety-five",
    96: "ninety-six",
    97: "ninety-seven",
    98: "ninety-eight",
    99: "ninety-nine",
    100: "one hundred",
    101: "one hundred one",
    102: "one hundred two",
    103: "one hundred three",
    104: "one hundred four",
    105: "one hundred five",
    106: "one hundred six",
    107: "one hundred seven",
    108: "one hundred eight",
    109: "one hundred nine",
    110: "one hundred ten",
    111: "one hundred eleven",
    112: "one hundred twelve",
    113: "one hundred thirteen",
    114: "one hundred fourteen",
    115: "one hundred fifteen",
    116: "one hundred sixteen",
    117: "one hundred seventeen",
    118: "one hundred eighteen",
    119: "one hundred nineteen",
    120: "one hundred twenty",
    121: "one hundred twenty-one",
    122: "one hundred twenty-two",
    123: "one hundred twenty-three",
    124: "one hundred twenty-four",
    125: "one hundred twenty-five",
    126: "one hundred twenty-six",
    127: "one hundred twenty-seven",
    128: "one hundred twenty-eight",
    129: "one hundred twenty-nine",
    130: "one hundred thirty",
    131: "one hundred thirty-one",
    132: "one hundred thirty-two",
    133: "one hundred thirty-three",
    134: "one hundred thirty-four",
    135: "one hundred thirty-five",
    136: "one hundred thirty-six",
    137: "one hundred thirty-seven",
    138: "one hundred thirty-eight",
    139: "one hundred thirty-nine",
    140: "one hundred forty",
    141: "one hundred forty-one",
    142: "one hundred forty-two",
    143: "one hundred forty-three",
    144: "one hundred forty-four",
    145: "one hundred forty-five",
    146: "one hundred forty-six",
    147: "one hundred forty-seven",
    148: "one hundred forty-eight",
    149: "one hundred forty-nine",
    150: "one hundred fifty",
    151: "one hundred fifty-one",
    152: "one hundred fifty-two",
    153: "one hundred fifty-three",
    154: "one hundred fifty-four",
    155: "one hundred fifty-five",
    156: "one hundred fifty-six",
    157: "one hundred fifty-seven",
    158: "one hundred fifty-eight",
    159: "one hundred fifty-nine",
    160: "one hundred sixty",
    161: "one hundred sixty-one",
    162: "one hundred sixty-two",
    163: "one hundred sixty-three",
    164: "one hundred sixty-four",
    165: "one hundred sixty-five",
    166: "one hundred sixty-six",
    167: "one hundred sixty-seven",
    168: "one hundred sixty-eight",
    169: "one hundred sixty-nine",
    170: "one hundred seventy",
    171: "one hundred seventy-one",
    172: "one hundred seventy-two",
    173: "one hundred seventy-three",
    174: "one hundred seventy-four",
    175: "one hundred seventy-five",
    176: "one hundred seventy-six",
    177: "one hundred seventy-seven",
    178: "one hundred seventy-eight",
    179: "one hundred seventy-nine",
    180: "one hundred eighty",
    181: "one hundred eighty-one",
    182: "one hundred eighty-two",
    183: "one hundred eighty-three",
    184: "one hundred eighty-four",
    185: "one hundred eighty-five",
    186: "one hundred eighty-six",
    187: "one hundred eighty-seven",
    188: "one hundred eighty-eight",
    189: "one hundred eighty-nine",
    190: "one hundred ninety",
    191: "one hundred ninety-one",
    192: "one hundred ninety-two",
    193: "one hundred ninety-three",
    194: "one hundred ninety-four",
    195: "one hundred ninety-five",
    196: "one hundred ninety-six",
    197: "one hundred ninety-seven",
    198: "one hundred ninety-eight",
    199: "one hundred ninety-nine",
    200: "two hundred",
    201: "two hundred one",
    202: "two hundred two",
    203: "two hundred three",
    204: "two hundred four",
    205: "two hundred five",
    206: "two hundred six",
    207: "two hundred seven",
    208: "two hundred eight",
    209: "two hundred nine",
    210: "two hundred ten",
    211: "two hundred eleven",
    212: "two hundred twelve",
    213: "two hundred thirteen",
    214: "two hundred fourteen",
    215: "two hundred fifteen",
    216: "two hundred sixteen",
    217: "two hundred seventeen",
    218: "two hundred eighteen",
    219: "two hundred nineteen",
     220: "two hundred twenty",
    221: "two hundred twenty-one",
    222: "two hundred twenty-two",
    223: "two hundred twenty-three",
    224: "two hundred twenty-four",
    225: "two hundred twenty-five",
    226: "two hundred twenty-six",
    227: "two hundred twenty-seven",
    228: "two hundred twenty-eight",
    229: "two hundred twenty-nine",
    230: "two hundred thirty",
    231: "two hundred thirty-one",
    232: "two hundred thirty-two",
    233: "two hundred thirty-three",
    234: "two hundred thirty-four",
    235: "two hundred thirty-five",
    236: "two hundred thirty-six",
    237: "two hundred thirty-seven",
    238: "two hundred thirty-eight",
    239: "two hundred thirty-nine",
    240: "two hundred forty",
    241: "two hundred forty-one",
    242: "two hundred forty-two",
    243: "two hundred forty-three",
    244: "two hundred forty-four",
    245: "two hundred forty-five",
    246: "two hundred forty-six",
    247: "two hundred forty-seven",
    248: "two hundred forty-eight",
    249: "two hundred forty-nine",
    250: "two hundred fifty",
    251: "two hundred fifty-one",
    252: "two hundred fifty-two",
    253: "two hundred fifty-three",
    254: "two hundred fifty-four",
    255: "two hundred fifty-five",
    256: "two hundred fifty-six",
    257: "two hundred fifty-seven",
    258: "two hundred fifty-eight",
    259: "two hundred fifty-nine",
    260: "two hundred sixty",
    261: "two hundred sixty-one",
    262: "two hundred sixty-two",
    263: "two hundred sixty-three",
    264: "two hundred sixty-four",
    265: "two hundred sixty-five",
    266: "two hundred sixty-six",
    267: "two hundred sixty-seven",
    268: "two hundred sixty-eight",
    269: "two hundred sixty-nine",
    270: "two hundred seventy",
    271: "two hundred seventy-one",
    272: "two hundred seventy-two",
    273: "two hundred seventy-three",
    274: "two hundred seventy-four",
    275: "two hundred seventy-five",
    276: "two hundred seventy-six",
    277: "two hundred seventy-seven",
    278: "two hundred seventy-eight",
    279: "two hundred seventy-nine",
    280: "two hundred eighty",
    281: "two hundred eighty-one",
    282: "two hundred eighty-two",
    283: "two hundred eighty-three",
    284: "two hundred eighty-four",
    285: "two hundred eighty-five",
    286: "two hundred eighty-six",
    287: "two hundred eighty-seven",
    288: "two hundred eighty-eight",
    289: "two hundred eighty-nine",
    290: "two hundred ninety",
    291: "two hundred ninety-one",
    292: "two hundred ninety-two",
    293: "two hundred ninety-three",
    294: "two hundred ninety-four",
    295: "two hundred ninety-five",
    296: "two hundred ninety-six",
    297: "two hundred ninety-seven",
    298: "two hundred ninety-eight",
    299: "two hundred ninety-nine",
    300: "three hundred"
};

export default numbers;
