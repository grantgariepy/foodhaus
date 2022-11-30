import Link from 'next/link';

export default function Area() {
  const data = {
    meals: [
      {
        strArea: 'American',
        strThumb:
          'https://images.unsplash.com/photo-1581024013650-28295fd60327?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      },
      {
        strArea: 'British',
        strThumb:
          'https://images.unsplash.com/photo-1494419470281-65c2b001a42b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80',
      },
      {
        strArea: 'Canadian',
        strThumb:
          'https://images.unsplash.com/photo-1613512504421-c2664b74653b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80',
      },
      { strArea: 'Chinese', strThumb: 'https://wallpapercave.com/wp/wp1939724.jpg' },
      { strArea: 'Croatian', strThumb: 'https://wallpaperaccess.com/full/1458604.jpg' },
      { strArea: 'Dutch', strThumb: 'https://wallpaperaccess.com/full/1939490.jpg' },
      { strArea: 'Egyptian', strThumb: 'https://wallpaperaccess.com/full/1843617.jpg' },
      { strArea: 'French', strThumb: 'https://wallpaperaccess.com/full/1285589.jpg' },
      { strArea: 'Greek', strThumb: 'https://wallpaperaccess.com/full/1458453.jpg' },
      { strArea: 'Indian', strThumb: 'https://wallpaperaccess.com/full/694043.jpg' },
      { strArea: 'Irish', strThumb: 'https://wallpaperaccess.com/full/1285639.jpg' },
      { strArea: 'Italian', strThumb: 'https://wallpaperaccess.com/full/1285528.jpg' },
      { strArea: 'Jamaican', strThumb: 'https://cdn.wallpapersafari.com/54/84/FoZve8.jpg' },
      {
        strArea: 'Japanese',
        strThumb: 'https://nulltx.com/wp-content/uploads/2018/09/japan-flag.jpg',
      },
      { strArea: 'Kenyan', strThumb: 'https://wallpaperaccess.com/full/1410567.jpg' },
      { strArea: 'Malaysian', strThumb: 'https://wallpapercave.com/wp/wp3723788.jpg' },
      { strArea: 'Mexican', strThumb: 'https://getwallpapers.com/wallpaper/full/4/7/b/480757.jpg' },
      { strArea: 'Moroccan', strThumb: 'https://wallpaperaccess.com/full/3840659.jpg' },
      {
        strArea: 'Polish',
        strThumb:
          'https://static.vecteezy.com/system/resources/previews/001/176/916/non_2x/flag-of-poland-background-vector.jpg',
      },
      {
        strArea: 'Portuguese',
        strThumb:
          'https://www.motosha.com/files/preview/1280x711/11594554031qbg3aqiwxzaxljqez22aimyvgccd6h0tdobjcdzkynzyiot59sbldelikcalfbfxpgkjbtvjzvc0ktwfsbzqkhbhi4ldtrnicvqa.jpg',
      },
      {
        strArea: 'Russian',
        strThumb:
          'https://www.teahub.io/photos/full/172-1722250_russian-flag-wallpaper-russian-flag-waving-gif.png',
      },
      { strArea: 'Spanish', strThumb: 'https://wallpaperaccess.com/full/1285678.jpg' },
      { strArea: 'Thai', strThumb: 'https://wallpapercave.com/wp/wp4215444.jpg' },
      {
        strArea: 'Tunisian',
        strThumb: 'https://www.worldatlas.com/upload/17/df/18/shutterstock-565204495.jpg',
      },
      {
        strArea: 'Turkish',
        strThumb: 'https://www.motosha.com/files/preview/1280x711/2252-turkish-flag.jpg',
      },
      {
        strArea: 'Unknown',
        strThumb: 'https://il4.picdn.net/shutterstock/videos/9213662/thumb/1.jpg',
      },
      {
        strArea: 'Vietnamese',
        strThumb: 'https://ak.picdn.net/shutterstock/videos/6085439/thumb/1.jpg',
      },
    ],
  };
  return (
    <div className='bg-white py-6 sm:py-8 lg:py-12'>
      <div className='max-w-screen-2xl px-4 md:px-8 mx-auto'>
        <div className='flex justify-between items-end gap-4 mb-6'>
          <h2 className='text-gray-800 text-2xl lg:text-3xl font-bold'>Categories</h2>
        </div>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-8'>
          {/* product - start */}
          {data.meals.map((area: any, index: number) => (
            <div key={index}>
              <Link
                href={`area/${area.strArea}`}
                className='group h-80 block bg-gray-100 rounded-lg overflow-hidden relative mb-2 lg:mb-3'
              >
                <img
                  src={area.strThumb}
                  alt='area'
                  className='w-full h-full object-cover object-center group-hover:scale-110 transition duration-200'
                  loading='lazy'
                />
              </Link>
              <div>
                <div className='flex items-end gap-2'>
                  <span className='text-gray-800 lg:text-lg font-bold'>{area.strArea}</span>
                </div>
              </div>
            </div>
          ))}
          ;{/* product-end */}
        </div>
      </div>
    </div>
  );
}
