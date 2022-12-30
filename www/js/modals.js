const modal = document.getElementById("modal");
modal_text = document.querySelector(".modal_text");
modal_title = document.querySelector(".modal_title");

function showModal(element) {
    id = element.id;
    
    switch(id){
        case "c_sharp_img":
            modal_img = document.getElementById("modal_img").src = "./www/img/c_sharp400.png";
            modal_title.innerHTML = `C<small>#</small>`;
            modal_text.innerHTML = `C-Sharp fue el lenguaje de programación con el que realicé mi <em>primer Hola mundo</em>.
            Con este lenguaje no solamente aprendí los fundamentos de la programación, sino que también adquirí los conceptos y la práctica en la <em>programación orientada a objetos (POO)</em>.<br>
            Durante mis años de educación he realizado algunos proyectos en este lenguaje, desde aplicaciones por consola hasta aplicaciones con interfaz gráfica utilizando Windows forms.<br>
            Mi acercamiento más reciente con C-Sharp me llevó a adentrarme en el mundo de las APIs, en donde aprendí a implementar peticiones HTTP, modificando una aplicación para el centro de investigación “Smart Energy Center” (SEC) de la Universidad pontificia bolivariana (UPB).
            `
            modal.classList.add("modal_show");

            break;
        case "java_img":
            modal_img = document.getElementById("modal_img").src = "./www/img/java400.png";
            modal_title.innerHTML = `JAVA`;
            modal_text.innerHTML = `Java fue mi segundo lenguaje de programación. <br>
            Java fue el lenguaje con el que aprendí conceptos sobre la <em>complejidad computacional</em>.<br>
            Adicionalmente, Java el el lenguaje principal con el que he participado en distintas <em>maratones de programación</em> nacionales, fortaleciendo en gran medida no solo el uso del lenguaje sino también el razonamiento lógico y la resolución de problemas.<br>
            Laboralmente he utilizado Java como QA, para realizar pruebas automatizadas sobre aplicaciones web con metodologías BDD haciendo uso de frameworks como <em>serenity, selenium, junit y cucumber</em>.
            `
            modal.classList.add("modal_show");
            break;
        case "python_img":
            modal_img = document.getElementById("modal_img").src = "./www/img/python400.png";
            modal_title.innerHTML = `PYTHON`;
            modal_text.innerHTML = `
            Python se convirtió en el segundo senguaje de programación que he utilizado en <em>maratones de programación</em>, así con el lenguaje con el que aprendí el manejo de datos y fundamentos de IA y modelos matemáticos del mundo real.<br>
            He realizado proyectos de visión artificial, predicciones, clasificaciones, redes neuronales y, de los que más he disfrutado: el backend de una aplicación web que desarrollé para entrenarme en temas de bases de datos embebidas.<br>
            También he realizado algunas aplicaciones web utiizando <em>flask</em>, por lo que tengo los conceptos básicos de la herramienta.<br>
            Adicionalmente cuento con experiencia realizando aplicaciones de escritorio con GUI amigables al usuario gracias a la herramienta <em>EEL</em>.`
            modal.classList.add("modal_show");
            break;
        case "javascript_img":
            modal_img = document.getElementById("modal_img").src = "./www/img/js400.png";
            modal_title.innerHTML = `JavaScript`;
            modal_text.innerHTML = `El último lenguaje de programación al que le he dedicado tiempo.<br>
            Este mismo portafolio tiene algo de lo que he aprendido sobre JavaScript, además de que lo he utilizado con python para construir aplicaciones conectadas a un backend bien elaborado.`
            modal.classList.add("modal_show");
            break;
        case "postgresql_img":
            modal_img = document.getElementById("modal_img").src = "./www/img/postgresql400.png";
            modal_title.innerHTML = `PostgreSQL`;
            modal_text.innerHTML = `El motor de bases de datos <em>SQL</em> con el que aprendí todos los fundamentos de las bases de datos, comenzando desde la normalización de los datos hasta la construcción de sentencias robustas, lógica almacenada, creación de vistas y demás.<br>
            Al día de hoy es el motor de bases de datos que elegiría si tuviera que elegir un motor SQL.<br>
            Como dato adicional, en temas de bases de datos SQL, he tenido experiencia con:
            <li>MySQL</li>
            <li>CrateDB</li>`
            modal.classList.add("modal_show");
            break;
        case "mongo_img":
            modal_img = document.getElementById("modal_img").src = "./www/img/mongo400.png";
            modal_title.innerHTML = `Mongo DB`;
            modal_text.innerHTML = `Mi experiencia con <em>bases de datos No SQL</em> ha sido con este motor: <em>MongoDB</em>.<br>
            Existen 2 proyectos en los que he interactuado con mongo:
            <li>Fiware UPB</li>
            <li>Proyecto personal con python para practicar la implementación de aplicaciones con bases de datos embebidas.</li><br>
            Por supuesto, también he interactuado con <em>Compass</em>, como GUI para <em>MongoDB</em>.`
            modal.classList.add("modal_show");
            break;
        case "linux_img":
            modal_img = document.getElementById("modal_img").src = "./www/img/linux400.png";
            modal_title.innerHTML = `LINUX`;
            modal_text.innerHTML = `
            No por nada cuento con una distribución de <em>linux</em> instalada en mi ordenador personal (Parrot Security).<br>
            Conozco el potencial de <em>linux</em> y tengo experiencia con sistemas operativos basados en <em>linux</em> y su terminal.
            `
            modal.classList.add("modal_show");
            break;
        case "html_img":
            modal_img = document.getElementById("modal_img").src = "./www/img/html400.png";
            modal_title.innerHTML = `HTML`;
            modal_text.innerHTML = `Mis últimos proyectos se han desarrollado utilizando <em>HTML</em>, <em>CSS</em> y <em>JS</em>.<br>
            El desarrollo web ha sido una de las opciones que más han llamado mi atención en los últimos meses, por lo que he dedicado tiempo a aprender y a perfeccionar poco a poco mis conocimientos y habilidades con <em>HTML</em>.<br>
            Algunos de los proyectos que más eh disfrutado construir son aplicaciones con bases de datos embebidas y este sitio.`
            modal.classList.add("modal_show");
            break;
        case "css_img":
            modal_img = document.getElementById("modal_img").src = "./www/img/css400.png";
            modal_title.innerHTML = `CSS`;
            modal_text.innerHTML = `Jamás podría trabajar con <em>HTML</em> sin hacer uso de <em>CSS</em>.<br>
            Si bien el diseño, uso de colores, disposiciones y demás no son mi fuerte, cuento con las habilidades necesarias hacer uso de <em>CSS</em> de forma decente.<br>
            Con <em>CSS</em> he tenido experiencia a la hora de diseñar aplicaciones <em>responsive</em> gracias al usod e <em>media querys</em>, he realizado <em>carruseles de imágenes</em> e incluso tengo experiencia y conocimientos sobre las <em>propiedades personalizadas</em> de <em>CSS</em> (Variables).`
            modal.classList.add("modal_show");
            break;
        case "sass_img":
            modal_img = document.getElementById("modal_img").src = "./www/img/sass400.png";
            modal_title.innerHTML = `SASS`;
            modal_text.innerHTML = `<em>SASS</em> y <em>SCSS</em> como preprocesadores de <em>CSS</em> ha sido mi aprendizaje más reciente.<br>
            Cuando buscaba rutas de aprendizaje para ser desarrollador, y encontré los preprocesadores de <em>CSS</em>, entendí que eran tecnologías que debía aprender.<br>
            El primer proyecto que implementé utilizando <em>SASS</em> es este portafolio, en el cual practiqué el uso de:
            <li><em>Variables</em></li>
            <li><em>Nesting</em></li>
            Adicionalmente, tengo conocimientos sobre <em>Partials</em>, <em>Modules</em>, <em>Mixins</em>, <em>Extend/Inheritance</em> y <em>Operators</em>.`
            modal.classList.add("modal_show");
            break;
        case "wordpress_img":
            modal_img = document.getElementById("modal_img").src = "./www/img/wordpress400.png";
            modal_title.innerHTML = `WORDPRESS`;
            modal_text.innerHTML = `El uso de los <em>CMS</em>, o gestores de contenido, ha estado dentro de mis radares.<br>
            El uso de plantillas, plugins y el acompañamiento de buenos grupos de trabajo me han permitido desarrollar aplicaciones tipo <em>blog</em> e <em>eCommerce</em>.<br>
            Mi grano de arena más reciente con el uso de <em>Wordpress</em> como <em>CMS</em> ha sido para la página web del <a href="https://holamundo.co/" title="Fiware iHub UPB" target="_blank" rel="noopener noreferrer">Fiware iHub UPB</a>". En este sitio se me otorgó la tarea de ingresar un par de entradas al blog del sitio (El sitio del iHub UPB sigue en construcción a la fecha de desarrollo de este portafolio).
            Algunas de mis implementaciones han incluido <em>Botón de WPP</em>, <em>Pasarelas de pago</em>, <em>Páginas de contacto</em> y otros.`
            modal.classList.add("modal_show");
            break;
        case "aws_img":
            modal_img = document.getElementById("modal_img").src = "./www/img/aws400.png";
            modal_title.innerHTML = `AWS`;
            modal_text.innerHTML = `Los servicios en la nube son temas que atraparon mi atención desde la primera vez que ingresé a una <em>EC2</em> de <em>AWS</em>.<br>
            Mi experiencia con la nube de <em>AWS</em> ha sido adquirida con mucho cariño, debido al gusto que adquirí al interactuar con la nube.<br>
            Al día de hoy sigo utilizando la nube de <em>AWS</em> para probar algunos <em>servicios</em>, <em>contenedores</em> y otros.<br>
            Mi experiencia con la nube consta de:
            <li>Administración de <em>EC2, VPCs, grupos y reglas de seguridad</em>.</li>
            <li><em>SSH</em></li>
            <li>Configuración de <em>IP elásticas</em></li>
            Entre otros.
            `
            modal.classList.add("modal_show");
            break;
        case "docker_img":
            modal_img = document.getElementById("modal_img").src = "./www/img/docker400.png";
            modal_title.innerHTML = `AWS`;
            modal_text.innerHTML = `Mi experiencia con docker me ha llevado incluso a realizar distintas capacitaciones para grupos con los que he trabajado sobre el uso de los <em>contenedores</em>.<br>
            Con los <em>contenedores de docker</em> he desplegado servicios de <em>bases de datos SQL y NoSQL</em>, <em>aplicaciones web</em> y SO<em> linux</em>, entre otros.
            Mi experiencia abarca el uso de:
            <li><em>Docker</em></li>
            <li><em>Docker Compose</em></li>
            Mi experiencia laboral más reciente para el Fiware iHub de la UPB ha requerido el uso de contenedores para el despliegue de la arquitectura <em>Fiware</em>, plataforma para soluciones inteligentes.
            `
            modal.classList.add("modal_show");
            break;
        case "fiware_img": 
        modal_img = document.getElementById("modal_img").src = "./www/img/fiware400.png";
        modal_title.innerHTML = `FIWARE`;
        modal_text.innerHTML = `
        Mi trabajo más reciente se centró en la implementación de la plataforma <em>Fiware</em> para la instauración del Fiware iHub UPB en la ciudad de Medellín (4to iHub de Latino América).<br>
        Sé como implementar Fiware con enfoque al análisis de datos en tiempo real de distintos dispositivos inteligentes, sensores y dispositivos IoT, los cuales están distribuidos no solo en el ecocampus UPB sino al rededor de país.<br>
        la solución <em>Fiware</em> implementada requiere el uso de <em>contenedores</em> y <em>peticiones HTTP</em>, <em>Mongo DB</em>, <em>CrateDB</em>, <em>Grafana</em> y otros.<br>
        En el ecocampus de la UPB se dedicó un servidor virtualizado para desplegar los contenedores con la arquitectura completa de la solución.<br>
        El proyecto Fiware iHub UPB va de la mano con la alcaldía de Medellín, ya que los planes son implusar el desarrollo de Medellín como <em>ciudad inteligente</em>.
        `
        modal.classList.add("modal_show");
            break;
        case "grafana_img":
            modal_img = document.getElementById("modal_img").src = "./www/img/grafana400.png";
            modal_title.innerHTML = `GRAFANA`;
            modal_text.innerHTML = `
            Grafa es un software libre que permite, entre otros, el monitoreo de datos en tiempo real.<br>
            Grafana es una herramienta poderosa para crear distintos tipos de gráficos de datos a partir de un gran número de fuentes de datos, incluyendo series de tiempo.<br>
            Mi experiencia con grafana, además de su despliegue a través de contenedores, ha sido configurar diversas fuentes de datos, crear un gran número de tableros de control en tiempo real y acompañar el proceso de monitorización de datos provenientes de distintos dispositivos inteligentes, sensores, dispositivos IoT,e staciones meteorológicas, entre otros según las necesiades.
            `
            modal.classList.add("modal_show");
            break;
        case "git_img":
            modal_img = document.getElementById("modal_img").src = "./www/img/git400.png";
            modal_title.innerHTML = `GIT - GITHUB`;
            modal_text.innerHTML = `
            El uso de <em>repositorios</em> por supuesto viene dentro del abanico de habilidades con las que cuento.
            Muchos de los proyectos en los que he trabajado han estado controlados a través de <em>GitHub</em>, lo cual me ha llevado a aprender a utilizar la herramienta para la administración de repositorios, uso de ramas e <em>issues</em>.<br>
            Algunos de mis proyectos personales, y otros en los que he trabajado de otros desarrolladores, se encuentran almacenados en mi <a href="https://github.com/Galhrrera" title="GitHub personal" target="_blank" rel="noopener noreferrer">perfil de GitHub personal</a>.
            `
            modal.classList.add("modal_show");
            break;
        
    }
}

function closeModal(){
    modal.classList.remove("modal_show");
    setTimeout(cleanTexts, 1000);

}

function cleanTexts() {
    modal_title.innerHTML = "";
    modal_text.innerHTML = "";
}