document.addEventListener('DOMContentLoaded', function() {
    const sessions = [
        { id: 'morning', name: 'Matin (9h-12h)' },
        { id: 'afternoon', name: 'Après-midi (13h-17h)' }
    ] 

    const sessionSelect = document.querySelector('.preferences select') 
    sessions.forEach(session => {
        const option = document.createElement('option') 
        option.value = session.id 
        option.textContent = session.name 
        sessionSelect.appendChild(option) 
    }) 

    const form = document.querySelector('form') 
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('nom').value.trim() 
        const email = document.getElementById('email').value.trim() 
        const phone = document.getElementById('tel').value.trim() 
        const session = sessionSelect.value 
        
        const selectedOptions = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
            .map(checkbox => {
                return {
                    id: checkbox.id,
                    name: checkbox.parentElement.textContent.trim(),
                    price: parseInt(checkbox.dataset.price)
                } 
            }) 

        if (!name) {
            alert('Veuillez entrer votre nom') 
 
        }
        
        if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
            alert('Veuillez entrer une adresse email valide') 

        }
        
        if (!session) {
            alert('Veuillez sélectionner une session') 

        }
        

        const selectedSession = sessions.find(s => s.id === session) 
        
        
        let confirmationMessage = `Merci ${name} ! Votre inscription est validée.\n\n` 
        confirmationMessage += `Session: ${selectedSession.name}\n` 
        
        if (selectedOptions.length > 0) {
            confirmationMessage += `\nOptions supplémentaires:\n` 
            selectedOptions.forEach(option => {
                confirmationMessage += `- ${option.name}\n` 
            }) 
        }
        const confirmationSection = document.querySelector('.confirmation p') 
        confirmationSection.textContent = confirmationMessage 
        
    
    }) 
}) 