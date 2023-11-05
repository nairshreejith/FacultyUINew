<template>
  <div>
    <div class="sixteentosix omt-6 omt-md-25">
      <div
        class="kachelimage header-image"
        style="background: url('static/img/aboutus.png')"
      >
        <div class="headline">
          <div class="text-subtitle-2 text-md-h5">Sample</div>
        </div>
      </div>
    </div>
    <div>
      <div class="assignmenttext mx-5 my-5">
        <h2 class="text-center"><u>Sample Projects</u></h2>

        <div
          class="testimonial text-content"
          v-for="(contentData, index) in content"
          :key="index"
        >
          <p>{{ contentData.topic }}</p>
          <p>{{ contentData.description }}</p>
          <a>Click to download pdf</a>
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
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      content: [
        {
          topic: "Assignment Services",
          description:
            "Explore a variety of assignment services tailored to your needs. From technical assignments to programming tasks, our experts are here to help you succeed.",
          link: "/pdf/assignment-services.pdf",
        },
        {
          topic: "Assignment Types",
          description:
            "Discover specialized assignment types designed to cater to different subjects and requirements. Whether it's academic writing, online assignments, or business management tasks, we've got you covered.",
          link: "/pdf/assignment-types.pdf",
        },
        {
          topic: "Technical Assignments",
          description:
            "Dive into the realm of technical assignments. Explore topics such as IT, computer science, network security, and more. Our technical experts ensure top-notch solutions for your assignments.",
          link: "/pdf/technical-assignments.pdf",
        },
        {
          topic: "Programming Assignments",
          description:
            "Master the art of programming with our programming assignment services. From Python and Java to data structures and cryptographic assignments, enhance your coding skills.",
          link: "/pdf/programming-assignments.pdf",
        },
        {
          topic: "Engineering Assignments",
          description:
            "Delve into engineering assignments covering software engineering, statistics, digital electronics, and civil engineering. Our engineering experts provide comprehensive solutions for complex problems.",
          link: "/pdf/engineering-assignments.pdf",
        },
        {
          topic: "Higher Order Thinking Skills (HOTS)",
          description:
            "Challenge your intellect with higher-order thinking skills assignments. Explore topics like digital marketing, strategic management, leadership, and blockchain technology. Expand your knowledge horizons.",
          link: "/pdf/hots-assignments.pdf",
        },
        {
          topic: "Science Assignments",
          description:
            "Uncover the mysteries of science with assignments in physics and chemistry. Gain insights into the fundamental principles and applications.",
          link: "/pdf/science-assignments.pdf",
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
      return this.content.slice(startIndex, endIndex);
    },
    pageCount() {
      return Math.ceil(this.content.length / this.pageSize);
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
