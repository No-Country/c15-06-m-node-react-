export function CategoryHeader({ category }) {
  const categories = [
    {
        name: 'Frutos secos y cereales',
        img: 'https://img.freepik.com/foto-gratis/vista-superior-cucharas-variedad-nueces_23-2148452903.jpg?w=900&t=st=1703014365~exp=1703014965~hmac=c025917c23989a7dd8abcaa31aad4fea60792d9464c8ce4bd014499da65215f4'
    },
    {
        name: 'Hierbas y especias',
        img: 'https://img.freepik.com/fotos-premium/ajo-romero-laurel-pimienta-jamaica-pimienta-aislado-espacio-blanco-endecha-plana-vista-superior_168508-1256.jpg?w=996'
    },
    {
        name: 'Proteicos',
        img: 'https://newsnetwork.mayoclinic.org/n7-mcnn/7bcc9724adf7b803/uploads/2017/02/wooden-tray-of-protein-foods-fish-nuts-16x9.jpg'
    },
    {
        name: 'Legumbres',
        img: 'https://cardiosalud.org/wp-content/uploads/2019/10/legumbres-4.jpg'
    },
    {
        name: 'Infusiones',
        img: 'https://images.unsplash.com/photo-1523906630133-f6934a1ab2b9?q=80&w=1827&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        name: 'Mascotas',
        img: 'https://images.hola.com/imagenes/estar-bien/20180417122950/perro-gato-casa-convivencia/0-558-880/perro-gato-en-casa-1-t.jpg?tx=w_1200'
    }
]

const categoryObject = categories.find((cat) => cat.name === category);
if (!categoryObject) {
  return null
}

const { img } = categoryObject

const containerStyle = {
  position: 'relative',
  overflow: 'hidden',
}

const overlayStyle = {
  content: '""',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundImage: `url(${img})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  opacity: 0.5,
}

  return (
    <div className='w-full flex justify-center md:justify-end items-center p-4 md:p-10 md:relative h-[150px]' style={containerStyle}>
      <div style={overlayStyle} />
      <h1 className='text-4xl font-bold md:absolute md:top-1/2 md:bottom-0 md:right-40 font-nunito'>
        {category}
      </h1>
    </div>
  )
}
