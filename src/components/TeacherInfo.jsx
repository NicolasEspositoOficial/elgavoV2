import './TeacherInfo.css';
import fotoFluidez from '../assets/imagen-de-sonido-fluidez.png';

function TeacherInfo() {
  return (
    <section className="teacher-info section-padding">
        <div className="bloqueDeTituloIntroduccion">
            <span className="subtituloDeBloque">INTRODUCCIÓN · POR QUÉ EXISTE ESTE PROYECTO</span>
            <h2 className="section-title">"ME GUSTA ENSEÑAR."</h2>
        </div>
        
      
      <div className="teacher-columnsV1">
        <div className="columnV1">
          <p className="text-muted">
            Hay algo que siempre he tenido claro: <strong> me gusta enseñar</strong>. Me gusta cuando una persona que llevaba años diciendo “yo soy malo para el inglés” de repente entiende algo, lo pronuncia bien, arma una frase y se da cuenta de que, de pronto, eso que parecía tan complicado no era tan complicado. <strong> Ese momento me parece una chimba.</strong>
          </p>
          <h4 className="text-green mt-20">Y PRECISAMENTE POR ESO, NACE<br/>THE NEW E.R.A</h4>
        </div>
        <div className="columnV1">
          <p className="text-muted">
            Si por mí fuera, yo enseñaría todo esto gratis. Porque el conocimiento, cuando uno lo comparte, crece. Quiero que esto llegue al que empieza desde cero, al que lleva años estudiando, al que necesita inglés para trabajar, viajar o estudiar y al que simplemente quiere aprender algo nuevo.
          </p>
        </div>
        <div className="columnV1">
          <p className="text-muted">
            <strong>Quiero que usted entienda cómo funciona el inglés.</strong> <br/>Una cosa es aprenderse cien frases de memoria y otra muy diferente es entender por qué funcionan. Una cosa es repetir una palabra y otra poder reconocerla cuando alguien la dice rápido.
          </p>
        </div>
      </div>

      <div className="banner-fluidezV1">
        <div className="containerBanner-image-fluidezV1">
          <img src={fotoFluidez} className="banner-image-fluidezV1" alt="Banner Fluidez" />
        </div>
        <div className="banner-content-fluidezV1">
            <h4>EL SISTEMA DETRÁS DEL IDIOMA</h4>
          <h3 className="banner-title-fluidezV1">DEL SONIDO A LA FLUIDEZ</h3>
          <p className="text-muted">
            THE NEW E.R.A. organiza el aprendizaje de forma progresiva: primero entiendes cómo suena el idioma, luego cómo se forman las palabras y las ideas, después cómo se relacionan los verbos, el tiempo, las posibilidades y las intenciones.
          </p>
          <blockquote className="quote-box">
            "La ortografía te dice cómo se escribe. La pronunciación te dice cómo suena. La gramática te dice cómo funciona. El uso te dice cuándo lo diría una persona."
          </blockquote>

            <div className="containerEtiquetasFluidezV1">
                <span className="etiquetaFluidez">Fonética</span>
                <span className="etiquetaFluidez">Gramática</span>
                <span className="etiquetaFluidez">Uso real</span>
                <span className="etiquetaFluidez">Speaking</span>
                <span className="etiquetaFluidez">Fluidez</span>
            </div>

        </div>
      </div>
    </section>
  );
}

export default TeacherInfo;