<template>
  <div class="mt-sm-12 pt-12">
    <header-site style="z-index: 2" />
    <div class="widthAll relative" style="z-index: 1">
      <div class="absolute" id="about-england" style="top: -100px"></div>
      <v-row justify="center" align="center" class="px-12">
        <div class="indexDiv">
          <v-row class="mt-md-12 mb-md-12">
            <v-col cols="12" md="6" class="order-2 order-md-1">
              <v-row class="heightAll" align="center">
                <div class="px-6 relative">
                  <div class="absolute commasParent" style="">
                    <img
                      src="@/assets/image/inverted-commas.png"
                      alt=""
                      class="commas"
                    />
                  </div>
                  <div style="z-index: 222">
                    <h2
                      class="font-small-title-xs mb-3 rokh"
                      style="color: #2b3490"
                    >
                      جاذبه‌های گردشگری چابکسر
                    </h2>
                    <p class="answerText mt-2 mt-md-6">
                      چابکسر، یکی از شهرهای استان گیلان در مرز مازندران است که
                      از روزگاران دور به آب‌و‌هوای معتدل و طبیعت غنی و سرسبزش
                      شهره بوده است. جاهای دیدنی چابکسر بسیار زیاد هستند، شاید
                      بتوان گفت به تعداد روستاها و بازارچه‌ها و جنگل‌ها و سواحل
                      و حتی خیابان‌ها و کوچه‌هایش جای دیدنی در این شهر وجود
                      دارد. هر بخش از این شهر زیبا، داستانی دارد و جاذبه‌ایی
                      ارزشمند برای بازدید به‌شمار می‌رود.
                    </p>
                  </div>
                </div>
              </v-row>
            </v-col>
            <v-col cols="12" md="6" class="order-1 order-md-2">
              <v-row justify="center" class="mt-12">
                <div class="widthAll relative">
                  <div
                    class="absolute"
                    style="
                      width: 90%;
                      height: 80%;
                      left: -50px;
                      top: -50px;
                      z-index: 1;
                      background: #2b3490;
                    "
                  ></div>
                  <div class="widthAll" style="box-shadow: 0 0px 12px #c2c2c2">
                    <v-img
                      class="firstImageParent"
                      src="@/assets/image/hotel/gilan-dress.jpg"
                      alt=""
                      style="z-index: 2"
                    />
                  </div>
                </div>
              </v-row>
            </v-col>
          </v-row>
          <!-- <v-row>
            <h1 style="color:#2b3490">
              چـابـکـسـر
            </h1>
          </v-row> -->
          <v-row>
            <img
              src="@/assets/image/hotel/abgarm.jpg"
              class="widthAll"
              alt=""
            />
            <p class="text-justify mt-2 mx-3 answerText widthAll">
              <b class="rokh" style="color: #2b3490">رامسر:</b>
              هتل قدیم و جدید رامسر و کاخ موزه (20کیلومتر)-
              <br class="d-none" />
              آب گرم معدنی (پشت هتل و سادات شهر) (20کیلومتر)-
              <br class="d-none" />
              منطقه زیبای جنگلی اربه کله و سد میجران کتالم و سادات شهر
              (30کیلومتر)-
              <br class="d-none" />
              بقعه متبرکه آقابسمل سادات شهر (22کیلومتر)-
              <br class="d-none" />
              بوستان جنگلی صفارود (25کیلومتر)-
              <br class="d-none" />
              دهستان زیبا و ییلاقی جواهرده (40کیلومتر)-
              <br class="d-none" />
              جنگل دالخانی (کیلومتر5جاده رامسر به تنکابن)-
              <br class="d-none" />
              قلعه مارکوه (سادات شهر کتالم) (30کیلومتر)
            </p>
            <img
              src="@/assets/image/hotel/eylagh2000.jpg"
              class="widthAll"
              alt=""
            />
            <p class="text-justify mt-2 mx-3 answerText widthAll">
              <b class="rokh" style="color: #2b3490">تنکابن:</b>
              مناطق یـیلاقی دوهـزار و سه‌هـزار (70کیلومتر)
            </p>
            <img
              src="@/assets/image/hotel/telecabin.jpg"
              class="widthAll"
              alt=""
            />
            <p class="text-justify mt-2 mx-3 answerText widthAll">
              <b class="rokh" style="color: #2b3490">چالوس:</b>
              شهر نمک‌آبرود (تله ‌کابین) (90کیلومتر)
            </p>
          </v-row>
          <v-row>
            <img
              src="@/assets/image/hotel/javaherdasht.gif"
              class="widthAll"
              alt=""
            />
            <p class="text-justify mt-2 mx-3 answerText widthAll">
              <b class="rokh" style="color: #2b3490">رودسر:</b>
              سواحل رودسر (26کیلومتر)-
              <br class="d-none" />
              کوه‌پایه‌های اشکور (40کیلومتر)-
              <br class="d-none" />
              روستای سیاهکلرود ، آبشار دوآب و منطقه کوهپایه‌ای ناهارخورلات
              (15کیلومتر)
            </p>
            <img
              src="@/assets/image/hotel/damkash.jpg"
              class="widthAll"
              alt=""
            />
            <p class="text-justify mt-2 mx-3 answerText widthAll">
              <b class="rokh" style="color: #2b3490">چابکسر:</b>
              چشمه دمکش (3کیلومتر)-
              <br class="d-none" />
              روستای سرولات (6کیلومتر)
            </p>
            <img
              src="@/assets/image/hotel/شیطان-کوه11.jpg"
              class="widthAll"
              alt=""
            />
            <p class="text-justify mt-2 mx-3 answerText widthAll">
              <b class="rokh" style="color: #2b3490">لاهیجان:</b>
              شیطان کوه - موزه چای - تله کابین (55کیلومتر)
              <br />
            </p>
            <img
              src="@/assets/image/hotel/چمخاله.jpg"
              class="widthAll"
              alt=""
            />
            <p class="text-justify mt-2 mx-3 answerText widthAll">
              <b class="rokh" style="color: #2b3490">لنگرود:</b>
              ساحل چمخاله (45کیلومتر)
              <br />
            </p>
          </v-row>
        </div>
      </v-row>
    </div>
  </div>
</template>

<style scoped>
.commasParent {
  top: -130px;
  right: 0px;
  z-index: 1;
}

.commas {
  width: 120px;
}

@media (max-width: 599px) {
  .commasParent {
    top: -18px;
  }

  .commas {
    width: 23px;
  }
}
</style>

<script>
import HeaderSite from "@/components/HeaderSite.vue";

export default {
  name: "safety-tips",
  data() {
    return {};
  },
  components: {
    HeaderSite,
  },
  computed: {},
  methods: {},
};
</script>