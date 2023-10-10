<template>
  <div :class="show2 && 'back1'">
    <!-- <header-site :isMain="true" style="z-index: 4" /> -->
    <div v-if="!show2" class="widthAll" style="min-height: 2000vh">
      <v-row
        class="fixed heightAll widthAll"
        align="center"
        justify="center"
        style="top: 0; height: 100vh; z-index: 2"
      >
        <div class="heightAll widthAll absolute" style="opacity: 0.7"></div>
        <div class="widthAll">
          <v-row justify="center">
            <img
              src="@/assets/image/Asset 3112.svg"
              class="mx-auto imagelogo"
              width="100"
              alt=""
              :style="{
                opacity: opacity1,
                transform: transform1,
                transition: transition1,
              }"
              style="transition-timing-function: ease-out"
            />
            <!-- <h1 class="d-none d-md-inline-block" :style="{ opacity: opacity1, transform: transform1 }">
            هتل بزرگ
            آهوان
          </h1> -->
            <!-- <h1 class="d-inline-block d-md-none rokh" :style="{ opacity: opacity1, transition: transition1 }">
            هتل بزرگ
            آهوان
          </h1> -->
          </v-row>
        </div>
        <v-row
          v-if="showArrow"
          justify="center"
          class="fixed"
          style="bottom: 0"
        >
          <img
            width="100"
            src="@/assets/image/hotel/gif-arrow.gif"
            alt=""
            style="transform: rotate(-90deg)"
          />
          <br />
          <span class="widthAll text-center">
            برای دیدن محتوای سایت اسکرول کنید.
          </span>
        </v-row>
      </v-row>
    </div>
    <div v-if="show2" class="widthAll back1 pb-12 mb-12">
      <v-row
        class="fixed heightAll widthAll row2 mt-md-12"
        align="center"
        justify="center"
        style="
          height: 100vh;
          z-index: 3;
          top: 0;
          right: 0;
          background: #deb88773 url('pattern site.png');
        "
        :style="{ opacity: opacity2 }"
      >
        <div class="hideOver" style="z-index: 2">
          <v-row class="widthAll" justify="center" align="start">
            <div
              class="widthAll mt-12 mt-md-0"
              style="height: fit-content"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <b
                class="d-none d-md-block text-center"
                :style="{ fontSize: fontSizeTitle2 + 'px' }"
                style="color: #2b3490"
              >
                خدمات هتل آهوان
              </b>
            </div>
            <div
              class="widthAll"
              style="max-width: 900px; height: fit-content; margin-top: 2%"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <v-row
                class="heightAll d-none d-md-flex"
                align="center"
                justify="space-between"
              >
                <v-col cols="4" class="pa-2">
                  <router-link to="/rules">
                    <v-card
                      class="widthAll relative rounded-xl hideOver Elevation-0"
                    >
                      <v-img
                        height="230"
                        class="widthAll rounded-xl"
                        style=""
                        src="@/assets/image/hotel/rules.jpg"
                      >
                      </v-img>
                      <div
                        class="absolute widthAll"
                        style="bottom: 0px; padding: 1%"
                      >
                        <v-row class="widthAll" align="center">
                          <div data-aos="fade-up" data-aos-duration="1000">
                            <h4
                              class="d-inline-block white--text px-3 rounded-lg rokh"
                              style="
                                margin: 2% 0;
                                white-space: nowrap;
                                background: #2b3490;
                              "
                            >
                              قوانین و نکات ضروری
                            </h4>
                          </div>
                        </v-row>
                      </div>
                    </v-card>
                  </router-link>
                </v-col>
                <v-col cols="4" class="pa-2">
                  <router-link to="/time-hotel">
                    <v-card
                      class="widthAll relative rounded-xl hideOver Elevation-0"
                    >
                      <v-img
                        height="230"
                        class="widthAll rounded-xl"
                        style=""
                        src="@/assets/image/hotel/time.jpg"
                      >
                      </v-img>
                      <div
                        class="absolute widthAll"
                        style="bottom: 0px; padding: 1%"
                      >
                        <v-row class="widthAll" align="center">
                          <div data-aos="fade-up" data-aos-duration="1000">
                            <h4
                              class="d-inline-block white--text px-3 rounded-lg rokh"
                              style="
                                margin: 2% 0;
                                white-space: nowrap;
                                background: #2b3490;
                              "
                            >
                              ساعات کاری اماکن مختلف
                            </h4>
                          </div>
                        </v-row>
                      </div>
                    </v-card>
                  </router-link>
                </v-col>
                <v-col cols="4" class="pa-2">
                  <router-link to="/hotel-description">
                    <v-card class="rounded-xl hideOver">
                      <v-img
                        height="230"
                        class="rounded-xl widthAll"
                        style=""
                        src="@/assets/image/hotel/map.jpg"
                      />
                      <div
                        class="absolute widthAll"
                        style="bottom: 0px; padding: 1%"
                      >
                        <v-row class="widthAll" align="center">
                          <div data-aos="fade-up" data-aos-duration="1000">
                            <h4
                              class="d-inline-block white--text px-3 rounded-lg rokh"
                              style="
                                margin: 2% 0;
                                white-space: nowrap;
                                background: #2b3490;
                              "
                            >
                              کروکی قسمت‌های مختلف هتل
                            </h4>
                          </div>
                        </v-row>
                      </div>
                    </v-card>
                  </router-link>
                </v-col>
                <v-col cols="4" class="pa-2">
                  <router-link to="/tourist-attractions">
                    <v-card class="rounded-xl hideOver">
                      <v-img
                        height="230"
                        class="rounded-xl widthAll"
                        style=""
                        src="@/assets/image/hotel/gilan-dress.jpg"
                      />
                      <div
                        class="absolute widthAll"
                        style="bottom: 0px; padding: 1%"
                      >
                        <v-row class="widthAll" align="center">
                          <div data-aos="fade-up" data-aos-duration="1000">
                            <h4
                              class="d-inline-block white--text px-3 rounded-lg rokh"
                              style="
                                margin: 2% 0;
                                white-space: nowrap;
                                background: #2b3490;
                              "
                            >
                              جاذبه‌های گردشگری منطقه
                            </h4>
                          </div>
                        </v-row>
                      </div>
                    </v-card>
                  </router-link>
                </v-col>
                <v-col cols="4" class="pa-2">
                  <router-link to="/weekly-markets">
                    <v-card class="rounded-xl hideOver">
                      <v-img
                        height="230"
                        class="rounded-xl widthAll"
                        style=""
                        src="@/assets/image/hotel/بازار.jpg"
                      />
                      <div
                        class="absolute widthAll"
                        style="bottom: 0px; padding: 1%"
                      >
                        <v-row class="widthAll" align="center">
                          <div data-aos="fade-up" data-aos-duration="1000">
                            <h4
                              class="d-inline-block white--text px-3 rounded-lg rokh"
                              style="
                                margin: 2% 0;
                                white-space: nowrap;
                                background: #2b3490;
                              "
                            >
                              بازارهای هفتگی منطقه
                            </h4>
                          </div>
                        </v-row>
                      </div>
                    </v-card>
                  </router-link>
                </v-col>
                <v-col cols="4" class="pa-2">
                  <router-link to="/local-foods">
                    <v-card class="rounded-xl hideOver">
                      <v-img
                        height="230"
                        class="rounded-xl widthAll"
                        style=""
                        src="@/assets/image/hotel/card2p.jpg"
                      />
                      <div
                        class="absolute widthAll"
                        style="bottom: 0px; padding: 1%"
                      >
                        <v-row class="widthAll" align="center">
                          <div data-aos="fade-up" data-aos-duration="1000">
                            <h4
                              class="d-inline-block white--text px-3 rounded-lg rokh"
                              style="
                                margin: 2% 0;
                                white-space: nowrap;
                                background: #2b3490;
                              "
                            >
                              غذاهای محلی گیـــلان
                            </h4>
                          </div>
                        </v-row>
                      </div>
                    </v-card>
                  </router-link>
                </v-col>
                <v-col cols="4" class="pa-2">
                  <router-link to="/contact-us">
                    <v-card class="rounded-xl hideOver">
                      <v-img
                        height="230"
                        class="rounded-xl widthAll"
                        style=""
                        src="@/assets/image/hotel/tech-support-1.jpg"
                      />
                      <div
                        class="absolute widthAll"
                        style="bottom: 0px; padding: 1%"
                      >
                        <v-row class="widthAll" align="center">
                          <div>
                            <h4
                              class="d-inline-block white--text px-3 rounded-lg rokh"
                              style="
                                margin: 2% 0;
                                white-space: nowrap;
                                background: #2b3490;
                              "
                            >
                              شماره‌های بخش‌های مختلف هتل
                            </h4>
                          </div>
                        </v-row>
                      </div>
                    </v-card>
                  </router-link>
                </v-col>
                <v-col cols="4" class="pa-2">
                  <router-link to="/safety-tips">
                    <v-card
                      class="widthAll relative rounded-xl hideOver Elevation-0"
                    >
                      <v-img
                        height="230"
                        class="widthAll rounded-xl"
                        style=""
                        src="@/assets/image/hotel/standard-quality-control-concept-m.jpg"
                      >
                      </v-img>
                      <div
                        class="absolute widthAll"
                        style="bottom: 0px; padding: 1%"
                      >
                        <v-row class="widthAll" align="center">
                          <div>
                            <h4
                              class="d-inline-block white--text px-3 rounded-lg rokh"
                              style="
                                margin: 2% 0;
                                white-space: nowrap;
                                background: #2b3490;
                              "
                            >
                              نکات ایمنی
                            </h4>
                          </div>
                        </v-row>
                      </div>
                    </v-card>
                  </router-link>
                </v-col>
                <v-col cols="4" class="pa-2">
                  <router-link to="/ahuan-services">
                    <v-card
                      class="widthAll relative rounded-xl hideOver Elevation-0"
                    >
                      <v-img
                        height="230"
                        class="widthAll rounded-xl"
                        style=""
                        src="@/assets/image/hotel/آهوان-.jpg"
                      >
                      </v-img>
                      <div
                        class="absolute widthAll"
                        style="bottom: 0px; padding: 1%"
                      >
                        <v-row class="widthAll" align="center">
                          <div>
                            <h4
                              class="d-inline-block white--text px-3 rounded-lg rokh"
                              style="
                                margin: 2% 0;
                                white-space: nowrap;
                                background: #2b3490;
                              "
                            >
                              خدمات مسافرتی آهوان
                            </h4>
                          </div>
                        </v-row>
                      </div>
                    </v-card>
                  </router-link>
                </v-col>
              </v-row>
              <v-row
                class="d-flex d-md-none px-4"
                align="center"
                justify="space-between"
                style="height: 90vh; overflow-y: scroll"
              >
                <h2
                  class="text-center widthAll mt-12 pt-3 rokh"
                  style="color: #2b3490; text-shadow: 0 0 #deb887"
                >
                  خدمات هتل آهوان
                </h2>
                <v-col cols="12" md="3" class="pa-2">
                  <router-link to="/rules">
                    <v-card
                      class="widthAll relative rounded-xl hideOver Elevation-0"
                    >
                      <v-img
                        height="230"
                        class="widthAll rounded-xl"
                        style=""
                        src="@/assets/image/hotel/rules.jpg"
                      >
                      </v-img>
                      <div
                        class="absolute widthAll"
                        style="bottom: 0px; padding: 1%"
                      >
                        <v-row class="widthAll" align="center">
                          <div>
                            <h4
                              class="d-inline-block white--text px-3 rounded-lg rokh"
                              style="
                                margin: 2% 0;
                                white-space: nowrap;
                                background: #2b3490;
                              "
                            >
                              قوانین و نکات ضروری
                            </h4>
                          </div>
                        </v-row>
                      </div>
                    </v-card>
                  </router-link>
                </v-col>
                <v-col cols="12" md="3" class="">
                  <router-link to="/time-hotel">
                    <v-card
                      class="widthAll relative rounded-xl hideOver Elevation-0"
                    >
                      <v-img
                        height="230"
                        class="widthAll rounded-xl"
                        style=""
                        src="@/assets/image/hotel/time.jpg"
                      >
                      </v-img>
                      <div
                        class="absolute widthAll"
                        style="bottom: 0px; padding: 1%"
                      >
                        <v-row class="widthAll" align="center">
                          <div>
                            <h4
                              class="d-inline-block white--text px-3 rounded-lg rokh"
                              style="
                                margin: 2% 0;
                                white-space: nowrap;
                                background: #2b3490;
                              "
                            >
                              ساعات کاری اماکن مختلف
                            </h4>
                          </div>
                        </v-row>
                      </div>
                    </v-card>
                  </router-link>
                </v-col>
                <v-col cols="12" md="3" class="">
                  <router-link to="/hotel-description">
                    <v-card class="rounded-xl hideOver">
                      <v-img
                        height="230"
                        class="rounded-xl widthAll"
                        style=""
                        src="@/assets/image/hotel/map.jpg"
                      />
                      <div
                        class="absolute widthAll"
                        style="bottom: 0px; padding: 1%"
                      >
                        <v-row class="widthAll" align="center">
                          <div>
                            <h4
                              class="d-inline-block white--text px-3 rounded-lg rokh"
                              style="
                                margin: 2% 0;
                                white-space: nowrap;
                                background: #2b3490;
                              "
                            >
                              کروکی قسمت‌های مختلف هتل
                            </h4>
                          </div>
                        </v-row>
                      </div>
                    </v-card>
                  </router-link>
                </v-col>
                <v-col cols="12" md="3" class="">
                  <router-link to="/contact-us">
                    <v-card class="rounded-xl hideOver">
                      <v-img
                        height="230"
                        class="rounded-xl widthAll"
                        style=""
                        src="@/assets/image/hotel/tech-support-1.jpg"
                      />
                      <div
                        class="absolute widthAll"
                        style="bottom: 0px; padding: 1%"
                      >
                        <v-row class="widthAll" align="center">
                          <div>
                            <h4
                              class="d-inline-block white--text px-3 rounded-lg rokh"
                              style="
                                margin: 2% 0;
                                white-space: nowrap;
                                background: #2b3490;
                              "
                            >
                              شماره‌های بخش‌های مختلف هتل
                            </h4>
                          </div>
                        </v-row>
                      </div>
                    </v-card>
                  </router-link>
                </v-col>
                <v-col cols="12" md="3" class="">
                  <router-link to="/tourist-attractions">
                    <v-card class="rounded-xl hideOver">
                      <v-img
                        height="230"
                        class="rounded-xl widthAll"
                        style=""
                        src="@/assets/image/hotel/gilan-dress.jpg"
                      />
                      <div
                        class="absolute widthAll"
                        style="bottom: 0px; padding: 1%"
                      >
                        <v-row class="widthAll" align="center">
                          <div>
                            <h4
                              class="d-inline-block white--text px-3 rounded-lg rokh"
                              style="
                                margin: 2% 0;
                                white-space: nowrap;
                                background: #2b3490;
                              "
                            >
                              جاذبه‌های گردشگری منطقه
                            </h4>
                          </div>
                        </v-row>
                      </div>
                    </v-card>
                  </router-link>
                </v-col>
                <v-col cols="12" md="3" class="">
                  <router-link to="/weekly-markets">
                    <v-card class="rounded-xl hideOver">
                      <v-img
                        height="230"
                        class="rounded-xl widthAll"
                        style=""
                        src="@/assets/image/hotel/بازار.jpg"
                      />
                      <div
                        class="absolute widthAll"
                        style="bottom: 0px; padding: 1%"
                      >
                        <v-row class="widthAll" align="center">
                          <div>
                            <h4
                              class="d-inline-block white--text px-3 rounded-lg rokh"
                              style="
                                margin: 2% 0;
                                white-space: nowrap;
                                background: #2b3490;
                              "
                            >
                              بازارهای هفتگی منطقه
                            </h4>
                          </div>
                        </v-row>
                      </div>
                    </v-card>
                  </router-link>
                </v-col>
                <v-col cols="12" md="3" class="">
                  <router-link to="/local-foods">
                    <v-card class="rounded-xl hideOver">
                      <v-img
                        height="230"
                        class="rounded-xl widthAll"
                        style=""
                        src="@/assets/image/hotel/card2p.jpg"
                      />
                      <div
                        class="absolute widthAll"
                        style="bottom: 0px; padding: 1%"
                      >
                        <v-row class="widthAll" align="center">
                          <div>
                            <h4
                              class="d-inline-block white--text px-3 rounded-lg rokh"
                              style="
                                margin: 2% 0;
                                white-space: nowrap;
                                background: #2b3490;
                              "
                            >
                              غذاهای محلی گیـــلان
                            </h4>
                          </div>
                        </v-row>
                      </div>
                    </v-card>
                  </router-link>
                </v-col>
                <v-col cols="12" md="3" class="">
                  <router-link to="/safety-tips">
                    <v-card
                      class="widthAll relative rounded-xl hideOver Elevation-0"
                    >
                      <v-img
                        height="230"
                        class="widthAll rounded-xl"
                        style=""
                        src="@/assets/image/hotel/standard-quality-control-concept-m.jpg"
                      >
                      </v-img>
                      <div
                        class="absolute widthAll"
                        style="bottom: 0px; padding: 1%"
                      >
                        <v-row class="widthAll" align="center">
                          <div>
                            <h4
                              class="d-inline-block white--text px-3 rounded-lg rokh"
                              style="
                                margin: 2% 0;
                                white-space: nowrap;
                                background: #2b3490;
                              "
                            >
                              نکات ایمنی
                            </h4>
                          </div>
                        </v-row>
                      </div>
                    </v-card>
                  </router-link>
                </v-col>
                <v-col cols="12" md="3" class="">
                  <router-link to="/ahuan-services">
                    <v-card
                      class="widthAll relative rounded-xl hideOver Elevation-0"
                    >
                      <v-img
                        height="230"
                        class="widthAll rounded-xl"
                        style=""
                        src="@/assets/image/hotel/آهوان-.jpg"
                      >
                      </v-img>
                      <div
                        class="absolute widthAll"
                        style="bottom: 0px; padding: 1%"
                      >
                        <v-row class="widthAll" align="center">
                          <div>
                            <h4
                              class="d-inline-block white--text px-3 rounded-lg rokh"
                              style="
                                margin: 2% 0;
                                white-space: nowrap;
                                background: #2b3490;
                              "
                            >
                              خدمات مسافرتی آهوان
                            </h4>
                          </div>
                        </v-row>
                      </div>
                    </v-card>
                  </router-link>
                </v-col>
              </v-row>
            </div>
          </v-row>
        </div>
      </v-row>
    </div>
  </div>
</template>

<style>
.src2Step .v-image__image {
  background-position: top right !important;
  /* background-position: -2599px -1130px !important; */
}

.imagelogo {
  filter: blur(0);
  -webkit-filter: blur(0);
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
  width: 100% !important;
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
const $ = require("jquery");
import axios from "axios";
axios.defaults.headers.common["Client-Token"] = "Ahuan-Wapi?123";
// import HeaderSite from "@/components/HeaderSite.vue";

export default {
  name: "HomeView",
  metaInfo: {
    // title: 'خدمات گردشگری آهوان',
    // meta: [
    //   { name: 'description', content: '' },
    // ]
  },
  components: {
    // HeaderSite,
  },
  watch: {
    windowTop: {
      // immediate: true,
      handler(newVal, oldVal) {
        // if (this.show2 == false) {
        // if (this.loadingScroll == false) {
        if (newVal > oldVal) {
          this.handleScrollBottom();
        }
        // else {
        //   this.handleScrollTop()
        // }
        // }
        // }
      },
    },
  },
  data: () => ({
    opacity1: 0.5,
    marginTop1: 1,
    transform1: "matrix(2, 0, 0, 2, 0, 0)",
    transform1first: 2,
    transform1next: 2,
    transform2: "matrix(1, 0, 0, 1, 0, 0)",
    transform2first: 1,
    transform2next: 1,
    windowTop: window.top.scrollY,
    show2: false,
    size2: 140,
    fontSizeTitle2: 32,
    fontSize2: 22,
    fontSize3: 16,
    opacity2: 1,
    lineCardsBackground: "#000000",
    lineCardsWidth: "20%",
    show3: false,
    opacity3: 1,
    src2: "image1",
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    image5: "",
    src2Step: 1,
    loadingScroll: false,
    sizeImage2: 100,
    opacity4: 0,
    show4: false,
    isMain: true,
    transition1: "all 1s",
    showArrow: true,
    step: 1,
  }),
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    handleScrollBottom() {
      if (this.opacity1 < 1) {
        this.loadingScroll = true;
        this.transition1 = "all 1s";
        this.opacity1 = 1;
        setTimeout(() => {
          this.loadingScroll = false;
        }, 1000);
      } else if (!this.loadingScroll && this.transform1first <= 600) {
        this.showArrow = false;
        this.transition1 = "all 6s";
        this.transform1first = this.transform1first * 2;
        this.transform1next = this.transform1next * 2;
        this.transform1 =
          "matrix(" +
          this.transform1first +
          ", 0, 0, " +
          this.transform1next +
          ", 0, 0)";
        setTimeout(() => {
          if (this.step == 1) {
            window.removeEventListener("scroll", this.onScroll);
            this.$router.push({ path: "main-page" });
            this.step++;
          }
          //

          // this.show2 = true;
          // this.opacity2 = 1;
        }, 2000);
      }
      // else if (this.opacity2 <= 1) {
      //   setTimeout(() => {
      //     this.loadingScroll = false;
      //   }, 1000);
      // }
    },
    handleScrollTop(event) {
      // if (this.opacity2 > 0) {
      //   this.opacity2 = 0
      //   this.show2 = false
      //   // setTimeout(() => {
      //   //   this.loadingScroll = false
      //   // }, 1000);
      // } else if (this.transform1first > 2) {
      //   // this.loadingScroll = true
      //   this.transform1first = this.transform1first / 2
      //   this.transform1next = this.transform1next / 2
      //   this.transform1 = 'matrix(' + this.transform1first + ', 0, 0, ' + this.transform1next + ', 0, 0)'
      //   // setTimeout(() => {
      //   //   this.loadingScroll = false
      //   // }, 1000);
      // }
      // else {
      //   // setTimeout(() => {
      //   //   this.opacity1 = 0.5
      //   // }, 1000);
      // }
      // this.loadingScroll = true
      // if (this.opacity4 > 0) {
      //   this.opacity4 = this.opacity4 - 0.2
      //   setTimeout(() => {
      //     this.loadingScroll = false
      //   }, 500);
      // } else if (this.sizeImage2 > 100) {
      //   this.show4 = false
      //   this.sizeImage2 = this.sizeImage2 / 1.5
      //   setTimeout(() => {
      //     this.loadingScroll = false
      //   }, 500);
      // } else if (this.src2Step > 1) {
      //   this.src2Step = this.src2Step - 1
      //   setTimeout(() => {
      //     this.loadingScroll = false
      //   }, 500);
      // } else if (this.size2 < 140) {
      //   this.size2 = this.size2 + 20
      //   // this.fontSizeTitle2 = this.fontSizeTitle2 + 2
      //   // this.fontSize2 = this.fontSize2 + 1
      //   this.fontSize3 = this.fontSize3 + 0.75
      //   setTimeout(() => {
      //     this.loadingScroll = false
      //   }, 500);
      // } else
      // if (this.transform1first > 2) {
      // this.transform1first = this.transform1first / 1.1
      // this.transform1next = this.transform1next / 1.1
      // this.transform1 = 'matrix(' + this.transform1first + ', 0, 0, ' + this.transform1next + ', 0, 0)'
      // this.transform2first = this.transform2first / 1.1
      // this.transform2next = this.transform2next / 1.1
      // this.transform2 = 'matrix(' + this.transform2first + ', 0, 0, ' + this.transform2next + ', 0, 0)'
      // this.opacity2 = 0
      // this.loadingScroll = false
      // this.lineCardsWidth = '20%';
      // this.lineCardsBackground = '#0000002e';
      // console.log(this.transform1first);
      // setTimeout(() => {
      //   this.show2 = false
      //   this.show3 = false
      // }, 500);
      // }
      // else if (this.opacity1 > 0.15) {
      //   this.opacity1 = this.opacity1 - 0.25
      //   setTimeout(() => {
      //     this.loadingScroll = false
      //   }, 100);
      // }
      //  else {
      // return true
      // }
      // setTimeout(() => {
      //   this.loadingScroll = false
      // }, 500);
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
      this.windowTop =
        window.top.scrollY; /* or: e.target.documentElement.scrollTop */
    },
  },
  created() {
    window.scrollTo(0, 0);
  },
};
</script>
