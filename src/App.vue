<template>
  <div>
    {{ aa }}
    <span v-html="description"></span>
    <text-highlight :queries="queries"> {{}} </text-highlight>
    <span v-html="description"></span>
    <slick ref="slick" :options="slickOptions" @afterChange="handleAfterChange">
      <div class="aa">1</div>

      <div>
        <div class="aa">2</div>
      </div>

      <div class="aa">3</div>

      <div>
        <div class="aa">4</div>
      </div>
      <div>
        <div class="aa">5</div>
      </div>
      <div>
        <div class="aa">6</div>
      </div>
    </slick>

    <div>
      <button @click="prev">이전</button>
    </div>
    <div>
      <button @click="next">다음</button>
    </div>
    <div>
      <button @click="stop">멈춰</button>
    </div>
    <button @click="start">시작</button>
    <div>
      {{ index }}
    </div>
  </div>
</template>

<script>
import "slick-carousel/slick/slick.css";
import Slick from "vue-slick";
export default {
  components: {
    Slick,
  },
  name: "App",
  data() {
    return {
      queries: ["birds", "scatt"],
      description:
        "<div>Tropical birds scattered as Drake veered the Jeep</div>",
      index: 0,
      auto: true,
      slickOptions: {
        arrows: false,
        slidesToShow: 2,
        centerMode: true,
        centerPadding: "60px",
        autoplay: true,
        autoplaySpeed: 1000,
        // Any other options that can be got from plugin documentation
      },
    };
  },

  // All slick methods can be used too, example here
  methods: {
    aa() {
      return this.description.words.replace(
        query,
        '<span class="highlight">' + query + "</span>"
      );
    },
    handleAfterChange(event, slick, currentSlide) {
      this.index = currentSlide;
    },
    stop() {
      this.slickOptions.autoplay = false;
      console.log(this.$refs.slick);
      this.$refs.slick.setOption(this.slickOptions, true);
    },
    start() {
      this.slickOptions.autoplay = true;
      this.$refs.slick.setOption(this.slickOptions, true);
    },
    next() {
      this.$refs.slick.next();
    },

    prev() {
      this.$refs.slick.prev();
    },
  },
};
</script>
<style scoped>
.aa {
  background-color: red;
  margin: 5px;
  padding: 5px;
  width: 50px;
  height: 50px;
}
</style>
