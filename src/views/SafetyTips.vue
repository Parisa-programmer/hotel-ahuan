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
                      style="color: #deb887"
                    >
                      نکات ایمنی
                    </h2>
                    <p class="answerText mt-2 mt-md-6">
                      مسافر محترم توصیه می کنیم به نکاتی که در ادامه برای امنیت
                      بیشتر در سفر و اقامت در هتل آهوان چابکسر ارائه می دهیم
                      توجه نمایید و با رعایت نکات ایمنی برای اقامت در هتل ،
                      امنیت خود را در سفر تضمین کنید.
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
                      src="@/assets/image/hotel/standard-quality-control-concept-m.jpg"
                      alt=""
                      style="z-index: 2"
                    />
                  </div>
                </div>
              </v-row>
            </v-col>
          </v-row>
          <v-row>
            <p class="text-justify mt-6 mx-3 answerText">
              <b class="" style="color: #2b3490">1.</b>
              هرگز در تختخواب سیگار نکشید.
            </p>
            <p class="text-justify mt-2 mt-sm-6 mx-3 answerText widthAll">
              <b style="color: #2b3490">2.</b>
              نزدیک ترین محل خروج اضطراری،زنگ اعلام خطر و کپسول های آتش نشانی به
              واحد خود را شناسایی نمایید.
            </p>
            <p class="text-justify mt-2 mt-sm-6 mx-3 answerText widthAll">
              <b style="color: #2b3490">3.</b>
              اگر فکر میکنید در محلی آتش سوزی رخ داده است،سریعاً مراتب را به
              داخلی (3) اطلاع داده و زنگ خطر را به صدا در آورید.
            </p>
            <p class="text-justify mt-2 mt-sm-6 mx-3 answerText widthAll">
              <b style="color: #2b3490">4.</b>
              به هنگام آتش سوزی هرگز از آسانسور استفاده نکنید.
            </p>
            <p class="text-justify mt-2 mt-sm-6 mx-3 answerText widthAll">
              <b style="color: #2b3490">5.</b>
              در صورت وجود دود در واحد حتی المکان نزدیک به زمین بمانيد و یک
              دستمال خیس در مقابل بینی و دهان خود قرار دهید.
            </p>
            <p class="text-justify mt-2 mt-sm-6 mx-3 answerText widthAll">
              <b style="color: #2b3490">6.</b>
              در صورت ماندن در واحد به‌وسیله تلفن به متصدی پذیرش شماره اتاق خود
              را اطلاع دهید و اعلام نمایید که در واحد خود هستید.
            </p>
            <p class="text-justify mt-2 mt-sm-6 mx-3 answerText widthAll">
              <b style="color: #2b3490">7.</b>
              پیوسته سعی کنید آرامش و خونسردی خود را حفظ نمایید و سنجیده اقدام
              نمایید.
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