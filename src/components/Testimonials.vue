<template>
  <div>
    <div class="sixteentosix omt-6 omt-md-25">
      <div
        class="kachelimage header-image"
        style="background: url('/static/img/careerjob.png')"
      >
        <div class="headline">
          <div class="text-subtitle-2 text-md-h5">Career</div>
        </div>
      </div>
    </div>
    <div>
      <testimonial-data></testimonial-data>
    </div>
  </div>
</template>
<script>
import TestimonialData from "./TestimonialData.vue";

export default {
  components: {
    TestimonialData,
  },
};
</script>
