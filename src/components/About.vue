<template>
  <div>
    <div class="sixteentosix omt-6 omt-md-25">
      <div
        class="kachelimage header-image"
        style="background: url('/static/img/aboutus.png')"
      >
        <div class="headline">
          <div class="text-subtitle-2 text-md-h5">About Us</div>
        </div>
      </div>
    </div>
    <div class="row align-items-start toolDetailsPg toolDetailsPgNewWrap">
      <div class="col-md-12 pl-md-16 pl-12 px-8 pr-sm-16">
        <div class="assignmenttext text-content">
          <p>
            The
            <b>trustable Online Educational Research Platform “Assignment Wallah”</b>
            is collaborated with <b>experienced researchers</b> to assist students in
            their academic projects to score well.<b> Expert researchers</b> in our team
            create non-plagiarized content for study papers. Through online classes and
            well-communication,our researchers help to enhance knowledge of students. Our
            Creative Writers are experienced and well-trained to write original content
            for you. We take pride in our work and believe that it should be
            <b>100% plagiarism free</b>. We provide high-quality, original content that is
            accurate and relevant to your topic.
          </p>

          <p>
            We are here to <b>clear your doubt</b> about your research, education as well
            as project development which is the main objective of our Team at Assignment
            Wallah . Our online platform will provide you with the best solution in
            <b>technical writing</b> and homework help. Our writers have years of
            experience in the industry and they have been helping students from all over
            the world with their <b>assignments and projects</b>.
          </p>

          <p>
            At Assignment Wallah, we help professionals like you learn how to
            <b>develop applications</b> using the technology you prefer. We want to help
            you with hands-on experience, so you can apply and understand it thoroughly.
            Our experts can help with any stage of the development process from
            <b>brainstorming to implementation </b>with <b>doubt solving sessions</b>, all
            the way through <b>coding and deployment</b>.
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
