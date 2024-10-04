document.getElementById('header').innerHTML = `
            <div class="wrapper">
            <div class="header--left">
                <img class="header--logo logo" src="assets/img/Logo.png" alt="Website Logo">
            </div>
            <div class="header--right">
                <ul class="header__nav nav">
                    <li class="nav__link"><a href="index.html">Trang chủ</a></li>
                    <li class="nav__link"><a href="featured.html">Nổi bật</a></li>
                    <li class="nav__link"><a href="blog.html">Blog</a></li>
                    <li class="nav__link"><a href="contact.html">Liên hệ</a></li>
                </ul>
                <div class="header__input">
                    <div class="header__searchbox">
                        <input class="searchbox__input" type="text" placeholder="Tìm kiếm">
                        <div class="searchbox__button">
                            <img class="searchbox__img" src="assets/img/icons8-search-144.png" alt="Search Icon">
                        </div>
                    </div>
                    <button class="header__login">
                        <img class="login__img" src="assets/img/LoginButton-header.png" alt="Login Button">
                    </button>
                </div>
            </div>
        </div>
    `
document.querySelector('head').innerHTML += `
        <link rel="stylesheet" href="assets/css/basic.css">
        <link rel="stylesheet" href="assets/css/header.css">
`