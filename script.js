function showOptions(choice) {
    const optionsDiv = document.getElementById('extra-options');
    optionsDiv.innerHTML = ''; // Limpiar opciones previas

    if (choice === 'yes') {
        optionsDiv.innerHTML = `
            <p>¡Es una gran decisión! Aquí tienes algunas opciones para comenzar:</p>
            <ul>
                <li><button onclick="window.location.href='https://fundacionsirio.cl/'">Busca apoyo profesional</button></li>
                <li><button onclick="window.location.href='https://www.ispch.cl/salud-mental'">Consulta con un profesional</button></li>
                <li><button onclick="window.location.href='https://www.na-chile.cl/'">Únete a un grupo de apoyo</button></li>
            </ul>
        `;
    } else if (choice === 'no') {
        optionsDiv.innerHTML = `
            <p>Es normal sentirse indeciso. ¿Qué te detiene?</p>
            <ul>
                <li><button onclick="window.location.href='https://www.chileayuda.cl/'">Miedo al cambio</button></li>
                <li><button onclick="window.location.href='https://www.cruzroja.cl/'">Presión social</button></li>
                <li><button onclick="window.location.href='https://www.senadis.gob.cl/'">Adicción</button></li>
            </ul>
        `;
    } else if (choice === 'why') {
        optionsDiv.innerHTML = `
            <p>Reflexiona sobre tus razones para dejar las drogas:</p>
            <ul>
                <li><button onclick="window.location.href='https://www.ispch.cl/salud-mental'">Salud</button></li>
                <li><button onclick="window.location.href='https://fundacionsirio.cl/'">Ejemplo para otros</button></li>
                <li><button onclick="window.location.href='https://www.chileayuda.cl/'">Control personal</button></li>
                <li><button onclick="window.location.href='https://www.cruzroja.cl/'">Otras razones</button></li>
            </ul>
        `;
    } else if (choice === 'how') {
        optionsDiv.innerHTML = `
            <p>Existen varias formas de empezar a dejar las drogas. Aquí tienes algunas sugerencias:</p>
            <ul>
                <li><button onclick="window.location.href='https://fundacionsirio.cl/'">Consulta con un profesional</button></li>
                <li><button onclick="window.location.href='https://www.cruzroja.cl/'">Encuentra actividades alternativas</button></li>
                <li><button onclick="window.location.href='https://www.ispch.cl/salud-mental'">Establece metas pequeñas</button></li>
            </ul>
        `;
    } else if (choice === 'resources') {
        optionsDiv.innerHTML = `
            <p>Aquí tienes algunos recursos que pueden ayudarte:</p>
            <ul>
                <li><button onclick="window.location.href='https://www.na-chile.cl/'">Narcóticos Anónimos</button></li>
                <li><button onclick="window.location.href='https://fundacionsirio.cl/'">Centros de Rehabilitación</button></li>
                <li><button onclick="window.location.href='https://www.ispch.cl/salud-mental'">Terapia de Adicciones</button></li>
                <li><button onclick="window.location.href='https://www.chileayuda.cl/'">Recursos en línea</button></li>
            </ul>
        `;
    } else if (choice === 'support') {
        optionsDiv.innerHTML = `
            <p>Buscar apoyo profesional puede ser clave para dejar las drogas:</p>
            <ul>
                <li><button onclick="window.location.href='https://fundacionsirio.cl/'">Terapeutas</button></li>
                <li><button onclick="window.location.href='https://www.ispch.cl/salud-mental'">Médicos</button></li>
            </ul>
        `;
    } else if (choice === 'plan') {
        optionsDiv.innerHTML = `
            <p>Crear un plan personal te ayudará a mantenerte enfocado:</p>
            <ul>
                <li><button onclick="window.location.href='https://www.ispch.cl/salud-mental'">Define tus razones</button></li>
                <li><button onclick="window.location.href='https://fundacionsirio.cl/'">Establece metas</button></li>
            </ul>
        `;
    } else if (choice === 'group') {
        optionsDiv.innerHTML = `
            <p>Unirse a un grupo de apoyo puede ofrecerte un espacio seguro para compartir:</p>
            <ul>
                <li><button onclick="window.location.href='https://www.na-chile.cl/'">Grupos en la comunidad</button></li>
                <li><button onclick="window.location.href='https://www.na-chile.cl/'">Foros en línea</button></li>
            </ul>
        `;
    } else if (choice === 'fear') {
        optionsDiv.innerHTML = `
            <p>El miedo al cambio es normal. Aquí hay algunas maneras de enfrentarlo:</p>
            <ul>
                <li><button onclick="window.location.href='https://fundacionsirio.cl/contacto/'">Habla sobre tus miedos</button></li>
                <li><button onclick="window.location.href='https://www.ispch.cl/salud-mental'">Enfócate en los beneficios</button></li>
            </ul>
        `;
    } else if (choice === 'pressure') {
        optionsDiv.innerHTML = `
            <p>La presión social puede ser un obstáculo, pero hay maneras de superarla:</p>
            <ul>
                <li><button onclick="window.location.href='https://www.chileayuda.cl/'">Aprende a decir no</button></li>
                <li><button onclick="window.location.href='https://fundacionsirio.cl/'">Encuentra apoyo positivo</button></li>
            </ul>
        `;
    } else if (choice === 'addiction') {
        optionsDiv.innerHTML = `
            <p>La adicción es una enfermedad que requiere un enfoque serio:</p>
            <ul>
                <li><button onclick="window.location.href='https://fundacionsirio.cl/'">Opciones de tratamiento</button></li>
                <li><button onclick="window.location.href='https://www.na-chile.cl/'">Pide ayuda</button></li>
            </ul>
        `;
    }
}
