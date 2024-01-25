
const Section = ({section}) => {
  
  return (
   
     

<section className="container mx-auto my-8 p-4 bg-sky-200">
<h2 className="text-2xl font-bold mb-10">
{section.title}
</h2>

{section.body}

</section>

  );
};

export default Section;




