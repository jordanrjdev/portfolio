import Head from "next/head";
import { Container, Image, Row, Col } from "react-bootstrap";

export default function AboutMe() {
  return (
    <div>
      <Head>
        <title>About Me</title>
      </Head>  
      <main>
        <Container >
          <Row className="my-4" ><Col><h1 className="fw-bold">Acerca de Jordan Jaramillo Ureña</h1></Col></Row>
          <Row className="my-4 align-items-start justify-content-center"> 
            <Col xs="12" lg="3">
            <Image className="mx-auto d-block my-2" src="https://media-exp1.licdn.com/dms/image/C5603AQFVU4InjpmjZw/profile-displayphoto-shrink_200_200/0/1594923008451?e=1638403200&v=beta&t=ZdcYVwaQu_I-K1wQSDqZ6werKJkhpxhuaEAiMxCDjgk" alt="Foto de perfil linkedin Jordan Jaramillo" roundedCircle fluid/>
            <p className="text-center fw-bold fs-4">@jordandev</p>
            <p className="text-center text-muted">
              FullStack Developer Node.js | Laravel | Ruby on Rails | React | Vue <br></br> Freelancer and Student ... 
            </p>
            </Col> 
            <Col sm="12" md="12" lg="9">
            <h2 className="fw-bold">¿Quién soy?</h2>
            <p className="text-justify my-3 fs-5">
              Ecuatoriano, originario de Guayaquil. Actualmente trabajo como FullStack Developer en Intelnexo S.A. Empresa dedicada a la innovación tecnológica a través del desarrollo de Software, estudiante de la carrera Desarrollo de Software y apasionado por los videojuegos. <br/><br />

              Participo como líder de proyectos escalables que reciben miles de peticiones por día y ayudan a mejorar la calidad de navegabilidad de los usuarios haciendo uso de tecnologías líderes en el mercado.
            </p>
            <h2 className="fw-bold mt-5">Especialidades</h2>
            <p className="text-justify my-3 fs-5">
              JavaScript, React, Vue, Node, Laravel, Ruby on Rails, Github.
            </p >
            <h2 className="fw-bold mt-5">Trayectoria</h2>
            <p className="text-justify my-3 fs-5">
              A lo largo de 4 años me he preparado a través de plataformas 100% online <strong>(Youtube, Udemy, CodigoFacilito, etc)</strong> tambien estoy estudiando una carrera de Tecnológo en desarrollo de software en el 3er semestre. Me gusta aprender día a día y mantenerme informado por lo cual leo posts en plataformas como dev.to o foros de internet. Tambien sigo a creadores de contenido que comparten tips para mejorar como desarrollador. 
            </p>
            </Col>

          </Row>
        </Container>
      </main>
    </div>
  ) 
}