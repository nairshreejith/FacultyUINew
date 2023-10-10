<template>
  <div>
    <div class="sixteentosix omt-6 omt-md-25">
      <div
        class="kachelimage header-image"
        style="background: url('static/img/aboutus.png')"
      >
        <div class="headline">
          <div class="text-subtitle-2 text-md-h5">About Us</div>
        </div>
      </div>
    </div>
    <div class="row align-items-start toolDetailsPg toolDetailsPgNewWrap">
      <div class="col-md-12 pl-md-16 pl-12 px-8 pr-sm-16">
        <div class="assignmenttext text-content">
          <h3 class="text-center">About Assignment Wallah</h3>

          <p class="text-center">
            Assignment Wallah is an online educational research platform that connects
            students with experienced researchers who can assist them in high-quality
            projects that will help them score well. Our team of experts creates
            non-plagiarized content for study papers and online classes, which helps
            students enhance their knowledge.
          </p>

          <h3 class="text-center">Personal Life:</h3>

          <p class="text-center">
            The personal life of students is a very important part of their education.
            Students need to be able to learn in a stress-free environment where they can
            focus on their studies without worrying about what is happening at home.
            Student life is important to academic achievement. The study environment
            should be one in which students can focus on their studies with fewer outside
            distractions.
          </p>

          <h3 class="text-center">Certificates:</h3>

          <p class="text-center">
            Assignment Wallah helps you easily achieve your goals. We are a team of
            experienced designers and developers who have been working in this field for
            years. We proudly display our hard work and achievements!
          </p>

          <h3 class="text-center">Choose your own pace of study</h3>

          <p class="text-center">Enhance Your Career by Learning in-Demand Skills</p>

          <h3 class="text-center">Request:</h3>

          <p class="text-center">When you request a project from us.</p>

          <h3 class="text-center">Timing:</h3>

          <p class="text-center">
            We will work with you to make sure that it is completed on time and within
            your budget.
          </p>

          <h3 class="text-center">Conducting:</h3>

          <p class="text-center">
            We conduct revisions on your topic until we are confident that you are
            satisfied with the results.
          </p>

          <h3 class="text-center">Review:</h3>

          <p class="text-center">
            Finally, we will review your project to ensure that it meets all of our
            quality standards and delivers the results you expect.
          </p>
        </div>
        <div class="assignmenttext text-content">
          <h2 class="text-center"><u>Why Choose Us?</u></h2>

          <p>
            <img src="../assets/leader.png" width="20px" alt="Image 1" />
            {{ whyChooseUsPoints[0] }}
          </p>

          <p>
            <img src="../assets/timer.png" width="20px" alt="Image 2" />
            {{ whyChooseUsPoints[1] }}
          </p>

          <p>
            <img src="../assets/certificate.png" width="20px" alt="Image 3" />
            {{ whyChooseUsPoints[2] }}
          </p>
        </div>
        <div>
          <testimonial-data></testimonial-data>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TestimonialData from "./TestimonialData.vue";
export default {
  components: {
    TestimonialData,
  },
  data() {
    return {
      featuresText: `Assignment Wallah is a team that’s dedicated to helping you succeed. We do more than just write your assignments—we offer personalized service and attention to detail, so you can be sure that you get the most out of every assignment we help you with.`,
      whyChooseUsPoints: [
        `Assignment Wallah is a Best Industry Leader in providing assignment writing services, homework help, and college essay writing.`,
        `If you're looking for a way to learn online at your own pace, we have just the thing. Our online learning platform allows you to learn at your own pace and on your own schedule, so you can get the most out of our courses without having to worry about class times or assignments.`,
        `Assignment Wallah had a professional certification. We provide the best services to our clients.`,
      ],
    };
  },
};
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

/* Add any specific styles for the "About Us" page if needed */
</style>
