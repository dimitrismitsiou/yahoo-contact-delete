// Add number of contacts to delete (eg: 10)
for (let index = 0; index < 10; index++) {
    setTimeout(() => {
        setTimeout(() => {
            var contacts = document.querySelectorAll('#mail-app-component-container [data-test-id="contact-item"')
            contacts[0].click();        
        }, 10);
    
        setTimeout(() => {
            var button = document.querySelectorAll('#mail-app-component-container [data-test-id="icon-btn-more"')
            button[0].click();
        }, 20);
    
        setTimeout(() => {
            var deleteButton = document.querySelectorAll('#app [data-test-id="delete-contact-option"')
            deleteButton[0].click();
        }, 30);
    
        setTimeout(() => {
            var deleteOK = document.querySelectorAll('#modal-outer [data-test-id="primary-btn"')
            deleteOK[0].click();
        }, 40);
    }, index * 100);
}
