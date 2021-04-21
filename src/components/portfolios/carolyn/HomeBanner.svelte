<script>
    export let resume;



</script>

<section class="home_banner_area" id="home-section">
    <div class="container box_1620">
        <div class="banner_inner d-flex align-items-center">
         <div class="banner_content">
             <div class="media">
                 <div class="d-flex">
                     <img src="img/personal.png" alt="">
                 </div>
                 <div class="media-body">
                     <div class="personal_text">
                         <h6>Hello Everybody, i am</h6>
                         <h3>{resume.name}</h3>
                         <h4>{resume.title}</h4>
                         <p>{resume.description}</p>
                         <ul class="list basic_info">
                             <li><a target="_blank" href="tel:{resume.phone}"><i class="lnr lnr-phone-handset"></i> {resume.phone}</a></li>
                             <li><a target="_blank" href="mailto:{resume.email}"><i class="lnr lnr-envelope"></i> {resume.email}</a></li>
                             <li><a target="_blank" href="{resume.location.latlon}"><i class="lnr lnr-home"></i> {resume.location.description}</a></li>
                             <li><a target="_blank" href="{resume.linkedIn}"><i class="linked-in-icon fa fa-linkedin-square"></i> {resume.linkedIn}</a></li>
                         </ul>
                     </div>
                 </div>
             </div>
         </div>
     </div>
 </div>
</section>