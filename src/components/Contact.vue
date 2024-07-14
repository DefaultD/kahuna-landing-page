<template>
  <div id="contato" class="contact-section py-5">
    <div class="container">
      <div class="row">
        <div class="col-md-6 mb-3" >
          <!-- Coluna para a imagem -->
          <img src="../assets/faixada.avif" alt="Imagem de contato" style="height: 450px;" class="img-fluid w-100">
        </div>
        <div class="col-md-6 mb-3">
          <!-- Coluna para o formulário -->
          <h2>Contato</h2>
          <form action="https://formsubmit.co/kaue.sobral19@gmail.com" method="POST">
            <div class="mb-3">
              <label for="name" class="form-label">Nome</label>
              <input v-model="formData.name" type="text" class="form-control" id="name" name="name" placeholder="Seu nome" required>
              <div v-if="!validName" class="text-danger">Por favor, digite seu nome.</div>
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <input v-model="formData.email" type="email" class="form-control" id="email" name="email" placeholder="Seu email" required>
              <div v-if="!validEmail" class="text-danger">Por favor, digite um e-mail válido.</div>
            </div>
            <div class="mb-3">
              <label for="message" class="form-label">Mensagem</label>
              <textarea v-model="formData.message" class="form-control" id="message" name="message" rows="3" placeholder="Sua mensagem" required></textarea>
              <div v-if="!validMessage" class="text-danger">Por favor, digite sua mensagem.</div>
            </div>
            <button type="submit" class="btn btn-primary">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: ''
      },
      validName: true,
      validEmail: true,
      validMessage: true
    };
  },
  methods: {
    handleSubmit() {
      this.validName = this.formData.name !== '';
      this.validEmail = this.isValidEmail(this.formData.email);
      this.validMessage = this.formData.message !== '';

      if (this.validName && this.validEmail && this.validMessage) {
        // Envie o formulário
        console.log('Formulário válido. Enviar e-mail:', this.formData);
        this.sendEmail();
      } else {
        console.log('Formulário inválido. Corrija os campos.');
      }
    },
    isValidEmail(email) {
      // Regex simples para validar e-mail
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    },
    sendEmail() {
      const formSubmitUrl = 'https://formsubmit.co/kaue.sobral19@gmail.com';

      // Dados a serem enviados
      const formData = {
        name: this.formData.name,
        email: this.formData.email,
        message: this.formData.message
      };

      // Configuração do pedido POST para enviar dados para FormSubmit.co
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      };

      // Enviar pedido POST
      fetch(formSubmitUrl, requestOptions)
        .then(response => {
          if (!response.ok) {
            throw new Error('Erro ao enviar formulário');
          }
          console.log('Formulário enviado com sucesso');
          // Limpar os dados do formulário após o envio bem-sucedido, se necessário
          this.clearForm();
        })
        .catch(error => {
          console.error('Erro ao enviar formulário:', error);
          // Lidar com erros de envio, se necessário
        });
    },
    clearForm() {
      // Limpar os dados do formulário após o envio bem-sucedido
      this.formData.name = '';
      this.formData.email = '';
      this.formData.message = '';
    }
  }
};
</script>
