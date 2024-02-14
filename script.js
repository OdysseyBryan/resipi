function showModal(title, description) {
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-description').innerText = description;
    document.getElementById('overlay').classList.add('active');
}

// Function to hide modal
function hideModal() {
    document.getElementById('overlay').classList.remove('active');
}

// Function to search recipes
function searchRecipes() {
    var input, filter, sections, cards, i, txtValue, sectionEmpty;
    input = document.getElementById('searchInput');
    filter = input.value.trim().toUpperCase();
    sections = document.querySelectorAll('.section');
    
    sections.forEach(function(section) {
        cards = section.querySelectorAll('.card');
        sectionEmpty = true;
        cards.forEach(function(card) {
            var title = card.querySelector('h2').textContent || card.querySelector('h2').innerText;
            if (filter.length === 1 && title.toUpperCase() === filter) {
                card.style.display = "";
                sectionEmpty = false;
            } else if (title.toUpperCase().includes(filter)) {
                card.style.display = "";
                sectionEmpty = false;
            } else {
                card.style.display = "none";
            }
        });
        if (sectionEmpty) {
            section.style.display = "none";
        } else {
            section.style.display = "";
        }
    });
}

// Add click event listeners to all cards
var cards = document.querySelectorAll('.card');
cards.forEach(function(card) {
    card.addEventListener('click', function() {
        // Get title and description
        var title = this.querySelector('h2').innerText;
        var description = this.querySelector('.content').innerText;

        // Remove the duplicate title from the description
        description = description.replace(title, '');

        showModal(title, description.trim());
    });
});

