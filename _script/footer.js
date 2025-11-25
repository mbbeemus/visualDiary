document.addEventListener("DOMContentLoaded", function () {
    const header = `
      <!--FOOTER-->
      <div class="footer">
    <div class="row" id="footer-text">


      <div class="col-md-3" id="contact">
        <p class="footer-text"><b>Mallory Beemus</b><br>
        James Madison Univeristy<br> Harrisonburg, Virginia<br>
          School of Media Art and Design<br>
          <em>Interactive Design</em><br></p>

      </div>


      <div class="col-md-2" id="bottom-nav">
         <a href="portfolio.html">Home</a><br>
      <a href="portfolio.html#web">GrantExpedition</a><br>
        <a href="portfolio.html#design">HerStrength</a><br>
        <a href="portfolio.html#research">Plan-It</a><br>
        <a href="portfolio.html#research">Trail-Link</a><br>
  
        
      </div>




      <div class="col-md-3" id="links">

        <div id="link-text">
          <a class="footer-link" href="https://www.jmu.edu/smad/" target="_blank">SMAD - School of Media Art and Design</a><br>

          <a href="https://www.jmu.edu/index.shtml" target="_blank">JMU - James Madison Univeristy</a><br>


          <a href="https://mbbeemus.github.io/JMUBoarderline/index.html" target="_blank" >Boarderline Ski and Snowboard Club</a><br>
        </div>


      </div>

      <div class="col-md-3" id="socials">

      

        <p class="footer-text">Email: <a href="mailto:mbbeemus@gmail.com">mbbeemus@gmail.com</a><br>
        Phone: <a href="tel:757-651-6795">(757)651-6795</a></p>

        

      </div>


  </div>
</div>

  
    `;

    document.getElementById("footer").innerHTML = header;
  });