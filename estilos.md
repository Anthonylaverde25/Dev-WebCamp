    container establece un ancho máximo predeterminado para pantallas más grandes.
    mx-auto centra el contenedor horizontalmente en la pantalla.
    sm:w-full hace que el contenedor ocupe el ancho completo de la pantalla en pantallas de 320px a 639px (rango móvil).
    md:w-11/12 establece el ancho del contenedor al 11/12 del ancho de su contenedor padre en pantallas de 640px a 767px (rango de pantalla mediana).
    lg:w-10/12 establece el ancho del contenedor al 10/12 del ancho de su contenedor padre en pantallas de 768px a 1023px (rango de pantalla grande).
    xl:w-9/12 establece el ancho del contenedor al 9/12 del ancho de su contenedor padre en pantallas de 1024px a 1279px (rango de pantalla extra grande).
    2xl:w-8/12 establece el ancho del contenedor al 8/12 del ancho de su contenedor padre en pantallas de 1280px en adelante (rango de pantalla extra extra grande).

De esta manera, el contenedor se adaptará de manera responsive, comenzando con un ancho completo en pantallas móviles (320px) y disminuyendo el ancho a medida que la pantalla se hace más grande, hasta llegar a un máximo de 8/12 del ancho en pantallas muy grandes. Puedes ajustar los valores de las clases según tus necesidades de diseño específicas.

/_
{speakerImages.map((image, index) => (
<div className={styles.image__container} key={index}>
<img
className={`${styles.image} ${styles[`image-${index}`]}`}
              src={`src/assets/images/${image}.png`}
alt=""
/>
</div>
))}
_/
