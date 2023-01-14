const productos = [
    {id:1, nombre:"BRIT CARE PUPPY SALMON & POTATO", descripcion:"Fórmula libre de granos para cachorros de todas las razas (4 semanas a 12 meses).Ideal también para perras gestantes. Brit Care Puppy All Breed está adecuadamente balanceado y es altamente digestible. Alimento Super Premium formulado con los requerimientos especiales de los cachorros desde el periodo de destete. El alimento es sensible en el tacto gastrointestinal. Todos los nutrientes dan soporte adecuado al desarrollo de los huesos, articulaciones y dientes.", precio:23900, imagen:"44410269.jpg", categoria:"Perros"},
    {id:2, nombre:"EUKANUBA PUPPY LARGE BREED", descripcion:"Eukanuba Puppy Large Breed es un alimento formulado para cachorros de raza grande (de los 25 kg a los 40 kg de peso en la edad adulta) y de 2 meses a los 15 meses de edad", precio:59990, imagen:"34307134.png", categoria:"Perros"},
    {id:3, nombre:"ROYAL CANIN MAXI LIGHT 15 KG", descripcion:"Ayuda a reducir la energía consumida por el perro en un 20%, utilizando el mismo volumen de la ración, comparado con MAXI Adult. Ayuda a mantener el peso ideal gracias a su alto contenido de proteínas (25% mín.) y un moderado nivel de grasas. En riquecido con L-carnitina, que estimula la utilización de las grasas y evita su depósito como grasa corporal. De esta manera ayuda a preservar el tono muscular.", precio:65990, imagen:"2904043444_MAXI_LIGHT-02.jpg", categoria:"Perros"},
    {id:4, nombre:"3x2 PRO PLAN KITTEN POLLO E HIGADO LATA 85 GR", descripcion:"PACK 3x2 PRO PLAN KITTEN POLLO E HIGADO LATA 85 GR", precio:3990, imagen:"1111101534_1011102115_lata-pro-plan-kitten-pollo-higado-85g.jpg", categoria:"Gatos"},
    {id:5, nombre:"PRO PLAN URINARY CAT", descripcion:"Pro Plan Cat Urinary esta especialmente formulado para obtener un PH en la orina ligeramente mas ácido para ayudar a disolver cálculos de estruvita.", precio:58990, imagen:"34310099.jpg", categoria:"Gatos"},
    {id:6, nombre:"CHURU GATO ATUN Y OSTIONES 56 GR", descripcion:"SNACK CIAO CHURU ATUN Y OSTIONES es la nueva experiencia gastronómica que fascinara a tu gato!.", precio:2590, imagen:"34712827.png", categoria:"Perros"}
];

const guardarProductosLS = (productos) => {
    localStorage.setItem("productos", JSON.stringify(productos));
}

const cargarProductosLS = () => {
    return JSON.parse(localStorage.getItem("productos")) || [];
}

guardarProductosLS(productos);