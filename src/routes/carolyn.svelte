<script>
    import Carolyn from "../components/portfolios/Carolyn.svelte";

    const resume = {
        name: "Carolyn LeVally",
        title: "Professional Writer, Editor, & E-Learning Developer",
        description: "I have the experience to help you develop your manuscripts, e-learning course, and professional documents. Together, we can create experiences that clearly communicate and instruct while maintaining your voice and personality.",
        email: "carolyn.levally@gmail.com",
        phone: "419-889-5852",
        location: {
            latlon: 'https://goo.gl/maps/EnD1dRfoAdi4GG2k6',
            description: "Columbus, Ohio"
        },
        linkedIn: 'http://linkedin.com/in/carolyn-levally/'
    };
</script>


<Carolyn {resume} />


