<!DOCTYPE html>
<html lang="ru">
<head><meta http-equiv="Content-Type" content="text/html; charset=utf-8">

    <meta name="viewport" content="width=device-width">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <link rel="stylesheet" href="{{ asset('css/main.css') }}">
    <title></title>
</head>
<body>
<header class="header_gilette">
    <div class="container">
        <nav class="navbar navbar-expand-xl navbar-light">
            <div>
                <a href="#" class="logo logo_gilette"></a>
                <a href="tel:74951234567" class="phone phone_gilette">+7(495)123-45-69</a>
            </div>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-item nav-link smooth active" href="#goods">Кассеты Gillette<span class="sr-only">(current)</span></a>
                    <a class="nav-item nav-link smooth" href="#pampers">Подгузники Pampers</a>
                    <a class="nav-item nav-link smooth" href="#shoulders">Шампуни H&amp;S</a>
                    <a class="nav-item nav-link smooth" href="#about">О компании</a>
                    <a class="nav-item nav-link smooth" href="#video">Гарантии</a>
                    <a class="nav-item nav-link smooth" href="#reviews">Отзывы</a>
                    <a class="nav-item nav-link smooth" href="#contacts">Контакты</a>
                </div>
            </div>
        </nav>
    </div>
</header>
<div class="main-screen main-screen_gilette">
    <div class="container">
        <div class="main-screen__caption">Продаем оптом <span>от</span> 50 <span>тыс. руб.</span></div>
        <h1>оригинальные кассеты Gillette</h1>
        <h2>Со склада в Москве с доставкой по России СНГ</h2>
        <div class="row">
            <div class="about">
                <div class="about__caption">3 признака оригинала</div>
                <div class="about__content">
                    <div class="about__column">
                        <div class="about__item about__item_blade">
                            <div class="about__icon"></div>
                            <div class="about__text">Лезвия с прорезью</div>
                        </div>
                        <div class="about__item about__item_strip">
                            <div class="about__icon"></div>
                            <div class="about__text">Скользящяя полоска</div>
                        </div>
                        <div class="about__item about__item_serial">
                            <div class="about__icon"></div>
                            <div class="about__text">Серийный номер</div>
                        </div>
                    </div>
                    <div class="about__img">
                        <a href="#video" class="button button_green smooth">Смотреть видео</a>
                    </div>
                </div>
            </div>
            <div class="main-screen__img-content main-screen__img-content_gilette"></div>
        </div>
    </div>
</div>
<div class="form-screen form-screen_blue">
    <div class="container">
        <div class="advantages advantages_blue row">
            <div class="advantages__item advantages__item_agreement col">
                <div class="advantages__icon"></div>
                <div class="advantages__text">Работаем по договору</div>
            </div>
            <div class="advantages__item advantages__item_account col">
                <div class="advantages__icon"></div>
                <div class="advantages__text">Оплата на расчетный счет</div>
            </div>
            <div class="advantages__item advantages__item_true col">
                <div class="advantages__icon"></div>
                <div class="advantages__text">Настоящий<br>Pampers</div>
            </div>
            <div class="advantages__item advantages__item_individual col">
                <div class="advantages__icon"></div>
                <div class="advantages__text">Индивидуаль&shy;ные условия - от объема</div>
            </div>
        </div>
        <div class="form-screen__caption">Узнать цену кассет Gillette с доставкой</div>
        <div class="form">
            <div role="form" class="wpcf7" id="wpcf7-f4-o1" lang="ru-RU" dir="ltr">
                <form method="POST" accept-charset="utf-8" action="form.php" class="wpcf7-form row" id="select-form">
						<span class="wpcf7-form-control-wrap wpcf7-form-control-wrap_name col-12 col-sm-6 col-lg-3">
							<input type="text" name="name" value="" size="40" class="wpcf7-form-control  wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Ваше имя">
						</span>
                    <span class="wpcf7-form-control-wrap wpcf7-form-control-wrap_tel col-sm-6 col-lg-3">
							<input type="tel" name="phone" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Ваш телефон">
						</span>
                    <span class="wpcf7-form-control-wrap wpcf7-form-control-wrap_mail col-sm-6 col-lg-3">
							<input type="text" name="mail" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Ваш e-mail" required>
						</span>
                    <span class="wpcf7-form-control-wrap  wpcf7-form-control-wrap_button col-sm-6 col-lg-3">
							<button class="form__button button button_red">Узнать цену</button>
						</span>
                    <div class="form__data-policy col-12">
                        <label class="form__checkbox-wr">
                            <input type="checkbox"/>
                            <span class="form__checkbox"></span>
                        </label>
                        <div class="form__conf">- согласен на обработку персональных данных</div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
<div class="plates" id="goods">
    <div class="container">
        @foreach($groups as $group)
        <div class="plates__block" id="{{ $group->link }}">
            <h2 class="caption">{{ $group->name }}</h2>
            <div class="plates__content row">
                @foreach($group->goods as $good)
                <div class="plates__item-wr">
                    <div class="plates__item">
                        <div class="plates__img"><img src="{{ asset('/uploads/'.$good->file) }}"></div>
                        <div class="plates__caption">{{ $good->name }}</div>
                        <div class="plates__quantity">{{ $good->size }}</div>
                        <div class="plates__price">{{ $good->price }} руб</div>
                        <a href="#" class="button button_blue plates__button" data-toggle="modal" data-target="#Modal">Заказать</a>
                    </div>
                </div>
                @endforeach
            </div>
        </div>
        @endforeach

    </div>
</div>


<!-- Modal -->
<div class="modal fade" id="Modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Получить оптовый прайс на всю продукцию</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form method="POST" accept-charset="utf-8" action="form.php" class="wpcf7-form row" id="select-form">
			<span class="wpcf7-form-control-wrap wpcf7-form-control-wrap_name col-12 col-sm-6 col-lg-3">
				<input type="text" name="name" value="" size="40" class="wpcf7-form-control  wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Ваше имя">
			</span>
                    <span class="wpcf7-form-control-wrap wpcf7-form-control-wrap_tel col-sm-6 col-lg-3">
				<input type="tel" name="phone" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Ваш телефон">
			</span>
                    <span class="wpcf7-form-control-wrap wpcf7-form-control-wrap_mail col-sm-6 col-lg-3">
				<input type="text" name="mail" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Ваш e-mail" required>
			</span>
                    <span class="wpcf7-form-control-wrap  wpcf7-form-control-wrap_button col-sm-6 col-lg-3">
				<button class="form__button button button_red">Узнать цену</button>
			</span>
                    <div class="form__data-policy col-12">
                        <label class="form__checkbox-wr">
                            <input type="checkbox"/>
                            <span class="form__checkbox"></span>
                        </label>
                        <div class="form__conf">- согласен на обработку персональных данных</div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
<div class="about-company" id="about">
    <div class="container">
        <div class="caption">Компания ООО "Опт" придерживается следующих принципов работы:</div>
        <div class="about-items row">
            <div class="col-md-4">
                <div class="about-items__item about-items__item_original">
                    <div class="about-items__icon"></div>
                    <div class="about-items__text">Оригинальная продукция</div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="about-items__item about-items__item_account">
                    <div class="about-items__icon"></div>
                    <div class="about-items__text">Оплата через расчетный счет</div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="about-items__item about-items__item_agreement">
                    <div class="about-items__icon"></div>
                    <div class="about-items__text">Заключаем договор</div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="about-items__item about-items__item_certificate">
                    <div class="about-items__icon"></div>
                    <div class="about-items__text">Есть все необходимые сертификаты на товар</div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="about-items__item about-items__item_office">
                    <div class="about-items__icon"></div>
                    <div class="about-items__text">Возможность встречи в нашем офисе</div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="about-items__item about-items__item_trust">
                    <div class="about-items__icon"></div>
                    <div class="about-items__text">Нам доверяют крупные торговые сети в Москве и регионах России</div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="video-screen" id="video">
    <div class="container" >
        <div class="caption">Посмотрите видео ролик как отличить оригинал от подделки в кассетах Gillette</div>
        <div class="row">
            <iframe class="video" src="https://www.youtube.com/embed/vNFv5CREh5w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="video-screen__note">Мы даем 100% гарантию на наши оригинальные кассеты Gillette</div>
        <div class="form-screen form-screen_blue">
            <div class="form-screen__caption">Получить консультацию</div>
            <div class="form">
                <div role="form" class="wpcf7" id="wpcf7-f4-o1" lang="ru-RU" dir="ltr">
                    <form class="wpcf7-form row" id="select-form">
						<span class="wpcf7-form-control-wrap wpcf7-form-control-wrap_name col-12 col-sm-6 col-lg-4">
							<input type="text" name="name" value="" size="40" class="wpcf7-form-control  wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Ваше имя">
						</span>
                        <span class="wpcf7-form-control-wrap wpcf7-form-control-wrap_tel col-sm-6 col-lg-4">
							<input type="tel" name="phone" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Ваш телефон">
						</span>
                        <span class="wpcf7-form-control-wrap  wpcf7-form-control-wrap_button col-12 col-lg-4">
							<button class="form__button button button_red">Позвоните мне</button>
						</span>
                        <div class="form__data-policy col-12">
                            <label class="form__checkbox-wr">
                                <input type="checkbox"/>
                                <span class="form__checkbox"></span>
                            </label>
                            <div class="form__conf">- согласен на обработку персональных данных</div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

<footer id="contacts">
    <div class="footer-top">
        <div class="container">
            <h1 class="caption">Контакты</h1>
            <div class="contacts-item">
                <div class="contacts-item__caption">Адрес офиса и склада:</div>
                <div class="contacts-item__contact">г. Москва, ул. Алтуфьевское ш, д. 27, этаж 2</div>
            </div>
            <div class="contacts-item">
                <div class="contacts-item__caption">Реквизиты ООО "ОПТРБК":</div>
                <div class="contacts-item__contact">Юр. адрес: г. Москва, ул. Алтуфьевское ш, д. 27, этаж 2</div>
                <div class="contacts-item__contact">ИНН: 9715334784, КПП: 771501001</div>

            </div>

            <div class="contacts-item">
                <div class="contacts-item__caption">Телефоны представительств:</div>
                <div class="contacts-item__columns flex">
                    <div class="contacts-item__column">
                        <div class="contacts-item__contact">
                            <a href="tel:+996312962644" class="contacts-item__phone">+996 (312) 962-644</a>
                            <div class="contacts-item__country">- Кыргызстан, Бишкек</div>
                        </div>
                        <div class="contacts-item__contact">
                            <a href="tel:+992427815479" class="contacts-item__phone">+992 (427) 815-479</a>
                            <div class="contacts-item__country">- Таджикистан, Душанбе</div>
                        </div>
                    </div>
                    <div class="contacts-item__column">
                        <div class="contacts-item__contact">
                            <a href="tel:+77172696846" class="contacts-item__phone">+7 (717) 269-68-46</a>
                            <div class="contacts-item__country">- Казахстан, Астана</div>
                        </div>
                        <div class="contacts-item__contact">
                            <a href="tel:+78005006925" class="contacts-item__phone">+7 800 500 69 25</a>
                            <div class="contacts-item__country">- Звонки по России - бесплатные</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="contacts-item">
                <div class="contacts-item__caption">Режим работы</div>
                <div class="contacts-item__contact"><div>пн-пт: 09:00 — 17:00</div><div>сб-вс: 10.00 - 16.00</div></div>
            </div>
        </div>
    </div>
    <div class="article-page__map map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2239.3653706187165!2d37.580525115493316!3d55.85632699147073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b53707580e25bf%3A0x7e49b2a2d84dbb2d!2z0JDQu9GC0YPRhNGM0LXQstGB0LrQvtC1INGILiwgMjcsINCc0L7RgdC60LLQsCwg0KDQvtGB0YHQuNGPLCAxMjcxMDY!5e0!3m2!1sru!2sua!4v1576500002955!5m2!1sru!2sua" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
    </div>
    <div class="footer-menu">
        <div class="container">
            <nav class="navbar navbar-expand-xl navbar-light">
                <div>
                    <a href="#" class="logo logo_gilette"></a>
                    <a href="tel:74951234567" class="phone phone_gilette">+7(495)123-45-67</a>
                </div>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-item nav-link smooth active" href="#goods">Кассеты Gillette<span class="sr-only">(current)</span></a>
                        <a class="nav-item nav-link smooth" href="#pampers">Подгузники Pampers</a>
                        <a class="nav-item nav-link smooth" href="#shoulders">Шампуни H&amp;S</a>
                        <a class="nav-item nav-link smooth" href="#about">О компании</a>
                        <a class="nav-item nav-link smooth" href="#video">Гарантии</a>
                        <a class="nav-item nav-link smooth" href="#reviews">Отзывы</a>
                        <a class="nav-item nav-link smooth" href="#contacts">Контакты</a>
                    </div>
                </div>
            </nav>
        </div>
    </div>
    <div class="footer-bottom">
        <div class="container">
            <div class="footer__copyright">&copy; 2019, sitename</div>
        </div>
    </div>
</footer>
</body>
<script src="{{ asset('/js/jquery-3.2.1.min.js') }}"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
<script src="{{ asset('/js/main.js') }}"></script>
</html>
