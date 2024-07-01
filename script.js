document.addEventListener('DOMContentLoaded', function() {
  const people = document.querySelectorAll('.left .person');
  const chats = document.querySelectorAll('.right .chat');
  const sendButton = document.getElementById('sendButton');
  const messageInput = document.getElementById('messageInput');

  // Adiciona evento de clique aos itens da lista de pessoas
  people.forEach(person => {
      person.addEventListener('click', () => {
          const personDataChat = person.getAttribute('data-chat');
          // Remove a classe active-chat de todos os chats
          chats.forEach(chat => {
              chat.classList.remove('active-chat');
              // Adiciona a classe active-chat ao chat correspondente
              if (chat.getAttribute('data-chat') === personDataChat) {
                  chat.classList.add('active-chat');
              }
          });
      });
  });
  // Adiciona evento de clique ao botão de envio
  sendButton.addEventListener('click', () => {
      const messageText = messageInput.value;
      if (messageText.trim() !== '') {
          const activeChat = document.querySelector('.chat.active-chat');
          const activeChatData = activeChat.getAttribute('data-chat');

          // Cria um novo elemento de mensagem
          const messageBubble = document.createElement('div');
          messageBubble.classList.add('bubble', 'me');
          messageBubble.textContent = messageText;

          // Adiciona a nova mensagem ao chat ativo
          activeChat.appendChild(messageBubble);
          messageInput.value = '';

          // Atualiza o texto de preview para o chat correspondente
          const person = document.querySelector(`.left .person[data-chat="${activeChatData}"]`);
          if (person) {
              const preview = person.querySelector('.preview');
              if (preview) {
                  preview.textContent = messageText;
              }
          }
      }
  });
});
