import changeEpisode from "./ChangeEpisode.js";


let KamiTach = document.createElement('div');
KamiTach.innerHTML = `
<article class="box">
<!-- Main Episode box -->
<h4 id="changeChapter" style="text-align:left;"> Kami-tachi ni Hirowareta Otoko Episode 1 English Subbed by
    Projyanime </h4>
<p class="catego">Category: Fall 2020 Anime
    <br>
    Anime info: Kami-tachi ni Hirowareta Otoko
</p>
<!-- video Iframe -->
<div class="move">
    <iframe id="episode" width="1200" height="700" src="https://www.youtube.com/embed/Fyifdxzq_SY"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
</div>
<!-- Episode Nav buttons -->
<nav aria-label="Page navigation example  ">
    <ul class="pagination episodemove">

        <!-- Epesode 1 -->
        <li onclick="changeEpisode('https://www.youtube.com/embed/Fyifdxzq_SY')" class="page-item "><a
                class="page-link text-bg-dark bg-transparent" href="#">Episode 1</a></li>

        <!-- Epesode 2 -->
        <li onclick="changeEpisode('https://www.youtube.com/embed/OEOscA3F1jg')" class="page-item">
            <a class="page-link text-bg-dark bg-transparent" href="#">Episode 2</a>
        </li>

        <!-- Epesode 3 -->
        <li onclick="changeEpisode('https://www.youtube.com/embed/qHYpGPzHawE')" class="page-item"><a
                class="page-link text-bg-dark bg-transparent" href="#">Episode 3</a></li>

        <!-- Epesode 4 -->
        <li onclick="changeEpisode('https://www.youtube.com/embed/A5RpMLNwdUU')" class="page-item"><a
                class="page-link text-bg-dark bg-transparent" href="#">Episode 4</a></li>

        <!-- Epesode 5 -->
        <li onclick="changeEpisode('https://www.youtube.com/embed/vpRQ3er_VH8')" class="page-item"><a
                class="page-link text-bg-dark bg-transparent" href="#">Episode 5</a></li>

        <!-- Epesode 6 -->
        <li onclick="changeEpisode('https://www.youtube.com/embed/43gerN6PcqY')" class="page-item"><a
                class="page-link text-bg-dark bg-transparent" href="#">Episode 6</a></li>

        <!-- Epesode 7 -->
        <li onclick="changeEpisode('https://www.youtube.com/embed/bq-4kfRETp8')" class="page-item"><a
                class="page-link text-bg-dark bg-transparent" href="#">Episode 7</a></li>

        <!-- Epesode 8 -->
        <li onclick="changeEpisode('https://www.youtube.com/embed/ubVz1NaPh8s')" class="page-item"><a
                class="page-link text-bg-dark bg-transparent" href="#">Episode 8</a></li>

        <!-- Epesode 9 -->
        <li onclick="changeEpisode('https://www.youtube.com/embed/xC_88kCS-dQ')" class="page-item"><a
                class="page-link text-bg-dark bg-transparent" href="#">Episode 9</a></li>

        <!-- Epesode 10 -->
        <li onclick="changeEpisode('https://www.youtube.com/embed/XncfzIOkFJk')" class="page-item"><a
                class="page-link text-bg-dark bg-transparent" href="#">Episode 10</a></li>

        <!-- Epesode 11 -->
        <li onclick="changeEpisode('https://www.youtube.com/embed/F6lLRmMGDiI')" class="page-item"><a
                class="page-link text-bg-dark bg-transparent" href="#">Episode 11</a></li>

        <!-- Epesode 12 -->
        <li onclick="changeEpisode('https://www.youtube.com/embed/lMCQDU9i-BU')" class="page-item"><a
                class="page-link text-bg-dark bg-transparent" href="#">Episode 12</a></li>

    </ul>
</nav>

</article>

</section>

<!-- Live feed (still working in progress) -->
<aside class="backimage">
<H1 class="newsfeed"> <iframe width="600" height="790" src="https://rss.app/embed/v1/feed/4WkavfpL6mcMPngR"
    frameborder="0"></iframe></iframe> </H1>

</aside>



<footer>
<p> All rights reserved to Samuel Radko 2022.</p>
</footer>
`
export default KamiTach
