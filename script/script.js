angular.module('sortApp', [])
.controller('mainController', function($scope) {

  $scope.sortType     = 'name'; 
  $scope.sortReverse  = false;  
  $scope.searchITEM = '';     

    $scope.ITEM =
    [
        {
            ITEM: "G.Skill - Ripjaws Series 8GB (2 x 4GB) DDR3-1600 Memory",
            PRICE: "$59.99 ",
            LINK: "https://pcpartpicker.com/mr/newegg/36zv6h"
        },
        {
            ITEM: "G.Skill - Trident Z 16GB (2 x 8GB) DDR4-3200 Memory",
            PRICE: "$164.99 ",
            LINK: "https://pcpartpicker.com/mr/newegg/4n648d"
        },
        {
            ITEM: "G.Skill - Trident Z RGB 16GB (2 x 8GB) DDR4-3000 Memory",
            PRICE: "$204.99 ",
            LINK: "https://pcpartpicker.com/mr/newegg/32nG3C"
        },
        {
            ITEM: "G.Skill - Ripjaws V Series 16GB (2 x 8GB) DDR4-3200 Memory",
            PRICE: "$159.99 ",
            LINK: "https://pcpartpicker.com/mr/newegg/Cf98TW"
        },
        {
            ITEM: "G.Skill - Ripjaws V Series 8GB (2 x 4GB) DDR4-3200 Memory",
            PRICE: "$94.99 ",
            LINK: "https://pcpartpicker.com/mr/newegg/zgJkcf"
        },
        {
            ITEM: "G.Skill - Flare X 64GB (4 x 16GB) DDR4-2400 Memory",
            PRICE: "$620.98 ",
            LINK: "https://pcpartpicker.com/mr/newegg/mX7CmG"
        },
        {
            ITEM: "G.Skill - Ripjaws V Series 16GB (2 x 8GB) DDR4-2400 Memory",
            PRICE: "$149.99 ",
            LINK: "https://pcpartpicker.com/mr/newegg/9bhj4D"
        },
        {
            ITEM: "G.Skill - Ripjaws X Series 16GB (2 x 8GB) DDR3-1333 Memory",
            PRICE: "$120.98 ",
            LINK: "https://pcpartpicker.com/mr/newegg/bth9TW"
        },
        {
            ITEM: "Team - T-Force XTREEM 32GB (4 x 8GB) DDR4-3733 Memory",
            PRICE: "$449.99 ",
            LINK: "https://pcpartpicker.com/mr/newegg/sPzkcf"
        },
        {
            ITEM: "G.Skill - Ripjaws V Series 8GB (2 x 4GB) DDR4-3000 Memory",
            PRICE: "$91.99 ",
            LINK: "https://pcpartpicker.com/mr/newegg/wTCrxr"
        },
        {
            ITEM: "G.Skill - Flare X 64GB (4 x 16GB) DDR4-2400 Memory",
            PRICE: "$647.98 ",
            LINK: "https://pcpartpicker.com/mr/newegg/Qr8H99"
        },
        {
            ITEM: "Corsair - Vengeance LPX 8GB (2 x 4GB) DDR4-3000 Memory",
            PRICE: "$105.99 ",
            LINK: "https://pcpartpicker.com/mr/newegg/4mgPxr"
        },
        {
            ITEM: "G.Skill - Ripjaws V Series 32GB (2 x 16GB) DDR4-2133 Memory",
            PRICE: "$289.99 ",
            LINK: "https://pcpartpicker.com/mr/newegg/zMvZxr"
        },
        {
            ITEM: "Team - T-Force DARK 64GB (4 x 16GB) DDR4-3200 Memory",
            PRICE: "$699.99 ",
            LINK: "https://pcpartpicker.com/mr/newegg/ynGxFT"
        },
        {
            ITEM: "G.Skill - Ripjaws V Series 64GB (4 x 16GB) DDR4-2800 Memory",
            PRICE: "$680.98 ",
            LINK: "https://pcpartpicker.com/mr/newegg/WXbkcf"
        },
        {
            ITEM: "Team - T-Force XTREEM 32GB (4 x 8GB) DDR4-3866 Memory",
            PRICE: "$479.99 ",
            LINK: "https://pcpartpicker.com/mr/newegg/3BrmP6"
        },
        {
            ITEM: "G.Skill - Ripjaws V Series 16GB (2 x 8GB) DDR4-3200 Memory",
            PRICE: "$179.99 ",
            LINK: "https://pcpartpicker.com/mr/newegg/T9Gj4D"
        },
        {
            ITEM: "G.Skill - Ripjaws V Series 16GB (4 x 4GB) DDR4-3200 Memory",
            PRICE: "$179.99 ",
            LINK: "https://pcpartpicker.com/mr/newegg/9hgPxr"
        },
        {
            ITEM: "Patriot - Viper Elite 8GB (2 x 4GB) DDR4-2133 Memory",
            PRICE: "$78.70 ",
            LINK: "https://pcpartpicker.com/mr/newegg/4gkwrH"
        },
        {
            ITEM: "G.Skill - Ripjaws V Series 64GB (4 x 16GB) DDR4-2400 Memory",
            PRICE: "$650.98 ",
            LINK: "https://pcpartpicker.com/mr/newegg/kTJkcf"
        },
        {
            ITEM: "G.Skill - Aegis 64GB (4 x 16GB) DDR4-2400 Memory",
            PRICE: "$630.98 ",
            LINK: "https://pcpartpicker.com/mr/newegg/rntWGX"
        },
        {
            ITEM: "G.Skill - Ripjaws V Series 64GB (4 x 16GB) DDR4-2133 Memory",
            PRICE: "$647.98 ",
            LINK: "https://pcpartpicker.com/mr/newegg/6Xbkcf"
        },
        {
            ITEM: "G.Skill - Trident Z RGB 32GB (2 x 16GB) DDR4-3000 Memory",
            PRICE: "$420.98 ",
            LINK: "https://pcpartpicker.com/mr/newegg/9gJtt6"
        },
        {
            ITEM: "Corsair - Vengeance RGB 16GB (2 x 8GB) DDR4-3000 Memory",
            PRICE: "$200.98 ",
            LINK: "https://pcpartpicker.com/mr/newegg/9ZL48d"
        },
        {
            ITEM: "G.Skill - Ripjaws V Series 64GB (4 x 16GB) DDR4-3000 Memory",
            PRICE: "$800.98 ",
            LINK: "https://pcpartpicker.com/mr/newegg/6RvZxr"
        },
        {
            ITEM: "G.Skill - Ripjaws V Series 64GB (4 x 16GB) DDR4-3000 Memory",
            PRICE: "$800.98 ",
            LINK: "https://pcpartpicker.com/mr/newegg/3yKhP6"
        },
        {
            ITEM: "G.Skill - Trident Z 64GB (4 x 16GB) DDR4-3000 Memory",
            PRICE: "$820.98 ",
            LINK: "https://pcpartpicker.com/mr/newegg/CbKhP6"
        },
        {
            ITEM: "Corsair - 8GB (2 x 4GB) DDR3-1333 Memory",
            PRICE: "$64.67 ",
            LINK: "https://pcpartpicker.com/mr/newegg/PkQypg"
        },
        {
            ITEM: "Corsair - Vengeance LPX 32GB (2 x 16GB) DDR4-2400 Memory",
            PRICE: "$333.73 ",
            LINK: "https://pcpartpicker.com/mr/newegg/NCL7YJ"
        },
        {
            ITEM: "Wintec - 32GB (4 x 8GB) Registered DDR3-1600 Memory",
            PRICE: "$334.57 ",
            LINK: "https://pcpartpicker.com/mr/newegg/9V38TW"
        },
        {
            ITEM: "Corsair - Vengeance LPX 16GB (2 x 8GB) DDR4-3000 Memory",
            PRICE: "$185.99 ",
            LINK: "https://pcpartpicker.com/mr/newegg/6ntWGX"
        },
        {
            ITEM: "Corsair - Vengeance LPX 8GB (1 x 8GB) DDR4-2666 Memory",
            PRICE: "$85.58 ",
            LINK: "https://pcpartpicker.com/mr/newegg/dwhj4D"
        },
        {
            ITEM: "Corsair - Vengeance LPX 32GB (4 x 8GB) DDR4-3000 Memory",
            PRICE: "$369.99 ",
            LINK: "https://pcpartpicker.com/mr/newegg/ZkfhP6"
        },
        {
            ITEM: "Corsair - Vengeance RGB 16GB (2 x 8GB) DDR4-3600 Memory",
            PRICE: "$217.16 ",
            LINK: "https://pcpartpicker.com/mr/outletpc/VfYWGX"
        },
        {
            ITEM: "Corsair - Vengeance LPX 32GB (4 x 8GB) DDR4-2400 Memory",
            PRICE: "$326.64 ",
            LINK: "https://pcpartpicker.com/mr/newegg/bhtWGX"
        },
        {
            ITEM: "Corsair - Dominator Platinum 32GB (2 x 16GB) DDR4-3200 Memory",
            PRICE: "$419.78 ",
            LINK: "https://pcpartpicker.com/mr/newegg/fC648d"
        },
        {
            ITEM: "G.Skill - FORTIS 16GB (2 x 8GB) DDR4-2400 Memory",
            PRICE: "$155.98 ",
            LINK: "https://pcpartpicker.com/mr/newegg/Vwbkcf"
        },
        {
            ITEM: "Crucial - 32GB (2 x 16GB) DDR4-2133 Memory",
            PRICE: "$338.49 ",
            LINK: "https://pcpartpicker.com/mr/adorama/n9rcCJ"
        },
        {
            ITEM: "G.Skill - Ripjaws V Series 32GB (2 x 16GB) DDR4-3200 Memory",
            PRICE: "$435.98 ",
            LINK: "https://pcpartpicker.com/mr/newegg/BZwqqs"
        },
        {
            ITEM: "G.Skill - Aegis 8GB (1 x 8GB) DDR4-3000 Memory",
            PRICE: "$77.99 ",
            LINK: "https://pcpartpicker.com/mr/newegg/XJYWGX"
        },
        {
            ITEM: "Kingston - HyperX Impact 16GB (1 x 16GB) DDR4-2666 Memory",
            PRICE: "$191.99 ",
            LINK: "https://pcpartpicker.com/mr/walmart/Tv448d"
        },
        {
            ITEM: "G.Skill - Trident Z 64GB (4 x 16GB) DDR4-3200 Memory",
            PRICE: "$950.98 ",
            LINK: "https://pcpartpicker.com/mr/newegg/TBjWGX"
        },
        {
            ITEM: "G.Skill - Trident Z RGB 32GB (4 x 8GB) DDR4-3600 Memory",
            PRICE: "$499.99 ",
            LINK: "https://pcpartpicker.com/mr/newegg/V398TW"
        },
        {
            ITEM: "G.Skill - Trident Z RGB 32GB (4 x 8GB) DDR4-3000 Memory",
            PRICE: "$375.99 ",
            LINK: "https://pcpartpicker.com/mr/newegg/Q3M323"
        },
        {
            ITEM: "G.Skill - Ripjaws V Series 16GB (2 x 8GB) DDR4-2800 Memory",
            PRICE: "$159.99 ",
            LINK: "https://pcpartpicker.com/mr/newegg/zBZ2FT"
        },
        {
            ITEM: "ADATA - XPG GAMMIX D10 8GB (2 x 4GB) DDR4-3000 Memory",
            PRICE: "$84.99 ",
            LINK: "https://pcpartpicker.com/mr/newegg/mWc48d"
        },
        {
            ITEM: "Corsair - Vengeance LPX 16GB (2 x 8GB) DDR4-3000 Memory",
            PRICE: "$177.99 ",
            LINK: "https://pcpartpicker.com/mr/newegg/Ntp323"
        },
        {
            ITEM: "G.Skill - Trident Z 64GB (4 x 16GB) DDR4-3300 Memory",
            PRICE: "$840.98 ",
            LINK: "https://pcpartpicker.com/mr/newegg/NFzZxr"
        },
        {
            ITEM: "G.Skill - Ripjaws V Series 16GB (2 x 8GB) DDR4-3200 Memory",
            PRICE: "$180.98 ",
            LINK: "https://pcpartpicker.com/mr/newegg/qGqbt6"
        },
        {
            ITEM: "Corsair - Vengeance RGB 64GB (4 x 16GB) DDR4-3000 Memory",
            PRICE: "$747.85 ",
            LINK: "https://pcpartpicker.com/mr/newegg/PNyV3C"
        },
        {
            ITEM: "Corsair - Vengeance LPX 32GB (4 x 8GB) DDR4-4133 Memory",
            PRICE: "$524.75 ",
            LINK: "https://pcpartpicker.com/mr/newegg/hVm323"
        },
        {
            ITEM: "Corsair - Dominator Platinum 32GB (4 x 8GB) DDR4-3200 Memory",
            PRICE: "$485.95 ",
            LINK: "https://pcpartpicker.com/mr/newegg/GCzZxr"
        },
        {
            ITEM: "G.Skill - Trident Z RGB 32GB (2 x 16GB) DDR4-3200 Memory",
            PRICE: "$450.98 ",
            LINK: "https://pcpartpicker.com/mr/newegg/WtjWGX"
        },
        {
            ITEM: "GeIL - EVO FORZA 16GB (2 x 8GB) DDR4-2666 Memory",
            PRICE: "$157.99 ",
            LINK: "https://pcpartpicker.com/mr/newegg/kyWfrH"
        },
        {
            ITEM: "Team - Elite Plus 16GB (2 x 8GB) DDR4-2400 Memory",
            PRICE: "$155.98 ",
            LINK: "https://pcpartpicker.com/mr/newegg/qBmxFT"
        },
        {
            ITEM: "G.Skill - Ripjaws 4 series 8GB (2 x 4GB) DDR4-2400 Memory",
            PRICE: "$95.98 ",
            LINK: "https://pcpartpicker.com/mr/newegg/cLkwrH"
        },
        {
            ITEM: "G.Skill - Trident Z 64GB (4 x 16GB) DDR4-3200 Memory",
            PRICE: "$830.98 ",
            LINK: "https://pcpartpicker.com/mr/newegg/w6rcCJ"
        },
        {
            ITEM: "G.Skill - Trident Z 64GB (4 x 16GB) DDR4-3400 Memory",
            PRICE: "$910.98 ",
            LINK: "https://pcpartpicker.com/mr/newegg/P8rcCJ"
        },
        {
            ITEM: "Corsair - Dominator Platinum 32GB (2 x 16GB) DDR4-3000 Memory",
            PRICE: "$403.98 ",
            LINK: "https://pcpartpicker.com/mr/newegg/2VcMnQ"
        },
        {
            ITEM: "G.Skill - Ripjaws X Series 16GB (2 x 8GB) DDR3-1866 Memory",
            PRICE: "$129.98 ",
            LINK: "https://pcpartpicker.com/mr/newegg/kjzv6h"
        },
        {
            ITEM: "Mushkin - ECO2 16GB (2 x 8GB) DDR3-1600 Memory",
            PRICE: "$126.98 ",
            LINK: "https://pcpartpicker.com/mr/newegg/fQqbt6"
        },
        {
            ITEM: "Mushkin - 4GB (1 x 4GB) DDR2-800 Memory",
            PRICE: "$78.98 ",
            LINK: "https://pcpartpicker.com/mr/newegg/VNbp99"
        },
        {
            ITEM: "G.Skill - Trident Z 64GB (4 x 16GB) DDR4-3600 Memory",
            PRICE: "$920.98 ",
            LINK: "https://pcpartpicker.com/mr/newegg/gwL7YJ"
        },
        {
            ITEM: "G.Skill - Flare X 64GB (4 x 16GB) DDR4-2933 Memory",
            PRICE: "$910.98 ",
            LINK: "https://pcpartpicker.com/mr/newegg/bwc48d"
        },
        {
            ITEM: "G.Skill - Ripjaws V Series 64GB (4 x 16GB) DDR4-3200 Memory",
            PRICE: "$930.98 ",
            LINK: "https://pcpartpicker.com/mr/newegg/t8rcCJ"
        },
        {
            ITEM: "G.Skill - Trident Z 64GB (4 x 16GB) DDR4-3200 Memory",
            PRICE: "$950.98 ",
            LINK: "https://pcpartpicker.com/mr/newegg/p34NnQ"
        },
        {
            ITEM: "G.Skill - Flare X 64GB (4 x 16GB) DDR4-2933 Memory",
            PRICE: "$837.98 ",
            LINK: "https://pcpartpicker.com/mr/newegg/pRVD4D"
        },
        {
            ITEM: "Corsair - Vengeance LED 32GB (2 x 16GB) DDR4-3600 Memory",
            PRICE: "$420.98 ",
            LINK: "https://pcpartpicker.com/mr/newegg/mYL48d"
        },
        {
            ITEM: "Corsair - Vengeance LPX 32GB (2 x 16GB) DDR4-3000 Memory",
            PRICE: "$370.74 ",
            LINK: "https://pcpartpicker.com/mr/walmart/pGqbt6"
        },
        {
            ITEM: "Corsair - Vengeance LED 32GB (4 x 8GB) DDR4-3000 Memory",
            PRICE: "$383.89 ",
            LINK: "https://pcpartpicker.com/mr/neweggbusiness/8dH48d"
        },
        {
            ITEM: "G.Skill - 16GB (2 x 8GB) DDR3-1333 Memory",
            PRICE: "$120.98 ",
            LINK: "https://pcpartpicker.com/mr/newegg/qbJwrH"
        },
        {
            ITEM: "Corsair - Vengeance LED 16GB (2 x 8GB) DDR4-3000 Memory",
            PRICE: "$184.98 ",
            LINK: "https://pcpartpicker.com/mr/newegg/vcMwrH"
        },
        {
            ITEM: "Corsair - 8GB (2 x 4GB) DDR3-1333 Memory",
            PRICE: "$65.07 ",
            LINK: "https://pcpartpicker.com/mr/newegg/jgMFf7"
        },
        {
            ITEM: "G.Skill - 8GB (2 x 4GB) DDR3-1600 Memory",
            PRICE: "$66.98 ",
            LINK: "https://pcpartpicker.com/mr/newegg/J4Lypg"
        },
        {
            ITEM: "Corsair - Vengeance 8GB (2 x 4GB) DDR3-1600 Memory",
            PRICE: "$73.50 ",
            LINK: "https://pcpartpicker.com/mr/newegg/KK9KHx"
        },
        {
            ITEM: "Crucial - 64GB (4 x 16GB) Registered DDR4-2133 Memory",
            PRICE: "$890.60 ",
            LINK: "https://pcpartpicker.com/mr/neweggmkt/6qYXsY"
        },
        {
            ITEM: "Corsair - Vengeance LPX 32GB (2 x 16GB) DDR4-3200 Memory",
            PRICE: "$416.39 ",
            LINK: "https://pcpartpicker.com/mr/newegg/6rrcCJ"
        },
        {
            ITEM: "Corsair - Dominator Platinum 32GB (4 x 8GB) DDR4-2400 Memory",
            PRICE: "$398.37 ",
            LINK: "https://pcpartpicker.com/mr/newegg/VFTrxr"
        },
        {
            ITEM: "Corsair - Vengeance LPX 32GB (2 x 16GB) DDR4-3200 Memory",
            PRICE: "$401.06 ",
            LINK: "https://pcpartpicker.com/mr/newegg/KntWGX"
        },
        {
            ITEM: "Corsair - Vengeance LPX 64GB (4 x 16GB) DDR4-2400 Memory",
            PRICE: "$709.74 ",
            LINK: "https://pcpartpicker.com/mr/newegg/zfPzK8"
        },
        {
            ITEM: "Dell - 1TB 2.5\" 7200RPM Internal Hard Drive",
            PRICE: "$115.99 ",
            LINK: "https://pcpartpicker.com/mr/neweggmkt/rGX2FT"
        },
        {
            ITEM: "Mushkin - Source 500GB 2.5\" Solid State Drive",
            PRICE: "$89.99 ",
            LINK: "https://pcpartpicker.com/mr/newegg/wkWfrH"
        },
        {
            ITEM: "Seagate - Barracuda 160GB 3.5\" 7200RPM Internal Hard Drive",
            PRICE: "$99.89 ",
            LINK: "https://pcpartpicker.com/mr/neweggmkt/d6tCmG"
        },
        {
            ITEM: "Intel - DC S3710 800GB 2.5\" Solid State Drive",
            PRICE: "$643.94 ",
            LINK: "https://pcpartpicker.com/mr/neweggmkt/YVnG3C"
        },
        {
            ITEM: "Team - L5 LITE 3D 480GB 2.5\" Solid State Drive",
            PRICE: "$79.99 ",
            LINK: "https://pcpartpicker.com/mr/newegg/XZzkcf"
        },
        {
            ITEM: "Plextor - M8Pe 512GB M.2-2280 Solid State Drive",
            PRICE: "$217.51 ",
            LINK: "https://pcpartpicker.com/mr/neweggmkt/ZQPzK8"
        },
        {
            ITEM: "VisionTek - mSATA 120GB mSATA Solid State Drive",
            PRICE: "$77.99 ",
            LINK: "https://pcpartpicker.com/mr/neweggmkt/yf6BD3"
        },
        {
            ITEM: "Transcend - 1TB 2.5\" Solid State Drive",
            PRICE: "$355.99 ",
            LINK: "https://pcpartpicker.com/mr/neweggmkt/wzYWGX"
        },
        {
            ITEM: "Hitachi - Deskstar 2TB 3.5\" 7200RPM Internal Hard Drive",
            PRICE: "$125.48 ",
            LINK: "https://pcpartpicker.com/mr/neweggmkt/c2DwrH"
        },
        {
            ITEM: "OCZ - Vertex 2 Pro 50GB 2.5\" Solid State Drive",
            PRICE: "$385.40 ",
            LINK: "https://pcpartpicker.com/mr/neweggmkt/DpvRsY"
        },
        {
            ITEM: "Western Digital - RE4-GP 2TB 3.5\" 5900RPM Internal Hard Drive",
            PRICE: "$116.15 ",
            LINK: "https://pcpartpicker.com/mr/neweggmkt/Dt2kcf"
        },
        {
            ITEM: "Seagate - FireCuda 1TB 3.5\" 7200RPM Hybrid Internal Hard Drive",
            PRICE: "$69.99 ",
            LINK: "https://pcpartpicker.com/mr/neweggbusiness/n28H99"
        },
        {
            ITEM: "Western Digital - VelociRaptor 150GB 2.5\" 10000RPM Internal Hard Drive",
            PRICE: "$57.89 ",
            LINK: "https://pcpartpicker.com/mr/neweggmkt/Nr8Zxr"
        },
        {
            ITEM: "Western Digital - RE 6TB 3.5\" 7200RPM Internal Hard Drive",
            PRICE: "$279.99 ",
            LINK: "https://pcpartpicker.com/mr/neweggmkt/7ykwrH"
        },
        {
            ITEM: "Intel - 520 Series Cherryville 240GB 2.5\" Solid State Drive",
            PRICE: "$257.88 ",
            LINK: "https://pcpartpicker.com/mr/neweggmkt/sP4gXL"
        },
        {
            ITEM: "Western Digital - AV-25 500GB 2.5\" 5400RPM Internal Hard Drive",
            PRICE: "$49.09 ",
            LINK: "https://pcpartpicker.com/mr/neweggmkt/KQH323"
        },
        {
            ITEM: "Hitachi - Travelstar 5K1000 1TB 2.5\" 5400RPM Internal Hard Drive",
            PRICE: "$45.89 ",
            LINK: "https://pcpartpicker.com/mr/newegg/sDLypg"
        },
        {
            ITEM: "Samsung - 860 Evo 2TB M.2-2280 Solid State Drive",
            PRICE: "$540.57 ",
            LINK: "https://pcpartpicker.com/mr/newegg/D9rmP6"
        },
        {
            ITEM: "Hitachi - HGST Ultrastar He10 10TB 3.5\" 7200RPM Internal Hard Drive",
            PRICE: "$411.76 ",
            LINK: "https://pcpartpicker.com/mr/newegg/3KXnTW"
        },
        {
            ITEM: "Western Digital - Red Pro 3TB 3.5\" 7200RPM Internal Hard Drive",
            PRICE: "$238.09 ",
            LINK: "https://pcpartpicker.com/mr/neweggmkt/RHV48d"
        },
        {
            ITEM: "Seagate - Barracuda LP 1.5TB 3.5\" 5900RPM Internal Hard Drive",
            PRICE: "$138.89 ",
            LINK: "https://pcpartpicker.com/mr/neweggmkt/cxMFf7"
        },
        {
            ITEM: "Seagate - BarraCuda 4TB 2.5\" 5400RPM Internal Hard Drive",
            PRICE: "$156.13 ",
            LINK: "https://pcpartpicker.com/mr/newegg/ky98TW"
        },
        {
            ITEM: "Western Digital - VelociRaptor 150GB 3.5\" 10000RPM Internal Hard Drive",
            PRICE: "$116.09 ",
            LINK: "https://pcpartpicker.com/mr/neweggmkt/GyNp99"
        },
        {
            ITEM: "Western Digital - Green  240GB 2.5\" Solid State Drive",
            PRICE: "$62.76 ",
            LINK: "https://pcpartpicker.com/mr/neweggmkt/9Bc48d"
        },
        {
            ITEM: "Seagate - Constellation ES 2TB 3.5\" 7200RPM Internal Hard Drive",
            PRICE: "$57.89 ",
            LINK: "https://pcpartpicker.com/mr/neweggmkt/JnvRsY"
        },
        {
            ITEM: "Western Digital - Caviar Green 2TB 3.5\" 5400RPM Internal Hard Drive",
            PRICE: "$58.89 ",
            LINK: "https://pcpartpicker.com/mr/neweggmkt/6kZQzy"
        },
        {
            ITEM: "Hitachi - HGST Ultrastar 900GB 2.5\" 10520RPM Internal Hard Drive",
            PRICE: "$238.65 ",
            LINK: "https://pcpartpicker.com/mr/neweggbusiness/R28j4D"
        },
        {
            ITEM: "Samsung - 860 Pro 2TB 2.5\" Solid State Drive",
            PRICE: "$823.56 ",
            LINK: "https://pcpartpicker.com/mr/newegg/nxsmP6"
        },
        {
            ITEM: "Samsung - 850 EVO-Series 500GB 2.5\" Solid State Drive",
            PRICE: "$145.59 ",
            LINK: "https://pcpartpicker.com/mr/neweggmkt/FrH48d"
        },
        {
            ITEM: "Western Digital - WD RE 2TB 3.5\" 7200RPM Internal Hard Drive",
            PRICE: "$227.89 ",
            LINK: "https://pcpartpicker.com/mr/neweggmkt/PGyFf7"
        },
        {
            ITEM: "Hitachi - 6TB 3.5\" 7200RPM Internal Hard Drive",
            PRICE: "$381.47 ",
            LINK: "https://pcpartpicker.com/mr/neweggmkt/XTYLrH"
        },
        {
            ITEM: "Samsung - 860 Evo 500GB 2.5\" Solid State Drive",
            PRICE: "$126.94 ",
            LINK: "https://pcpartpicker.com/mr/newegg/6yKcCJ"
        },
        {
            ITEM: "Samsung - 850 Pro Series 128GB 2.5\" Solid State Drive",
            PRICE: "$268.75 ",
            LINK: "https://pcpartpicker.com/mr/neweggmkt/PXXfrH"
        },
        {
            ITEM: "Transcend - 32GB mSATA Solid State Drive",
            PRICE: "$66.99 ",
            LINK: "https://pcpartpicker.com/mr/neweggmkt/hr9KHx"
        },
        {
            ITEM: "Intel - 535 Series 120GB M.2-2280 Solid State Drive",
            PRICE: "$210.08 ",
            LINK: "https://pcpartpicker.com/mr/neweggmkt/8x648d"
        },
        {
            ITEM: "Crucial - BX300 120GB 2.5\" Solid State Drive",
            PRICE: "$52.45 ",
            LINK: "https://pcpartpicker.com/mr/neweggmkt/vxX2FT"
        },
        {
            ITEM: "Transcend - MTS400 64GB M.2-2242 Solid State Drive",
            PRICE: "$65.99 ",
            LINK: "https://pcpartpicker.com/mr/neweggmkt/dqYXsY"
        },
        {
            ITEM: "Seagate - Momentus Thin 320GB 2.5\" 7200RPM Internal Hard Drive",
            PRICE: "$28.89 ",
            LINK: "https://pcpartpicker.com/mr/neweggmkt/kyMFf7"
        },
        {
            ITEM: "Seagate - 2TB 2.5\" 7200RPM Internal Hard Drive",
            PRICE: "$326.45 ",
            LINK: "https://pcpartpicker.com/mr/neweggmkt/C8KhP6"
        },
        {
            ITEM: "Transcend - MTS400 256GB M.2-2242 Solid State Drive",
            PRICE: "$194.99 ",
            LINK: "https://pcpartpicker.com/mr/neweggmkt/ZPbp99"
        },
        {
            ITEM: "Western Digital - Green 120GB M.2-2280 Solid State Drive",
            PRICE: "$59.99 ",
            LINK: "https://pcpartpicker.com/mr/neweggmkt/dxNypg"
        },
        {
            ITEM: "Intel - 545s 512GB M.2-2280 Solid State Drive",
            PRICE: "$154.99 ",
            LINK: "https://pcpartpicker.com/mr/newegg/yY97YJ"
        },
        {
            ITEM: "Transcend - MTS600 64GB M.2-2260 Solid State Drive",
            PRICE: "$121.73 ",
            LINK: "https://pcpartpicker.com/mr/neweggmkt/YXXfrH"
        },
        {
            ITEM: "Intel - 545s 256GB M.2-2280 Solid State Drive",
            PRICE: "$74.00 ",
            LINK: "https://pcpartpicker.com/mr/newegg/sDqhP6"
        },
        {
            ITEM: "Intel - 540s 480GB 2.5\" Solid State Drive",
            PRICE: "$179.00 ",
            LINK: "https://pcpartpicker.com/mr/neweggmkt/Y3yxFT"
        },
        {
            ITEM: "Transcend - 240GB 2.5\" Solid State Drive",
            PRICE: "$78.04 ",
            LINK: "https://pcpartpicker.com/mr/neweggmkt/tWyxFT"
        },
        {
            ITEM: "Western Digital - Blue 2TB M.2-2280 Solid State Drive",
            PRICE: "$461.26 ",
            LINK: "https://pcpartpicker.com/mr/walmart/CXvbt6"
        },
        {
            ITEM: "SanDisk - Ultra II 256GB mSATA Solid State Drive",
            PRICE: "$173.99 ",
            LINK: "https://pcpartpicker.com/mr/neweggmkt/Wwhj4D"
        },
        {
            ITEM: "Western Digital - Red 10TB 3.5\" 5400RPM Internal Hard Drive",
            PRICE: "$314.99 ",
            LINK: "https://pcpartpicker.com/mr/newegg/PTKhP6"
        },
        {
            ITEM: "Transcend - MTS400 128GB M.2-2242 Solid State Drive",
            PRICE: "$107.99 ",
            LINK: "https://pcpartpicker.com/mr/neweggmkt/h72kcf"
        },
        {
            ITEM: "Western Digital - Re 250GB 3.5\" 7200RPM Internal Hard Drive",
            PRICE: "$48.09 ",
            LINK: "https://pcpartpicker.com/mr/neweggmkt/49bp99"
        },
        {
            ITEM: "Seagate - Barracuda 7200.9 160GB 3.5\" 7200RPM Internal Hard Drive",
            PRICE: "$36.29 ",
            LINK: "https://pcpartpicker.com/mr/neweggmkt/9Q648d"
        },
        {
            ITEM: "Samsung - 960 Pro 1TB M.2-2280 Solid State Drive",
            PRICE: "$587.89 ",
            LINK: "https://pcpartpicker.com/mr/neweggmkt/C3mxFT"
        },
        {
            ITEM: "Seagate - Barracuda 3TB 3.5\" 7200RPM Internal Hard Drive",
            PRICE: "$82.51 ",
            LINK: "https://pcpartpicker.com/mr/outletpc/j28H99"
        },
        {
            ITEM: "Seagate - Constellation ES 2TB 3.5\" 7200RPM Internal Hard Drive",
            PRICE: "$75.09 ",
            LINK: "https://pcpartpicker.com/mr/neweggmkt/KDW9TW"
        },
        {
            ITEM: "Seagate - 1TB 3.5\" 7200RPM Internal Hard Drive",
            PRICE: "$58.99 ",
            LINK: "https://pcpartpicker.com/mr/neweggmkt/pJbkcf"
        },
        {
            ITEM: "Corsair - Force 115GB 2.5\" Solid State Drive",
            PRICE: "$364.01 ",
            LINK: "https://pcpartpicker.com/mr/neweggmkt/7PphP6"
        },
        {
            ITEM: "SanDisk - Z400s 256GB 2.5\" Solid State Drive",
            PRICE: "$195.99 ",
            LINK: "https://pcpartpicker.com/mr/neweggmkt/XK4NnQ"
        },
        {
            ITEM: "Western Digital - WD Black 4TB 3.5\" 7200RPM Internal Hard Drive",
            PRICE: "$190.09 ",
            LINK: "https://pcpartpicker.com/mr/neweggmkt/9BkD4D"
        },
        {
            ITEM: "HP - EX920 512GB M.2-2280 Solid State Drive",
            PRICE: "$179.99 ",
            LINK: "https://pcpartpicker.com/mr/walmart/mNx2FT"
        },
        {
            ITEM: "Western Digital - Blue 500GB 2.5\" Solid State Drive",
            PRICE: "$117.53 ",
            LINK: "https://pcpartpicker.com/mr/newegg/LRkj4D"
        },
        {
            ITEM: "SanDisk - Z400s 128GB 2.5\" Solid State Drive",
            PRICE: "$124.99 ",
            LINK: "https://pcpartpicker.com/mr/neweggmkt/hCL7YJ"
        },
        {
            ITEM: "Transcend - 128GB 2.5\" Solid State Drive",
            PRICE: "$65.84 ",
            LINK: "https://pcpartpicker.com/mr/neweggmkt/cTBrxr"
        },
        {
            ITEM: "Western Digital - AV-GP 1TB 3.5\" 5400RPM Internal Hard Drive",
            PRICE: "$61.39 ",
            LINK: "https://pcpartpicker.com/mr/neweggmkt/jt2kcf"
        },
        {
            ITEM: "Western Digital - RE4 1TB 3.5\" 7200RPM Internal Hard Drive",
            PRICE: "$91.99 ",
            LINK: "https://pcpartpicker.com/mr/neweggmkt/KzTmP6"
        },
        {
            ITEM: "Patriot - Ignite 240GB 2.5\" Solid State Drive",
            PRICE: "$302.33 ",
            LINK: "https://pcpartpicker.com/mr/neweggmkt/V27CmG"
        },
        {
            ITEM: "Samsung - 840 Series 250GB 2.5\" Solid State Drive",
            PRICE: "$217.88 ",
            LINK: "https://pcpartpicker.com/mr/neweggmkt/G37wrH"
        },
        {
            ITEM: "Seagate - 6TB 3.5\" 7200RPM Internal Hard Drive",
            PRICE: "$270.65 ",
            LINK: "https://pcpartpicker.com/mr/neweggmkt/yvfmP6"
        },
        {
            ITEM: "Hitachi - 10TB 3.5\" 7200RPM Internal Hard Drive",
            PRICE: "$447.54 ",
            LINK: "https://pcpartpicker.com/mr/neweggmkt/twgzK8"
        },
        {
            ITEM: "Seagate - 1TB 2.5\" 7200RPM Internal Hard Drive",
            PRICE: "$195.25 ",
            LINK: "https://pcpartpicker.com/mr/neweggmkt/4dX2FT"
        },
        {
            ITEM: "Western Digital - Caviar Black 4TB 3.5\" 7200RPM Internal Hard Drive",
            PRICE: "$182.99 ",
            LINK: "https://pcpartpicker.com/mr/neweggmkt/7VmxFT"
        },
        {
            ITEM: "Seagate - 2TB 2.5\" 7200RPM Internal Hard Drive",
            PRICE: "$331.09 ",
            LINK: "https://pcpartpicker.com/mr/neweggmkt/zNPzK8"
        },
        {
            ITEM: "Samsung - 840 EVO 500GB 2.5\" Solid State Drive",
            PRICE: "$393.89 ",
            LINK: "https://pcpartpicker.com/mr/neweggmkt/Ds9KHx"
        },
        {
            ITEM: "Fractal Design - Define R5 w/Window (White) ATX Mid Tower Case",
            PRICE: "$79.99 ",
            LINK: "https://pcpartpicker.com/mr/superbiiz/cNGj4D"
        },
        {
            ITEM: "Fractal Design - Define Nano S Mini ITX Desktop Case",
            PRICE: "$44.99 ",
            LINK: "https://pcpartpicker.com/mr/superbiiz/7d98TW"
        },
        {
            ITEM: "Inwin - 901 Mini ITX Tower Case",
            PRICE: "$168.94 ",
            LINK: "https://pcpartpicker.com/mr/neweggmkt/TVsKHx"
        },
        {
            ITEM: "NZXT - Source 210 (White) ATX Mid Tower Case",
            PRICE: "$79.89 ",
            LINK: "https://pcpartpicker.com/mr/outletpc/wWQypg"
        },
        {
            ITEM: "Cooler Master - MasterBox Q300L MicroATX Mini Tower Case",
            PRICE: "$32.99 ",
            LINK: "https://pcpartpicker.com/mr/superbiiz/rnGxFT"
        },
        {
            ITEM: "NZXT - Phantom 240 ATX Mid Tower Case",
            PRICE: "$54.00 ",
            LINK: "https://pcpartpicker.com/mr/newegg/RHYXsY"
        },
        {
            ITEM: "Thermaltake - View 22 Tempered Glass Edition ATX Mid Tower Case",
            PRICE: "$44.99 ",
            LINK: "https://pcpartpicker.com/mr/newegg/q4YLrH"
        },
        {
            ITEM: "DIYPC - DIY-G5-BK ATX Mid Tower Case",
            PRICE: "$48.89 ",
            LINK: "https://pcpartpicker.com/mr/newegg/L4M323"
        },
        {
            ITEM: "Silverstone - ML02B-MXR HTPC Case w/120W Power Supply",
            PRICE: "$256.98 ",
            LINK: "https://pcpartpicker.com/mr/neweggbusiness/Vfzv6h"
        },
        {
            ITEM: "Fractal Design - Define R6 White TG ATX Mid Tower Case",
            PRICE: "$163.33 ",
            LINK: "https://pcpartpicker.com/mr/newegg/fpGxFT"
        },
        {
            ITEM: "Apevia - X-HERMES-BL ATX Mid Tower Case",
            PRICE: "$58.62 ",
            LINK: "https://pcpartpicker.com/mr/newegg/NJ6BD3"
        },
        {
            ITEM: "Apevia - X-SNIPER2-WHT ATX Mid Tower Case",
            PRICE: "$43.40 ",
            LINK: "https://pcpartpicker.com/mr/newegg/bVMFf7"
        },
        {
            ITEM: "Apevia - X-DREAMER4-BL ATX Mid Tower Case",
            PRICE: "$59.17 ",
            LINK: "https://pcpartpicker.com/mr/newegg/VVxfrH"
        },
        {
            ITEM: "Fractal Design - Define Mini C TG MicroATX Mid Tower Case",
            PRICE: "$59.99 ",
            LINK: "https://pcpartpicker.com/mr/superbiiz/kRDzK8"
        },
        {
            ITEM: "Lian-Li - PC-T60B ATX Test Bench Case",
            PRICE: "$69.57 ",
            LINK: "https://pcpartpicker.com/mr/neweggbusiness/K2ckcf"
        },
        {
            ITEM: "Raidmax - ATX-522WBU ATX Mid Tower Case",
            PRICE: "$49.99 ",
            LINK: "https://pcpartpicker.com/mr/neweggmkt/PsnG3C"
        },
        {
            ITEM: "Apex - TM366BK MicroATX Mid Tower Case w/300W Power Supply",
            PRICE: "$44.99 ",
            LINK: "https://pcpartpicker.com/mr/neweggbusiness/2yzv6h"
        },
        {
            ITEM: "Corsair - Vengeance C70 (Black) ATX Mid Tower Case",
            PRICE: "$207.94 ",
            LINK: "https://pcpartpicker.com/mr/neweggmkt/4FV48d"
        },
        {
            ITEM: "Phanteks - Enthoo Evolv TG (Silver) MicroATX Mini Tower Case",
            PRICE: "$117.03 ",
            LINK: "https://pcpartpicker.com/mr/newegg/mwbkcf"
        },
        {
            ITEM: "NZXT - Source 530 ATX Full Tower Case",
            PRICE: "$72.00 ",
            LINK: "https://pcpartpicker.com/mr/newegg/y6kD4D"
        },
        {
            ITEM: "Apevia - X-QBER-WHT MicroATX Desktop Case",
            PRICE: "$43.99 ",
            LINK: "https://pcpartpicker.com/mr/newegg/VQ648d"
        },
        {
            ITEM: "Corsair - Carbide Series 88R MicroATX Mid Tower Case",
            PRICE: "$39.99 ",
            LINK: "https://pcpartpicker.com/mr/newegg/shtWGX"
        },
        {
            ITEM: "NZXT - Manta Mini ITX Desktop Case",
            PRICE: "$93.50 ",
            LINK: "https://pcpartpicker.com/mr/newegg/4Y98TW"
        },
        {
            ITEM: "Inwin - BL672.FH300TB3F HTPC Case",
            PRICE: "$81.85 ",
            LINK: "https://pcpartpicker.com/mr/neweggmkt/XCsKHx"
        },
        {
            ITEM: "NZXT - S340 (Matte White/Purple) ATX Mid Tower Case",
            PRICE: "$54.00 ",
            LINK: "https://pcpartpicker.com/mr/newegg/Z9p323"
        },
        {
            ITEM: "Azza - Storm 6000B RGB (White) ATX Full Tower Case",
            PRICE: "$144.90 ",
            LINK: "https://pcpartpicker.com/mr/newegg/8938TW"
        },
        {
            ITEM: "NZXT - Phantom 410 (White) ATX Mid Tower Case",
            PRICE: "$79.99 ",
            LINK: "https://pcpartpicker.com/mr/newegg/BcXfrH"
        },
        {
            ITEM: "Enermax - Ostrog ADV (Black/Blue) ATX Mid Tower Case",
            PRICE: "$109.99 ",
            LINK: "https://pcpartpicker.com/mr/neweggmkt/zQrcCJ"
        },
        {
            ITEM: "NZXT - Phantom (Black) ATX Full Tower Case",
            PRICE: "$94.99 ",
            LINK: "https://pcpartpicker.com/mr/newegg/3QW9TW"
        },
        {
            ITEM: "Phanteks - ECLIPSE P400S TEMPERED GLASS ATX Mid Tower Case",
            PRICE: "$84.58 ",
            LINK: "https://pcpartpicker.com/mr/newegg/Q9vZxr"
        },
        {
            ITEM: "Apevia - X-QPACK3-WHT MicroATX Mini Tower Case",
            PRICE: "$51.16 ",
            LINK: "https://pcpartpicker.com/mr/newegg/VmgPxr"
        },
        {
            ITEM: "Lian-Li - ALPHA 550X ATX Mid Tower Case",
            PRICE: "$159.99 ",
            LINK: "https://pcpartpicker.com/mr/neweggmkt/8FTPxr"
        },
        {
            ITEM: "Rosewill - CULLINAN MX ATX Mid Tower Case",
            PRICE: "$139.89 ",
            LINK: "https://pcpartpicker.com/mr/outletpc/3p3H99"
        },
        {
            ITEM: "Cooler Master - Storm Scout 2 (Black) ATX Mid Tower Case",
            PRICE: "$89.37 ",
            LINK: "https://pcpartpicker.com/mr/walmart/r2PfrH"
        },
        {
            ITEM: "Cooler Master - Storm Scout 2 Advanced ATX Mid Tower Case",
            PRICE: "$89.37 ",
            LINK: "https://pcpartpicker.com/mr/walmart/Ych9TW"
        },
        {
            ITEM: "Fractal Design - Meshify C Dark TG ATX Mid Tower Case",
            PRICE: "$96.78 ",
            LINK: "https://pcpartpicker.com/mr/walmart/Y6Crxr"
        },
        {
            ITEM: "Apevia - X-PIONEER-GN ATX Mid Tower Case",
            PRICE: "$37.95 ",
            LINK: "https://pcpartpicker.com/mr/newegg/wVcMnQ"
        },
        {
            ITEM: "DIYPC - J180-W ATX Mid Tower Case",
            PRICE: "$41.95 ",
            LINK: "https://pcpartpicker.com/mr/newegg/6rDzK8"
        },
        {
            ITEM: "DIYPC - Ranger-R4-R ATX Mid Tower Case",
            PRICE: "$35.29 ",
            LINK: "https://pcpartpicker.com/mr/newegg/rcfmP6"
        },
        {
            ITEM: "Thermaltake - View 37 RGB Edition ATX Mid Tower Case",
            PRICE: "$149.99 ",
            LINK: "https://pcpartpicker.com/mr/newegg/78HRsY"
        },
        {
            ITEM: "Thermaltake - Core X9 ATX Desktop Case",
            PRICE: "$134.99 ",
            LINK: "https://pcpartpicker.com/mr/walmart/V998TW"
        },
        {
            ITEM: "Thermaltake - Versa H18 Tempered Glass MicroATX Mini Tower Case",
            PRICE: "$49.99 ",
            LINK: "https://pcpartpicker.com/mr/neweggmkt/dgndnQ"
        },
        {
            ITEM: "Thermaltake - Core P90 Tempered Glass Edition ATX Mid Tower Case",
            PRICE: "$174.99 ",
            LINK: "https://pcpartpicker.com/mr/neweggmkt/WmgzK8"
        },
        {
            ITEM: "Inwin - BL040 HTPC Case w/300W Power Supply",
            PRICE: "$66.99 ",
            LINK: "https://pcpartpicker.com/mr/superbiiz/Z2g323"
        },
        {
            ITEM: "Lian-Li - PC-O7S HTPC Case",
            PRICE: "$394.25 ",
            LINK: "https://pcpartpicker.com/mr/neweggmkt/fzNypg"
        },
        {
            ITEM: "Azza - Storm 6000B RGB (Black) ATX Full Tower Case",
            PRICE: "$130.32 ",
            LINK: "https://pcpartpicker.com/mr/newegg/mDBrxr"
        },
        {
            ITEM: "Raidmax - RAIDMAX Monster II ATX Mid Tower Case",
            PRICE: "$49.99 ",
            LINK: "https://pcpartpicker.com/mr/neweggmkt/wVwqqs"
        }
    ];
});