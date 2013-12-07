var coinNamesObj = {
alf:"Alphacoin",
anc:"AnonCoin",
asc:"AsicCoin",
bqc:"BBQCoin",
btb:"BitBar",
btc:"Bitcoin",
bte:"ByteCoin",
btg:"BigGem",
buk:"CryptoBuck",
cap:"BottleCaps",
cgb:"CryptogenicBullion",
cmc:"Cosmoscoin",
cnc:"CHNCoin",
crc:"CraftCoin",
csc:"CasinoCoin",
dgc:"DigitalCoin",
dmd:"Diamond",
dtc:"Datacoin",
dvc:"DevCoin",
emd:"Emerald",
frc:"FreiCoin",
frk:"Franko",
fst:"FastCoin",
ftc:"Feathercoin",
gdc:"GrandCoin",
glc:"Globalcoin",
gld:"Goldcoin",
glx:"Galaxycoin",
hbn:"HoboNickels",
ifc:"InfiniteCoin",
ixc:"IXCoin",
kgc:"KrugerCoin",
lky:"LuckyCoin",
ltc:"Litecoin",
mec:"MegaCoin",
mnc:"Mincoin",
msc:"Mastercoin (Uses Bitcoin)",
mst:"Mastercoin (Altcoin)",
nbl:"Nibble",
nec:"NeoCoin",
nmc:"Namecoin",
nrb:"NoirBits",
nvc:"Novacoin",
phs:"PhilosopherStone",
ppc:"Peercoin (was: PPcoin)",
pts:"Protoshares",
pxc:"PhoenixCoin",
qrk:"Quark",
sbc:"StableCoin",
spt:"Spots",
tag:"TagCoin",
tek:"TekCoin",
trc:"TerraCoin",
wdc:"WorldCoin",
xjo:"JouleCoin",
xrp:"Ripple",
zet:"Zetacoin"
}

var coinNamesArr = [];
for (var coinCode in coinNamesObj){
	coinNamesArr.push([coinCode, coinNamesObj[coinCode]]);
}
coinNamesArr.sort(function(a, b) {
	if(a[1] < b[1]) return -1;
    if(a[1] > b[1]) return 1;
    return 0;
}); //Sort by second item (Coin name)
