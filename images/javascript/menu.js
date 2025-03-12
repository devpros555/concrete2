<script>
    document.addEventListener("DOMContentLoaded", function () {
        const menuToggle = document.querySelector('.menu-toggle');
        const mobileMenu = document.querySelector('.mobile-menu');

        if (menuToggle && mobileMenu) {
            menuToggle.addEventListener('click', function () {
                mobileMenu.classList.toggle('show-menu');

                // Force menu to show by setting display explicitly
                if (mobileMenu.classList.contains('show-menu')) {
                    mobileMenu.style.display = "block"; // Force it open
                } else {
                    mobileMenu.style.display = "none"; // Hide it
                }
            });

            // Close menu when clicking a menu link
            document.querySelectorAll('.mobile-menu a').forEach(link => {
                link.addEventListener('click', function () {
                    mobileMenu.classList.remove('show-menu');
                    mobileMenu.style.display = "none"; // Ensure it closes
                });
            });
        }
    });
</script>
