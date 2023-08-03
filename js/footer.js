const createFooter = () =>{
    let footer = document.querySelector('footer');

   
    footer.innerHTML = `
    <div class="footer-content">
            <img src="img/darklogo.png" class="logo" alt="">
            <div class="footer-ul-container">
                <ul class="category">
                    <li class="category-title">men</li>
                    <li><a href="#" class="footer-link">t-shirts</a></li>
                    <li><a href="#" class="footer-link">shirts</a></li>
                    <li><a href="#" class="footer-link">sweatshirts</a></li>
                    <li><a href="#" class="footer-link">jeans</a></li>
                    <li><a href="#" class="footer-link">shoes</a></li>
                    <li><a href="#" class="footer-link">glares</a></li>
                    <li><a href="#" class="footer-link">sherwani</a></li>
                    <li><a href="#" class="footer-link">socks</a></li>
                </ul>

                <ul class="category">
                    <li class="category-title">women</li>
                    <li><a href="#" class="footer-link">t-shirts</a></li>
                    <li><a href="#" class="footer-link">shirts</a></li>
                    <li><a href="#" class="footer-link">sweatshirts</a></li>
                    <li><a href="#" class="footer-link">jeans</a></li>
                    <li><a href="#" class="footer-link">shoes</a></li>
                    <li><a href="#" class="footer-link">glares</a></li>
                    <li><a href="#" class="footer-link">sherwani</a></li>
                    <li><a href="#" class="footer-link">socks</a></li>
                </ul>
            </div>
            
        </div>
        <p class="footer-title">about company</p>
        <p class="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ipsam reiciendis, eos animi nemo ea tenetur.
            Cupiditate vero aperiam eum sit quae accusamus, reiciendis dolorem dolores assumenda quidem asperiores
            magnam aspernatur facilis natus libero in. Nulla culpa reiciendis rerum placeat? Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Dolor excepturi commodi praesentium. Possimus, culpa! Eius, fugit error.
            Molestias soluta possimus eum ducimus fugiat. Quo tempora repudiandae sequi sed corporis! Harum sed
            doloribus neque unde voluptatum quasi eligendi nihil consequatur eius!</p>
        <p class="info">support emails-clothing@help.com, customersupport@clothing.com</p>
        <p class="info">telephone-180 67 66 453, 180 67 66 454</p>
        `;
}
createFooter();