
        function scrollToElement(elementId) {
            document.getElementById(elementId).scrollIntoView({
                behavior: 'smooth'
            });
        }

        const scrollLinks = document.querySelectorAll('.scroll-link');
        scrollLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                scrollToElement(targetId);
            });
        });
        function toggleMenu() {
            const sidebar = document.querySelector('.sidebar');
            const hamburger = document.querySelector('.hamburger');

            sidebar.classList.toggle('active');

            // Detecta clique fora
            function handleClickOutside(e) {
                if (!sidebar.contains(e.target) && !hamburger.contains(e.target)) {
                    sidebar.classList.remove('active');
                    document.removeEventListener('click', handleClickOutside);
                }
            }

            // Só adiciona o listener quando o menu é aberto
            if (sidebar.classList.contains('active')) {
                setTimeout(() => { // pequena espera para não fechar no mesmo clique
                    document.addEventListener('click', handleClickOutside);
                }, 100);
            }
        }