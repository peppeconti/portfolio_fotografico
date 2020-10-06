export const html = () => /*html*/ `
<div class="about_foto_title square">
<figure class="round">
    <img src="images/image_about.jpg" alt="">
</figure>
<div>
    <h2>Curriculum</h2>
    <figure>
        <img class="small_decoration" src="images/decoration_small.svg" alt="">
    </figure>
</div>
</div>
<div class="about_text">
<p>Fusce vehicula justo orci, a ultricies eros pretium a. Vivamus orci orci, consectetur ut nulla quis, tincidunt pulvinar arcu. Aenean eu nibh eu ligula blandit ullamcorper. Pellentesque ut metus id nisi volutpat porttitor ut a dui. Mauris vitae vehicula quam. Pellentesque diam augue, consequat eget auctor nec, fringilla malesuada est. Nam bibendum, libero quis egestas suscipit, turpis ipsum vulputate lacus, et rutrum dui nisl sit amet erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
<p>Integer sem felis, lacinia non diam vitae, pretium imperdiet eros. Sed in libero et dui gravida convallis. Proin ut aliquet ligula. Aenean quis fringilla dui, et pellentesque dui. Aenean tristique augue nulla, sed consectetur lorem fringilla nec. Morbi in nulla eget nisl interdum lacinia quis et nulla. In facilisis justo at purus gravida blandit. Ut non molestie odio, ut suscipit ligula. Nam nec nisi tellus. Aenean eget fermentum velit. Aenean euismod at enim vel congue. Sed non augue a ante pharetra gravida.</p>
<p>Fusce vehicula justo orci, a ultricies eros pretium a. Vivamus orci orci, consectetur ut nulla quis, tincidunt pulvinar arcu. Aenean eu nibh eu ligula blandit ullamcorper. Pellentesque ut metus id nisi volutpat porttitor ut a dui. Mauris vitae vehicula quam. Pellentesque diam augue, consequat eget auctor nec, fringilla malesuada est. Nam bibendum, libero quis egestas suscipit, turpis ipsum vulputate lacus, et rutrum dui nisl sit amet erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</div>
<div class="arrows">
<p></p>
<p><a href="#/curriculum"><span class="fas fa-angle-double-right"></span>Curriculum</a></p>
</div>
`;

export const afterRender = () => {
  let about_preview = document.querySelector('.square figure');
  let actual_width = window.getComputedStyle(about_preview).width;
  // console.log(actual_width);
  about_preview.style.height = `${actual_width}`;


// sets heigth equal to width on resize

window.addEventListener('resize', () => {
  let about_preview = document.querySelector('.square figure');
  let actual_width = window.getComputedStyle(about_preview).width;
  // console.log(actual_width);
  about_preview.style.height = `${actual_width}`;
});
}