<template>
  <div>
    <div class="sixteentosix omt-6 omt-md-25">
      <div
        class="kachelimage header-image"
        style="background: url('static/img/aboutus.png')"
      >
        <div class="headline">
          <div class="text-subtitle-2 text-md-h5">Blog</div>
        </div>
      </div>
    </div>
    <div>
      <div class="assignmenttext mx-5 my-5">
        <h2 class="text-center"><u>Blog</u></h2>
        <div class="blog">
          <div class="blog-post" v-for="post in blogPosts" :key="post.id">
            <h2>{{ post.title }}</h2>
            <p>{{ post.content }}</p>
            <hr />
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
      blogPosts: [
        {
          id: 1,
          title: "Assignment Services",
          content:
            "Explore a variety of assignment services tailored to your needs. From technical assignments to programming tasks, our experts are here to help you succeed.",
        },
        {
          id: 2,
          title: "Assignment Types",
          content:
            "Discover specialized assignment types designed to cater to different subjects and requirements. Whether it's academic writing, online assignments, or business management tasks, we've got you covered.",
        },
        {
          id: 3,
          title: "Technical Assignments Demystified",
          content:
            "Technical assignments can be challenging. Learn how our experts simplify complex IT concepts, computer science problems, and network security challenges to provide top-notch solutions.",
        },
        {
          id: 4,
          title: "Mastering Programming Languages",
          content:
            "From Python and Java to data structures and algorithms, delve into the world of programming with our expert guidance. Enhance your coding skills and tackle intricate programming assignments with confidence.",
        },
        {
          id: 5,
          title: "Engineering Marvels",
          content:
            "Explore the fascinating world of engineering. Our experts cover topics ranging from software engineering best practices to cutting-edge developments in civil engineering. Get insights into the future of engineering.",
        },
        {
          id: 6,
          title: "Higher Order Thinking Skills (HOTS) Challenges",
          content:
            "Sharpen your intellect with our HOTS challenges. Delve into advanced topics such as digital marketing strategies, strategic management techniques, and the revolutionary impact of blockchain technology.",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Add your styles here */
.blog {
  margin: 20px;
}

.blog-post {
  margin-bottom: 30px;
}
</style>
