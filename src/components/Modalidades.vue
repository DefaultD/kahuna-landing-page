<template>
  <div id="modalidade"></div>
  <div class="container">
    <!-- Computador -->
    <div class="row d-none d-md-flex py-5">
      <div class="col-4">
        <div class="card-container">
          <h3 class="titulo">Boxe</h3>
          <img class="w-100 expandable" style="height: 500px; cursor: pointer;" src="../assets/card.avif"
            @click="toggleText(1)">
          <button @click="toggleText(1)" class="saiba-mais-btn">Saiba Mais</button>
          <p v-if="showText[1]" class="overlay-text">Boxe ou pugilismo é um esporte de combate e arte marcial, no qual
            os lutadores usam apenas os punhos, tanto para a defesa, quanto para o ataque. Boxeadores trocam golpes por
            um tempo predeterminado em um número de rodadas (rounds ou assaltos) em uma arena elevada cercada de cordas,
            o Ringue.</p>
        </div>
      </div>
      <div class="col-4">
        <div class="card-container">
          <h3 class="titulo">Kenpo</h3>
          <img class="w-100 expandable" style="height: 500px; cursor: pointer;" src="../assets/card2.avif"
            @click="toggleText(2)">
          <button @click="toggleText(2)" class=" saiba-mais-btn">Saiba Mais</button>
          <p v-if="showText[2]" class="overlay-text">o kenpo havaiano mistura técnicas de karate, judô, aikido, boxe e
            jiu- jitsu. Durante uma hora de aula, onde se pode perder até 900 calorias, são trabalhados braços, pernas e
            abdômen.</p>
        </div>
      </div>
      <div class="col-4">
        <div class="card-container">
          <h3 class="titulo ">Defesa pessoal</h3>
          <img class="w-100 expandable" style="height: 500px; cursor: pointer;" src="../assets/card4.png"
            @click="toggleText(3)">
          <button @click="toggleText(3)" class="saiba-mais-btn">Saiba Mais</button>
          <p v-if="showText[3]" class="overlay-text">A defesa pessoal é baseada nos fundamentos de alguns esportes e/ou
            artes marciais, como o judô, o aikido ou o karatê. O caráter principal da defesa pessoal é a recusa de
            força, podendo ser aplicado a oponentes de maiores dimensões ou com força muscular.</p>
        </div>
      </div>
    </div>
    <div class="col-4 d-flex d-none d-md-flex py-5" style="padding-left: 10px;">
      <div class="align-self-center">
        <div>
          <h1><b>Modalidades</b></h1>
        </div>
        <div>
          <p>Oferecemos modalidades como boxe, kenpo e defesa pessoal. Com planos acessíveis e aulas de qualidade,
            estamos aqui para ajudá-lo a alcançar seus objetivos. Venha nos conhecer e faça parte da família Kahuna!</p>
        </div>
      </div>
    </div>
  </div>
  <!-- Celular -->
  <div class="row d-md-none w-100">
    <div>
      <div class="mt-3">
        <h1><b>Modalidades</b></h1> 
        <p>Oferecemos modalidades como boxe, kenpo e defesa pessoal. Com planos acessíveis e aulas de qualidade, estamos
          aqui para ajudá-lo a alcançar seus objetivos. Venha nos conhecer e faça parte da família Kahuna!</p>
      </div>
    </div>
    <!-- <div> -->
    <!-- <img class="img-fluid" src="../assets/boxe.png"> -->
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  name: 'Modalidades',
  data() {
    return {
      showText: {}
    };
  },
  methods: {
    toggleText(index) {
      this.showText = { ...this.showText, [index]: !this.showText[index] };
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.card-container {
  position: relative;
}

.card-container img {
  transition: transform 0.3s, opacity 0.3s;
  width: 100%;
}

.card-container img:hover {
  transform: scale(1.1);
}

.titulo {
  width: 99%;
  z-index: 9999;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}

.saiba-mais-btn {
  width: 99%;
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}

.overlay-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 10px;
  text-align: center;
  width: 80%;
}
</style>