
tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-heading-name)", "serif"],
        body: ["var(--font-body-name)", "sans-serif"],
      },
      spacing: {
        base: "var(--space-base)",
      },
      borderRadius: {
        small: "var(--radius-small)",
        large: "var(--radius-large)",
      },
      boxShadow: {
        custom: "var(--shadow-custom)",
        "custom-hover": "var(--shadow-custom-hover)",
      },
      colors: {
        primary: {
          50: "#f6e9ec",
          100: "#e7c7cf",
          200: "#d6a2b0",
          300: "#c47c90",
          400: "#b45f77",
          500: "#a3425f",  // Base maroon
          600: "#87344d",
          700: "#68263b",
          800: "#4c1a2a",
          900: "#300e19",
        },
        secondary: {
          50: "#fef5e7",
          100: "#fde5b8",
          200: "#fcd485",
          300: "#fbc352",
          400: "#fab52e",
          500: "#f9a80a",
          600: "#e09500",
          700: "#b87a00",
          800: "#8f5f00",
          900: "#664400",
        },
        neutral: {
          50: "#f8f9fa",
          100: "#f1f3f5",
          200: "#e9ecef",
          300: "#dee2e6",
          400: "#ced4da",
          500: "#adb5bd",
          600: "#6c757d",
          700: "#495057",
          800: "#343a40",
          900: "#212529",
        },
        background: {
          50: "#ffffff",
          100: "#f8f9fa",
          200: "#f1f3f5",
          300: "#e9ecef",
          400: "#dee2e6",
          500: "#ced4da",
          600: "#adb5bd",
          700: "#6c757d",
          800: "#343a40",
          900: "#212529",
        },
      },
    },
  },
};

// Programme tab functionality
document.addEventListener('DOMContentLoaded', function () {
  const tabs = document.querySelectorAll('.programme-tab');
  const contents = document.querySelectorAll('.programme-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', function () {
      const tabName = this.getAttribute('data-tab');

      // Hide all content
      contents.forEach(content => {
        content.classList.add('hidden');
      });

      // Remove active state from all tabs
      tabs.forEach(t => {
        t.classList.remove('border-b-2', 'border-primary-700', 'text-primary-700');
        t.classList.add('border-b-2', 'border-transparent', 'text-neutral-600');
      });

      // Show selected content
      document.getElementById(tabName).classList.remove('hidden');

      // Add active state to clicked tab
      this.classList.remove('border-b-2', 'border-transparent', 'text-neutral-600');
      this.classList.add('border-b-2', 'border-primary-700', 'text-primary-700');
    });
  });
});
