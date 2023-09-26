<template>
  <div class="" style="height:20000000vh;">
    <header-site :heightRow="heightRow" style="z-index: 4;" />
    <v-row class="fixed heightAll widthAll" align="center" justify="center" style="top:0 ;height:100vh;">

      <div class="heightAll widthAll absolute" style="background: url('/1991722.jpg');opacity:0.3"></div>
      <h1 class="d-none d-md-inline-block" :style="{ opacity: opacity1, transform: transform1, transition: transition1 }">
        هتل بزرگ
        آهوان
      </h1>
      <h1 class="d-inline-block d-md-none" :style="{ opacity: opacity1, transform: transform2, transition: transition1 }">
        هتل بزرگ
        آهوان
      </h1>

    </v-row>
    <v-row v-if="show2" class="fixed heightAll widthAll row2" align="center" justify="center"
      style="height:100vh;z-index: 3;top:0;right:0;background: url('/1991722.jpg');" :style="{ opacity: opacity2 }">
      <div class="hideOver" style="z-index:2;">
        <!-- :style="{ height: size2 + '%', width: size2 + '%' }" -->
        <v-row class="widthAll" justify="center" align="start">
          <div class="widthAll mt-12 mt-md-0" style="height: fit-content;" data-aos="fade-right" data-aos-duration="2000">
            <b class="d-none d-md-block text-center grey--text text--darken-3"
              :style="{ fontSize: fontSizeTitle2 + 'px' }" style="margin-top:7%">
              خدمات هتل آهوان
            </b>

          </div>
          <div class="widthAll" style="max-width:900px;height: fit-content;margin-top:2%" data-aos="fade-up"
            data-aos-duration="2000">
            <v-row class="heightAll d-none d-md-flex" align="center" justify="space-between">
              <v-col cols="12" md="3" class="">
                <v-card class="relative card2 rounded-xl hideOver Elevation-0">
                  <v-img class="widthAll rounded-xl" style="" src="@/assets/image/hotel/card2.jpg">
                  </v-img>
                  <div class="absolute widthAll" style="bottom: 40px;padding:4%">

                    <div data-aos="fade-up" data-aos-duration="3000">
                      <h3 class="text-center" style="margin: 2% 0; white-space: nowrap ;"
                        :style="{ fontSize: fontSize2 + 'px' }">
                        رستوران
                      </h3>
                    </div>
                    <!-- <span class="" style="white-space: nowrap ;" :style="{ fontSize: fontSize3 + 'px' }">
                      ...
                    </span> -->
                  </div>
                </v-card>
              </v-col>
              <v-col cols="12" md="3" class="">
                <v-card class="card2 rounded-xl hideOver">
                  <v-img class="widthAll rounded-xl" style="" src="@/assets/image/hotel/card3.jpg"></v-img>
                  <div class="absolute widthAll" style="bottom: 34px;padding:4%">
                    <!-- <v-row>
                      <div class="rounded-xl lineCards mt-2"
                        :style="{ width: lineCardsWidth, background: lineCardsBackground }" style="height: 2px;"></div>
                    </v-row> -->
                    <div data-aos="fade-up" data-aos-duration="3000">
                      <h3 class=" text-center" style="margin: 2% 0;white-space: nowrap ;"
                        :style="{ fontSize: fontSize2 + 'px' }">
                        کافی‌شاپ
                      </h3>
                    </div>
                    <!-- <span class="" style="white-space: nowrap ;" :style="{ fontSize: fontSize3 + 'px' }">
                      رستوران،کافی‌شاپ و استخر
                    </span> -->

                  </div>
                </v-card>
              </v-col>
              <v-col cols="12" md="3" class="">
                <v-card class="card2 rounded-xl hideOver">
                  <v-img class="widthAll rounded-xl" style="" src="@/assets/image/hotel/card4.jpg" />
                  <div class="absolute widthAll" style="bottom: 20px;padding:4%">
                    <div data-aos="fade-up" data-aos-duration="3000">
                      <h3 class="text-center" style="margin: 2% 0;white-space: nowrap ;"
                        :style="{ fontSize: fontSize2 + 'px' }">
                        سفره‌خانه سنتی
                      </h3>
                    </div>
                    <!-- <span class="" style="white-space: nowrap ;" :style="{ fontSize: fontSize3 + 'px' }">
                      مناطق ییلاقی و تفریحی منطقه
                    </span> -->
                    <!-- <v-row>
                      <div class="rounded-xl lineCards mt-2"
                        :style="{ width: lineCardsWidth, background: lineCardsBackground }" style="height: 2px;"></div>
                    </v-row> -->
                  </div>
                </v-card>
              </v-col>
              <v-col cols="12" md="3" class="">
                <v-card class="card2 rounded-xl hideOver">
                  <v-img class="rounded-xl widthAll" style="" src="@/assets/image/hotel/card5.jpg" />
                  <div class="absolute widthAll" style="bottom: 33px;padding:4%">
                    <!-- <v-row>
                      <div class="rounded-xl lineCards"
                        :style="{ width: lineCardsWidth, background: lineCardsBackground }" style="height: 2px;"></div>
                    </v-row> -->
                    <div data-aos="fade-up" data-aos-duration="3000">
                      <h3 class="text-center" style="margin: 2% 0;white-space: nowrap ;"
                        :style="{ fontSize: fontSize2 + 'px' }">
                        مجموعه ورزشی
                      </h3>
                    </div>
                    <!-- <span class="" style="white-space: nowrap ;" :style="{ fontSize: fontSize3 + 'px' }">
                      بازار‌ها در ایام مختلف هفته
                    </span> -->
                  </div>
                </v-card>
              </v-col>
              <v-col cols="12" md="3" class="">
                <v-card class="card2 rounded-xl hideOver">
                  <v-img class="rounded-xl widthAll" style="" src="@/assets/image/hotel/card8.jpg" />
                  <div class="absolute widthAll" style="top: 60px;padding:4%">
                    <div data-aos="fade-up" data-aos-duration="3000">
                      <h3 class="text-center" style="margin: 2% 0;white-space: nowrap ;"
                        :style="{ fontSize: fontSize2 + 'px' }">
                        سالن بیلیارد
                      </h3>
                    </div>
                    <!-- <span class="" style="white-space: nowrap ;"
                      :style="{ fontSize: fontSize3 + 'px' }">شنگن،کانادا،انگلیس و ...</span> -->
                    <!-- <v-row>
                      <div class="rounded-xl lineCards"
                        :style="{ width: lineCardsWidth, background: lineCardsBackground }" style="height: 2px;"></div>
                    </v-row> -->
                  </div>
                </v-card>
              </v-col>
              <v-col cols="12" md="3" class="">
                <v-card class="card2 rounded-xl hideOver">
                  <v-img class="rounded-xl widthAll" style="" src="@/assets/image/hotel/card6.jpg" />
                  <div class="absolute widthAll" style="bottom: 50px;padding:4%">

                    <div data-aos="fade-up" data-aos-duration="3000">
                      <h3 class=" text-center" style="margin: 2% 0;white-space: nowrap ;"
                        :style="{ fontSize: fontSize2 + 'px' }">
                        پیـسـت کارتینگ
                      </h3>
                    </div>
                    <!-- <span class="" style="white-space: nowrap ;" :style="{ fontSize: fontSize3 + 'px' }">رزرواسیون ساده و
                      مطمئن</span> -->
                    <!-- <v-row>
                      <div class="rounded-xl lineCards mt-2"
                        :style="{ width: lineCardsWidth, background: lineCardsBackground }" style="height: 2px;"></div>
                    </v-row> -->
                  </div>
                </v-card>
              </v-col>
              <v-col cols="12" md="3" class="">
                <v-card class="card2 rounded-xl hideOver">
                  <v-img class="rounded-xl widthAll" style="" src="@/assets/image/hotel/card9.jpg" />
                  <div class="absolute widthAll" style="bottom: 20px;padding:4%">
                    <!-- <v-row>
                      <div class="rounded-xl lineCards"
                        :style="{ width: lineCardsWidth, background: lineCardsBackground }" style="height: 2px;"></div>
                    </v-row> -->
                    <div data-aos="fade-up" data-aos-duration="3000">
                      <h3 class="text-center" style="margin: 2% 0;white-space: nowrap ;"
                        :style="{ fontSize: fontSize2 + 'px' }">
                        پیست
                        <br>
                        دوچرخه سواری
                      </h3>
                    </div>
                    <!-- <span class="" style="white-space: nowrap ;" :style="{ fontSize: fontSize3 + 'px' }">رزرواسیون قطعی
                      هتل‌ها</span> -->
                  </div>
                </v-card>
              </v-col>
              <v-col cols="12" md="3" class="">
                <v-card class="card2 rounded-xl hideOver">
                  <v-img class="rounded-xl widthAll" style="height:80%" src="@/assets/image/hotel/card7.jpg" />
                  <div class="absolute widthAll" style="bottom: 40px;padding:4%">
                    <!-- <v-row>
                      <div class="rounded-xl lineCards"
                        :style="{ width: lineCardsWidth, background: lineCardsBackground }" style="height: 2px;"></div>
                    </v-row> -->
                    <div data-aos="fade-up" data-aos-duration="3000">
                      <h3 class="text-center" style="margin: 2% 0;white-space: nowrap ;"
                        :style="{ fontSize: fontSize2 + 'px' }">
                        اتاق‌ها
                      </h3>
                    </div>
                    <!-- <span class="" style="white-space: nowrap ;" :style="{ fontSize: fontSize3 + 'px' }">نازل
                      ترین قیمت بلیط‌‌ها </span> -->
                  </div>
                </v-card>
              </v-col>
              <v-col cols="12" class="pl-4">
                <v-card class="widthAll rounded-xl hideOver red">
                  <!-- <v-img class="rounded-xl widthAll" style="" src="@/assets/image/hotel/card7.jpg" /> -->
                  <!-- <div class="absolute widthAll" style="bottom: 40px;padding:4%"> -->
                  <!-- <v-row>
                      <div class="rounded-xl lineCards"
                        :style="{ width: lineCardsWidth, background: lineCardsBackground }" style="height: 2px;"></div>
                    </v-row> -->
                  <!-- <div data-aos="fade-up" data-aos-duration="3000">
                      <h3 class="text-center" style="margin: 2% 0;white-space: nowrap ;"
                        :style="{ fontSize: fontSize2 + 'px' }">
                        اتاق‌ها
                      </h3>
                    </div> -->
                  <!-- <span class="" style="white-space: nowrap ;" :style="{ fontSize: fontSize3 + 'px' }">نازل
                      ترین قیمت بلیط‌‌ها </span> -->
                  <!-- </div> -->
                </v-card>
              </v-col>
            </v-row>
            <v-row class=" d-flex d-md-none " align="center" justify="space-between"
              style="height:90vh;overflow-y: scroll;">
              <b class="d-block d-md-none text-center grey--text text--darken-3 widthAll mt-12"
                :style="{ fontSize: fontSize2 + 'px' }" style="">
                خدمات هتل آهوان
              </b>
              <v-col cols="12" md="3" class="">
                <router-link to="/resturant">
                  <v-card class=" widthAll relative rounded-xl hideOver Elevation-0">
                    <v-img class="widthAll rounded-xl" style="" src="@/assets/image/hotel/card2p.jpg">
                    </v-img>
                    <div class="heightAll absolute widthAll" style="bottom: 0px;padding:4%">
                      <v-row class="heightAll widthAll" align="center">
                        <div data-aos="fade-up" data-aos-duration="3000">
                          <h3 class="d-inline-block" style="margin: 2% 0; white-space: nowrap ;"
                            :style="{ fontSize: fontSize2 + 'px' }">
                            رستوران
                          </h3>
                        </div>
                      </v-row>

                    </div>
                  </v-card>
                </router-link>
              </v-col>
              <v-col cols="12" md="3" class="">
                <v-card class="widthAll rounded-xl hideOver">
                  <v-img class="widthAll rounded-xl" style="" src="@/assets/image/hotel/card3-2.jpg"></v-img>
                  <div class="heightAll absolute widthAll" style="bottom: 0px;padding:4%">
                    <!-- <v-row>
                      <div class="rounded-xl lineCards mt-2"
                        :style="{ width: lineCardsWidth, background: lineCardsBackground }" style="height: 2px;"></div>
                    </v-row> -->
                    <v-row class="heightAll widthAll" align="center">
                      <div data-aos="fade-up" data-aos-duration="3000">
                        <h3 class="" style="margin: 2% 0;white-space: nowrap ;" :style="{ fontSize: fontSize2 + 'px' }">
                          کافی‌شاپ
                        </h3>
                      </div>
                    </v-row>
                    <!-- <span class="" style="white-space: nowrap ;" :style="{ fontSize: fontSize3 + 'px' }">
                      رستوران،کافی‌شاپ و استخر
                    </span> -->

                  </div>
                </v-card>
              </v-col>
              <v-col cols="12" md="3" class="">
                <v-card class="widthAll rounded-xl hideOver">
                  <v-img class="widthAll rounded-xl" style="" src="@/assets/image/hotel/card4-2.jpg" />
                  <div class="absolute heightAll widthAll" style="bottom: 0px;padding:4%">
                    <v-row class="heightAll widthAll" align="center">
                      <div data-aos="fade-up" data-aos-duration="3000">
                        <h3 class="text-center" style="margin: 2% 0;white-space: nowrap ;"
                          :style="{ fontSize: fontSize2 + 'px' }">
                          سفره‌خانه
                          <br>
                          سنــــتــــی
                        </h3>
                      </div>
                    </v-row>
                    <!-- <span class="" style="white-space: nowrap ;" :style="{ fontSize: fontSize3 + 'px' }">
                      مناطق ییلاقی و تفریحی منطقه
                    </span> -->
                    <!-- <v-row>
                      <div class="rounded-xl lineCards mt-2"
                        :style="{ width: lineCardsWidth, background: lineCardsBackground }" style="height: 2px;"></div>
                    </v-row> -->
                  </div>
                </v-card>
              </v-col>
              <v-col cols="12" md="3" class="">
                <v-card class=" rounded-xl hideOver">
                  <v-img class="rounded-xl widthAll" style="" src="@/assets/image/hotel/card5-2.jpg" />
                  <div class="heightAll absolute widthAll" style="bottom: 0px;padding:4%">
                    <v-row class="heightAll widthAll" align="center">
                      <!-- <v-row>
                      <div class="rounded-xl lineCards"
                        :style="{ width: lineCardsWidth, background: lineCardsBackground }" style="height: 2px;"></div>
                    </v-row> -->
                      <div data-aos="fade-up" data-aos-duration="3000">
                        <h3 class="text-center" style="margin: 2% 0;white-space: nowrap ;"
                          :style="{ fontSize: fontSize2 + 'px' }">
                          مـجمـوعـه
                          <br>
                          ورزشــی
                        </h3>
                      </div>
                    </v-row>
                    <!-- <span class="" style="white-space: nowrap ;" :style="{ fontSize: fontSize3 + 'px' }">
                      بازار‌ها در ایام مختلف هفته
                    </span> -->
                  </div>
                </v-card>
              </v-col>
              <v-col cols="12" md="3" class="">
                <v-card class=" rounded-xl hideOver">
                  <v-img class="rounded-xl widthAll" style="" src="@/assets/image/hotel/card8-2.jpg" />
                  <div class="heightAll absolute widthAll" style="top: 0px;padding:4%">
                    <v-row class="heightAll widthAll" align="center">
                      <div data-aos="fade-up" data-aos-duration="3000">
                        <h3 class="text-center" style="margin: 2% 0;white-space: nowrap ;"
                          :style="{ fontSize: fontSize2 + 'px' }">
                          سالن بیلیارد
                        </h3>
                      </div>
                    </v-row>
                    <!-- <span class="" style="white-space: nowrap ;"
                      :style="{ fontSize: fontSize3 + 'px' }">شنگن،کانادا،انگلیس و ...</span> -->
                    <!-- <v-row>
                      <div class="rounded-xl lineCards"
                        :style="{ width: lineCardsWidth, background: lineCardsBackground }" style="height: 2px;"></div>
                    </v-row> -->
                  </div>
                </v-card>
              </v-col>
              <v-col cols="12" md="3" class="">
                <v-card class=" rounded-xl hideOver">
                  <v-img class="rounded-xl widthAll" style="" src="@/assets/image/hotel/card6-2.jpg" />
                  <div class="absolute heightAll widthAll" style="bottom: 0px;padding:2%">
                    <v-row class="heightAll widthAll" align="center">
                      <div data-aos="fade-up" data-aos-duration="3000">
                        <h3 class="mt-10 text-center" style="margin: 2% 0;white-space: nowrap ;"
                          :style="{ fontSize: fontSize2 + 'px' }">
                          پیست
                          <!-- <br> -->
                          کارتینگ
                        </h3>
                      </div>
                    </v-row>
                    <!-- <span class="" style="white-space: nowrap ;" :style="{ fontSize: fontSize3 + 'px' }">رزرواسیون ساده و
                      مطمئن</span> -->
                    <!-- <v-row>
                      <div class="rounded-xl lineCards mt-2"
                        :style="{ width: lineCardsWidth, background: lineCardsBackground }" style="height: 2px;"></div>
                    </v-row> -->
                  </div>
                </v-card>
              </v-col>
              <v-col cols="12" md="3" class="">
                <v-card class=" rounded-xl hideOver">
                  <v-img class="rounded-xl widthAll" style="" src="@/assets/image/hotel/card9-2.jpg" />
                  <div class="absolute heightAll widthAll" style="bottom: 0px;padding:4%">
                    <!-- <v-row>
                      <div class="rounded-xl lineCards"
                        :style="{ width: lineCardsWidth, background: lineCardsBackground }" style="height: 2px;"></div>
                    </v-row> -->
                    <v-row class="heightAll widthAll" align="center">
                      <div data-aos="fade-up" data-aos-duration="3000">
                        <h3 class="text-center" style="margin: 2% 0;white-space: nowrap ;"
                          :style="{ fontSize: fontSize2 + 'px' }">
                          پیــســت
                          <br>
                          دوچرخه سواری
                        </h3>
                      </div>
                    </v-row>
                    <!-- <span class="" style="white-space: nowrap ;" :style="{ fontSize: fontSize3 + 'px' }">رزرواسیون قطعی
                      هتل‌ها</span> -->
                  </div>
                </v-card>
              </v-col>
              <v-col cols="12" md="3" class="">
                <v-card class=" rounded-xl hideOver">
                  <v-img class="rounded-xl widthAll" style="" src="@/assets/image/hotel/card7-2.jpg" />
                  <div class="absolute heightAll widthAll" style="bottom: 0px;padding:4%">
                    <!-- <v-row>
                      <div class="rounded-xl lineCards"
                        :style="{ width: lineCardsWidth, background: lineCardsBackground }" style="height: 2px;"></div>
                    </v-row> -->
                    <v-row class="heightAll widthAll" align="center">
                      <div data-aos="fade-up" data-aos-duration="3000">
                        <h3 class="text-center" style="margin: 2% 0;white-space: nowrap ;"
                          :style="{ fontSize: fontSize2 + 'px' }">
                          اتــــــاق‌ها
                        </h3>
                      </div>
                    </v-row>
                  </div>
                </v-card>
              </v-col>
              <v-col cols="12" md="3" class="">
                <v-card class=" rounded-xl hideOver">
                  <v-img class="rounded-xl widthAll" style="" src="@/assets/image/hotel/card10-2.jpg" />
                  <div class="absolute heightAll widthAll" style="bottom: 0px;padding:4%">
                    <!-- <v-row>
                      <div class="rounded-xl lineCards"
                        :style="{ width: lineCardsWidth, background: lineCardsBackground }" style="height: 2px;"></div>
                    </v-row> -->
                    <v-row class="heightAll widthAll" align="center">
                      <div data-aos="fade-up" data-aos-duration="3000">
                        <h3 class="text-center mb-12" style="margin: 2% 0;white-space: nowrap ;"
                          :style="{ fontSize: fontSize2 + 'px' }">
                          جــاذبه‌های
                          <br>
                          گردشگری منطقه
                        </h3>
                      </div>
                    </v-row>
                  </div>
                </v-card>
              </v-col>
              <v-col cols="12" md="3" class="">
                <v-card class=" rounded-xl hideOver">
                  <v-img class="rounded-xl widthAll" style="" src="@/assets/image/hotel/card11-2.jpg" />
                  <div class="absolute heightAll widthAll" style="bottom: 0px;padding:4%">
                    <!-- <v-row>
                      <div class="rounded-xl lineCards"
                        :style="{ width: lineCardsWidth, background: lineCardsBackground }" style="height: 2px;"></div>
                    </v-row> -->
                    <v-row class="heightAll widthAll" align="center">
                      <div data-aos="fade-up" data-aos-duration="3000">
                        <h3 class="text-center" style="margin: 2% 0;white-space: nowrap ;"
                          :style="{ fontSize: fontSize2 + 'px' }">
                          بازارهای هفتگی
                          <br>
                          منطقه
                        </h3>
                      </div>
                    </v-row>
                  </div>
                </v-card>
              </v-col>
              <v-col cols="12" md="3" class="">
                <v-card class=" rounded-xl hideOver">
                  <v-img class="rounded-xl widthAll" style="" src="@/assets/image/hotel/card12-2.jpg" />
                  <div class="absolute heightAll widthAll" style="bottom: 0px;padding:4%">
                    <!-- <v-row>
                      <div class="rounded-xl lineCards"
                        :style="{ width: lineCardsWidth, background: lineCardsBackground }" style="height: 2px;"></div>
                    </v-row> -->
                    <v-row class="heightAll widthAll" align="center">
                      <div data-aos="fade-up" data-aos-duration="3000">
                        <h3 class="text-center" style="margin-right: 11% ;white-space: nowrap ;"
                          :style="{ fontSize: fontSize2 + 'px' }">
                          غذاهای محلی
                          <br>
                          گیـــلان
                        </h3>
                      </div>
                    </v-row>
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </div>
        </v-row>
      </div>
      <!-- <div v-if="show3" class="fixed heightAll widthAll" style="height:100vh;z-index: 1;top:0;right:0"
        :style="{ opacity: opacity3 }">
        <div :style="{ height: sizeImage2 + '%', width: sizeImage2 + '%' }">
          <img class="heightAll widthAll" :src="image1" style="object-fit: cover;object-position: 0 72%;" :style="{}">
        </div>
        <div class="absolute pa-3" style="text-shadow: 2px 2px 5px black;bottom:100px">
          <h2 class="white--text pt-2 px-3" style="background: #23232375;">
            هتل چهارستاره تفریحی و ساحلی آهوان واقع در شهر زیبای چابکسر
          </h2>
          <h2 class="white--text pt-2 px-3" style="background: #23232375;" :style="{ opacity: src2Step >= 2 ? 1 : 0 }">
            آماده ارائه خدمت به تمام مردم شریف ایران در تمام ایام سال است.
          </h2>
          <v-row justify="center" class=" px-3 pt-6" style="background: #23232375;"
            :style="{ opacity: src2Step >= 3 ? 1 : 0 }">
            <h4 class="white--text">تلفن‌های تماس جهت رزرو:</h4>
          </v-row>
          <v-row justify="center" class="pt-2 px-3" style="background: #23232375;"
            :style="{ opacity: src2Step >= 3 ? 1 : 0 }">
            <h3 class="white--text">
              9 8 8 1 4 - 1 2 0
            </h3>
          </v-row>
          <v-row justify="center" class="pt-2 px-3" style="background: #23232375;"
            :style="{ opacity: src2Step >= 3 ? 1 : 0 }">
            <h3 class="white--text">
              5 0 2 4 - 3 1 0
            </h3>
          </v-row>
          <v-row justify="center" class="pt-2 px-3" style="background: #23232375;"
            :style="{ opacity: src2Step >= 4 ? 1 : 0 }">
            <span class="white--text">
              آدرس دفتر مرکزی: تهران-ضلع شمال غربی میدان آرژانتین، ساختمان بانک تجارت، طبقه همکف، شماره 18
            </span>
          </v-row>
          <v-row justify="center" class="py-2 px-3" style="background: #23232375;"
            :style="{ opacity: src2Step >= 4 ? 1 : 0 }">
            <span class="white--text">
              آدرس هتل: گیلان-رودسر، کیلومتر 8 جاده کلاچای به چابکسر
            </span>
          </v-row>
        </div>

       
      </div> -->
    </v-row>

  </div>
</template>

<style>
.src2Step .v-image__image {
  background-position: top right !important;
  /* background-position: -2599px -1130px !important; */
}
</style>

<style scoped>
.row2 {
  /* transition: all 500ms; */
}

.card2 {
  /* height: 40%; */
  width: 90%;
  margin-bottom: 10%;
}

.v-sheet.v-card:not(.v-sheet--outlined) {
  /* box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.2) !important */
}

* {
  transition: all 1s;
}

.widthAll {
  width: 100% !important
}

.lineCards {
  /* transition: all 3s; */
}

.notTransition {
  /* transition: none; */
}
</style>

<script>
// import QuestionAnswer from '@/components/QuestionAnswer.vue'
const $ = require('jquery');
import axios from 'axios'
axios.defaults.headers.common['Client-Token'] = 'Ahuan-Wapi?123'
import HeaderSite from '@/components/HeaderSite.vue';

export default {
  name: 'HomeView',
  metaInfo: {
    // title: 'خدمات گردشگری آهوان',
    // meta: [
    //   { name: 'description', content: '' },
    // ]
  },
  components: {
    HeaderSite
  },
  watch: {
    windowTop: {
      immediate: true,
      handler(newVal, oldVal) {
        if (this.loadingScroll == false) {
          if (newVal > oldVal) {
            this.handleScrollBottom()
          } else {
            this.handleScrollTop()
          }
        }
      },
    }
  },
  data: () => ({
    opacity1: 0.1,
    transform1: 'matrix(2, 0, 0, 2, 0, 0)',
    transform1first: 2,
    transform1next: 2,
    transform2: 'matrix(1, 0, 0, 1, 0, 0)',
    transform2first: 1,
    transform2next: 1,
    windowTop: window.top.scrollY,
    show2: false,
    size2: 140,
    fontSizeTitle2: 32,
    fontSize2: 20,
    fontSize3: 16,
    opacity2: 1,
    lineCardsBackground: '#000000',
    lineCardsWidth: '20%',
    show3: false,
    opacity3: 1,
    src2: 'image1',
    image1: '',
    image2: '',
    image3: '',
    image4: '',
    image5: '',
    src2Step: 1,
    loadingScroll: false,
    sizeImage2: 100,
    opacity4: 0,
    show4: false,
    transition1: 'all 1s',
    heightRow: 'unset'
  }),
  mounted() {
    window.addEventListener("scroll", this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll)
  },
  methods: {
    handleScrollBottom() {
      this.loadingScroll = true
      if (this.opacity1 < 1) {
        this.opacity1 = this.opacity1 + 0.25
        setTimeout(() => {
          this.loadingScroll = false
        }, 100);
      } else if (this.transform1first <= 500) {
        this.transition1 = 'none'
        // this.heightRow = '0 !important'
        this.transform1first = this.transform1first * 1.1
        this.transform1next = this.transform1next * 1.1
        this.transform1 = 'matrix(' + this.transform1first + ', 0, 0, ' + this.transform1next + ', 0, 0)'
        this.transform2first = this.transform2first * 1.1
        this.transform2next = this.transform2next * 1.1
        this.transform2 = 'matrix(' + this.transform2first + ', 0, 0, ' + this.transform2next + ', 0, 0)'
        this.loadingScroll = false
      } else if (this.size2 >= 0) {
        this.opacity2 = 1
        this.show2 = true
        this.show3 = true
        //   this.size2 = this.size2 - 20
        //   this.fontSizeTitle2 = this.fontSizeTitle2 - 2
        //   this.fontSize2 = this.fontSize2 - 1
        //   this.fontSize3 = this.fontSize3 - 0.75

        setTimeout(() => {
          this.lineCardsWidth = '75%';
          this.lineCardsBackground = '#0000002e';
          this.loadingScroll = false
        }, 1000);

      } else {
        // return true
      }
      // else if (this.src2Step < 5) {
      //   this.src2Step = this.src2Step + 1
      //   setTimeout(() => {
      //     this.loadingScroll = false
      //   }, 500);
      // } else if (this.sizeImage2 < 1139) {
      //   this.sizeImage2 = this.sizeImage2 * 1.5
      //   setTimeout(() => {
      //     this.loadingScroll = false
      //   }, 500);
      //   console.log(this.sizeImage2);
      // } else if (this.opacity4 < 1) {
      //   this.show4 = true
      //   this.opacity4 = this.opacity4 + 0.2
      //   setTimeout(() => {
      //     this.loadingScroll = false
      //   }, 500);
      // }
      // setTimeout(() => {
      //   this.loadingScroll = false
      // }, 500);
    },
    handleScrollTop(event) {
      this.loadingScroll = true
      if (this.opacity4 > 0) {
        this.opacity4 = this.opacity4 - 0.2
        setTimeout(() => {
          this.loadingScroll = false
        }, 500);
      } else if (this.sizeImage2 > 100) {
        this.show4 = false
        this.sizeImage2 = this.sizeImage2 / 1.5
        setTimeout(() => {
          this.loadingScroll = false
        }, 500);
      } else if (this.src2Step > 1) {
        this.src2Step = this.src2Step - 1
        setTimeout(() => {
          this.loadingScroll = false
        }, 500);
      } else if (this.size2 < 140) {
        this.size2 = this.size2 + 20
        this.fontSizeTitle2 = this.fontSizeTitle2 + 2
        this.fontSize2 = this.fontSize2 + 1
        this.fontSize3 = this.fontSize3 + 0.75
        setTimeout(() => {
          this.loadingScroll = false
        }, 500);

      } else if (this.transform1first > 2) {
        // this.transition1 = 'none'

        this.transform1first = this.transform1first / 1.1
        this.transform1next = this.transform1next / 1.1
        this.transform1 = 'matrix(' + this.transform1first + ', 0, 0, ' + this.transform1next + ', 0, 0)'
        this.transform2first = this.transform2first / 1.1
        this.transform2next = this.transform2next / 1.1
        this.transform2 = 'matrix(' + this.transform2first + ', 0, 0, ' + this.transform2next + ', 0, 0)'
        this.opacity2 = 0
        this.loadingScroll = false
        this.lineCardsWidth = '20%';
        this.lineCardsBackground = '#0000002e';
        setTimeout(() => {
          this.show2 = false
          this.show3 = false
        }, 500);
      } else if (this.opacity1 > 0.15) {
        this.heightRow = 'unset !important'
        this.opacity1 = this.opacity1 - 0.25
        setTimeout(() => {
          this.loadingScroll = false
        }, 100);
      } else {
        // return true
      }
      setTimeout(() => {
        this.loadingScroll = false
      }, 500);
      // },
      // 
      // if (this.src2Step > 5) {
      //   this.src2Step = this.src2Step - 1
      //   setTimeout(() => {
      //     this.loadingScroll = false
      //   }, 1000);
      // }
      // if (this.size2 < 110) {
      //   //   this.show2 = true
      //   this.size2 = this.size2 + 1
      //   this.fontSizeTitle2 = this.fontSizeTitle2 + 0.2
      //   this.fontSize2 = this.fontSize2 + 0.1
      //   this.fontSize3 = this.fontSize3 + 0.05
      // } else if (this.size2 >= 110 && this.opacity2 > 0) {
      //   this.opacity2 = this.opacity2 - 0.05
      //   setTimeout(() => {
      //     this.lineCardsWidth = '20%';
      //     this.lineCardsBackground = '#fff';
      //   }, 500);
      // } else if (this.opacity2 <= 0) {
      //   this.show2 = false
      //   this.transform1first = this.transform1first / 1.1
      //   this.transform1next = this.transform1next / 1.1
      //   this.transform1 = 'matrix(' + this.transform1first + ', 0, 0, ' + this.transform1next + ', 0, 0)'
      // }
      // setTimeout(() => {
      //   this.loadingScroll = false
      // }, 500);
      // if (this.size2 < 150) {
      //   this.size2 = this.size2 + 2
      //   this.fontSizeTitle2 = this.fontSizeTitle2 + 0.3
      //   this.fontSize2 = this.fontSize2 + 0.15
      //   this.fontSize3 = this.fontSize3 + 0.13
      // }
      // else if (this.size2 >= 150 && this.opacity2 > 0) {
      //   this.size2 = this.size2 + 6
      //   this.opacity2 = this.opacity2 - 0.05
      //   this.fontSizeTitle2 = 32
      //   this.fontSize2 = 19
      //   this.fontSize3 = 16
      // } else if (this.transform1first > 1) {
      //   this.show2 = false
      //   this.transform1first = this.transform1first / 1.1
      //   this.transform1next = this.transform1next / 1.1
      //   this.transform1 = 'matrix(' + this.transform1first + ', 0, 0, ' + this.transform1next + ', 0, 0)'
      // } else if (this.opacity1 >= 0.15) {
      //   this.opacity1 -= 0.025
      // } else {
      //   // this.show2 = true
      //   // this.size2 = this.size2 + 2
      // }
    },
    onScroll(e) {
      this.windowTop = window.top.scrollY /* or: e.target.documentElement.scrollTop */
    }
  },
  created() {
  }
}
</script>
