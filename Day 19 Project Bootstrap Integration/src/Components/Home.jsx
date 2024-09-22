import React from 'react'

export default function Home() {
    return (
        <>
            {/* <div id="preloader-active">
                <div className="preloader d-flex align-items-center justify-content-center">
                    <div className="preloader-inner position-relative">
                        <div className="preloader-circle"></div>
                        <div className="preloader-img pere-text">
                            <img src="/public/assets/img/logo/loder.png" alt="" />
                        </div>
                    </div>
                </div>
            </div> */}

            <header>
                <div className="header-area header-transparent">
                    <div className="main-header header-sticky">
                        <div className="container-fluid">
                            <div className="menu-wrapper d-flex align-items-center justify-content-between">
                                <div className="logo">
                                    <a href="index.html"><img src="/public/assets/img/logo/logo.png" alt="" /></a>
                                </div>

                                <div className="main-menu f-right d-none d-lg-block">
                                    <nav>
                                        <ul id="navigation">
                                            <li><a href="index.html">Home</a></li>
                                            <li><a href="about.html">About</a></li>
                                            <li><a href="courses.html">Courses</a></li>
                                            <li><a href="pricing.html">Pricing</a></li>
                                            <li><a href="gallery.html">Gallery</a></li>
                                            <li><a href="blog.html">Blog</a>
                                                <ul className="submenu">
                                                    <li><a href="blog.html">Blog</a></li>
                                                    <li><a href="blog_details.html">Blog Details</a></li>
                                                    <li><a href="elements.html">Elements</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="contact.html">Contact</a></li>
                                        </ul>
                                    </nav>
                                </div>
                                <div className="header-btns d-none d-lg-block f-right">
                                    <a href="contact.html" className="btn">Contact me</a>
                                </div>
                                <div className="col-12">
                                    <div className="mobile_menu d-block d-lg-none"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </header>
            <main>

                <div className="slider-area position-relative">
                    <div className="slider-active">
                        <div className="single-slider slider-height d-flex align-items-center">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-9 col-lg-9 col-md-10">
                                        <div className="hero__caption">
                                            <span data-animation="fadeInLeft" data-delay="0.1s">Hi This is  Zacson</span>
                                            <h1 data-animation="fadeInLeft" data-delay="0.4s">Gym Trainer</h1>
                                            <a href="courses.html" className="border-btn hero-btn" data-animation="fadeInLeft" data-delay="0.8s">My Courses</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="traning-categories black-bg">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6">
                                <div className="single-topic text-center mb-30">
                                    <div className="topic-img">
                                        <img src="/public/assets/img/gallery/cat1.png" alt="" />
                                        <div className="topic-content-box">
                                            <div className="topic-content">
                                                <h3>Personal traning</h3>
                                                <p>You’ll look at graphs and charts in Task One, how to approach the task and <br /> the language needed for a successful answer.</p>
                                                <a href="courses.html" className="border-btn">View Courses</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6">
                                <div className="single-topic text-center mb-30">
                                    <div className="topic-img">
                                        <img src="/public/assets/img/gallery/cat2.png" alt="" />
                                        <div className="topic-content-box">
                                            <div className="topic-content">
                                                <h3>Group traning</h3>
                                                <p>You’ll look at graphs and charts in Task One, how to approach the task and <br /> the language needed for a successful answer.</p>
                                                <a href="courses.html" className="btn">View Courses</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="team-area fix">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="section-tittle text-center mb-55 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
                                    <h2 >What I Offer</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="single-cat text-center mb-30 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s" >
                                    <div className="cat-icon">
                                        <img src="/public/assets/img/gallery/team1.png" alt="" />
                                    </div>
                                    <div className="cat-cap">
                                        <h5><a href="services.html">Body Building</a></h5>
                                        <p>You’ll look at graphs and charts in Task One, how to approach the task </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-cat text-center mb-30 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">
                                    <div className="cat-icon">
                                        <img src="/public/assets/img/gallery/team2.png" alt="" />
                                    </div>
                                    <div className="cat-cap">
                                        <h5><a href="services.html">Muscle Gain</a></h5>
                                        <p>You’ll look at graphs and charts in Task One, how to approach the task </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-cat text-center mb-30 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".6s">
                                    <div className="cat-icon">
                                        <img src="/public/assets/img/gallery/team3.png" alt="" />
                                    </div>
                                    <div className="cat-cap">
                                        <h5><a href="services.html">Weight Loss</a></h5>
                                        <p>You’ll look at graphs and charts in Task One, how to approach the task </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="gallery-area section-padding30">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                <div className="box snake mb-30">
                                    <div
                                        className="gallery-img big-img"
                                        style={{ backgroundImage: 'url(/public/assets/img/gallery/gallery1.png)' }}
                                    ></div>
                                    <div className="overlay">
                                        <div className="overlay-content">
                                            <h3>Muscle gaining</h3>
                                            <a href="gallery.html">
                                                <i className="ti-plus"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                <div className="box snake mb-30">
                                    <div
                                        className="gallery-img big-img"
                                        style={{ backgroundImage: 'url(/public/assets/img/gallery/gallery2.png)' }}
                                    ></div>
                                    <div className="overlay">
                                        <div className="overlay-content">
                                            <h3>Muscle gaining</h3>
                                            <a href="gallery.html">
                                                <i className="ti-plus"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                <div className="box snake mb-30">
                                    <div
                                        className="gallery-img big-img"
                                        style={{ backgroundImage: 'url(/public/assets/img/gallery/gallery3.png)' }}
                                    ></div>
                                    <div className="overlay">
                                        <div className="overlay-content">
                                            <h3>Muscle gaining</h3>
                                            <a href="gallery.html">
                                                <i className="ti-plus"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                                <div className="box snake mb-30">
                                    <div
                                        className="gallery-img big-img"
                                        style={{ backgroundImage: 'url(/public/assets/img/gallery/gallery4.png)' }}
                                    ></div>
                                    <div className="overlay">
                                        <div className="overlay-content">
                                            <h3>Muscle gaining</h3>
                                            <a href="gallery.html">
                                                <i className="ti-plus"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                                <div className="box snake mb-30">
                                    <div
                                        className="gallery-img big-img"
                                        style={{ backgroundImage: 'url(/public/assets/img/gallery/gallery5.png)' }}
                                    ></div>
                                    <div className="overlay">
                                        <div className="overlay-content">
                                            <h3>Muscle gaining</h3>
                                            <a href="gallery.html">
                                                <i className="ti-plus"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                <div className="box snake mb-30">
                                    <div
                                        className="gallery-img big-img"
                                        style={{ backgroundImage: 'url(/public/assets/img/gallery/gallery6.png)' }}
                                    ></div>
                                    <div className="overlay">
                                        <div className="overlay-content">
                                            <h3>Muscle gaining</h3>
                                            <a href="gallery.html">
                                                <i className="ti-plus"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="pricing-area section-padding40 fix">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="section-tittle text-center mb-55 wow fadeInUp" data-wow-duration="2s" data-wow-delay=".1s">
                                    <h2>Pricing</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="properties mb-30 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
                                    <div className="properties__card">
                                        <div className="about-icon">
                                            <img src="/public/assets/img/icon/price.svg" alt="" />
                                        </div>
                                        <div className="properties__caption">
                                            <span className="month">6 month</span>
                                            <p className="mb-25">$30/m  <span>(Single className)</span></p>
                                            <div className="single-features">
                                                <div className="features-icon">
                                                    <img src="/public/assets/img/icon/check.svg" alt="" />
                                                </div>
                                                <div className="features-caption">
                                                    <p>Free riding </p>
                                                </div>
                                            </div>
                                            <div className="single-features">
                                                <div className="features-icon">
                                                    <img src="/public/assets/img/icon/check.svg" alt="" />
                                                </div>
                                                <div className="features-caption">
                                                    <p>Unlimited equipments</p>
                                                </div>
                                            </div>
                                            <div className="single-features">
                                                <div className="features-icon">
                                                    <img src="/public/assets/img/icon/check.svg" alt="" />
                                                </div>
                                                <div className="features-caption">
                                                    <p>Personal trainer</p>
                                                </div>
                                            </div>
                                            <div className="single-features">
                                                <div className="features-icon">
                                                    <img src="/public/assets/img/icon/check.svg" alt="" />
                                                </div>
                                                <div className="features-caption">
                                                    <p>Weight losing classNamees</p>
                                                </div>
                                            </div>
                                            <div className="single-features mb-20">
                                                <div className="features-icon">
                                                    <img src="/public/assets/img/icon/check.svg" alt="" />
                                                </div>
                                                <div className="features-caption">
                                                    <p>Month to mouth</p>
                                                </div>
                                            </div>
                                            <a href="#" className="border-btn border-btn2">Join Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="properties mb-30 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">
                                    <div className="properties__card">
                                        <div className="about-icon">
                                            <img src="/public/assets/img/icon/price.svg" alt="" />
                                        </div>
                                        <div className="properties__caption">
                                            <span className="month">6 month</span>
                                            <p className="mb-25">$30/m  <span>(Single className)</span></p>
                                            <div className="single-features">
                                                <div className="features-icon">
                                                    <img src="/public/assets/img/icon/check.svg" alt="" />
                                                </div>
                                                <div className="features-caption">
                                                    <p>Free riding </p>
                                                </div>
                                            </div>
                                            <div className="single-features">
                                                <div className="features-icon">
                                                    <img src="/public/assets/img/icon/check.svg" alt="" />
                                                </div>
                                                <div className="features-caption">
                                                    <p>Unlimited equipments</p>
                                                </div>
                                            </div>
                                            <div className="single-features">
                                                <div className="features-icon">
                                                    <img src="/public/assets/img/icon/check.svg" alt="" />
                                                </div>
                                                <div className="features-caption">
                                                    <p>Personal trainer</p>
                                                </div>
                                            </div>
                                            <div className="single-features">
                                                <div className="features-icon">
                                                    <img src="/public/assets/img/icon/check.svg" alt="" />
                                                </div>
                                                <div className="features-caption">
                                                    <p>Weight losing classNamees</p>
                                                </div>
                                            </div>
                                            <div className="single-features mb-20">
                                                <div className="features-icon">
                                                    <img src="/public/assets/img/icon/check.svg" alt="" />
                                                </div>
                                                <div className="features-caption">
                                                    <p>Month to mouth</p>
                                                </div>
                                            </div>
                                            <a href="#" className="border-btn border-btn2">Join Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="properties mb-30 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".6s">
                                    <div className="properties__card">
                                        <div className="about-icon">
                                            <img src="/public/assets/img/icon/price.svg" alt="" />
                                        </div>
                                        <div className="properties__caption">
                                            <span className="month">6 month</span>
                                            <p className="mb-25">$30/m  <span>(Single className)</span></p>
                                            <div className="single-features">
                                                <div className="features-icon">
                                                    <img src="/public/assets/img/icon/check.svg" alt="" />
                                                </div>
                                                <div className="features-caption">
                                                    <p>Free riding </p>
                                                </div>
                                            </div>
                                            <div className="single-features">
                                                <div className="features-icon">
                                                    <img src="/public/assets/img/icon/check.svg" alt="" />
                                                </div>
                                                <div className="features-caption">
                                                    <p>Unlimited equipments</p>
                                                </div>
                                            </div>
                                            <div className="single-features">
                                                <div className="features-icon">
                                                    <img src="/public/assets/img/icon/check.svg" alt="" />
                                                </div>
                                                <div className="features-caption">
                                                    <p>Personal trainer</p>
                                                </div>
                                            </div>
                                            <div className="single-features">
                                                <div className="features-icon">
                                                    <img src="/public/assets/img/icon/check.svg" alt="" />
                                                </div>
                                                <div className="features-caption">
                                                    <p>Weight losing classNamees</p>
                                                </div>
                                            </div>
                                            <div className="single-features mb-20">
                                                <div className="features-icon">
                                                    <img src="/public/assets/img/icon/check.svg" alt="" />
                                                </div>
                                                <div className="features-caption">
                                                    <p>Month to mouth</p>
                                                </div>
                                            </div>
                                            <a href="#" className="border-btn border-btn2">Join Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="about-area2 fix pb-padding pt-50 pb-80">
                    <div className="support-wrapper align-items-center">
                        <div className="right-content2">

                            <div className="right-img wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
                                <img src="/public/assets/img/gallery/about.png" alt="" />
                            </div>
                        </div>
                        <div className="left-content2">
                            <div className="section-tittle2 mb-20 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                                <div className="front-text">
                                    <h2 className="">About Me</h2>
                                    <p>You’ll look at graphs and charts in Task One, how to approach the task and the language needed
                                        for a successful answer. You’ll examine Task Two questions and learn how to plan, write and
                                        check academic essays.</p>
                                    <p className="mb-40">Task One, how to approach the task and the language needed for a successful answer. You’ll
                                        examine Task Two questions and learn how to plan, write and check academic essays.</p>
                                    <a href="courses.html" className="border-btn">My Courses</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="home-blog-area pt-10 pb-50">
                    <div className="container">

                        <div className="row justify-content-center">
                            <div className="col-lg-7 col-md-9 col-sm-10">
                                <div className="section-tittle text-center mb-100 wow fadeInUp" data-wow-duration="2s" data-wow-delay=".2s">
                                    <h2>From Blog</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="home-blog-single mb-30 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">
                                    <div className="blog-img-cap">
                                        <div className="blog-img">
                                            <img src="/public/assets/img/gallery/blog1.png" alt="" />
                                        </div>
                                        <div className="blog-cap">
                                            <span>Gym & Fitness</span>
                                            <h3><a href="blog_details.html">Your Antibiotic One Day To 10 Day Options</a></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="home-blog-single mb-30 wow fadeInUp" data-wow-duration="2s" data-wow-delay=".6s">
                                    <div className="blog-img-cap">
                                        <div className="blog-img">
                                            <img src="/public/assets/img/gallery/blog2.png" alt="" />
                                        </div>
                                        <div className="blog-cap">
                                            <span>Gym & Fitness</span>
                                            <h3><a href="blog_details.html">Your Antibiotic One Day To 10 Day Options</a></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="video-area section-bg2 d-flex align-items-center" data-background="assets/img/gallery/video-bg.png">
                    <div className="container">
                        <div className="video-wrap position-relative">
                            <div className="video-icon" >
                                <a className="popup-video btn-icon" href="https://www.youtube.com/watch?v=up68UAfH0d0"><i className="fas fa-play"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="services-area">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8">
                                <div className="single-services mb-40 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
                                    <div className="features-icon">
                                        <img src="assets/img/icon/icon1.svg" alt="" />
                                    </div>
                                    <div className="features-caption">
                                        <h3>Location</h3>
                                        <p>You’ll look at graphs and charts in Task One, how to approach </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                <div className="single-services mb-40 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
                                    <div className="features-icon">
                                        <img src="assets/img/icon/icon2.svg" alt="" />
                                    </div>
                                    <div className="features-caption">
                                        <h3>Phone</h3>
                                        <p>(90) 277 278 2566</p>
                                        <p>  (78) 267 256 2578</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                <div className="single-services mb-40 wow fadeInUp" data-wow-duration="2s" data-wow-delay=".4s">
                                    <div className="features-icon">
                                        <img src="assets/img/icon/icon3.svg" alt="" />
                                    </div>
                                    <div className="features-caption">
                                        <h3>Email</h3>
                                        <p>jacson767@gmail.com</p>
                                        <p>contact56@zacsion.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer>

                <div className="footer-area black-bg">
                    <div className="container">
                        <div className="footer-top footer-padding">

                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="single-footer-caption mb-50 text-center">

                                        <div className="footer-logo wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
                                            <a href="index.html"><img src="assets/img/logo/logo2_footer.png" alt="" /></a>
                                        </div>

                                        <div className="header-area main-header2 wow fadeInUp" data-wow-duration="2s" data-wow-delay=".4s">
                                            <div className="main-header main-header2">
                                                <div className="menu-wrapper menu-wrapper2">

                                                    <div className="main-menu main-menu2 text-center">
                                                        <nav>
                                                            <ul>
                                                                <li><a href="index.html">Home</a></li>
                                                                <li><a href="about.html">About</a></li>
                                                                <li><a href="courses.html">Courses</a></li>
                                                                <li><a href="pricing.html">Pricing</a></li>
                                                                <li><a href="gallery.html">Gallery</a></li>
                                                                <li><a href="contact.html">Contact</a></li>
                                                            </ul>
                                                        </nav>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="footer-social mt-30 wow fadeInUp" data-wow-duration="3s" data-wow-delay=".8s">
                                            <a href="#"><i className="fab fa-twitter"></i></a>
                                            <a href="https://bit.ly/sai4ull"><i className="fab fa-facebook-f"></i></a>
                                            <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="footer-bottom">
                            <div className="row d-flex align-items-center">
                                <div className="col-lg-12">
                                    <div className="footer-copy-right text-center">
                                        <p>
                                            Copyright &copy; All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </footer>

            <div id="back-top" >
                <a title="Go to Top" href="#"> <i className="fas fa-level-up-alt"></i></a>
            </div>


            <script src="./assets/js/vendor/modernizr-3.5.0.min.js"></script>

            <script src="./assets/js/vendor/jquery-1.12.4.min.js"></script>
            <script src="./assets/js/popper.min.js"></script>
            <script src="./assets/js/bootstrap.min.js"></script>
            <script src="./assets/js/jquery.slicknav.min.js"></script>


            <script src="./assets/js/owl.carousel.min.js"></script>
            <script src="./assets/js/slick.min.js"></script>
            <script src="./assets/js/wow.min.js"></script>
            <script src="./assets/js/animated.headline.js"></script>
            <script src="./assets/js/jquery.magnific-popup.js"></script>

            <script src="./assets/js/gijgo.min.js"></script>
            <script src="./assets/js/jquery.nice-select.min.js"></script>
            <script src="./assets/js/jquery.sticky.js"></script>

            <script src="./assets/js/jquery.counterup.min.js"></script>
            <script src="./assets/js/waypoints.min.js"></script>
            <script src="./assets/js/jquery.countdown.min.js"></script>
            <script src="./assets/js/hover-direction-snake.min.js"></script>

            <script src="./assets/js/contact.js"></script>
            <script src="./assets/js/jquery.form.js"></script>
            <script src="./assets/js/jquery.validate.min.js"></script>
            <script src="./assets/js/mail-script.js"></script>
            <script src="./assets/js/jquery.ajaxchimp.min.js"></script>

            <script src="./assets/js/plugins.js"></script>
            <script src="./assets/js/main.js"></script>


        </>
    )
}
