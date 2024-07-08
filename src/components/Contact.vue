<template>
  <div class="contact-section py-5">
    <div class="container">
      <h2>Contato</h2>
      <form action="https://formsubmit.co/kaue.sobral19@gmail.com" method="POST">
        <div class="mb-3">
          <label for="name" class="form-label">Nome</label>
          <input type="text" class="form-control" id="name" name="name" placeholder="Seu nome" required>
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input type="email" class="form-control" id="email" name="email" placeholder="Seu email" required>
        </div>
        <div class="mb-3">
          <label for="message" class="form-label">Mensagem</label>
          <textarea class="form-control" id="message" name="message" rows="3" placeholder="Sua mensagem" required></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Enviar</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact'
};
</script>
