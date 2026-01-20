

const dataOrthodoncy =
    [
        {
            image: "/images/services/implant-simple.webp",
            name: "Implante Simple",
            text: "Implica la colocación de un tornillo de titanio en la mandíbula para reemplazar una raíz dental perdida. Luego se coloca una corona dental artificial en el tornillo, restaurando la apariencia y función de un diente natural."
        },
        {
            image: "/images/services/psi.webp",
            name: "Puente Sobre Implante",
            text: "Implica la colocación de un puente personalizado en implantes dentales en la mandíbula para reemplazar dientes perdidos. Esto restaura la función masticatoria y la apariencia de los dientes."
        },
        {
            image: "/images/services/sobredentadura.webp",
            name: "Sobre Dentadura",
            text: "Implica fijar una dentadura completa o parcial en la mandíbula con implantes dentales para mayor estabilidad y comodidad."
        },
        {
            image: "/images/services/hibrida.webp",
            name: "Hibrida",
            text: "Implica la colocación de implantes dentales en la mandíbula para servir como anclaje. Luego, se fijan dientes artificiales a estos implantes, creando una prótesis fija y permanente."
        },

    ]
const dataGeneral =
    [
        {
            image: "/images/services/fractura.webp",
            name: "Emergencia Dental",
            text: "Una emergencia dental implica una situación que requiere atención inmediata debido a dolor intenso, hinchazón, sangrado, dientes rotos o perdidos, u otras condiciones graves en la boca."
        }, {
            image: "/images/services/cariesb.webp",
            name: "Limpieza",
            text: "Implica la eliminación de placa y sarro de los dientes, seguida de un pulido para prevenir problemas dentales y mantener la salud bucal.Es un procedimiento de rutina que ayuda a mantener una sonrisa fresca y saludable. "
        },
    ]

const dataEsthetic =
    [
        {
            image: "/images/services/pulido-radicular.webp",
            name: "Pulido Radicular",
            text: "Implica la limpieza y suavizado de las raíces de los dientes y debajo de las encías. Durante el procedimiento, se eliminan la placa, el sarro y las bacterias "
        }, {
            image: "/images/services/recesion-gingival.webp",
            name: "Recesión Gingival",
            text: "Implica tomar tejido de otra área de la boca o utilizar tejido donante para cubrir la zona de recesión y fortalecer las encías. o levantar un colgajo de tejido para cubrir la raíz expuesta y luego suturar."
        }
    ]
const dataBucal =
    [
        {
            image: "/images/services/muelas-juicio.webp",
            name: "Muelas Del Juicio", text: "Implica la eliminación de estos dientes ubicados en la parte posterior de la boca. El procedimiento se realiza bajo anestesia local o general y, después de la extracción, se proporcionan instrucciones para el cuidado posterior"
        }
    ]
const dataEndodontic =
    [
        {
            image: "/images/services/endodoncia.webp", name:
                "Tratamiento Conducto", text: "Implica la eliminación de la pulpa dental infectada o dañada del interior del diente. Luego se limpia, desinfecta y sella el conducto, lo que evita la propagación de infecciones y alivia el dolor."
        }
    ]
const dataRehabilitation =
    [
        {
            image: "/images/services/coronas.webp", name: "Coronas",
            text: "Una corona dental es una restauración utilizada para cubrir y proteger un diente dañado. Implica la remoción de parte del diente y colocación de una cubierta hecha de cerámica o metal."
        },
        {
            image: "/images/services/carillas.webp", name: "Carillas", text:
                "Son láminas delgadas de porcelana o resina que se colocan en la parte frontal de los dientes. Implican la evaluación, toma de impresiones, selección de color y forma."
        }
    ]
const dataFacial =
    [
        {
            image: "/images/services/rino.webp", name: "Rinomodelacion",
            text: "Implica la inyección de ácido hialurónico en la nariz para mejorar su forma y apariencia. Es un procedimiento no quirúrgico que se realiza con anestesia local y ofrece resultados inmediatos."
        },
        {
            image: "/images/services/botox.webp", name: "Botox",
            text: "implica inyectar toxina botulínica en los músculos para reducir temporalmente arrugas y líneas de expresión en el rostro. Los resultados son temporales y suavizan la apariencia de la piel."
        }
    ]

const dataPatients =
    [
        {
            name: "margarita", procedure: "Recesión Gingival",
            images:
                [
                    "/images/casos/margarita-01.webp",
                    "/images/casos/margarita-02.webp",
                    "/images/casos/margarita-03.webp",
                    "/images/casos/margarita-04.webp",
                    "/images/casos/margarita-05.webp",
                    "/images/casos/margarita-06.webp"]
        },
        {
            name: "pedro", procedure: "Carillas",
            images: [
                "/images/casos/pedro-01.webp",
                "/images/casos/pedro-02.webp",
                "/images/casos/pedro-03.webp",]
        }
    ]
const urls = [['principal', 'Principal'], ['services', 'Servicios'], ['aboutme', 'Sobre mi'], ['contact', 'Contacto'], ['galery', 'Galeria']]
export { dataGeneral, dataOrthodoncy, dataEsthetic, urls, dataRehabilitation, dataFacial, dataEndodontic, dataBucal, dataPatients }