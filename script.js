function showOptions(choice) {
    const optionsDiv = document.getElementById('extra-options');
    optionsDiv.innerHTML = ''; // Limpiar opciones previas

    if (choice === 'yes') {
        optionsDiv.innerHTML = `
            <p>¡Es una gran decisión! Aquí tienes algunas opciones para comenzar:</p>
            <ul>
                <li><button onclick="showOptions('support')">Busca apoyo profesional</button></li>
                <li><button onclick="showOptions('plan')">Crea un plan personal</button></li>
                <li><button onclick="showOptions('group')">Únete a un grupo de apoyo</button></li>
            </ul>
        `;
    } else if (choice === 'no') {
        optionsDiv.innerHTML = `
            <p>Es normal sentirse indeciso. ¿Qué te detiene?</p>
            <ul>
                <li><button onclick="showOptions('fear')">Miedo al cambio</button></li>
                <li><button onclick="showOptions('pressure')">Presión social</button></li>
                <li><button onclick="showOptions('addiction')">Adicción</button></li>
            </ul>
        `;
    } else if (choice === 'why') {
        optionsDiv.innerHTML = `
            <p>Reflexiona sobre tus razones para dejar las drogas:</p>
            <ul>
                <li><button onclick="alert('Quiero mejorar mi salud.')">Salud</button></li>
                <li><button onclick="alert('Quiero ser un mejor ejemplo para los demás.')">Ejemplo para otros</button></li>
                <li><button onclick="alert('Quiero recuperar el control de mi vida.')">Control personal</button></li>
                <li><button onclick="alert('Tengo otras razones.')">Otras razones</button></li>
            </ul>
        `;
    } else if (choice === 'how') {
        optionsDiv.innerHTML = `
            <p>Existen varias formas de empezar a dejar las drogas. Aquí tienes algunas sugerencias:</p>
            <ul>
                <li><button onclick="alert('Habla con un profesional de la salud mental para evaluar tus opciones.')">Consulta con un profesional</button></li>
                <li><button onclick="alert('Involúcrate en actividades saludables como ejercicio, arte, o voluntariado.')">Encuentra actividades alternativas</button></li>
                <li><button onclick="alert('Establece metas realistas y celebra tus pequeños logros.')">Establece metas pequeñas</button></li>
            </ul>
        `;
    } else if (choice === 'resources') {
        optionsDiv.innerHTML = `
            <p>Aquí tienes algunos recursos que pueden ayudarte:</p>
            <ul>
                <li><button onclick="alert('Visita la página de Narcóticos Anónimos para encontrar un grupo cerca de ti.')">Narcóticos Anónimos</button></li>
                <li><button onclick="alert('Consulta con un centro de rehabilitación para explorar opciones de tratamiento.')">Centros de Rehabilitación</button></li>
                <li><button onclick="alert('Habla con un terapeuta especializado en adicciones.')">Terapia de Adicciones</button></li>
                <li><button onclick="alert('Consulta recursos en línea sobre cómo dejar las drogas.')">Recursos en línea</button></li>
            </ul>
        `;
    } else if (choice === 'support') {
        optionsDiv.innerHTML = `
            <p>Buscar apoyo profesional puede ser clave para dejar las drogas:</p>
            <ul>
                <li><button onclick="alert('Encuentra un terapeuta especializado en adicciones.')">Terapeutas</button></li>
                <li><button onclick="alert('Consulta un médico para recomendaciones y seguimiento.')">Médicos</button></li>
            </ul>
        `;
    } else if (choice === 'plan') {
        optionsDiv.innerHTML = `
            <p>Crear un plan personal te ayudará a mantenerte enfocado:</p>
            <ul>
                <li><button onclick="alert('Define tus razones para dejar las drogas.')">Define tus razones</button></li>
                <li><button onclick="alert('Establece metas a corto y largo plazo.')">Establece metas</button></li>
            </ul>
        `;
    } else if (choice === 'group') {
        optionsDiv.innerHTML = `
            <p>Unirse a un grupo de apoyo puede ofrecerte un espacio seguro para compartir:</p>
            <ul>
                <li><button onclick="alert('Busca grupos en tu comunidad o en línea.')">Grupos en la comunidad</button></li>
                <li><button onclick="alert('Considera unirte a foros y grupos en línea.')">Foros en línea</button></li>
            </ul>
        `;
    } else if (choice === 'fear') {
        optionsDiv.innerHTML = `
            <p>El miedo al cambio es normal. Aquí hay algunas maneras de enfrentarlo:</p>
            <ul>
                <li><button onclick="alert('Habla sobre tus miedos con alguien de confianza.')">Habla sobre tus miedos</button></li>
                <li><button onclick="alert('Enfócate en los beneficios del cambio.')">Enfócate en los beneficios</button></li>
            </ul>
        `;
    } else if (choice === 'pressure') {
        optionsDiv.innerHTML = `
            <p>La presión social puede ser un obstáculo, pero hay maneras de superarla:</p>
            <ul>
                <li><button onclick="alert('Aprende a decir no y a poner límites saludables.')">Aprende a decir no</button></li>
                <li><button onclick="alert('Rodéate de personas que apoyen tu decisión.')">Encuentra apoyo positivo</button></li>
            </ul>
        `;
    } else if (choice === 'addiction') {
        optionsDiv.innerHTML = `
            <p>La adicción es una enfermedad que requiere un enfoque serio:</p>
            <ul>
                <li><button onclick="alert('Considera opciones de tratamiento como terapia o medicación.')">Opciones de tratamiento</button></li>
                <li><button onclick="alert('No tengas miedo de pedir ayuda.')">Pide ayuda</button></li>
            </ul>
        `;
    }
}
