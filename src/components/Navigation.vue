<template>
    <header id="header" data-fullwidth="true" data-transparent="false">
        <div class="header-inner">
            <div class="container">
                <!--Logo-->
                <router-link to="/">
                    <div id="logo">
                        <img class="logo" src="./../assets/logo-with-caption.png" alt="Logo">
                    </div>
                </router-link>
                <!--End: Logo-->


                <!--Navigation Resposnive Trigger-->
                <div id="mainMenu-trigger">
                    <a class="lines-button x"><span class="lines"></span></a>
                </div>
                <!--end: Navigation Resposnive Trigger-->
                <!--Navigation-->
                <div id="mainMenu">
                    <div class="container">
                        <nav>
                            <ul>
                                <li>
                                    <router-link to="/">Home</router-link>
                                </li>
                                <li class="dropdown"><span class="dropdown-arrow"></span><a href="#">Health Hub</a>
                                    <ul class="dropdown-menu" style="">
                                        <li class="dropdown-submenu"><span class="dropdown-arrow"></span><a href="#">Body
                                            Health</a>
                                            <ul class="dropdown-menu" style="">
                                                <li><a href="#">Know your sugar</a></li>
                                                <li><a href="#">Fitness Tool</a></li>
                                            </ul>
                                        </li>
                                        <li class="dropdown-submenu"><span class="dropdown-arrow"></span><a href="#">Brain
                                            Health</a>
                                            <ul class="dropdown-menu" style="">
                                                <li><a href="#">Stroke Video</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#">Heart Health</a>
                                        </li>
                                        <li><a href="#">Insure Your Health</a>
                                        </li>
                                        <li class="dropdown-submenu"><span class="dropdown-arrow"></span><a href="#">Wealth
                                            Tips</a>
                                            <ul class="dropdown-menu" style="">
                                                <li><a href="#">Mint App</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>

                                <li>
                                    <router-link to="/blog">Blog</router-link>
                                </li>
                                <li>
                                    <router-link to="/">Shop</router-link>
                                </li>
                                <li>
                                    <router-link to="/">Premium</router-link>
                                </li>
                                <li>
                                    <router-link to="/register">Register</router-link>
                                </li>

                                <li>
                                    <router-link to="/login">Login</router-link>
                                </li>
                                <li>
                                    <router-link to="/">More</router-link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <!--end: Navigation-->
            </div>
        </div>
    </header>
</template>


<style lang="scss">

    #header {
        .header-inner {
            background-color: var(--primary-color) !important;

            a {
                color: white;
            }

            a:hover{
                color: black;
                font-size: 1em;
            }
        }
    }

    .logo {
        width: 160px;
    }
</style>

<script>
    export default {
        name: 'Navigation'
    }
</script>