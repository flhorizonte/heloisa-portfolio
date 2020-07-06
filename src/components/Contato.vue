<template>
    <div id="Contato">
        <hr>
        <br>
        <br>
        <br>
        <h1>Entre em Contato</h1>
        <div id="container">
            <div class="box">
enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div class="box">
                <div class="box-form">
                    <h5>Me envie um email!</h5>
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
                            <input type="submit" class="btn btn-primary">
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
        margin-top: 50px;
        display:flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .box {
        width: 45%;
        height: 100%;
        text-align: justify;
    }
</style>