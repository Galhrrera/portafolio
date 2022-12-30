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
            modal_text.innerHTML = `El motor de bases de datos <em>SQL</em> con el que aprendí todos los fundamentos de las bases de datos, comenzando desde la normalización de los datos hasta la construcción de sentencias robustas, lógica almacenada, creación de vistas y demás.<br>
            Al día de hoy es el motor de bases de datos que elegiría si tuviera que elegir un motor SQL.<br>
            Como dato adicional, en temas de bases de datos SQL, he tenido experiencia con:
            <li>MySQL</li>
            <li>CrateDB</li>`
            modal.classList.add("modal_show");
            break;
        case "linux_img":
            alert("mongo_img");
            break;
        case "html_img":
            alert("html_img");
            break;
        case "css_img":
            alert("css_img");
            break;
        case "sass_img":
            alert("sass_img");
            break;
        case "wordpress_img":
            alert("wordpress_img");
            break;
        case "aws_img":
            alert("aws_img");
            break;
        case "docker_img":
            alert("docker_img");
            break;
        case "fiware_img": 
            alert("fiware_img");
            break;
        case "grafana_img":
            alert("grafana_img");
            break;
        case "git_img":
            alert("git_img");
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