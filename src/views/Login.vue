<template>
    <body>
        <div class="container home d-flex justify-content-center align-items-center">
            <div id="blue-circle"></div>
            <form id="form" class="row">
                <h1 class="text-center">כניסה</h1>
                <div class="input-group  my-3">
                    <i class="bi bi-person-fill input-group-text"></i>
                    <input type="text" id="accountNum" class="form-control" placeholder="מספר חשבון">
                </div>
                <div class="input-group  mb-3">
                    <i class="bi bi-lock-fill input-group-text"></i>
                    <input type="text" id="password" class="form-control" placeholder="סיסמה">
                </div>
                <button class="btn btn-primary" id="login" type="button">כניסה</button>
            </form>
        </div>
    </body>
</template>

