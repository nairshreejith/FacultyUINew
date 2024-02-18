<template>
  <div class="assignmenttext mx-5 my-5">
    <h2 class="text-center"><u>What clients tell about us?</u></h2>

    <div
      class="testimonial text-content"
      v-for="(testimonial, index) in displayedTestimonials"
      :key="index"
    >
      <p>{{ testimonial.text }}</p>
      <p>- {{ testimonial.author }}</p>
    </div>
    <div class="text-center mt-3">
      <v-btn
        outlined
        depressed
        tile
        class="savebutton mr-2 mb-2"
        @click="showPreviousPage"
        :disabled="currentPage === 0"
        ><img src="../assets/back.png" width="20px" />Previous Page
      </v-btn>
      <v-btn
        outlined
        depressed
        tile
        class="savebutton mr-2 mb-2"
        @click="showNextPage"
        :disabled="currentPage === pageCount - 1"
        >Next Page <img src="../assets/next.png" width="20px"
      /></v-btn>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      testimonials: [
        {
          text:
            "NNIT Soft transformed our online presence with their exceptional web development skills. They understood our requirements thoroughly and delivered a user-friendly, visually stunning website that perfectly represents our brand. Their attention to detail and commitment to excellence truly sets them apart.",
          author: "Emma Hart:",
        },
        {
          text:
            "Working with NNIT Soft on our mobile app was a game-changer for our business. They combined creativity with technical expertise to develop an app that exceeded our expectations. From concept to launch, their team provided unparalleled support and guidance, ensuring a seamless user experience.",
          author: "Eddie Johnson",
        },
        {
          text:
            "NNIT Soft's DevOps services streamlined our development process and improved our overall efficiency. Their knowledgeable team implemented robust automation and continuous integration practices, enabling us to deliver high-quality software faster than ever before. Partnering with NNIT Soft has been instrumental in our success.",
          author: "Jonathan Doe",
        },
        {
          text:
            "NNIT Soft's data scientists are true experts in their field. They helped us unlock valuable insights from our data, allowing us to make data-driven decisions that have positively impacted our business. Their analytical skills and strategic guidance have been invaluable assets to our organization.",
          author: "Mike Edward",
        },
        {
          text:
            "NNIT Soft's cloud services have revolutionized the way we manage our IT infrastructure. Their comprehensive cloud solutions have improved scalability, reliability, and security across our entire organization. With NNIT Soft's support, we've been able to leverage the power of the cloud to drive innovation and stay ahead of the competition.",
          author: "Michael Clark",
        },
        {
          text:
            "The support I received from NNIT SOFT was invaluable during my exams. I'm grateful for their help.",
          author: "Emily Wilson",
        },
        {
          text:
            "NNIT SOFT's tutors are excellent. They clarified my doubts and boosted my confidence in mathematics.",
          author: "Daniel Lee",
        },
        {
          text:
            "NNIT Soft's innovative approach to problem-solving and their creative solutions have been instrumental in driving our business forward. They consistently push the boundaries of technology to deliver solutions that are not only functional but also innovative and future-proof. Partnering with NNIT Soft has inspired us to think bigger and bolder.",
          author: "Linda Taylor",
        },
        {
          text:
            "NNIT Soft understands the importance of deadlines and consistently delivers projects on time and within budget. Their efficient project management processes and proactive communication ensure that we always know the status of our projects and can plan accordingly. With NNIT Soft, we can trust that our timelines will be met, no matter how tight.",
          author: "William Anderson",
        },
        {
          text:
            "What sets NNIT Soft apart is their deep understanding of various industries and their ability to tailor solutions to meet our specific needs. Whether it's healthcare, finance, or manufacturing, NNIT Soft's expertise spans across diverse sectors, allowing them to provide insights and solutions that are truly impactful.",
          author: "Maria Garcia",
        },
        {
          text:
            "NNIT Soft believes in transparent communication, and it shows in every interaction we have with them. They keep us informed every step of the way, providing regular updates and seeking feedback to ensure that our needs are being met. Their open and honest approach fosters trust and strengthens our partnership.",
          author: "Thomas Smith",
        },
        {
          text:
            "Our partnership with NNIT Soft goes beyond just projects; it's a long-term collaboration built on trust, mutual respect, and shared goals. They take the time to understand our business objectives and proactively suggest ways to add value and drive innovation. With NNIT Soft by our side, we're confident in our ability to succeed both now and in the future.",
          author: "Olivia Davis",
        },
        {
          text:
            "NNIT Soft's commitment to quality assurance is evident in every project they undertake. Their rigorous testing processes ensure that our software products are bug-free and perform flawlessly, even under the most demanding conditions. We trust NNIT Soft to deliver solutions that meet the highest standards of quality and reliability.",
          author: "Robert Wilson",
        },
        {
          text:
            "Security is a top priority for our organization, and NNIT Soft's expertise in cybersecurity is second to none. They implement robust security measures to protect our data and systems from threats, giving us peace of mind knowing that our sensitive information is safe and secure.",
          author: "Anna Johnson",
        },
        {
          text:
            "NNIT Soft's user-centric design approach ensures that our digital products not only look great but also provide an exceptional user experience. Their intuitive designs make it easy for our customers to navigate our platforms and accomplish their goals, resulting in increased engagement and satisfaction.",
          author: "Matthew Brown",
        },
        {
          text:
            "NNIT Soft's cost-effective solutions have helped us optimize our IT budget without compromising on quality. They offer competitive pricing and provide value-driven solutions that maximize our ROI. Partnering with NNIT Soft has allowed us to achieve our business objectives while staying within budget.",
          author: "Sophia Lee",
        },
        {
          text:
            "NNIT Soft's cost-effective solutions have helped us optimize our IT budget without compromising on quality. They offer competitive pricing and provide value-driven solutions that maximize our ROI. Partnering with NNIT Soft has allowed us to achieve our business objectives while staying within budget",
          author: "James Anderson",
        },
        {
          text:
            "The customer support provided by NNIT Soft is unparalleled. Their team is responsive, knowledgeable, and always goes above and beyond to address any issues or concerns we may have. Knowing that we have their support gives us peace of mind as we continue to grow our business",
          author: "Ella Taylor",
        },
        {
          text:
            "NNIT Soft's innovative approach to problem-solving and their creative solutions have been instrumental in driving our business forward. They consistently push the boundaries of technology to deliver solutions that are not only functional but also innovative and future-proof. Partnering with NNIT Soft has inspired us to think bigger and bolder..",
          author: "Christopher Clark",
        },
        {
          text:
            "NNIT Soft's global reach and presence enable them to support our operations across different geographies and time zones seamlessly. Their distributed team structure ensures that we have access to the right expertise whenever and wherever we need it, allowing us to stay agile and responsive in a rapidly changing world.",
          author: "Sophie Garcia",
        },
      ],
      pageSize: 3, // Number of testimonials per page
      currentPage: 0, // Current page index
    };
  },
  computed: {
    displayedTestimonials() {
      const startIndex = this.currentPage * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      return this.testimonials.slice(startIndex, endIndex);
    },
    pageCount() {
      return Math.ceil(this.testimonials.length / this.pageSize);
    },
  },
  methods: {
    showPreviousPage() {
      if (this.currentPage > 0) {
        this.currentPage--;
      }
    },
    showNextPage() {
      if (this.currentPage < this.pageCount - 1) {
        this.currentPage++;
      }
    },
  },
};
</script>

<style scoped>
.testimonial {
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 5px;
  text-align: center;
}

button {
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button[disabled] {
  background-color: #ccc;
  cursor: not-allowed;
}

button:hover {
  background-color: #0056b3;
}
</style>
