document.addEventListener('DOMContentLoaded', function() {
  const people = document.querySelectorAll('.left .person');
  const chats = document.querySelectorAll('.right .chat');

  people.forEach(person => {
      person.addEventListener('click', () => {
          const personDataChat = person.getAttribute('data-chat');
          chats.forEach(chat => {
              chat.classList.remove('active-chat');
              if (chat.getAttribute('data-chat') === personDataChat) {
                  chat.classList.add('active-chat');
              }
          });
      });
  });
});