<template>
  <div>
    <div class="sixteentosix omt-6 omt-md-25">
      <div
        class="kachelimage header-image"
        style="background: url('static/img/faq.png')"
      >
        <div class="headline">
          <div class="text-subtitle-2 text-md-h5">FAQs</div>
        </div>
      </div>
    </div>

    <div class="faq-container">
      <div class="faq-row">
        <div
          v-for="(item, index) in faqItems.slice(0, 2)"
          :key="item.id"
          class="accordion text-content"
          @click="toggleAccordion(index)"
        >
          {{ item.question
          }}<img
            v-if="!item.open"
            class="ml-5"
            src="../assets/plus.png"
            width="30px"
          /><img v-else class="ml-5" src="../assets/minus.png" width="30px" />
          <div class="panel" :class="{ active: item.open }" :key="index">
            {{ item.answer }}
          </div>
        </div>
      </div>

      <div class="faq-row">
          <div
          v-for="(item, index) in faqItems.slice(2, 4)"
          :key="item.id"
          class="accordion text-content"
          @click="toggleAccordion(index + 2)"
        >
          {{ item.question
          }}<img
            v-if="!item.open"
            class="ml-5"
            src="../assets/plus.png"
            width="30px"
          /><img v-else class="ml-5" src="../assets/minus.png" width="30px" />
          <div class="panel" :class="{ active: item.open }" :key="index">
            {{ item.answer }}
          </div>
        </div>
      </div>


      <div class="faq-row">
        <div
          v-for="(item, index) in faqItems.slice(4, 6)"
          :key="item.id"
          class="accordion text-content"
          @click="toggleAccordion(index + 4)"
        >
          {{ item.question
          }}<img
            v-if="!item.open"
            class="ml-5"
            src="../assets/plus.png"
            width="30px"
          /><img v-else class="ml-5" src="../assets/minus.png" width="30px" />
          <div class="panel" :class="{ active: item.open }" :key="index">
            {{ item.answer }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      faqItems: [
        {
          id: 1,
          question: "Who is Assignment Wallah?",
          answer:
            "Assignment Wallah is an Online Educational Research Platform. It does not provide any kind of University Assignment Solution with respect to money. Assignment Wallah is here to teach you, guide you, and short out your challenges with affordable charges.",
          open: false,
        },
        {
          id: 2,
          question: "Why Assignment Wallah for students?",
          answer:
            "Assignment Wallah, an online platform, gives services to seeking students who need support to solve their doubts or difficulties with study-related content. Our academic experts shorten their queries by providing clarified information. We help students to achieve a better scorecard by giving plagiarism-free study content.",
          open: false,
        },
        {
          id: 3,
          question: "Is the Assignment Wallah platform trustable?",
          answer:
            "Yes, absolutely! Assignment Wallah is a co-friendly platform collaborated with Industry Leading Professionals who are responsible to assist or enhance student’s core knowledge.",
          open: false,
        },
        {
          id: 4,
          question: "What services Assignment Wallah provide?",
          answer:
            "Assignment Wallah provides lots of trending services that are related to Mobile App Development, ML Model Development, AI, Networking, Cybersecurity, and other research-oriented activities. On this platform, you may get our experts’ assistance via online sessions to clear any domain-related doubts.",
          open: false,
        },
        {
          id: 5,
          question: "How to contact Assignment Wallah support?",
          answer:
            "You can contact Assignment Wallah support through our customer support email at support@assignmentwallah.com or by phone at +1-800-123-4567. We are available to assist you 24/7.",
          open: false,
        },
        {
          id: 6,
          question: "Is Assignment Wallah free to use?",
          answer:
            "Assignment Wallah offers a range of free educational resources and information. However, some services may require payment, such as personalized tutoring or expert consultation. Please check our website for specific pricing details.",
          open: false,
        },
        {
          id: 7,
          question: "Can I request a refund for paid services?",
          answer:
            "Yes, we have a refund policy in place. If you are not satisfied with a paid service, you can request a refund within [refund period] days of the purchase. Please refer to our refund policy on our website for more details.",
          open: false,
        },
        // Add more FAQ items here...
      ],
    };
  },
  methods: {
    toggleAccordion(index) {
      this.faqItems[index].open = !this.faqItems[index].open;
    },
  },
};
</script>
