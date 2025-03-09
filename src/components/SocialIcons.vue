<template>
  <div class="social-icons">
    <a :href="githubUrl" target="_blank" title="GitHub" class="icon-link">
      <font-awesome-icon :icon="['fab', 'github']" size="2x" />
    </a>
    <a :href="linkedinUrl" target="_blank" title="LinkedIn" class="icon-link">
      <font-awesome-icon :icon="['fab', 'linkedin-in']" size="2x" />
    </a>
    <a :href="`mailto:${email}`" title="Email" class="icon-link">
      <font-awesome-icon :icon="['fas', 'envelope']" size="2x" />
    </a>
  </div>
</template>

<script>
export default {
  name: 'SocialIcons',
  props: {
    githubUrl: {
      type: String,
      default: 'https://github.com/mapkraken'
    },
    linkedinUrl: {
      type: String,
      default: 'https://linkedin.com/in/yourusername'
    },
    email: {
      type: String,
      default: 'your.email@example.com'
    }
  }
};
</script>

<style scoped>
.social-icons {
  display: flex;
  gap: 20px; /* Space between icons */
  justify-content: center; /* Center horizontally */
  padding: 10px;
}

.icon-link {
  color: #333; /* Default color */
  text-decoration: none;
  transition: color 0.3s ease;
}

.icon-link:hover {
  color: #007bff; /* Hover color (e.g., blue) */
}
</style>