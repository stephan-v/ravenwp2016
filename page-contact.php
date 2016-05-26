<?php require('header.php'); ?>
        <div class="header contact-header">
            <div class="container">
                <div class="absolute-center">
                    <h1 class="animated fadeInDown">
                        Vertel ons over je project<span class="highlight">.</span>
                    </h1>
                </div><!-- /.absolute-center -->
            </div><!-- /.container -->
        </div><!-- /.jumbotron -->

        <div class="container contact-page animated fadeInUp">
            <div class="row">
                <div class="col-md-12">
                    <div class="col-md-8">
                        <div class="main-form">
                            <h3>Stuur ons een bericht</h3>
                            <p class="intro">Zou u graag u project met ons willen bespreken of wilt u een vrijblijvende offerte ontvangen? Stuur ons een bericht via het onderstaande formulier of bel <strong>06 - 54795053</strong>.</p>
                            <?php echo do_shortcode( '[contact-form-7 id="21" title="Contactformulier 1"]' ); ?>
                        </div><!-- /.main-form -->
                    </div><!-- /.col-md-8 -->

                    <div class="col-md-4">
                        <div class="information-header"></div>
                        <div class="contact-information">
                            <h3>Onze gegevens</h3>
                            <p>Langskomen op locatie is mogelijk op afspraak. Hier kunt u ons vinden.</p>
                            <ul>
                                <li><i class="fa fa-map-marker" aria-hidden="true"></i>
                                    <div class="address">Soephuisstraatje 18 - 17 <br> 9712BZ Groningen</div>
                                </li>
                                <li><i class="fa fa-phone" aria-hidden="true"></i>06 - 54795053</li>
                                <li><i class="fa fa-paper-plane-o" aria-hidden="true"></i><a href="mailto:info@ravenwebdesign.nl">info@ravenwebdesign.nl</a></li>
                                <li><i class="fa fa-file-text-o" aria-hidden="true"></i> KvK: 56902646</li>
                            </ul>
                        </div><!-- /.contact-information -->
                    </div><!-- /.col-md-4 -->
                </div><!-- /.col-md-12 -->
            </div><!-- /.row -->
        </div><!-- /.container -->
<?php require('footer.php'); ?>