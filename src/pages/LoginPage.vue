<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12 m-t-60">
                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title">Login</h5>
                    </div>
                    <div class="card-body">
                        <form>
                            <div class="form-group">
                                <label class="form-label">Email</label>
                                <input type="email" class="form-control" placeholder="example@example.com" required="">
                            </div>
                            <div class="form-group">
                                <label class="form-label">Password</label>
                                <input type="password" class="form-control" placeholder="*********" required="">
                            </div>

                            <button type="submit" class="btn btn-primary">Login</button>

                            <p style="margin-top: 10px">Don't have an account? <router-link to="/register">Register</router-link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'RegisterPage'
    }
</script>