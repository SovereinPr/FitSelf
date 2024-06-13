import '../../img/icons/Dots_118x134.svg';
import STop from "../../Components/STop/STop";
import SServises from "../../Components/SServises/SServises";
import SInfoContent from "../../Components/SInfoContent/SInfoContent";

function Home() {
  return(
    <>

    <main>

      <STop />

      <section className='SExercise'>
        <div>
          <h1>FitSelf &mdash; New Sports</h1>
          <img src="img/icons/Dots_118x134.svg" alt="dots" loading='lazy' />
        </div>
      </section>

      <SServises />

      <SInfoContent />

    </main>
    
    </>
  )
}

export default Home;