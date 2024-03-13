function showModal(title, description) {
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-description').innerText = description;
    document.getElementById('overlay').classList.add('active');
}

function hideModal() {
    document.getElementById('overlay').classList.remove('active');
    document.getElementById('searchInput').value = ''; 
    document.getElementById('searchInput').focus(); 
}

document.getElementById('overlay').addEventListener('click', function(event) {
    if (event.target === this) {
        hideModal();
    }
});

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
            if (title.toUpperCase().startsWith(filter)) {
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


var cards = document.querySelectorAll('.card');
cards.forEach(function(card) {
    card.addEventListener('click', function() {
        var title = this.querySelector('h2').innerText;
        var description = this.querySelector('.content').innerText;

        description = description.replace(title, '');

        showModal(title, description.trim());
    });
});

window.onload = function() {
    document.getElementById('searchInput').focus();
};

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('searchInput').focus();
});
