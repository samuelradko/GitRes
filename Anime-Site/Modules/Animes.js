
const Animes = document.createElement("html");
Animes.innerHTML = `
<section>

<div>
    <!-- Anime Scroll selection option will have to look how to redirect users to a specifec episode without an "href" -->
    <article class="box">

        <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <!-- Anime info -->
                    <img src="/Modules/static/kenja-no-mago.png" class="d-block w-15 imgleft"
                        alt="...">
                    <h4 class="titlecen"> Kenja no Mago</h4>
                    <br>
                    <p class="catego titlecen2"> Type: Spring 2019 Anime</p>
                    <p class="catego titlecen2">Plot Summary: A young man who had surely died in an accident,
                        was reborn in
                        another world as a baby!
                        After that, he was picked up by the patriot hero "Sage" Merlin Wolford and was given the
                        name Shin.
                        He was raised as a grandson by Merlin and soaked up Merlin's teachings, earning him some
                        shocking
                        powers; however, when he became 15, his grandfather Merlin said, "I forgot to teach him
                        common
                        sense!" An "abnormal" boy's unconventional other world fantasy life starts here!</p>
                    <p class="catego titlecen2">Genre: Action, Comedy, Fantasy, Magic</p>
                    <p class="catego titlecen2">Released: 2019</p>
                    <p class="catego titlecen2">Status: Completed</p>
                    <p class="catego titlecen2">Other Name: Wise Man's Grandchild, Philosopher's Grandson,
                        Magi's Grandson,
                        賢者の孫</p>

                    <!-- Nav bar -->
                    <nav aria-label="Page navigation example ">
                        <ul class="pagination episodemove2">

                            <!-- Episode 1 -->
                            <li class="page-item blue "><a class="page-link text-bg-dark bg-transparent"
                                    href="Kenja no Mago epesode-1.html">Episode 1</a></li>

                            <!-- Episode 2 -->
                            <li class="page-item blue"><a class="page-link text-bg-dark bg-transparent"
                                    href="Kenja no Mago epesode-1.html">Episode 2</a></li>

                            <!-- Episode 3 -->
                            <li class="page-item blue"><a class="page-link text-bg-dark bg-transparent"
                                    href="Kenja no Mago epesode-1.html">Episode3</a></li>

                            <!-- Episode 4 -->
                            <li class="page-item blue"><a class="page-link text-bg-dark bg-transparent"
                                    href="Kenja no Mago epesode-1.html">Episode4</a></li>

                            <!-- Episode 5 -->
                            <li class="page-item blue"><a class="page-link text-bg-dark bg-transparent"
                                    href="Kenja no Mago epesode-5.html">Episode 5</a></li>

                            <!-- Episode 6 -->
                            <li class="page-item blue"><a class="page-link text-bg-dark bg-transparent"
                                    href="Kenja no Mago epesode-6.html">Episode 6</a></li>

                            <!-- Episode 7 -->
                            <li class="page-item blue"><a class="page-link text-bg-dark bg-transparent"
                                    href="Kenja no Mago epesode-7.html">Episode7</a></li>

                            <!-- Episode 8 -->
                            <li class="page-item blue"><a class="page-link text-bg-dark bg-transparent"
                                    href="Kenja no Mago epesode-8.html">Episode 8</a></li>

                            <!-- Episode 9 -->
                            <li class="page-item blue"><a class="page-link text-bg-dark bg-transparent"
                                    href="Kenja no Mago epesode-9.html">Episode9</a></li>

                            <!-- Episode 10 -->
                            <li class="page-item blue"><a class="page-link text-bg-dark bg-transparent"
                                    href="Kenja no Mago epesode-10.html">Episode10</a></li>

                            <!-- Episode 11 -->
                            <li class="page-item blue"><a class="page-link text-bg-dark bg-transparent"
                                    href="Kenja no Mago epesode-11.html">Episode11</a></li>

                            <!-- Episode 12 -->
                            <li class="page-item blue"><a class="page-link text-bg-dark bg-transparent"
                                    href="Kenja no Mago epesode-12.html">Episode 12</a></li>
                        </ul>
                    </nav>

                    <!-- Anime numnber 2 scroll option -->
                </div>
                <div class="carousel-item">
                    <!-- Anime info -->
                    <img src="/Modules/static/kami-tachi-ni-hirowareta-otoko.png" width="250px"
                        class="d-block w-15 imgleft" alt="...">
                    <h4 class="titlecen4"> Kami-tachi ni Hirowareta Otoko</h4>
                    <br>
                    <p class="catego titlecen2"> Type: Fall 2020 Anime</p>
                    <p class="catego titlecen2">Plot Summary: Ryouma Takebayashi dies in his sleep at the age of
                        39 after leading a life of misfortune. Taking pity on him, three deities offer him the
                        chance to reincarnate in a world of magic where he has only one mission: to be himself
                        and enjoy life. They bestow upon Ryouma powerful physical abilities as well as the
                        affinity to master all elements, and promise to watch over him. His new life as a young
                        child officially starts when he is teleported into a forest. Three years go by. Having
                        spent most of his time researching slimes, Ryouma has managed to evolve unique kinds of
                        slimes, training an army of them while developing his magic abilities. Although the
                        young boy is happy with his hermit existence and comfortable cave home, he somewhat
                        misses the company of humans.</p>
                    <p class="catego titlecen2">Genre: Adventure, Comedy, Slice of Life</p>
                    <p class="catego titlecen2">Released: 2020</p>
                    <p class="catego titlecen2">Status: Completed</p>
                    <p class="catego titlecen2">Other Name: By the Grace of the Gods, 神達に拾われた男</p>

                    <nav aria-label="Page navigation example">
                        <!-- Nav bar -->
                        <ul class="pagination episodemove3">

                            <!-- Episode 1 -->
                            <li id="Episode1" onclick="redirect('/Kami-tachi ni Hirowareta Otoko Episode 1.html')"
                                class="page-item blue"><a class="page-link text-bg-dark bg-transparent"
                                    href="#">Episode 1</a></li>

                            <!-- Episode 2 -->
                            <li class="page-item blue"><a class="page-link text-bg-dark bg-transparent"
                                    href="Kami-tachi ni Hirowareta Otoko Episode 2.html">Episode2</a></li>

                            <!-- Episode 3 -->
                            <li class="page-item blue"><a class="page-link text-bg-dark bg-transparent"
                                    href="Kami-tachi ni Hirowareta Otoko Episode 3.html">Episode3</a></li>

                            <!-- Episode 4 -->
                            <li class="page-item blue"><a class="page-link text-bg-dark bg-transparent"
                                    href="Kami-tachi ni Hirowareta Otoko Episode 4.html">Episode 4</a></li>

                            <!-- Episode 5 -->
                            <li class="page-item blue"><a class="page-link text-bg-dark bg-transparent"
                                    href="Kami-tachi ni Hirowareta Otoko Episode 5.html">Episode5</a></li>

                            <!-- Episode 6 -->
                            <li class="page-item blue"><a class="page-link text-bg-dark bg-transparent"
                                    href="Kami-tachi ni Hirowareta Otoko Episode 6.html">Episode 6</a></li>

                            <!-- Episode 7 -->
                            <li class="page-item blue"><a class="page-link text-bg-dark bg-transparent"
                                    href="Kami-tachi ni Hirowareta Otoko Episode 7.html">Episode7</a></li>

                            <!-- Episode 8 -->
                            <li class="page-item blue"><a class="page-link text-bg-dark bg-transparent"
                                    href="Kami-tachi ni Hirowareta Otoko Episode 8.html">Episode8</a></li>

                            <!-- Episode 9 -->
                            <li class="page-item blue"><a class="page-link text-bg-dark bg-transparent"
                                    href="Kami-tachi ni Hirowareta Otoko Episode 9.html">Episode9</a></li>

                            <!-- Episode 10 -->
                            <li class="page-item blue"><a class="page-link text-bg-dark bg-transparent"
                                    href="Kami-tachi ni Hirowareta Otoko Episode 10.html">Episode10</a></li>

                            <!-- Episode 11 -->
                            <li class="page-item blue"><a class="page-link text-bg-dark bg-transparent"
                                    href="Kami-tachi ni Hirowareta Otoko Episode 11.html">Episode11</a></li>

                            <!-- Episode 12 -->
                            <li class="page-item blue"><a class="page-link text-bg-dark bg-transparent"
                                    href="Kami-tachi ni Hirowareta Otoko Episode 12.html">Episode12</a></li>
                        </ul>
                    </nav>

                </div>
            </div>
            <!-- Scroll point that change between animes "prev" -->
            <button class="carousel-control-prev mover" type="button"
                data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>


            <!-- Scroll point that change between animes "next" -->
            <button class="carousel-control-next mover" type="button"
                data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>

    </article>



</div>
</section>
`
export default Animes;