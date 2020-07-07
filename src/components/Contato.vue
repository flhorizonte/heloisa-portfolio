<template>
    <div id="Contato">
        <hr>
        <h1>Entre em Contato</h1>
        <div id="container">
            <div class="box">
                <span>
                   Deseja uma ARTE GRÁFICA para seu negócio?
                    Eu faço:
                    <strong>Logotipo</strong>, 
                    <strong>Marca d'água</strong>, 
                    <strong>Cartão de visita</strong>, 
                    <strong>Cartão fidelidade</strong>, 
                    <strong>Placa para fotos</strong>, 
                    <strong>Capa para Facebook</strong> e
                    <strong>Banners</strong>.
                    O design/modelo é feito de acordo com sua preferência, venha solicitar um ORÇAMENTO!
                    Entre em contato pelo <a href="https://wa.me/5543984317435?text=Olá, vim pelo site">Whatsapp</a>
                </span>
                <br>
            </div>
            <div class="box">
                <div class="box-form">
                    <h5>Ou me envie um email!</h5>
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="email@example.com">
                        </div>
                         <div class="form-group">
                            <input type="text" class="form-control" placeholder="Assunto">
                        </div>
                        <div class="form-group">
                            <textarea class="form-control" placeholder="...."></textarea>
                        </div>
                        <div class="form-group">
                            <input type="submit" class="btn btn-primary" disabled>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Contato'
    }
</script>

<style scoped>
    #Contato {
        width: 70%;
        float:left;
        text-align: center;
        height: 500px;
        
    }

    #container {
        display:flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 50px;
    }

    .box {
        width: 45%;
        height: 100%;
        text-align: justify;
    }

    a:link, a:visited {
        color: #711ABC;
        text-decoration: none;
    }

    .whatsapp {
        color: green !important;
    }

     @media only screen and (max-width: 1000px) {
        #Contato {
            width: 100%;
            
        }
        .box {
            width:100%;
            padding: 15px;
        }
        #Contato span {
            font-size: 0.7em;
        }
        #Contato h1 {
            font-size: 1.7em;
        }
        #container {
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            width:100%;
            margin-top: 25px;
        }
    }

    @media only screen and (max-width: 400px) {
        #Contato {
             margin-top: 50px;
        }
    }
</style>