import React, { createContext } from "react";

// #################################################
//   ITEMS
// #################################################

import Item1 from "resources/items/1.png";
import Item2 from "resources/items/2.png";
import Item3 from "resources/items/3.png";
import Item4 from "resources/items/4.png";
import Item5 from "resources/items/5.png";
import Item6 from "resources/items/6.png";
import Item7 from "resources/items/7.png";
import Item8 from "resources/items/8.png";
import Item9 from "resources/items/9.png";
import Item10 from "resources/items/10.png";
import Item11 from "resources/items/11.png";
import Item12 from "resources/items/12.png";
import Item13 from "resources/items/13.png";
import Item14 from "resources/items/14.png";
import Item15 from "resources/items/15.png";
import Item16 from "resources/items/16.png";
import Item17 from "resources/items/17.png";
import Item18 from "resources/items/18.png";
import Item19 from "resources/items/19.png";
import Item20 from "resources/items/20.png";
import Item21 from "resources/items/21.png";
import Item22 from "resources/items/22.png";
import Item23 from "resources/items/23.png";
import Item24 from "resources/items/24.png";
import Item25 from "resources/items/25.png";
import Item26 from "resources/items/26.png";
import Item27 from "resources/items/27.png";
import Item28 from "resources/items/28.png";
import Item29 from "resources/items/29.png";
import Item30 from "resources/items/30.png";
import Item31 from "resources/items/31.png";
import Item32 from "resources/items/32.png";
import Item33 from "resources/items/33.png";
import Item34 from "resources/items/34.png";
import Item35 from "resources/items/35.png";
import Item36 from "resources/items/36.png";
import Item37 from "resources/items/37.png";
import Item38 from "resources/items/38.png";
import Item39 from "resources/items/39.png";
import Item40 from "resources/items/40.png";
import Item41 from "resources/items/41.png";
import Item42 from "resources/items/42.png";
import Item44 from "resources/items/44.png";
import Item45 from "resources/items/45.png";
import Item46 from "resources/items/46.png";
import Item47 from "resources/items/47.png";
import Item48 from "resources/items/48.png";
import Item49 from "resources/items/49.png";
import Item50 from "resources/items/50.png";
import Item51 from "resources/items/51.png";
import Item52 from "resources/items/52.png";
import Item53 from "resources/items/53.png";
import Item54 from "resources/items/54.png";
import Item55 from "resources/items/55.png";
import Item56 from "resources/items/56.png";
import Item57 from "resources/items/57.png";
import Item58 from "resources/items/58.png";
import Item60 from "resources/items/60.png";
import Item62 from "resources/items/62.png";
import Item63 from "resources/items/63.png";
import Item64 from "resources/items/64.png";
import Item65 from "resources/items/65.png";
import Item66 from "resources/items/66.png";
import Item67 from "resources/items/67.png";
import Item68 from "resources/items/68.png";
import Item69 from "resources/items/69.png";
import Item70 from "resources/items/70.png";
import Item71 from "resources/items/71.png";
import Item72 from "resources/items/72.png";
import Item73 from "resources/items/73.png";
import Item74 from "resources/items/74.png";
import Item75 from "resources/items/75.png";
import Item76 from "resources/items/76.png";
import Item77 from "resources/items/77.png";
import Item78 from "resources/items/78.png";
import Item79 from "resources/items/79.png";
import Item80 from "resources/items/80.png";
import Item81 from "resources/items/81.png";
import Item82 from "resources/items/82.png";
import Item83 from "resources/items/83.png";
import Item84 from "resources/items/84.png";
import Item85 from "resources/items/85.png";
import Item86 from "resources/items/86.png";
import Item87 from "resources/items/87.png";
import Item88 from "resources/items/88.png";
import Item89 from "resources/items/89.png";
import Item90 from "resources/items/90.png";
import Item91 from "resources/items/91.png";
import Item92 from "resources/items/92.png";
import Item93 from "resources/items/93.png";
import Item94 from "resources/items/94.png";
import Item95 from "resources/items/95.png";
import Item96 from "resources/items/96.png";
import Item97 from "resources/items/97.png";
import Item98 from "resources/items/98.png";
import Item99 from "resources/items/99.png";
import Item100 from "resources/items/100.png";
import Item101 from "resources/items/101.png";
import Item102 from "resources/items/102.png";
import Item103 from "resources/items/103.png";
import Item104 from "resources/items/104.png";
import Item105 from "resources/items/105.png";
import Item106 from "resources/items/106.png";
import Item107 from "resources/items/107.png";
import Item108 from "resources/items/108.png";
import Item109 from "resources/items/109.png";
import Item110 from "resources/items/110.png";
import Item111 from "resources/items/111.png";
import Item112 from "resources/items/112.png";
import Item113 from "resources/items/113.png";
import Item114 from "resources/items/114.png";
import Item115 from "resources/items/115.png";
import Item116 from "resources/items/116.png";
import Item117 from "resources/items/117.png";
import Item118 from "resources/items/118.png";
import Item119 from "resources/items/119.png";
import Item120 from "resources/items/120.png";
import Item121 from "resources/items/121.png";
import Item122 from "resources/items/122.png";
import Item123 from "resources/items/123.png";
import Item124 from "resources/items/124.png";
import Item125 from "resources/items/125.png";
import Item126 from "resources/items/126.png";
import Item127 from "resources/items/127.png";
import Item128 from "resources/items/128.png";
import Item129 from "resources/items/129.png";
import Item130 from "resources/items/130.png";
import Item131 from "resources/items/131.png";
import Item132 from "resources/items/132.png";
import Item133 from "resources/items/133.png";
import Item134 from "resources/items/134.png";
import Item135 from "resources/items/135.png";
import Item136 from "resources/items/136.png";
import Item137 from "resources/items/137.png";
import Item138 from "resources/items/138.png";
import Item139 from "resources/items/139.png";
import Item140 from "resources/items/140.png";
import Item141 from "resources/items/141.png";
import Item142 from "resources/items/142.png";
import Item143 from "resources/items/143.png";
import Item144 from "resources/items/144.png";
import Item145 from "resources/items/145.png";
import Item146 from "resources/items/146.png";
import Item147 from "resources/items/147.png";
import Item148 from "resources/items/148.png";
import Item149 from "resources/items/149.png";
import Item150 from "resources/items/150.png";
import Item151 from "resources/items/151.png";
import Item152 from "resources/items/152.png";
import Item153 from "resources/items/153.png";
import Item154 from "resources/items/154.png";
import Item155 from "resources/items/155.png";
import Item156 from "resources/items/156.png";
import Item157 from "resources/items/157.png";
import Item158 from "resources/items/158.png";
import Item159 from "resources/items/159.png";
import Item160 from "resources/items/160.png";
import Item161 from "resources/items/161.png";
import Item162 from "resources/items/162.png";
import Item163 from "resources/items/163.png";
import Item164 from "resources/items/164.png";
import Item165 from "resources/items/165.png";
import Item166 from "resources/items/166.png";
import Item167 from "resources/items/167.png";
import Item168 from "resources/items/168.png";
import Item169 from "resources/items/169.png";
import Item170 from "resources/items/170.png";
import Item171 from "resources/items/171.png";
import Item172 from "resources/items/172.png";
import Item173 from "resources/items/173.png";
import Item174 from "resources/items/174.png";
import Item175 from "resources/items/175.png";
import Item176 from "resources/items/176.png";
import Item177 from "resources/items/177.png";
import Item178 from "resources/items/178.png";
import Item179 from "resources/items/179.png";
import Item180 from "resources/items/180.png";
import Item181 from "resources/items/181.png";
import Item182 from "resources/items/182.png";
import Item183 from "resources/items/183.png";
import Item184 from "resources/items/184.png";
import Item185 from "resources/items/185.png";
import Item186 from "resources/items/186.png";
import Item187 from "resources/items/187.png";
import Item188 from "resources/items/188.png";
import Item189 from "resources/items/189.png";
import Item190 from "resources/items/190.png";
import Item191 from "resources/items/191.png";
import Item192 from "resources/items/192.png";
import Item193 from "resources/items/193.png";
import Item194 from "resources/items/194.png";
import Item195 from "resources/items/195.png";
import Item196 from "resources/items/196.png";
import Item197 from "resources/items/197.png";
import Item198 from "resources/items/198.png";
import Item199 from "resources/items/199.png";
import Item200 from "resources/items/200.png";
import Item201 from "resources/items/201.png";
import Item202 from "resources/items/202.png";
import Item203 from "resources/items/203.png";
import Item204 from "resources/items/204.png";
import Item205 from "resources/items/205.png";
import Item206 from "resources/items/206.png";
import Item207 from "resources/items/207.png";
import Item208 from "resources/items/208.png";
import Item209 from "resources/items/209.png";
import Item210 from "resources/items/210.png";
import Item211 from "resources/items/211.png";
import Item212 from "resources/items/212.png";
import Item213 from "resources/items/213.png";
import Item214 from "resources/items/214.png";
import Item215 from "resources/items/215.png";
import Item216 from "resources/items/216.png";
import Item217 from "resources/items/217.png";
import Item218 from "resources/items/218.png";
import Item219 from "resources/items/219.png";
import Item220 from "resources/items/220.png";
import Item221 from "resources/items/221.png";
import Item222 from "resources/items/222.png";
import Item223 from "resources/items/223.png";
import Item224 from "resources/items/224.png";
import Item225 from "resources/items/225.png";
import Item226 from "resources/items/226.png";
import Item227 from "resources/items/227.png";
import Item228 from "resources/items/228.png";
import Item229 from "resources/items/229.png";
import Item230 from "resources/items/230.png";
import Item231 from "resources/items/231.png";
import Item232 from "resources/items/232.png";
import Item233 from "resources/items/233.png";
import Item234 from "resources/items/234.png";
import Item236 from "resources/items/236.png";
import Item237 from "resources/items/237.png";
import Item238 from "resources/items/238.png";
import Item239 from "resources/items/239.png";
import Item240 from "resources/items/240.png";
import Item241 from "resources/items/241.png";
import Item242 from "resources/items/242.png";
import Item243 from "resources/items/243.png";
import Item244 from "resources/items/244.png";
import Item245 from "resources/items/245.png";
import Item246 from "resources/items/246.png";
import Item247 from "resources/items/247.png";
import Item248 from "resources/items/248.png";
import Item249 from "resources/items/249.png";
import Item250 from "resources/items/250.png";
import Item251 from "resources/items/251.png";
import Item252 from "resources/items/252.png";
import Item253 from "resources/items/253.png";
import Item254 from "resources/items/254.png";
import Item255 from "resources/items/255.png";
import Item256 from "resources/items/256.png";
import Item257 from "resources/items/257.png";
import Item258 from "resources/items/258.png";
import Item259 from "resources/items/259.png";
import Item260 from "resources/items/260.png";
import Item261 from "resources/items/261.png";
import Item262 from "resources/items/262.png";
import Item263 from "resources/items/263.png";
import Item264 from "resources/items/264.png";
import Item265 from "resources/items/265.png";
import Item266 from "resources/items/266.png";
import Item267 from "resources/items/267.png";
import Item268 from "resources/items/268.png";
import Item269 from "resources/items/269.png";
import Item270 from "resources/items/270.png";
import Item271 from "resources/items/271.png";
import Item272 from "resources/items/272.png";
import Item273 from "resources/items/273.png";
import Item274 from "resources/items/274.png";
import Item275 from "resources/items/275.png";
import Item276 from "resources/items/276.png";
import Item277 from "resources/items/277.png";
import Item278 from "resources/items/278.png";
import Item279 from "resources/items/279.png";
import Item280 from "resources/items/280.png";
import Item281 from "resources/items/281.png";
import Item282 from "resources/items/282.png";
import Item283 from "resources/items/283.png";
import Item284 from "resources/items/284.png";
import Item285 from "resources/items/285.png";
import Item286 from "resources/items/286.png";
import Item287 from "resources/items/287.png";
import Item288 from "resources/items/288.png";
import Item289 from "resources/items/289.png";
import Item290 from "resources/items/290.png";
import Item291 from "resources/items/291.png";
import Item292 from "resources/items/292.png";
import Item293 from "resources/items/293.png";
import Item294 from "resources/items/294.png";
import Item295 from "resources/items/295.png";
import Item296 from "resources/items/296.png";
import Item297 from "resources/items/297.png";
import Item298 from "resources/items/298.png";
import Item299 from "resources/items/299.png";
import Item300 from "resources/items/300.png";
import Item301 from "resources/items/301.png";
import Item302 from "resources/items/302.png";
import Item303 from "resources/items/303.png";
import Item304 from "resources/items/304.png";
import Item305 from "resources/items/305.png";
import Item306 from "resources/items/306.png";
import Item307 from "resources/items/307.png";
import Item308 from "resources/items/308.png";
import Item309 from "resources/items/309.png";
import Item310 from "resources/items/310.png";
import Item311 from "resources/items/311.png";
import Item312 from "resources/items/312.png";
import Item313 from "resources/items/313.png";
import Item314 from "resources/items/314.png";
import Item315 from "resources/items/315.png";
import Item316 from "resources/items/316.png";
import Item317 from "resources/items/317.png";
import Item318 from "resources/items/318.png";
import Item319 from "resources/items/319.png";
import Item320 from "resources/items/320.png";
import Item321 from "resources/items/321.png";
import Item322 from "resources/items/322.png";
import Item323 from "resources/items/323.png";
import Item324 from "resources/items/324.png";
import Item325 from "resources/items/325.png";
import Item326 from "resources/items/326.png";
import Item327 from "resources/items/327.png";
import Item328 from "resources/items/328.png";
import Item329 from "resources/items/329.png";
import Item330 from "resources/items/330.png";
import Item331 from "resources/items/331.png";
import Item332 from "resources/items/332.png";
import Item333 from "resources/items/333.png";
import Item334 from "resources/items/334.png";
import Item335 from "resources/items/335.png";
import Item336 from "resources/items/336.png";
import Item337 from "resources/items/337.png";
import Item338 from "resources/items/338.png";
import Item339 from "resources/items/339.png";
import Item340 from "resources/items/340.png";
import Item341 from "resources/items/341.png";
import Item342 from "resources/items/342.png";
import Item343 from "resources/items/343.png";
import Item344 from "resources/items/344.png";
import Item345 from "resources/items/345.png";
import Item346 from "resources/items/346.png";
import Item347 from "resources/items/347.png";
import Item348 from "resources/items/348.png";
import Item349 from "resources/items/349.png";
import Item350 from "resources/items/350.png";
import Item351 from "resources/items/351.png";
import Item352 from "resources/items/352.png";
import Item353 from "resources/items/353.png";
import Item354 from "resources/items/354.png";
import Item355 from "resources/items/355.png";
import Item356 from "resources/items/356.png";
import Item357 from "resources/items/357.png";
import Item358 from "resources/items/358.png";
import Item359 from "resources/items/359.png";
import Item360 from "resources/items/360.png";
import Item361 from "resources/items/361.png";
import Item362 from "resources/items/362.png";
import Item363 from "resources/items/363.png";
import Item364 from "resources/items/364.png";
import Item365 from "resources/items/365.png";
import Item366 from "resources/items/366.png";
import Item367 from "resources/items/367.png";
import Item368 from "resources/items/368.png";
import Item369 from "resources/items/369.png";
import Item370 from "resources/items/370.png";
import Item371 from "resources/items/371.png";
import Item372 from "resources/items/372.png";
import Item373 from "resources/items/373.png";
import Item374 from "resources/items/374.png";
import Item375 from "resources/items/375.png";
import Item376 from "resources/items/376.png";
import Item377 from "resources/items/377.png";
import Item378 from "resources/items/378.png";
import Item379 from "resources/items/379.png";
import Item380 from "resources/items/380.png";
import Item381 from "resources/items/381.png";
import Item382 from "resources/items/382.png";
import Item383 from "resources/items/383.png";
import Item384 from "resources/items/384.png";
import Item385 from "resources/items/385.png";
import Item386 from "resources/items/386.png";
import Item387 from "resources/items/387.png";
import Item388 from "resources/items/388.png";
import Item389 from "resources/items/389.png";
import Item390 from "resources/items/390.png";
import Item391 from "resources/items/391.png";
import Item392 from "resources/items/392.png";
import Item393 from "resources/items/393.png";
import Item394 from "resources/items/394.png";
import Item395 from "resources/items/395.png";
import Item396 from "resources/items/396.png";
import Item397 from "resources/items/397.png";
import Item398 from "resources/items/398.png";
import Item399 from "resources/items/399.png";
import Item400 from "resources/items/400.png";
import Item401 from "resources/items/401.png";
import Item402 from "resources/items/402.png";
import Item403 from "resources/items/403.png";
import Item404 from "resources/items/404.png";
import Item405 from "resources/items/405.png";
import Item406 from "resources/items/406.png";
import Item407 from "resources/items/407.png";
import Item408 from "resources/items/408.png";
import Item409 from "resources/items/409.png";
import Item410 from "resources/items/410.png";
import Item411 from "resources/items/411.png";
import Item412 from "resources/items/412.png";
import Item413 from "resources/items/413.png";
import Item414 from "resources/items/414.png";
import Item415 from "resources/items/415.png";
import Item416 from "resources/items/416.png";
import Item417 from "resources/items/417.png";
import Item418 from "resources/items/418.png";
import Item419 from "resources/items/419.png";
import Item420 from "resources/items/420.png";
import Item421 from "resources/items/421.png";
import Item422 from "resources/items/422.png";
import Item423 from "resources/items/423.png";
import Item424 from "resources/items/424.png";
import Item425 from "resources/items/425.png";
import Item426 from "resources/items/426.png";
import Item427 from "resources/items/427.png";
import Item428 from "resources/items/428.png";
import Item429 from "resources/items/429.png";
import Item430 from "resources/items/430.png";
import Item431 from "resources/items/431.png";
import Item432 from "resources/items/432.png";
import Item433 from "resources/items/433.png";
import Item434 from "resources/items/434.png";
import Item435 from "resources/items/435.png";
import Item436 from "resources/items/436.png";
import Item437 from "resources/items/437.png";
import Item438 from "resources/items/438.png";
import Item439 from "resources/items/439.png";
import Item440 from "resources/items/440.png";
import Item441 from "resources/items/441.png";
import Item442 from "resources/items/442.png";
import Item443 from "resources/items/443.png";
import Item444 from "resources/items/444.png";
import Item445 from "resources/items/445.png";
import Item446 from "resources/items/446.png";
import Item447 from "resources/items/447.png";
import Item448 from "resources/items/448.png";
import Item449 from "resources/items/449.png";
import Item450 from "resources/items/450.png";
import Item451 from "resources/items/451.png";
import Item452 from "resources/items/452.png";
import Item453 from "resources/items/453.png";
import Item454 from "resources/items/454.png";
import Item455 from "resources/items/455.png";
import Item456 from "resources/items/456.png";
import Item457 from "resources/items/457.png";
import Item458 from "resources/items/458.png";
import Item459 from "resources/items/459.png";
import Item460 from "resources/items/460.png";
import Item461 from "resources/items/461.png";
import Item462 from "resources/items/462.png";
import Item463 from "resources/items/463.png";
import Item464 from "resources/items/464.png";
import Item465 from "resources/items/465.png";
import Item466 from "resources/items/466.png";
import Item467 from "resources/items/467.png";
import Item468 from "resources/items/468.png";
import Item469 from "resources/items/469.png";
import Item470 from "resources/items/470.png";
import Item471 from "resources/items/471.png";
import Item472 from "resources/items/472.png";
import Item473 from "resources/items/473.png";
import Item475 from "resources/items/475.png";
import Item476 from "resources/items/476.png";
import Item477 from "resources/items/477.png";
import Item478 from "resources/items/478.png";
import Item479 from "resources/items/479.png";
import Item480 from "resources/items/480.png";
import Item481 from "resources/items/481.png";
import Item482 from "resources/items/482.png";
import Item483 from "resources/items/483.png";
import Item484 from "resources/items/484.png";
import Item485 from "resources/items/485.png";
import Item486 from "resources/items/486.png";
import Item487 from "resources/items/487.png";
import Item488 from "resources/items/488.png";
import Item489 from "resources/items/489.png";
import Item490 from "resources/items/490.png";
import Item491 from "resources/items/491.png";
import Item492 from "resources/items/492.png";
import Item493 from "resources/items/493.png";
import Item494 from "resources/items/494.png";
import Item495 from "resources/items/495.png";
import Item496 from "resources/items/496.png";
import Item497 from "resources/items/497.png";
import Item498 from "resources/items/498.png";
import Item499 from "resources/items/499.png";
import Item500 from "resources/items/500.png";
import Item501 from "resources/items/501.png";
import Item502 from "resources/items/502.png";
import Item503 from "resources/items/503.png";
import Item504 from "resources/items/504.png";
import Item505 from "resources/items/505.png";
import Item506 from "resources/items/506.png";
import Item507 from "resources/items/507.png";
import Item508 from "resources/items/508.png";
import Item509 from "resources/items/509.png";
import Item510 from "resources/items/510.png";
import Item511 from "resources/items/511.png";
import Item512 from "resources/items/512.png";
import Item513 from "resources/items/513.png";
import Item514 from "resources/items/514.png";
import Item515 from "resources/items/515.png";
import Item516 from "resources/items/516.png";
import Item517 from "resources/items/517.png";
import Item518 from "resources/items/518.png";
import Item519 from "resources/items/519.png";
import Item520 from "resources/items/520.png";
import Item521 from "resources/items/521.png";
import Item522 from "resources/items/522.png";
import Item523 from "resources/items/523.png";
import Item524 from "resources/items/524.png";
import Item525 from "resources/items/525.png";
import Item526 from "resources/items/526.png";
import Item527 from "resources/items/527.png";
import Item528 from "resources/items/528.png";
import Item529 from "resources/items/529.png";
import Item530 from "resources/items/530.png";
import Item531 from "resources/items/531.png";
import Item532 from "resources/items/532.png";
import Item533 from "resources/items/533.png";
import Item534 from "resources/items/534.png";
import Item535 from "resources/items/535.png";
import Item536 from "resources/items/536.png";
import Item537 from "resources/items/537.png";
import Item538 from "resources/items/538.png";
import Item539 from "resources/items/539.png";
import Item540 from "resources/items/540.png";
import Item541 from "resources/items/541.png";
import Item542 from "resources/items/542.png";
import Item543 from "resources/items/543.png";
import Item544 from "resources/items/544.png";
import Item545 from "resources/items/545.png";
import Item546 from "resources/items/546.png";
import Item547 from "resources/items/547.png";
import Item548 from "resources/items/548.png";
import Item549 from "resources/items/549.png";
import Item550 from "resources/items/550.png";
import Item551 from "resources/items/551.png";
import Item552 from "resources/items/552.png";
import Item553 from "resources/items/553.png";
import Item554 from "resources/items/554.png";
import Item555 from "resources/items/555.png";
import Item556 from "resources/items/556.png";
import Item557 from "resources/items/557.png";
import Item558 from "resources/items/558.png";
import Item559 from "resources/items/559.png";
import Item560 from "resources/items/560.png";
import Item561 from "resources/items/561.png";
import Item562 from "resources/items/562.png";
import Item563 from "resources/items/563.png";
import Item564 from "resources/items/564.png";
import Item565 from "resources/items/565.png";
import Item566 from "resources/items/566.png";
import Item567 from "resources/items/567.png";
import Item568 from "resources/items/568.png";
import Item569 from "resources/items/569.png";
import Item570 from "resources/items/570.png";
import Item571 from "resources/items/571.png";
import Item572 from "resources/items/572.png";
import Item573 from "resources/items/573.png";
import Item574 from "resources/items/574.png";
import Item575 from "resources/items/575.png";
import Item576 from "resources/items/576.png";
import Item577 from "resources/items/577.png";
import Item578 from "resources/items/578.png";
import Item579 from "resources/items/579.png";
import Item580 from "resources/items/580.png";
import Item581 from "resources/items/581.png";
import Item582 from "resources/items/582.png";
import Item583 from "resources/items/583.png";
import Item584 from "resources/items/584.png";
import Item585 from "resources/items/585.png";
import Item586 from "resources/items/586.png";
import Item588 from "resources/items/588.png";
import Item589 from "resources/items/589.png";
import Item590 from "resources/items/590.png";
import Item591 from "resources/items/591.png";
import Item592 from "resources/items/592.png";
import Item593 from "resources/items/593.png";
import Item594 from "resources/items/594.png";
import Item595 from "resources/items/595.png";
import Item596 from "resources/items/596.png";
import Item597 from "resources/items/597.png";
import Item598 from "resources/items/598.png";
import Item599 from "resources/items/599.png";
import Item600 from "resources/items/600.png";
import Item601 from "resources/items/601.png";
import Item602 from "resources/items/602.png";
import Item603 from "resources/items/603.png";
import Item604 from "resources/items/604.png";
import Item605 from "resources/items/605.png";
import Item606 from "resources/items/606.png";
import Item607 from "resources/items/607.png";
import Item608 from "resources/items/608.png";
import Item609 from "resources/items/609.png";
import Item610 from "resources/items/610.png";
import Item611 from "resources/items/611.png";
import Item612 from "resources/items/612.png";
import Item614 from "resources/items/614.png";
import Item615 from "resources/items/615.png";
import Item616 from "resources/items/616.png";
import Item617 from "resources/items/617.png";
import Item618 from "resources/items/618.png";
import Item619 from "resources/items/619.png";
import Item621 from "resources/items/621.png";
import Item622 from "resources/items/622.png";
import Item623 from "resources/items/623.png";
import Item624 from "resources/items/624.png";
import Item625 from "resources/items/625.png";
import Item626 from "resources/items/626.png";
import Item627 from "resources/items/627.png";
import Item628 from "resources/items/628.png";
import Item629 from "resources/items/629.png";
import Item631 from "resources/items/631.png";
import Item632 from "resources/items/632.png";
import Item633 from "resources/items/633.png";
import Item634 from "resources/items/634.png";
import Item635 from "resources/items/635.png";
import Item636 from "resources/items/636.png";
import Item637 from "resources/items/637.png";
import Item638 from "resources/items/638.png";
import Item639 from "resources/items/639.png";
import Item640 from "resources/items/640.png";
import Item641 from "resources/items/641.png";
import Item642 from "resources/items/642.png";
import Item643 from "resources/items/643.png";
import Item644 from "resources/items/644.png";
import Item645 from "resources/items/645.png";
import Item646 from "resources/items/646.png";
import Item647 from "resources/items/647.png";
import Item649 from "resources/items/649.png";
import Item650 from "resources/items/650.png";
import Item651 from "resources/items/651.png";
import Item652 from "resources/items/652.png";
import Item653 from "resources/items/653.png";
import Item654 from "resources/items/654.png";
import Item655 from "resources/items/655.png";
import Item657 from "resources/items/657.png";
import Item658 from "resources/items/658.png";
import Item659 from "resources/items/659.png";
import Item660 from "resources/items/660.png";
import Item661 from "resources/items/661.png";
import Item663 from "resources/items/663.png";
import Item664 from "resources/items/664.png";
import Item665 from "resources/items/665.png";
import Item667 from "resources/items/667.png";
import Item668 from "resources/items/668.png";
import Item669 from "resources/items/669.png";
import Item670 from "resources/items/670.png";
import Item671 from "resources/items/671.png";
import Item672 from "resources/items/672.png";
import Item673 from "resources/items/673.png";
import Item674 from "resources/items/674.png";
import Item675 from "resources/items/675.png";
import Item676 from "resources/items/676.png";
import Item677 from "resources/items/677.png";
import Item678 from "resources/items/678.png";
import Item679 from "resources/items/679.png";
import Item680 from "resources/items/680.png";
import Item681 from "resources/items/681.png";
import Item682 from "resources/items/682.png";
import Item683 from "resources/items/683.png";
import Item684 from "resources/items/684.png";
import Item685 from "resources/items/685.png";
import Item686 from "resources/items/686.png";
import Item687 from "resources/items/687.png";
import Item688 from "resources/items/688.png";
import Item689 from "resources/items/689.png";
import Item690 from "resources/items/690.png";
import Item691 from "resources/items/691.png";
import Item692 from "resources/items/692.png";
import Item693 from "resources/items/693.png";
import Item694 from "resources/items/694.png";
import Item695 from "resources/items/695.png";
import Item696 from "resources/items/696.png";
import Item697 from "resources/items/697.png";
import Item698 from "resources/items/698.png";
import Item699 from "resources/items/699.png";
import Item700 from "resources/items/700.png";
import Item701 from "resources/items/701.png";
import Item702 from "resources/items/702.png";
import Item703 from "resources/items/703.png";
import Item704 from "resources/items/704.png";
import Item705 from "resources/items/705.png";
import Item706 from "resources/items/706.png";
import Item707 from "resources/items/707.png";
import Item708 from "resources/items/708.png";
import Item709 from "resources/items/709.png";
import Item710 from "resources/items/710.png";
import Item711 from "resources/items/711.png";
import Item712 from "resources/items/712.png";
import Item713 from "resources/items/713.png";
import Item714 from "resources/items/714.png";
import Item715 from "resources/items/715.png";
import Item716 from "resources/items/716.png";
import Item717 from "resources/items/717.png";
import Item719 from "resources/items/719.png";
import Item720 from "resources/items/720.png";
import Item721 from "resources/items/721.png";
import Item722 from "resources/items/722.png";
import Item723 from "resources/items/723.png";
import Item724 from "resources/items/724.png";
import Item725 from "resources/items/725.png";
import Item726 from "resources/items/726.png";
import Item727 from "resources/items/727.png";
import Item728 from "resources/items/728.png";
import Item729 from "resources/items/729.png";

// #################################################
//   TRINKETS
// #################################################

import Trinkett1 from "resources/items/t1.png";
import Trinkett2 from "resources/items/t2.png";
import Trinkett3 from "resources/items/t3.png";
import Trinkett4 from "resources/items/t4.png";
import Trinkett5 from "resources/items/t5.png";
import Trinkett6 from "resources/items/t6.png";
import Trinkett7 from "resources/items/t7.png";
import Trinkett8 from "resources/items/t8.png";
import Trinkett9 from "resources/items/t9.png";
import Trinkett10 from "resources/items/t10.png";
import Trinkett11 from "resources/items/t11.png";
import Trinkett12 from "resources/items/t12.png";
import Trinkett13 from "resources/items/t13.png";
import Trinkett14 from "resources/items/t14.png";
import Trinkett15 from "resources/items/t15.png";
import Trinkett16 from "resources/items/t16.png";
import Trinkett17 from "resources/items/t17.png";
import Trinkett18 from "resources/items/t18.png";
import Trinkett19 from "resources/items/t19.png";
import Trinkett20 from "resources/items/t20.png";
import Trinkett21 from "resources/items/t21.png";
import Trinkett22 from "resources/items/t22.png";
import Trinkett23 from "resources/items/t23.png";
import Trinkett24 from "resources/items/t24.png";
import Trinkett25 from "resources/items/t25.png";
import Trinkett26 from "resources/items/t26.png";
import Trinkett27 from "resources/items/t27.png";
import Trinkett28 from "resources/items/t28.png";
import Trinkett29 from "resources/items/t29.png";
import Trinkett30 from "resources/items/t30.png";
import Trinkett31 from "resources/items/t31.png";
import Trinkett32 from "resources/items/t32.png";
import Trinkett33 from "resources/items/t33.png";
import Trinkett34 from "resources/items/t34.png";
import Trinkett35 from "resources/items/t35.png";
import Trinkett36 from "resources/items/t36.png";
import Trinkett37 from "resources/items/t37.png";
import Trinkett38 from "resources/items/t38.png";
import Trinkett39 from "resources/items/t39.png";
import Trinkett40 from "resources/items/t40.png";
import Trinkett41 from "resources/items/t41.png";
import Trinkett42 from "resources/items/t42.png";
import Trinkett43 from "resources/items/t43.png";
import Trinkett44 from "resources/items/t44.png";
import Trinkett45 from "resources/items/t45.png";
import Trinkett46 from "resources/items/t46.png";
import Trinkett48 from "resources/items/t48.png";
import Trinkett49 from "resources/items/t49.png";
import Trinkett50 from "resources/items/t50.png";
import Trinkett51 from "resources/items/t51.png";
import Trinkett52 from "resources/items/t52.png";
import Trinkett53 from "resources/items/t53.png";
import Trinkett54 from "resources/items/t54.png";
import Trinkett55 from "resources/items/t55.png";
import Trinkett56 from "resources/items/t56.png";
import Trinkett57 from "resources/items/t57.png";
import Trinkett58 from "resources/items/t58.png";
import Trinkett59 from "resources/items/t59.png";
import Trinkett60 from "resources/items/t60.png";
import Trinkett61 from "resources/items/t61.png";
import Trinkett62 from "resources/items/t62.png";
import Trinkett63 from "resources/items/t63.png";
import Trinkett64 from "resources/items/t64.png";
import Trinkett65 from "resources/items/t65.png";
import Trinkett66 from "resources/items/t66.png";
import Trinkett67 from "resources/items/t67.png";
import Trinkett68 from "resources/items/t68.png";
import Trinkett69 from "resources/items/t69.png";
import Trinkett70 from "resources/items/t70.png";
import Trinkett71 from "resources/items/t71.png";
import Trinkett72 from "resources/items/t72.png";
import Trinkett73 from "resources/items/t73.png";
import Trinkett74 from "resources/items/t74.png";
import Trinkett75 from "resources/items/t75.png";
import Trinkett76 from "resources/items/t76.png";
import Trinkett77 from "resources/items/t77.png";
import Trinkett78 from "resources/items/t78.png";
import Trinkett79 from "resources/items/t79.png";
import Trinkett80 from "resources/items/t80.png";
import Trinkett81 from "resources/items/t81.png";
import Trinkett82 from "resources/items/t82.png";
import Trinkett83 from "resources/items/t83.png";
import Trinkett84 from "resources/items/t84.png";
import Trinkett85 from "resources/items/t85.png";
import Trinkett86 from "resources/items/t86.png";
import Trinkett87 from "resources/items/t87.png";
import Trinkett88 from "resources/items/t88.png";
import Trinkett89 from "resources/items/t89.png";
import Trinkett90 from "resources/items/t90.png";
import Trinkett91 from "resources/items/t91.png";
import Trinkett92 from "resources/items/t92.png";
import Trinkett93 from "resources/items/t93.png";
import Trinkett94 from "resources/items/t94.png";
import Trinkett95 from "resources/items/t95.png";
import Trinkett96 from "resources/items/t96.png";
import Trinkett97 from "resources/items/t97.png";
import Trinkett98 from "resources/items/t98.png";
import Trinkett99 from "resources/items/t99.png";
import Trinkett100 from "resources/items/t100.png";
import Trinkett101 from "resources/items/t101.png";
import Trinkett102 from "resources/items/t102.png";
import Trinkett103 from "resources/items/t103.png";
import Trinkett104 from "resources/items/t104.png";
import Trinkett105 from "resources/items/t105.png";
import Trinkett106 from "resources/items/t106.png";
import Trinkett107 from "resources/items/t107.png";
import Trinkett108 from "resources/items/t108.png";
import Trinkett109 from "resources/items/t109.png";
import Trinkett110 from "resources/items/t110.png";
import Trinkett111 from "resources/items/t111.png";
import Trinkett112 from "resources/items/t112.png";
import Trinkett113 from "resources/items/t113.png";
import Trinkett114 from "resources/items/t114.png";
import Trinkett115 from "resources/items/t115.png";
import Trinkett116 from "resources/items/t116.png";
import Trinkett117 from "resources/items/t117.png";
import Trinkett118 from "resources/items/t118.png";
import Trinkett119 from "resources/items/t119.png";
import Trinkett120 from "resources/items/t120.png";
import Trinkett121 from "resources/items/t121.png";
import Trinkett122 from "resources/items/t122.png";
import Trinkett123 from "resources/items/t123.png";
import Trinkett124 from "resources/items/t124.png";
import Trinkett125 from "resources/items/t125.png";
import Trinkett126 from "resources/items/t126.png";
import Trinkett127 from "resources/items/t127.png";
import Trinkett128 from "resources/items/t128.png";
import Trinkett129 from "resources/items/t129.png";
import Trinkett130 from "resources/items/t130.png";
import Trinkett131 from "resources/items/t131.png";
import Trinkett132 from "resources/items/t132.png";
import Trinkett133 from "resources/items/t133.png";
import Trinkett134 from "resources/items/t134.png";
import Trinkett135 from "resources/items/t135.png";
import Trinkett136 from "resources/items/t136.png";
import Trinkett137 from "resources/items/t137.png";
import Trinkett138 from "resources/items/t138.png";
import Trinkett139 from "resources/items/t139.png";
import Trinkett140 from "resources/items/t140.png";
import Trinkett141 from "resources/items/t141.png";
import Trinkett142 from "resources/items/t142.png";
import Trinkett143 from "resources/items/t143.png";
import Trinkett144 from "resources/items/t144.png";
import Trinkett145 from "resources/items/t145.png";
import Trinkett146 from "resources/items/t146.png";
import Trinkett147 from "resources/items/t147.png";
import Trinkett148 from "resources/items/t148.png";
import Trinkett149 from "resources/items/t149.png";
import Trinkett150 from "resources/items/t150.png";
import Trinkett151 from "resources/items/t151.png";
import Trinkett152 from "resources/items/t152.png";
import Trinkett153 from "resources/items/t153.png";
import Trinkett154 from "resources/items/t154.png";
import Trinkett155 from "resources/items/t155.png";
import Trinkett156 from "resources/items/t156.png";
import Trinkett157 from "resources/items/t157.png";
import Trinkett158 from "resources/items/t158.png";
import Trinkett159 from "resources/items/t159.png";
import Trinkett160 from "resources/items/t160.png";
import Trinkett161 from "resources/items/t161.png";
import Trinkett162 from "resources/items/t162.png";
import Trinkett163 from "resources/items/t163.png";
import Trinkett164 from "resources/items/t164.png";
import Trinkett165 from "resources/items/t165.png";
import Trinkett166 from "resources/items/t166.png";
import Trinkett167 from "resources/items/t167.png";
import Trinkett168 from "resources/items/t168.png";
import Trinkett169 from "resources/items/t169.png";
import Trinkett170 from "resources/items/t170.png";
import Trinkett171 from "resources/items/t171.png";
import Trinkett172 from "resources/items/t172.png";
import Trinkett173 from "resources/items/t173.png";
import Trinkett174 from "resources/items/t174.png";
import Trinkett175 from "resources/items/t175.png";
import Trinkett176 from "resources/items/t176.png";
import Trinkett177 from "resources/items/t177.png";
import Trinkett178 from "resources/items/t178.png";
import Trinkett179 from "resources/items/t179.png";
import Trinkett180 from "resources/items/t180.png";
import Trinkett181 from "resources/items/t181.png";
import Trinkett182 from "resources/items/t182.png";
import Trinkett183 from "resources/items/t183.png";
import Trinkett184 from "resources/items/t184.png";
import Trinkett185 from "resources/items/t185.png";
import Trinkett186 from "resources/items/t186.png";
import Trinkett187 from "resources/items/t187.png";
import Trinkett188 from "resources/items/t188.png";
import Trinkett189 from "resources/items/t189.png";

// #################################################
//   CARDS
// #################################################

import Cardc1 from "resources/items/c1.png";
import Cardc2 from "resources/items/c2.png";
import Cardc3 from "resources/items/c3.png";
import Cardc4 from "resources/items/c4.png";
import Cardc5 from "resources/items/c5.png";
import Cardc6 from "resources/items/c6.png";
import Cardc7 from "resources/items/c7.png";
import Cardc8 from "resources/items/c8.png";
import Cardc9 from "resources/items/c9.png";
import Cardc10 from "resources/items/c10.png";
import Cardc11 from "resources/items/c11.png";
import Cardc12 from "resources/items/c12.png";
import Cardc13 from "resources/items/c13.png";
import Cardc14 from "resources/items/c14.png";
import Cardc15 from "resources/items/c15.png";
import Cardc16 from "resources/items/c16.png";
import Cardc17 from "resources/items/c17.png";
import Cardc18 from "resources/items/c18.png";
import Cardc19 from "resources/items/c19.png";
import Cardc20 from "resources/items/c20.png";
import Cardc21 from "resources/items/c21.png";
import Cardc22 from "resources/items/c22.png";
import Cardc23 from "resources/items/c23.png";
import Cardc24 from "resources/items/c24.png";
import Cardc25 from "resources/items/c25.png";
import Cardc26 from "resources/items/c26.png";
import Cardc27 from "resources/items/c27.png";
import Cardc28 from "resources/items/c28.png";
import Cardc29 from "resources/items/c29.png";
import Cardc30 from "resources/items/c30.png";
import Cardc31 from "resources/items/c31.png";
import Cardc32 from "resources/items/c32.png";
import Cardc33 from "resources/items/c33.png";
import Cardc34 from "resources/items/c34.png";
import Cardc35 from "resources/items/c35.png";
import Cardc36 from "resources/items/c36.png";
import Cardc37 from "resources/items/c37.png";
import Cardc38 from "resources/items/c38.png";
import Cardc39 from "resources/items/c39.png";
import Cardc40 from "resources/items/c40.png";
import Cardc41 from "resources/items/c41.png";
import Cardc42 from "resources/items/c42.png";
import Cardc43 from "resources/items/c43.png";
import Cardc44 from "resources/items/c44.png";
import Cardc45 from "resources/items/c45.png";
import Cardc46 from "resources/items/c46.png";
import Cardc47 from "resources/items/c47.png";
import Cardc48 from "resources/items/c48.png";
import Cardc49 from "resources/items/c49.png";
import Cardc50 from "resources/items/c50.png";
import Cardc51 from "resources/items/c51.png";
import Cardc52 from "resources/items/c52.png";
import Cardc53 from "resources/items/c53.png";
import Cardc54 from "resources/items/c54.png";
import Cardc55 from "resources/items/c55.png";
import Cardc56 from "resources/items/c56.png";
import Cardc57 from "resources/items/c57.png";
import Cardc58 from "resources/items/c58.png";
import Cardc59 from "resources/items/c59.png";
import Cardc60 from "resources/items/c60.png";
import Cardc61 from "resources/items/c61.png";
import Cardc62 from "resources/items/c62.png";
import Cardc63 from "resources/items/c63.png";
import Cardc64 from "resources/items/c64.png";
import Cardc65 from "resources/items/c65.png";
import Cardc66 from "resources/items/c66.png";
import Cardc67 from "resources/items/c67.png";
import Cardc68 from "resources/items/c68.png";
import Cardc69 from "resources/items/c69.png";
import Cardc70 from "resources/items/c70.png";
import Cardc71 from "resources/items/c71.png";
import Cardc72 from "resources/items/c72.png";
import Cardc73 from "resources/items/c73.png";
import Cardc74 from "resources/items/c74.png";
import Cardc75 from "resources/items/c75.png";
import Cardc76 from "resources/items/c76.png";
import Cardc77 from "resources/items/c77.png";
import Cardc78 from "resources/items/c78.png";
import Cardc79 from "resources/items/c79.png";
import Cardc80 from "resources/items/c80.png";
import Cardc81 from "resources/items/c81.png";
import Cardc82 from "resources/items/c82.png";
import Cardc83 from "resources/items/c83.png";
import Cardc84 from "resources/items/c84.png";
import Cardc85 from "resources/items/c85.png";
import Cardc86 from "resources/items/c86.png";
import Cardc87 from "resources/items/c87.png";
import Cardc88 from "resources/items/c88.png";
import Cardc89 from "resources/items/c89.png";
import Cardc90 from "resources/items/c90.png";
import Cardc91 from "resources/items/c91.png";
import Cardc92 from "resources/items/c92.png";
import Cardc93 from "resources/items/c93.png";
import Cardc94 from "resources/items/c94.png";
import Cardc95 from "resources/items/c95.png";
import Cardc96 from "resources/items/c96.png";
import Cardc97 from "resources/items/c97.png";
import Cardc98 from "resources/items/c98.png";
import Cardc99 from "resources/items/c99.png";
import Cardc100 from "resources/items/c100.png";
import Cardc101 from "resources/items/c101.png";

// Icons Context
export const Icons = createContext();

const IconsProvider = (props) => {
    // #################################################
    //   DICTIONARIES
    // #################################################

    var ITEMS = {
        1: Item1,
        2: Item2,
        3: Item3,
        4: Item4,
        5: Item5,
        6: Item6,
        7: Item7,
        8: Item8,
        9: Item9,
        10: Item10,
        11: Item11,
        12: Item12,
        13: Item13,
        14: Item14,
        15: Item15,
        16: Item16,
        17: Item17,
        18: Item18,
        19: Item19,
        20: Item20,
        21: Item21,
        22: Item22,
        23: Item23,
        24: Item24,
        25: Item25,
        26: Item26,
        27: Item27,
        28: Item28,
        29: Item29,
        30: Item30,
        31: Item31,
        32: Item32,
        33: Item33,
        34: Item34,
        35: Item35,
        36: Item36,
        37: Item37,
        38: Item38,
        39: Item39,
        40: Item40,
        41: Item41,
        42: Item42,
        44: Item44,
        45: Item45,
        46: Item46,
        47: Item47,
        48: Item48,
        49: Item49,
        50: Item50,
        51: Item51,
        52: Item52,
        53: Item53,
        54: Item54,
        55: Item55,
        56: Item56,
        57: Item57,
        58: Item58,
        60: Item60,
        62: Item62,
        63: Item63,
        64: Item64,
        65: Item65,
        66: Item66,
        67: Item67,
        68: Item68,
        69: Item69,
        70: Item70,
        71: Item71,
        72: Item72,
        73: Item73,
        74: Item74,
        75: Item75,
        76: Item76,
        77: Item77,
        78: Item78,
        79: Item79,
        80: Item80,
        81: Item81,
        82: Item82,
        83: Item83,
        84: Item84,
        85: Item85,
        86: Item86,
        87: Item87,
        88: Item88,
        89: Item89,
        90: Item90,
        91: Item91,
        92: Item92,
        93: Item93,
        94: Item94,
        95: Item95,
        96: Item96,
        97: Item97,
        98: Item98,
        99: Item99,
        100: Item100,
        101: Item101,
        102: Item102,
        103: Item103,
        104: Item104,
        105: Item105,
        106: Item106,
        107: Item107,
        108: Item108,
        109: Item109,
        110: Item110,
        111: Item111,
        112: Item112,
        113: Item113,
        114: Item114,
        115: Item115,
        116: Item116,
        117: Item117,
        118: Item118,
        119: Item119,
        120: Item120,
        121: Item121,
        122: Item122,
        123: Item123,
        124: Item124,
        125: Item125,
        126: Item126,
        127: Item127,
        128: Item128,
        129: Item129,
        130: Item130,
        131: Item131,
        132: Item132,
        133: Item133,
        134: Item134,
        135: Item135,
        136: Item136,
        137: Item137,
        138: Item138,
        139: Item139,
        140: Item140,
        141: Item141,
        142: Item142,
        143: Item143,
        144: Item144,
        145: Item145,
        146: Item146,
        147: Item147,
        148: Item148,
        149: Item149,
        150: Item150,
        151: Item151,
        152: Item152,
        153: Item153,
        154: Item154,
        155: Item155,
        156: Item156,
        157: Item157,
        158: Item158,
        159: Item159,
        160: Item160,
        161: Item161,
        162: Item162,
        163: Item163,
        164: Item164,
        165: Item165,
        166: Item166,
        167: Item167,
        168: Item168,
        169: Item169,
        170: Item170,
        171: Item171,
        172: Item172,
        173: Item173,
        174: Item174,
        175: Item175,
        176: Item176,
        177: Item177,
        178: Item178,
        179: Item179,
        180: Item180,
        181: Item181,
        182: Item182,
        183: Item183,
        184: Item184,
        185: Item185,
        186: Item186,
        187: Item187,
        188: Item188,
        189: Item189,
        190: Item190,
        191: Item191,
        192: Item192,
        193: Item193,
        194: Item194,
        195: Item195,
        196: Item196,
        197: Item197,
        198: Item198,
        199: Item199,
        200: Item200,
        201: Item201,
        202: Item202,
        203: Item203,
        204: Item204,
        205: Item205,
        206: Item206,
        207: Item207,
        208: Item208,
        209: Item209,
        210: Item210,
        211: Item211,
        212: Item212,
        213: Item213,
        214: Item214,
        215: Item215,
        216: Item216,
        217: Item217,
        218: Item218,
        219: Item219,
        220: Item220,
        221: Item221,
        222: Item222,
        223: Item223,
        224: Item224,
        225: Item225,
        226: Item226,
        227: Item227,
        228: Item228,
        229: Item229,
        230: Item230,
        231: Item231,
        232: Item232,
        233: Item233,
        234: Item234,
        236: Item236,
        237: Item237,
        238: Item238,
        239: Item239,
        240: Item240,
        241: Item241,
        242: Item242,
        243: Item243,
        244: Item244,
        245: Item245,
        246: Item246,
        247: Item247,
        248: Item248,
        249: Item249,
        250: Item250,
        251: Item251,
        252: Item252,
        253: Item253,
        254: Item254,
        255: Item255,
        256: Item256,
        257: Item257,
        258: Item258,
        259: Item259,
        260: Item260,
        261: Item261,
        262: Item262,
        263: Item263,
        264: Item264,
        265: Item265,
        266: Item266,
        267: Item267,
        268: Item268,
        269: Item269,
        270: Item270,
        271: Item271,
        272: Item272,
        273: Item273,
        274: Item274,
        275: Item275,
        276: Item276,
        277: Item277,
        278: Item278,
        279: Item279,
        280: Item280,
        281: Item281,
        282: Item282,
        283: Item283,
        284: Item284,
        285: Item285,
        286: Item286,
        287: Item287,
        288: Item288,
        289: Item289,
        290: Item290,
        291: Item291,
        292: Item292,
        293: Item293,
        294: Item294,
        295: Item295,
        296: Item296,
        297: Item297,
        298: Item298,
        299: Item299,
        300: Item300,
        301: Item301,
        302: Item302,
        303: Item303,
        304: Item304,
        305: Item305,
        306: Item306,
        307: Item307,
        308: Item308,
        309: Item309,
        310: Item310,
        311: Item311,
        312: Item312,
        313: Item313,
        314: Item314,
        315: Item315,
        316: Item316,
        317: Item317,
        318: Item318,
        319: Item319,
        320: Item320,
        321: Item321,
        322: Item322,
        323: Item323,
        324: Item324,
        325: Item325,
        326: Item326,
        327: Item327,
        328: Item328,
        329: Item329,
        330: Item330,
        331: Item331,
        332: Item332,
        333: Item333,
        334: Item334,
        335: Item335,
        336: Item336,
        337: Item337,
        338: Item338,
        339: Item339,
        340: Item340,
        341: Item341,
        342: Item342,
        343: Item343,
        344: Item344,
        345: Item345,
        346: Item346,
        347: Item347,
        348: Item348,
        349: Item349,
        350: Item350,
        351: Item351,
        352: Item352,
        353: Item353,
        354: Item354,
        355: Item355,
        356: Item356,
        357: Item357,
        358: Item358,
        359: Item359,
        360: Item360,
        361: Item361,
        362: Item362,
        363: Item363,
        364: Item364,
        365: Item365,
        366: Item366,
        367: Item367,
        368: Item368,
        369: Item369,
        370: Item370,
        371: Item371,
        372: Item372,
        373: Item373,
        374: Item374,
        375: Item375,
        376: Item376,
        377: Item377,
        378: Item378,
        379: Item379,
        380: Item380,
        381: Item381,
        382: Item382,
        383: Item383,
        384: Item384,
        385: Item385,
        386: Item386,
        387: Item387,
        388: Item388,
        389: Item389,
        390: Item390,
        391: Item391,
        392: Item392,
        393: Item393,
        394: Item394,
        395: Item395,
        396: Item396,
        397: Item397,
        398: Item398,
        399: Item399,
        400: Item400,
        401: Item401,
        402: Item402,
        403: Item403,
        404: Item404,
        405: Item405,
        406: Item406,
        407: Item407,
        408: Item408,
        409: Item409,
        410: Item410,
        411: Item411,
        412: Item412,
        413: Item413,
        414: Item414,
        415: Item415,
        416: Item416,
        417: Item417,
        418: Item418,
        419: Item419,
        420: Item420,
        421: Item421,
        422: Item422,
        423: Item423,
        424: Item424,
        425: Item425,
        426: Item426,
        427: Item427,
        428: Item428,
        429: Item429,
        430: Item430,
        431: Item431,
        432: Item432,
        433: Item433,
        434: Item434,
        435: Item435,
        436: Item436,
        437: Item437,
        438: Item438,
        439: Item439,
        440: Item440,
        441: Item441,
        442: Item442,
        443: Item443,
        444: Item444,
        445: Item445,
        446: Item446,
        447: Item447,
        448: Item448,
        449: Item449,
        450: Item450,
        451: Item451,
        452: Item452,
        453: Item453,
        454: Item454,
        455: Item455,
        456: Item456,
        457: Item457,
        458: Item458,
        459: Item459,
        460: Item460,
        461: Item461,
        462: Item462,
        463: Item463,
        464: Item464,
        465: Item465,
        466: Item466,
        467: Item467,
        468: Item468,
        469: Item469,
        470: Item470,
        471: Item471,
        472: Item472,
        473: Item473,
        475: Item475,
        476: Item476,
        477: Item477,
        478: Item478,
        479: Item479,
        480: Item480,
        481: Item481,
        482: Item482,
        483: Item483,
        484: Item484,
        485: Item485,
        486: Item486,
        487: Item487,
        488: Item488,
        489: Item489,
        490: Item490,
        491: Item491,
        492: Item492,
        493: Item493,
        494: Item494,
        495: Item495,
        496: Item496,
        497: Item497,
        498: Item498,
        499: Item499,
        500: Item500,
        501: Item501,
        502: Item502,
        503: Item503,
        504: Item504,
        505: Item505,
        506: Item506,
        507: Item507,
        508: Item508,
        509: Item509,
        510: Item510,
        511: Item511,
        512: Item512,
        513: Item513,
        514: Item514,
        515: Item515,
        516: Item516,
        517: Item517,
        518: Item518,
        519: Item519,
        520: Item520,
        521: Item521,
        522: Item522,
        523: Item523,
        524: Item524,
        525: Item525,
        526: Item526,
        527: Item527,
        528: Item528,
        529: Item529,
        530: Item530,
        531: Item531,
        532: Item532,
        533: Item533,
        534: Item534,
        535: Item535,
        536: Item536,
        537: Item537,
        538: Item538,
        539: Item539,
        540: Item540,
        541: Item541,
        542: Item542,
        543: Item543,
        544: Item544,
        545: Item545,
        546: Item546,
        547: Item547,
        548: Item548,
        549: Item549,
        550: Item550,
        551: Item551,
        552: Item552,
        553: Item553,
        554: Item554,
        555: Item555,
        556: Item556,
        557: Item557,
        558: Item558,
        559: Item559,
        560: Item560,
        561: Item561,
        562: Item562,
        563: Item563,
        564: Item564,
        565: Item565,
        566: Item566,
        567: Item567,
        568: Item568,
        569: Item569,
        570: Item570,
        571: Item571,
        572: Item572,
        573: Item573,
        574: Item574,
        575: Item575,
        576: Item576,
        577: Item577,
        578: Item578,
        579: Item579,
        580: Item580,
        581: Item581,
        582: Item582,
        583: Item583,
        584: Item584,
        585: Item585,
        586: Item586,
        588: Item588,
        589: Item589,
        590: Item590,
        591: Item591,
        592: Item592,
        593: Item593,
        594: Item594,
        595: Item595,
        596: Item596,
        597: Item597,
        598: Item598,
        599: Item599,
        600: Item600,
        601: Item601,
        602: Item602,
        603: Item603,
        604: Item604,
        605: Item605,
        606: Item606,
        607: Item607,
        608: Item608,
        609: Item609,
        610: Item610,
        611: Item611,
        612: Item612,
        614: Item614,
        615: Item615,
        616: Item616,
        617: Item617,
        618: Item618,
        619: Item619,
        621: Item621,
        622: Item622,
        623: Item623,
        624: Item624,
        625: Item625,
        626: Item626,
        627: Item627,
        628: Item628,
        629: Item629,
        631: Item631,
        632: Item632,
        633: Item633,
        634: Item634,
        635: Item635,
        636: Item636,
        637: Item637,
        638: Item638,
        639: Item639,
        640: Item640,
        641: Item641,
        642: Item642,
        643: Item643,
        644: Item644,
        645: Item645,
        646: Item646,
        647: Item647,
        649: Item649,
        650: Item650,
        651: Item651,
        652: Item652,
        653: Item653,
        654: Item654,
        655: Item655,
        657: Item657,
        658: Item658,
        659: Item659,
        660: Item660,
        661: Item661,
        663: Item663,
        664: Item664,
        665: Item665,
        667: Item667,
        668: Item668,
        669: Item669,
        670: Item670,
        671: Item671,
        672: Item672,
        673: Item673,
        674: Item674,
        675: Item675,
        676: Item676,
        677: Item677,
        678: Item678,
        679: Item679,
        680: Item680,
        681: Item681,
        682: Item682,
        683: Item683,
        684: Item684,
        685: Item685,
        686: Item686,
        687: Item687,
        688: Item688,
        689: Item689,
        690: Item690,
        691: Item691,
        692: Item692,
        693: Item693,
        694: Item694,
        695: Item695,
        696: Item696,
        697: Item697,
        698: Item698,
        699: Item699,
        700: Item700,
        701: Item701,
        702: Item702,
        703: Item703,
        704: Item704,
        705: Item705,
        706: Item706,
        707: Item707,
        708: Item708,
        709: Item709,
        710: Item710,
        711: Item711,
        712: Item712,
        713: Item713,
        714: Item714,
        715: Item715,
        716: Item716,
        717: Item717,
        719: Item719,
        720: Item720,
        721: Item721,
        722: Item722,
        723: Item723,
        724: Item724,
        725: Item725,
        726: Item726,
        727: Item727,
        728: Item728,
        729: Item729,
    };

    var TRINKETS = {
        t1: Trinkett1,
        t2: Trinkett2,
        t3: Trinkett3,
        t4: Trinkett4,
        t5: Trinkett5,
        t6: Trinkett6,
        t7: Trinkett7,
        t8: Trinkett8,
        t9: Trinkett9,
        t10: Trinkett10,
        t11: Trinkett11,
        t12: Trinkett12,
        t13: Trinkett13,
        t14: Trinkett14,
        t15: Trinkett15,
        t16: Trinkett16,
        t17: Trinkett17,
        t18: Trinkett18,
        t19: Trinkett19,
        t20: Trinkett20,
        t21: Trinkett21,
        t22: Trinkett22,
        t23: Trinkett23,
        t24: Trinkett24,
        t25: Trinkett25,
        t26: Trinkett26,
        t27: Trinkett27,
        t28: Trinkett28,
        t29: Trinkett29,
        t30: Trinkett30,
        t31: Trinkett31,
        t32: Trinkett32,
        t33: Trinkett33,
        t34: Trinkett34,
        t35: Trinkett35,
        t36: Trinkett36,
        t37: Trinkett37,
        t38: Trinkett38,
        t39: Trinkett39,
        t40: Trinkett40,
        t41: Trinkett41,
        t42: Trinkett42,
        t43: Trinkett43,
        t44: Trinkett44,
        t45: Trinkett45,
        t46: Trinkett46,
        t48: Trinkett48,
        t49: Trinkett49,
        t50: Trinkett50,
        t51: Trinkett51,
        t52: Trinkett52,
        t53: Trinkett53,
        t54: Trinkett54,
        t55: Trinkett55,
        t56: Trinkett56,
        t57: Trinkett57,
        t58: Trinkett58,
        t59: Trinkett59,
        t60: Trinkett60,
        t61: Trinkett61,
        t62: Trinkett62,
        t63: Trinkett63,
        t64: Trinkett64,
        t65: Trinkett65,
        t66: Trinkett66,
        t67: Trinkett67,
        t68: Trinkett68,
        t69: Trinkett69,
        t70: Trinkett70,
        t71: Trinkett71,
        t72: Trinkett72,
        t73: Trinkett73,
        t74: Trinkett74,
        t75: Trinkett75,
        t76: Trinkett76,
        t77: Trinkett77,
        t78: Trinkett78,
        t79: Trinkett79,
        t80: Trinkett80,
        t81: Trinkett81,
        t82: Trinkett82,
        t83: Trinkett83,
        t84: Trinkett84,
        t85: Trinkett85,
        t86: Trinkett86,
        t87: Trinkett87,
        t88: Trinkett88,
        t89: Trinkett89,
        t90: Trinkett90,
        t91: Trinkett91,
        t92: Trinkett92,
        t93: Trinkett93,
        t94: Trinkett94,
        t95: Trinkett95,
        t96: Trinkett96,
        t97: Trinkett97,
        t98: Trinkett98,
        t99: Trinkett99,
        t100: Trinkett100,
        t101: Trinkett101,
        t102: Trinkett102,
        t103: Trinkett103,
        t104: Trinkett104,
        t105: Trinkett105,
        t106: Trinkett106,
        t107: Trinkett107,
        t108: Trinkett108,
        t109: Trinkett109,
        t110: Trinkett110,
        t111: Trinkett111,
        t112: Trinkett112,
        t113: Trinkett113,
        t114: Trinkett114,
        t115: Trinkett115,
        t116: Trinkett116,
        t117: Trinkett117,
        t118: Trinkett118,
        t119: Trinkett119,
        t120: Trinkett120,
        t121: Trinkett121,
        t122: Trinkett122,
        t123: Trinkett123,
        t124: Trinkett124,
        t125: Trinkett125,
        t126: Trinkett126,
        t127: Trinkett127,
        t128: Trinkett128,
        t129: Trinkett129,
        t130: Trinkett130,
        t131: Trinkett131,
        t132: Trinkett132,
        t133: Trinkett133,
        t134: Trinkett134,
        t135: Trinkett135,
        t136: Trinkett136,
        t137: Trinkett137,
        t138: Trinkett138,
        t139: Trinkett139,
        t140: Trinkett140,
        t141: Trinkett141,
        t142: Trinkett142,
        t143: Trinkett143,
        t144: Trinkett144,
        t145: Trinkett145,
        t146: Trinkett146,
        t147: Trinkett147,
        t148: Trinkett148,
        t149: Trinkett149,
        t150: Trinkett150,
        t151: Trinkett151,
        t152: Trinkett152,
        t153: Trinkett153,
        t154: Trinkett154,
        t155: Trinkett155,
        t156: Trinkett156,
        t157: Trinkett157,
        t158: Trinkett158,
        t159: Trinkett159,
        t160: Trinkett160,
        t161: Trinkett161,
        t162: Trinkett162,
        t163: Trinkett163,
        t164: Trinkett164,
        t165: Trinkett165,
        t166: Trinkett166,
        t167: Trinkett167,
        t168: Trinkett168,
        t169: Trinkett169,
        t170: Trinkett170,
        t171: Trinkett171,
        t172: Trinkett172,
        t173: Trinkett173,
        t174: Trinkett174,
        t175: Trinkett175,
        t176: Trinkett176,
        t177: Trinkett177,
        t178: Trinkett178,
        t179: Trinkett179,
        t180: Trinkett180,
        t181: Trinkett181,
        t182: Trinkett182,
        t183: Trinkett183,
        t184: Trinkett184,
        t185: Trinkett185,
        t186: Trinkett186,
        t187: Trinkett187,
        t188: Trinkett188,
        t189: Trinkett189,
    };

    var CARDS = {
        c1: Cardc1,
        c2: Cardc2,
        c3: Cardc3,
        c4: Cardc4,
        c5: Cardc5,
        c6: Cardc6,
        c7: Cardc7,
        c8: Cardc8,
        c9: Cardc9,
        c10: Cardc10,
        c11: Cardc11,
        c12: Cardc12,
        c13: Cardc13,
        c14: Cardc14,
        c15: Cardc15,
        c16: Cardc16,
        c17: Cardc17,
        c18: Cardc18,
        c19: Cardc19,
        c20: Cardc20,
        c21: Cardc21,
        c22: Cardc22,
        c23: Cardc23,
        c24: Cardc24,
        c25: Cardc25,
        c26: Cardc26,
        c27: Cardc27,
        c28: Cardc28,
        c29: Cardc29,
        c30: Cardc30,
        c31: Cardc31,
        c32: Cardc32,
        c33: Cardc33,
        c34: Cardc34,
        c35: Cardc35,
        c36: Cardc36,
        c37: Cardc37,
        c38: Cardc38,
        c39: Cardc39,
        c40: Cardc40,
        c41: Cardc41,
        c42: Cardc42,
        c43: Cardc43,
        c44: Cardc44,
        c45: Cardc45,
        c46: Cardc46,
        c47: Cardc47,
        c48: Cardc48,
        c49: Cardc49,
        c50: Cardc50,
        c51: Cardc51,
        c52: Cardc52,
        c53: Cardc53,
        c54: Cardc54,
        c55: Cardc55,
        c56: Cardc56,
        c57: Cardc57,
        c58: Cardc58,
        c59: Cardc59,
        c60: Cardc60,
        c61: Cardc61,
        c62: Cardc62,
        c63: Cardc63,
        c64: Cardc64,
        c65: Cardc65,
        c66: Cardc66,
        c67: Cardc67,
        c68: Cardc68,
        c69: Cardc69,
        c70: Cardc70,
        c71: Cardc71,
        c72: Cardc72,
        c73: Cardc73,
        c74: Cardc74,
        c75: Cardc75,
        c76: Cardc76,
        c77: Cardc77,
        c78: Cardc78,
        c79: Cardc79,
        c80: Cardc80,
        c81: Cardc81,
        c82: Cardc82,
        c83: Cardc83,
        c84: Cardc84,
        c85: Cardc85,
        c86: Cardc86,
        c87: Cardc87,
        c88: Cardc88,
        c89: Cardc89,
        c90: Cardc90,
        c91: Cardc91,
        c92: Cardc92,
        c93: Cardc93,
        c94: Cardc94,
        c95: Cardc95,
        c96: Cardc96,
        c97: Cardc97,
        c98: Cardc98,
        c99: Cardc99,
        c100: Cardc100,
        c101: Cardc101,
    };

    return (
        <Icons.Provider
            value={{
                // DICTIONARIS
                ITEMS,
                TRINKETS,
                CARDS,
            }}
        >
            {props.children}
        </Icons.Provider>
    );
};

export default IconsProvider;
