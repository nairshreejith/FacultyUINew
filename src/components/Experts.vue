<template>
  <div>
    <div class="sixteentosix omt-6 omt-md-25">
      <div
        class="kachelimage header-image"
        style="background: url('static/img/aboutus.png')"
      >
        <div class="headline">
          <div class="text-subtitle-2 text-md-h5">Experts</div>
        </div>
      </div>
    </div>
    <div>
      <div class="assignmenttext mx-5 my-5">
        <h2 class="text-center"><u>Meet Our Experts</u></h2>

        <div
          class="testimonial text-content"
          v-for="(expert, index) in experts"
          :key="index"
        >
          <p>{{ expert.name }}</p>
          <p>{{ expert.area }}</p>
          <p>{{ expert.description }}</p>
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
      experts: [
        {
          name: "Dr. Amanda Johnson",
          area: "Assignment Services",
          description:
            "With a Ph.D. in Education and years of experience, Dr. Johnson specializes in tailoring assignment services to individual needs. Her expertise spans various subjects, ensuring your academic success.",
        },
        {
          name: "Prof. Michael Lee",
          area: "Assignment Types",
          description:
            "As a seasoned professor of literature, Prof. Lee understands the nuances of academic writing, online assignments, and business management tasks. His guidance ensures comprehensive and well-crafted assignments.",
        },
        {
          name: "Dr. Sarah Adams",
          area: "Technical Assignments",
          description:
            "Dr. Adams, a leading expert in IT and computer science, dives deep into technical assignments. Her proficiency in network security and related fields guarantees top-notch solutions for even the most complex assignments.",
        },
        {
          name: "John Smith, MSc",
          area: "Programming Assignments",
          description:
            "With a Master's degree in Computer Science, John specializes in programming languages like Python, Java, and data structures. His expertise helps students master the art of coding and excel in programming assignments.",
        },
        {
          name: "Prof. Emily White",
          area: "Engineering Assignments",
          description:
            "Prof. White, an expert in software engineering and civil engineering, provides comprehensive solutions for engineering assignments. Her in-depth knowledge of statistics and digital electronics ensures accurate and detailed problem-solving.",
        },
        {
          name: "Dr. Mark Roberts",
          area: "Higher Order Thinking Skills (HOTS)",
          description:
            "Dr. Roberts challenges students' intellect with assignments in digital marketing, strategic management, leadership, and blockchain technology. His guidance expands students' knowledge horizons and prepares them for real-world challenges.",
        },
        {
          name: "Prof. Laura Parker",
          area: "Science Assignments",
          description:
            "Prof. Parker delves into the mysteries of science with assignments in physics and chemistry. Her insights into fundamental principles and real-world applications provide students with a deeper understanding of the scientific world.",
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
      return this.experts.slice(startIndex, endIndex);
    },
    pageCount() {
      return Math.ceil(this.experts.length / this.pageSize);
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
